"use client";

import React from "react";
import { Mascot } from "./Mascot";

export default function LiveChat({
  business = "Elite Roofing",
  industry = "roofing",
  intro,
  quicks,
  scripted = false,
}) {
  const defaultIntro = intro || "Hi, I'm Ava from BookdlyAI. Need help with your roof?";
  const defaultQuicks = quicks || [
    "Roof leak",
    "Roof replacement",
    "Storm damage",
    "Free inspection",
    "Ask a question",
  ];

  const [messages, setMessages] = React.useState([
    { role: "assistant", content: defaultIntro, quicks: scripted ? defaultQuicks : null },
  ]);
  const [step, setStep] = React.useState(scripted ? "menu" : "free");
  const [intent, setIntent] = React.useState(null);
  const [data, setData] = React.useState({});
  const [input, setInput] = React.useState("");
  const [sending, setSending] = React.useState(false);
  const bodyRef = React.useRef(null);

  React.useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, sending]);

  const append = (msgs) => setMessages((prev) => [...prev, ...msgs]);

  // Maps a chosen intent to the phrase used in the final confirmation
  const intentLabel = (key) => ({
    leak: "roof leak",
    replacement: "roof replacement",
    storm: "storm damage",
    inspection: "roofing inspection",
  }[key] || "roofing");

  const menuQuicks = ["Roof leak", "Roof replacement", "Storm damage", "Free inspection", "Ask a question"];
  const offerMenuQuicks = ["Roof leak", "Roof replacement", "Storm damage", "Free inspection"];

  // ── Roofing scripted flow ────────────────────────────────────────────
  // Top-level steps:
  //   menu | free   →  intent detection + canned answers (pricing/services/hours)
  //   leak-active   →  only entered from "leak" intent
  //   city → homeowner → datetime → name → email → phone → done
  //
  // Off-topic (e.g. "I need a cleaning tomorrow") is redirected back to the
  // roofing menu rather than handed to the LLM, so this works with no API key.

  const handleScripted = async (text) => {
    const t = text.trim();
    append([{ role: "user", content: t }]);

    const reply = (content, opts = {}) =>
      append([{ role: "assistant", content, quicks: opts.quicks || null }]);

    const lc = t.toLowerCase();

    // Steps where we keyword-match against a free-text question
    if (step === "menu" || step === "free") {
      // Pricing
      if (/price|pricing|cost|fee|how much|estimate|quote/.test(lc)) {
        reply(
          "Roofing prices depend on the issue, roof type, and size. I can help send your request to the office so they can review it.",
          { quicks: offerMenuQuicks }
        );
        return;
      }
      // Services
      if (/service|what do you|what can you|do you offer/.test(lc)) {
        reply(
          "Elite Roofing can help with roof leaks, repairs, replacements, storm damage, and inspections.",
          { quicks: offerMenuQuicks }
        );
        return;
      }
      // Hours
      if (/hour|open|close|business hours/.test(lc)) {
        reply(
          "The office can customize hours in the live version. For this demo, I can help collect your request and send it over.",
          { quicks: offerMenuQuicks }
        );
        return;
      }

      // Intent matches → enter request flow
      if (/leak|leaking|drip|water (?:in|coming)|wet ceiling/.test(lc)) {
        setIntent("leak");
        setStep("leak-active");
        reply("Got it. Is there active leaking right now?", {
          quicks: ["Yes, active leak", "No, not active", "Not sure"],
        });
        return;
      }
      if (/replac|new roof/.test(lc)) {
        setIntent("replacement");
        setStep("city");
        reply("Got it. What city is the property in?");
        return;
      }
      if (/storm|wind|hail|tree fell|tree on/.test(lc)) {
        setIntent("storm");
        setStep("city");
        reply("Got it. What city is the property in?");
        return;
      }
      if (/inspect/.test(lc)) {
        setIntent("inspection");
        setStep("city");
        reply("Got it. What city is the property in?");
        return;
      }

      // Generic "ask a question" fallback
      if (/^ask a question$/i.test(lc) || /question|something else|i wanted to/.test(lc)) {
        setStep("free");
        reply("Sure, ask away. I can also help with a leak check, replacement, storm damage, or inspection.", {
          quicks: offerMenuQuicks,
        });
        return;
      }

      // Off-topic — redirect back to roofing
      reply(
        "I can help with roofing requests here. Are you dealing with a leak, storm damage, replacement, or inspection?",
        { quicks: offerMenuQuicks }
      );
      return;
    }

    if (step === "leak-active") {
      let active;
      if (/not sure|maybe|unsure|don't know|dont know/.test(lc)) active = "Not sure";
      else if (/yes|active|currently|right now/.test(lc)) active = "Yes, active leak";
      else if (/^no\b|not active|stopped/.test(lc)) active = "No, not active";
      else active = t;
      setData((d) => ({ ...d, leakActive: active }));
      setStep("city");
      reply("Got it. What city is the property in?");
      return;
    }

    if (step === "city") {
      setData((d) => ({ ...d, city: t }));
      setStep("homeowner");
      reply("Are you the homeowner?", {
        quicks: ["Yes", "No", "Property manager"],
      });
      return;
    }

    if (step === "homeowner") {
      let role;
      if (/property|manager/.test(lc)) role = "Property manager";
      else if (/^yes\b/.test(lc)) role = "Yes";
      else if (/^no\b/.test(lc)) role = "No";
      else role = t;
      setData((d) => ({ ...d, role }));
      setStep("datetime");
      reply("When would you like someone to take a look?");
      return;
    }

    if (step === "datetime") {
      setData((d) => ({ ...d, datetime: t }));
      setStep("name");
      reply("Thanks. What's your full name?");
      return;
    }

    if (step === "name") {
      setData((d) => ({ ...d, name: t }));
      setStep("email");
      reply("What email should the office use to confirm the details?");
      return;
    }

    if (step === "email") {
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);
      if (!ok) {
        reply("That doesn't look like a valid email. Could you double-check it?");
        return;
      }
      setData((d) => ({ ...d, email: t }));
      setStep("phone");
      reply("What phone number should the office use if they need to call you?");
      return;
    }

    if (step === "phone") {
      const phone = /^(skip|no thanks|none|nope)$/i.test(lc) ? "" : t;
      const finalData = { ...data, phone };
      setData(finalData);
      setStep("done");
      const first = (finalData.name || "").split(" ")[0] || "there";
      const label = intentLabel(intent);
      reply(
        `Perfect, ${first}. I've sent your ${label} request to Elite Roofing. The office will confirm the details shortly.`,
        { quicks: ["Send another request", "Back to menu"] }
      );
      return;
    }

    if (step === "done") {
      if (/another|new request|send another/i.test(lc)) {
        setIntent(null);
        setData({});
        setStep("menu");
        reply("No problem. What can I help with?", { quicks: menuQuicks });
        return;
      }
      if (/back|menu/i.test(lc)) {
        setIntent(null);
        setStep("menu");
        reply("Sure. What can I help with?", { quicks: menuQuicks });
        return;
      }
      reply("Anything else I can help with?", { quicks: ["Send another request", "Back to menu"] });
      return;
    }
  };

  // ── Free-form fallback (server-side optional Anthropic) ──────────────
  // Kept for non-scripted mode and as an "easy to enable later" path. With no
  // ANTHROPIC_API_KEY, /api/chat returns a friendly canned reply.
  const freeformReply = async (text, returnStep = "free") => {
    setSending(true);
    try {
      const sys = scripted
        ? `You are the AI front desk for Elite Roofing, a local roofing company. Be brief, warm, and professional.

Reply rules:
- Keep replies to 1-2 short sentences, max 30 words.
- Never use emoji. Never use markdown. Never use long dashes.
- Never use the underline character.
- Do not mention SMS, texting, or "we'll text you" or "confirmation text".
- Do not say a job is fully booked or confirmed.
- If the question is about scheduling work, end your reply by asking the user if they would like to send a roofing request now.
- Do not invent specific prices. Say the office will give an estimate after reviewing the property.
- Stay focused on roofing services for Elite Roofing.`
        : `You are the AI front desk for ${business}, a local ${industry} business. Be brief, warm, and professional. Keep replies to 1-2 short sentences. No emoji, no markdown, no long dashes. Do not mention SMS or texting. Don't invent prices.`;

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
          content: clean || "I can help send your roofing request to the office. Want to start?",
          quicks: returnStep === "menu" ? offerMenuQuicks : null,
        },
      ]);
    } catch (e) {
      append([
        {
          role: "assistant",
          content: "I had trouble connecting. Want to send a roofing request?",
          quicks: offerMenuQuicks,
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
            <div className="chat__sub">Front desk · usually replies instantly</div>
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
        This demo shows how the chatbot can work on your website. The live version can connect to your calendar, form, or office inbox.
      </p>
    </div>
  );
}
