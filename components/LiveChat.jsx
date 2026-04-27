"use client";

import React from "react";
import { Mascot } from "./Mascot";

export default function LiveChat({
  business = "APsurance",
  subtitle = "Usually replies instantly",
  intro,
  quicks,
  scripted = false,
}) {
  const defaultIntro = intro ||
    "Hi, I'm the APsurance digital assistant. I can help check if you may qualify for a low cost or free health plan. Want to get started?";
  const defaultQuicks = quicks || ["Check if I qualify", "Talk to Alex"];

  const [messages, setMessages] = React.useState([
    { role: "assistant", content: defaultIntro, quicks: scripted ? defaultQuicks : null },
  ]);
  const [step, setStep] = React.useState(scripted ? "menu" : "free");
  const [mode, setMode] = React.useState(null);
  const [lead, setLead] = React.useState({});
  const [input, setInput] = React.useState("");
  const [sending, setSending] = React.useState(false);
  const bodyRef = React.useRef(null);

  React.useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, sending]);

  const append = (msgs) => setMessages((prev) => [...prev, ...msgs]);

  // Fire-and-forget POST to /api/lead. Server forwards to LEAD_WEBHOOK_URL if
  // configured, else logs to console. Failure is silent — never block the user.
  const sendLead = (finalLead, finalMode) => {
    const payload = {
      source: "apsurance-chatbot",
      mode: finalMode,
      ...finalLead,
      capturedAt: new Date().toISOString(),
    };
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});
  };

  // ── APsurance scripted flow ─────────────────────────────────────────
  // Two paths from menu:
  //   qualify: zip → household → income → name → phone → besttime → done
  //   talk:    name → phone → besttime → done
  //
  // Final lead is POSTed to /api/lead. Server forwards to LEAD_WEBHOOK_URL or
  // logs server-side during dev — works with no setup.
  const handleScripted = async (text) => {
    const t = text.trim();
    append([{ role: "user", content: t }]);

    const reply = (content, opts = {}) =>
      append([{ role: "assistant", content, quicks: opts.quicks || null }]);

    const lc = t.toLowerCase();

    if (step === "menu") {
      if (/talk to alex|^alex$|call me back|just talk/i.test(lc)) {
        setMode("talk");
        setStep("name");
        reply("Sure, Alex would love to talk. What's your full name?");
        return;
      }
      if (/check|qualify|^yes$|sure|get started|^start$|begin|let's/i.test(lc)) {
        setMode("qualify");
        setStep("zip");
        reply("Great. What's your zip code?");
        return;
      }
      reply(
        "I can help check if you may qualify for a low cost or free health plan. Want to get started?",
        { quicks: ["Check if I qualify", "Talk to Alex"] }
      );
      return;
    }

    if (step === "zip") {
      setLead((L) => ({ ...L, zip: t }));
      setStep("household");
      reply("How many people are in your household?");
      return;
    }

    if (step === "household") {
      setLead((L) => ({ ...L, householdSize: t }));
      setStep("income");
      reply("What's your estimated yearly household income?");
      return;
    }

    if (step === "income") {
      setLead((L) => ({ ...L, yearlyIncome: t }));
      setStep("name");
      reply("What's your full name?");
      return;
    }

    if (step === "name") {
      setLead((L) => ({ ...L, fullName: t }));
      setStep("phone");
      reply("What phone number should Alex use to call you?");
      return;
    }

    if (step === "phone") {
      setLead((L) => ({ ...L, phone: t }));
      setStep("besttime");
      reply("What's the best time for Alex to call you?");
      return;
    }

    if (step === "besttime") {
      const finalLead = { ...lead, bestTime: t };
      setLead(finalLead);
      setStep("done");
      const first = (finalLead.fullName || "").split(" ")[0] || "there";
      reply(`Perfect, ${first}. I'll send this to Alex at APsurance so he can check your options and follow up.`);
      sendLead(finalLead, mode);
      return;
    }

    if (step === "done") {
      if (/start over|new|another|reset|begin again/i.test(lc)) {
        setMode(null);
        setLead({});
        setStep("menu");
        reply("No problem. Want to check if you may qualify, or talk to Alex?", {
          quicks: ["Check if I qualify", "Talk to Alex"],
        });
        return;
      }
      reply("Anything else? You can also start a new check.", {
        quicks: ["Check if I qualify", "Talk to Alex"],
      });
      return;
    }
  };

  // ── Free-form fallback ──────────────────────────────────────────────
  // Calls /api/chat. Without ANTHROPIC_API_KEY the server returns a friendly
  // canned reply. Used only when mounted in non-scripted mode.
  const freeformReply = async (text) => {
    setSending(true);
    try {
      const sys = `You are a brief, friendly assistant for ${business}. Keep replies to 1-2 short sentences. No emoji, no markdown, no long dashes. Do not mention SMS or texting. Do not say a person qualifies, is approved, or is guaranteed a free plan. Use "may qualify".`;
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ system: sys, user: text }),
      });
      const json = await res.json().catch(() => ({}));
      let clean = (json?.text || "").trim();
      clean = clean.replace(/[—–]/g, "-").replace(/__/g, "");
      append([
        {
          role: "assistant",
          content: clean || "I can help you check if you may qualify. Want to start?",
          quicks: ["Check if I qualify", "Talk to Alex"],
        },
      ]);
    } catch (e) {
      append([
        {
          role: "assistant",
          content: "I had trouble connecting. Want to check if you may qualify?",
          quicks: ["Check if I qualify", "Talk to Alex"],
        },
      ]);
    } finally {
      setSending(false);
    }
  };

  const handleFree = async (text) => {
    append([{ role: "user", content: text }]);
    await freeformReply(text);
  };

  const send = async (raw) => {
    const text = (raw || "").trim();
    if (!text || sending) return;
    setInput("");
    if (scripted) {
      setSending(true);
      await new Promise((r) => setTimeout(r, 350));
      await handleScripted(text);
      setSending(false);
    } else {
      await handleFree(text);
    }
  };

  const onSubmit = (e) => { e.preventDefault(); send(input); };

  const lastAssistantQuicks = (() => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].role === "assistant") return messages[i].quicks;
    }
    return null;
  })();

  return (
    <div className="chat-stage">
      <div className="chat">
        <div className="chat__head">
          <div className="chat-avatar chat-avatar--mascot">
            <Mascot size={36} animate={false} />
          </div>
          <div>
            <div className="chat__title">{business}</div>
            <div className="chat__sub">{subtitle}</div>
          </div>
          <button className="chat__menu" aria-label="More" type="button">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="3" cy="7" r="1.2" fill="currentColor" />
              <circle cx="7" cy="7" r="1.2" fill="currentColor" />
              <circle cx="11" cy="7" r="1.2" fill="currentColor" />
            </svg>
          </button>
        </div>
        <div className="chat__body" ref={bodyRef}>
          {messages.map((m, i) => (
            <div key={i} className={"bubble " + (m.role === "user" ? "bubble--user" : "bubble--bot")}>
              {m.content}
            </div>
          ))}
          {sending && <div className="typing"><span /><span /><span /></div>}
        </div>
        {lastAssistantQuicks && lastAssistantQuicks.length > 0 && !sending && (
          <div className="chat__quicks">
            {lastAssistantQuicks.map((q) => (
              <button key={q} className="bubble--quick" type="button" onClick={() => send(q)}>{q}</button>
            ))}
          </div>
        )}
        <form className="chat__input" onSubmit={onSubmit}>
          <input
            placeholder={sending ? "Thinking..." : "Type your reply..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={sending}
          />
          <button className="chat__send" type="submit" disabled={sending || !input.trim()} aria-label="Send">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
      </div>
      <p style={{
        marginTop: 12,
        fontSize: 12.5,
        color: "var(--ink-4)",
        lineHeight: 1.5,
        textAlign: "center",
        maxWidth: 380,
        marginInline: "auto",
      }}>
        This demo shows how the chatbot can work on your website. The live version can connect to your CRM, calendar, or office inbox.
      </p>
    </div>
  );
}
