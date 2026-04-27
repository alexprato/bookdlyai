/*!
 * APsurance Health Plan Assistant — embeddable chat widget
 *
 * Standalone, vanilla JS, no build step. Drop a <script> tag with this file's
 * contents into any site (GoHighLevel custom code, footer code, WordPress, etc.)
 * and a chat launcher appears in the bottom-right corner.
 *
 * Configure (optional) BEFORE this script loads:
 *
 *   <script>
 *     window.APSURANCE_WIDGET_CONFIG = {
 *       webhookUrl:  'https://hooks.your-tool.com/...', // GHL, Make, Zapier, n8n, etc.
 *       primaryColor: '#1aa6c4',                        // brand color (blue/teal default)
 *       position:    'right',                           // 'right' or 'left'
 *     };
 *   </script>
 *
 * Lead payload posted to webhookUrl on completion:
 *   { source, mode, zip, householdSize, yearlyIncome, fullName, phone, bestTime, capturedAt }
 *
 * If no webhookUrl is set, the lead is logged to the browser console so you can
 * verify the integration before plugging in your real endpoint.
 */
(function () {
  if (window.__APSURANCE_WIDGET_MOUNTED__) return;
  window.__APSURANCE_WIDGET_MOUNTED__ = true;

  var DEFAULTS = {
    webhookUrl: "",
    primaryColor: "#1aa6c4",
    position: "right",
  };
  var CONFIG = Object.assign({}, DEFAULTS, window.APSURANCE_WIDGET_CONFIG || {});

  // ── Compliance copy ─────────────────────────────────────────────────
  var COPY = {
    title: "APsurance Health Plan Assistant",
    subtitle: "Usually replies instantly",
    intro: "Hi, I'm the APsurance digital assistant. I can help check if you may qualify for a low cost or free health plan. Want to get started?",
    quicks: ["Check if I qualify", "Talk to Alex"],
    redirect: "I can help check if you may qualify for a low cost or free health plan. Want to get started?",
    talkPrompt: "Sure, Alex would love to talk. What's your full name?",
    qualifyPrompt: "Great. What's your zip code?",
    askHousehold: "How many people are in your household?",
    askIncome: "What's your estimated yearly household income?",
    askName: "What's your full name?",
    askPhone: "What phone number should Alex use to call you?",
    askBestTime: "What's the best time for Alex to call you?",
    final: function (first) {
      return "Perfect, " + first + ". I'll send this to Alex at APsurance so he can check your options and follow up.";
    },
    doneFollowup: "Anything else? You can also start a new check.",
    restart: "No problem. Want to check if you may qualify, or talk to Alex?",
  };

  // ── Styles (namespaced .apsr-*) ─────────────────────────────────────
  var STYLE = (
    ":root { --apsr-primary: " + CONFIG.primaryColor + ";" +
    "  --apsr-primary-soft: " + CONFIG.primaryColor + "1a; }" +
    ".apsr-launcher{position:fixed;bottom:24px;" + (CONFIG.position === "left" ? "left" : "right") + ":24px;" +
    "  width:60px;height:60px;border-radius:50%;background:var(--apsr-primary);color:#fff;border:none;" +
    "  cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.18);display:flex;align-items:center;justify-content:center;" +
    "  z-index:2147483646;transition:transform .15s ease,box-shadow .15s ease;padding:0;}" +
    ".apsr-launcher:hover{transform:scale(1.05);box-shadow:0 10px 28px rgba(0,0,0,.22);}" +
    ".apsr-launcher--hidden{display:none;}" +
    ".apsr-launcher svg{width:28px;height:28px;}" +
    ".apsr-panel{position:fixed;bottom:24px;" + (CONFIG.position === "left" ? "left" : "right") + ":24px;" +
    "  width:380px;height:580px;max-height:calc(100vh - 48px);background:#fff;border-radius:16px;" +
    "  box-shadow:0 16px 48px rgba(0,0,0,.22);display:flex;flex-direction:column;overflow:hidden;" +
    "  font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,system-ui,sans-serif;" +
    "  font-size:14px;color:#1f2937;z-index:2147483647;opacity:0;transform:translateY(20px) scale(.98);" +
    "  pointer-events:none;transition:opacity .2s ease,transform .2s ease;}" +
    ".apsr-panel--open{opacity:1;transform:none;pointer-events:auto;}" +
    "@media (max-width:480px){.apsr-panel{width:100vw;height:100vh;max-height:100vh;bottom:0;right:0;left:0;border-radius:0;}" +
    "  .apsr-launcher{bottom:16px;right:16px;left:auto;}}" +
    ".apsr-header{padding:14px 16px;display:flex;align-items:center;gap:12px;border-bottom:1px solid #eaeef3;background:linear-gradient(180deg,#fff,#fbfdfe);}" +
    ".apsr-avatar{width:38px;height:38px;border-radius:50%;background:var(--apsr-primary);color:#fff;display:grid;place-items:center;font-weight:700;font-size:13px;letter-spacing:.02em;}" +
    ".apsr-titles{flex:1;min-width:0;}" +
    ".apsr-title{font-weight:600;font-size:14px;color:#0f172a;line-height:1.2;}" +
    ".apsr-sub{font-size:12px;color:#64748b;margin-top:3px;display:flex;align-items:center;gap:6px;}" +
    ".apsr-sub::before{content:\"\";width:6px;height:6px;border-radius:50%;background:#22c55e;box-shadow:0 0 0 3px rgba(34,197,94,.18);}" +
    ".apsr-close{width:32px;height:32px;border-radius:8px;border:none;background:transparent;color:#64748b;cursor:pointer;display:grid;place-items:center;}" +
    ".apsr-close:hover{background:#f1f5f9;}" +
    ".apsr-body{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:8px;background:#f8fafc;}" +
    ".apsr-bubble{max-width:80%;padding:10px 14px;border-radius:14px;line-height:1.45;word-wrap:break-word;}" +
    ".apsr-bubble--bot{background:#fff;color:#1f2937;align-self:flex-start;border:1px solid #eaeef3;border-bottom-left-radius:4px;}" +
    ".apsr-bubble--user{background:var(--apsr-primary);color:#fff;align-self:flex-end;border-bottom-right-radius:4px;}" +
    ".apsr-typing{align-self:flex-start;display:flex;gap:4px;padding:12px 16px;background:#fff;border:1px solid #eaeef3;border-radius:14px;border-bottom-left-radius:4px;}" +
    ".apsr-typing span{width:6px;height:6px;background:#94a3b8;border-radius:50%;animation:apsr-bounce 1.2s infinite;}" +
    ".apsr-typing span:nth-child(2){animation-delay:.15s;}" +
    ".apsr-typing span:nth-child(3){animation-delay:.3s;}" +
    "@keyframes apsr-bounce{0%,80%,100%{opacity:.3;transform:translateY(0);}40%{opacity:1;transform:translateY(-3px);}}" +
    ".apsr-quicks{padding:0 16px 8px;display:flex;flex-wrap:wrap;gap:6px;background:#f8fafc;}" +
    ".apsr-quick{font:inherit;font-size:13px;padding:8px 14px;border-radius:999px;border:1px solid var(--apsr-primary);background:#fff;color:var(--apsr-primary);cursor:pointer;transition:background .1s ease;}" +
    ".apsr-quick:hover{background:var(--apsr-primary-soft);}" +
    ".apsr-input{display:flex;gap:8px;padding:12px;border-top:1px solid #eaeef3;background:#fff;}" +
    ".apsr-input input{flex:1;font:inherit;font-size:14px;padding:10px 12px;border:1px solid #d8dfe7;border-radius:10px;outline:none;color:#0f172a;background:#fff;}" +
    ".apsr-input input:focus{border-color:var(--apsr-primary);box-shadow:0 0 0 3px var(--apsr-primary-soft);}" +
    ".apsr-input input:disabled{background:#f8fafc;color:#94a3b8;}" +
    ".apsr-send{width:40px;height:40px;border-radius:10px;border:none;background:var(--apsr-primary);color:#fff;cursor:pointer;display:grid;place-items:center;flex-shrink:0;}" +
    ".apsr-send:disabled{opacity:.4;cursor:not-allowed;}" +
    ".apsr-send svg{width:16px;height:16px;}"
  );

  function injectStyles() {
    if (document.getElementById("apsr-widget-styles")) return;
    var s = document.createElement("style");
    s.id = "apsr-widget-styles";
    s.textContent = STYLE;
    document.head.appendChild(s);
  }

  // ── State ───────────────────────────────────────────────────────────
  var state = { step: "menu", mode: null, lead: {}, sending: false };
  var els = {};

  // ── DOM construction ────────────────────────────────────────────────
  function buildLauncher() {
    var btn = document.createElement("button");
    btn.className = "apsr-launcher";
    btn.setAttribute("aria-label", "Open APsurance chat");
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>' +
      "</svg>";
    btn.addEventListener("click", openPanel);
    document.body.appendChild(btn);
    return btn;
  }

  function buildPanel() {
    var panel = document.createElement("div");
    panel.className = "apsr-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", COPY.title);
    panel.innerHTML =
      '<div class="apsr-header">' +
      '  <div class="apsr-avatar">AP</div>' +
      '  <div class="apsr-titles">' +
      '    <div class="apsr-title"></div>' +
      '    <div class="apsr-sub"></div>' +
      "  </div>" +
      '  <button class="apsr-close" aria-label="Close chat">' +
      '    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
      '      <path d="M3 3l8 8M11 3l-8 8"/>' +
      "    </svg>" +
      "  </button>" +
      "</div>" +
      '<div class="apsr-body" role="log" aria-live="polite"></div>' +
      '<div class="apsr-quicks"></div>' +
      '<form class="apsr-input">' +
      '  <input type="text" placeholder="Type your reply..." autocomplete="off" />' +
      '  <button type="submit" class="apsr-send" aria-label="Send">' +
      '    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      '      <path d="M2 7h10M8 3l4 4-4 4"/>' +
      "    </svg>" +
      "  </button>" +
      "</form>";

    document.body.appendChild(panel);

    panel.querySelector(".apsr-title").textContent = COPY.title;
    panel.querySelector(".apsr-sub").textContent = COPY.subtitle;

    els.body = panel.querySelector(".apsr-body");
    els.quicks = panel.querySelector(".apsr-quicks");
    els.form = panel.querySelector(".apsr-input");
    els.input = panel.querySelector(".apsr-input input");

    panel.querySelector(".apsr-close").addEventListener("click", closePanel);
    els.form.addEventListener("submit", function (e) {
      e.preventDefault();
      send(els.input.value);
    });

    return panel;
  }

  function openPanel() {
    els.panel.classList.add("apsr-panel--open");
    els.launcher.classList.add("apsr-launcher--hidden");
    setTimeout(function () { els.input.focus(); }, 250);
  }

  function closePanel() {
    els.panel.classList.remove("apsr-panel--open");
    els.launcher.classList.remove("apsr-launcher--hidden");
  }

  // ── Rendering ───────────────────────────────────────────────────────
  function appendBubble(role, text) {
    var b = document.createElement("div");
    b.className = "apsr-bubble apsr-bubble--" + (role === "user" ? "user" : "bot");
    b.textContent = text;
    els.body.appendChild(b);
    scroll();
  }

  function showTyping() {
    if (els.typing) return;
    var t = document.createElement("div");
    t.className = "apsr-typing";
    t.innerHTML = "<span></span><span></span><span></span>";
    els.body.appendChild(t);
    els.typing = t;
    scroll();
  }

  function hideTyping() {
    if (els.typing) {
      els.typing.remove();
      els.typing = null;
    }
  }

  function showQuicks(quicks) {
    els.quicks.innerHTML = "";
    if (!quicks || !quicks.length) return;
    quicks.forEach(function (q) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "apsr-quick";
      b.textContent = q;
      b.addEventListener("click", function () { send(q); });
      els.quicks.appendChild(b);
    });
  }

  function clearQuicks() { els.quicks.innerHTML = ""; }

  function scroll() {
    requestAnimationFrame(function () {
      els.body.scrollTop = els.body.scrollHeight;
    });
  }

  // ── Bot reply helper ────────────────────────────────────────────────
  function reply(text, quicks) {
    appendBubble("bot", text);
    showQuicks(quicks);
  }

  // ── Send / handle ───────────────────────────────────────────────────
  function send(raw) {
    var text = (raw || "").trim();
    if (!text || state.sending) return;
    els.input.value = "";
    clearQuicks();
    appendBubble("user", text);
    state.sending = true;
    els.input.disabled = true;
    showTyping();
    setTimeout(function () {
      hideTyping();
      handleStep(text);
      state.sending = false;
      els.input.disabled = false;
      els.input.focus();
    }, 350);
  }

  function handleStep(text) {
    var lc = text.toLowerCase();

    if (state.step === "menu") {
      if (/talk to alex|^alex$|call me back|just talk/.test(lc)) {
        state.mode = "talk";
        state.step = "name";
        return reply(COPY.talkPrompt);
      }
      if (/check|qualify|^yes$|sure|get started|^start$|begin|let's/.test(lc)) {
        state.mode = "qualify";
        state.step = "zip";
        return reply(COPY.qualifyPrompt);
      }
      return reply(COPY.redirect, COPY.quicks);
    }

    if (state.step === "zip") {
      state.lead.zip = text;
      state.step = "household";
      return reply(COPY.askHousehold);
    }
    if (state.step === "household") {
      state.lead.householdSize = text;
      state.step = "income";
      return reply(COPY.askIncome);
    }
    if (state.step === "income") {
      state.lead.yearlyIncome = text;
      state.step = "name";
      return reply(COPY.askName);
    }
    if (state.step === "name") {
      state.lead.fullName = text;
      state.step = "phone";
      return reply(COPY.askPhone);
    }
    if (state.step === "phone") {
      state.lead.phone = text;
      state.step = "besttime";
      return reply(COPY.askBestTime);
    }
    if (state.step === "besttime") {
      state.lead.bestTime = text;
      state.step = "done";
      var first = (state.lead.fullName || "").split(" ")[0] || "there";
      reply(COPY.final(first));
      postLead();
      return;
    }

    if (state.step === "done") {
      if (/start over|^new$|another|reset|begin again/.test(lc)) {
        state.mode = null;
        state.lead = {};
        state.step = "menu";
        return reply(COPY.restart, COPY.quicks);
      }
      return reply(COPY.doneFollowup, COPY.quicks);
    }
  }

  // ── Lead delivery ───────────────────────────────────────────────────
  function postLead() {
    var payload = {
      source: "apsurance-chatbot",
      mode: state.mode,
      zip: state.lead.zip,
      householdSize: state.lead.householdSize,
      yearlyIncome: state.lead.yearlyIncome,
      fullName: state.lead.fullName,
      phone: state.lead.phone,
      bestTime: state.lead.bestTime,
      capturedAt: new Date().toISOString(),
      pageUrl: window.location.href,
    };

    if (CONFIG.webhookUrl) {
      try {
        fetch(CONFIG.webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }).catch(function (err) {
          console.error("[APsurance] webhook error", err);
        });
      } catch (err) {
        console.error("[APsurance] webhook error", err);
      }
    } else {
      console.log("[APsurance lead — no webhookUrl configured]", payload);
    }
  }

  // ── Boot ────────────────────────────────────────────────────────────
  function boot() {
    injectStyles();
    els.launcher = buildLauncher();
    els.panel = buildPanel();
    appendBubble("bot", COPY.intro);
    showQuicks(COPY.quicks);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
