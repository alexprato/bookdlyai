"use client";

import React from "react";
import { Mascot, BrandMark } from "./Mascot";
import { Icon } from "./Icons";
import LiveChat from "./LiveChat";

export function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#" className="brand-link" aria-label="BookdlyAI home">
          <BrandMark size={24} />
        </a>
        <nav className="nav__links">
          <a href="#how">How it works</a>
          <a href="#try">Try it</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav__cta">
          <a href="#contact" className="btn btn--primary btn--sm">Free 7-Day Test <Icon.Arrow size={13} /></a>
        </div>
      </div>
    </header>
  );
}

export function About() {
  const promises = [
    { icon: Icon.Sparkle, text: "Captures every lead — website, phone, ad form, missed call." },
    { icon: Icon.Phone, text: "Answers missed and after-hours calls so nothing slips by." },
    { icon: Icon.Shield, text: "Asks the right qualifying questions before passing the lead on." },
    { icon: Icon.Building, text: "Built for roofers, plumbers, HVAC, med spas, dentists, law firms, and other local service businesses." },
  ];
  return (
    <section className="hero" id="about">
      <div className="container">
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <span className="tag"><span className="dot" /> Lead-to-appointment system for local businesses</span>
          <div className="hero__mascot" aria-hidden="true">
            <Mascot size={140} />
          </div>
          <h1 style={{ marginTop: 18 }}>
            Stop losing leads before they become <span className="gradient-text">appointments</span>.
          </h1>
          <p className="hero__sub" style={{ margin: "22px auto 0", textAlign: "center" }}>
            BookdlyAI captures website visitors, missed calls, and ad inquiries, qualifies them with the right questions, and sends your team clean appointment opportunities they can act on.
          </p>
          <div className="hero__ctas row" style={{ justifyContent: "center", marginTop: 28 }}>
            <a href="#contact" className="btn btn--primary btn--lg"><Icon.Sparkle /> Get a Free 7 Day Test</a>
            <a href="#how" className="btn btn--ghost btn--lg">See How It Works</a>
          </div>
          <ul className="promise-row">
            {promises.map((p) => (
              <li key={p.text}>
                <span className="promise-row__icon"><p.icon /></span>
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  const pains = [
    "Missed calls",
    "Slow response time",
    "After-hours inquiries with no one to answer",
    "Contact forms that go cold",
    "Leads with no context for your team",
    "No tracking of what happened to each lead",
    "Wasted ad spend on inquiries that never get worked",
    "Staff too busy to follow up instantly",
  ];

  return (
    <section className="section" id="problem">
      <div className="container container--narrow">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 40px" }}>
          <span className="eyebrow eyebrow--center">The problem</span>
          <h2 style={{ marginTop: 14 }}>You are already getting leads. The problem is what happens next.</h2>
          <p className="lead" style={{ marginTop: 16, marginInline: "auto" }}>
            Local businesses get website visitors, calls, form submissions, and ad inquiries every week. Most of that traffic never turns into an appointment, and the leaks usually look the same.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 12,
        }}>
          {pains.map((p) => (
            <div key={p} style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "16px 20px",
              border: "1px solid var(--line-strong)",
              borderRadius: 12,
              background: "rgba(255,255,255,0.02)",
            }}>
              <span style={{
                width: 28, height: 28, borderRadius: 8,
                background: "rgba(255,140,140,0.10)",
                color: "#ff9b9b",
                display: "grid", placeItems: "center",
                flexShrink: 0,
              }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <span style={{ fontSize: 14.5 }}>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      title: "Capture the inquiry",
      body: "Website visitor, form lead, ad lead, or missed call enters the system.",
    },
    {
      title: "Qualify the person",
      body: "BookdlyAI asks the right questions based on your business and services.",
    },
    {
      title: "Collect the important details",
      body: "Name, phone, service needed, location, urgency, and preferred time.",
    },
    {
      title: "Send the full summary",
      body: "Your team gets a clean appointment opportunity, not a random lead.",
    },
    {
      title: "Track the result",
      body: "Appointment requested, confirmed, showed, won, lost, or bad lead.",
    },
  ];

  return (
    <section className="section" id="how">
      <div className="container container--narrow">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
          <span className="eyebrow eyebrow--center">How it works</span>
          <h2 style={{ marginTop: 14 }}>How BookdlyAI turns inquiries into <span className="gradient-text">appointment opportunities</span>.</h2>
          <p className="lead" style={{ marginTop: 16, marginInline: "auto" }}>
            Five steps. Same flow for every lead, no matter where it comes from.
          </p>
        </div>

        <div style={{ display: "grid", gap: 14, maxWidth: 760, margin: "0 auto" }}>
          {steps.map((s, i) => (
            <div key={s.title} style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: 20,
              padding: "22px 24px",
              background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
              border: "1px solid var(--line-strong)",
              borderRadius: 16,
              alignItems: "start",
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: "var(--accent-soft)",
                color: "var(--accent)",
                display: "grid", placeItems: "center",
                fontWeight: 700, fontSize: 13,
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.04em",
                border: "1px solid var(--accent-soft)",
              }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 style={{ fontSize: 18, marginBottom: 6, color: "var(--ink-0)" }}>{s.title}</h3>
                <p style={{ fontSize: 14.5, color: "var(--ink-3)", margin: 0, lineHeight: 1.55 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          maxWidth: 760, margin: "32px auto 0",
          padding: "18px 22px",
          border: "1px dashed var(--line-strong)",
          borderRadius: 14,
          fontSize: 13.5,
          color: "var(--ink-3)",
          lineHeight: 1.6,
        }}>
          <b style={{ color: "var(--ink-1)" }}>Works without SMS approval.</b> The core system runs on website chat, online forms, calendar request flows, inbound AI phone answering, call summaries, email notifications, and CRM/GHL tracking. <span style={{ color: "var(--ink-2)" }}>SMS follow-up and appointment reminders can be added after each business completes texting approval.</span>
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  const industries = [
    "Roofers",
    "Plumbers",
    "HVAC companies",
    "Electricians",
    "Restoration companies",
    "Med spas",
    "Dentists",
    "Law firms",
    "Real estate agents",
    "Insurance agencies",
    "Home service businesses",
  ];

  return (
    <section className="section tight" id="industries">
      <div className="container container--narrow">
        <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto" }}>
          <span className="eyebrow eyebrow--center">Who it's for</span>
          <h2 style={{ marginTop: 14 }}>Built for businesses that book appointments, quotes, inspections, or consultations.</h2>
          <p className="lead" style={{ marginTop: 16, marginInline: "auto" }}>
            Any local service business where a missed call, slow reply, or unqualified lead costs real money.
          </p>
        </div>

        <div style={{
          display: "flex", flexWrap: "wrap", gap: 10,
          justifyContent: "center", maxWidth: 800, margin: "32px auto 0",
        }}>
          {industries.map((ind) => (
            <span key={ind} style={{
              padding: "10px 18px",
              border: "1px solid var(--line-strong)",
              borderRadius: 999,
              fontSize: 14, fontWeight: 500,
              background: "rgba(255,255,255,0.03)",
              color: "var(--ink-1)",
            }}>{ind}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoChip({ text }) {
  const handleClick = () => {
    const inputs = document.querySelectorAll("#try .chat__input input");
    const input = inputs[0];
    const form = input?.closest("form");
    if (input && form) {
      const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
      setter.call(input, text);
      input.dispatchEvent(new Event("input", { bubbles: true }));
      setTimeout(() => form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true })), 50);
    }
  };
  return <button className="demo__chip" type="button" onClick={handleClick}>{text}</button>;
}

export function TryIt() {
  return (
    <section className="demo" id="try">
      <div className="container">
        <div className="demo__inner">
          <div className="demo__grid">
            <div className="demo__copy">
              <span className="tag"><Icon.Sparkle /> Live demo</span>
              <h2 style={{ marginTop: 18 }}>
                Try the <span className="gradient-text">AI front desk</span>.
              </h2>
              <p className="lead">
                This is one part of the system. The live version is customized to your business, questions, calendar, and lead process. Ask anything, or tap one of the suggested questions.
              </p>
              <div className="demo__chips">
                <DemoChip text="Roof leak" />
                <DemoChip text="Roof replacement" />
                <DemoChip text="Storm damage" />
                <DemoChip text="Free inspection" />
                <DemoChip text="Ask a question" />
              </div>
              <p className="demo__hint">
                Demo set up as <b style={{ color: "var(--ink-0)" }}>Elite Roofing</b>. We customize the AI front desk for your business, services, and booking flow.
              </p>
            </div>
            <LiveChat
              business="Elite Roofing AI Front Desk"
              industry="roofing"
              scripted={true}
              intro="Hi, I'm Ava from BookdlyAI. Need help with your roof?"
              quicks={["Roof leak", "Roof replacement", "Storm damage", "Free inspection", "Ask a question"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const tiers = [
    {
      name: "Lead Capture System",
      price: "$297",
      per: "/month",
      best: "For businesses that want to stop losing website inquiries.",
      promise: <><b>Promise:</b> Capture and qualify up to 5 appointment opportunities per month.</>,
      includes: [
        "Website AI front desk",
        "Lead qualification questions",
        "Appointment or quote request flow",
        "Sends full lead summary to your office",
        "Basic monthly report",
        "No website rebuild needed",
        "Works without SMS approval",
      ],
      cta: "Try It Free for 7 Days",
      featured: false,
      ctaPrimary: false,
    },
    {
      name: "Missed Lead Protection",
      price: "$697",
      per: "/month",
      best: "For businesses that miss calls, get after-hours inquiries, or need faster lead response.",
      promise: <><b>Promise:</b> Capture and qualify up to 15 appointment opportunities per month.</>,
      includes: [
        "Everything in Lead Capture System",
        "Missed-call AI backup",
        "After-hours AI answering",
        "Business keeps current phone number",
        "Staff answers first",
        "If no one answers, AI collects caller details",
        "Call summaries sent to your office",
        "Includes up to 100 AI-handled call minutes per month",
        "CRM/GHL appointment tracking",
        "SMS follow-up can be added after A2P approval",
      ],
      cta: "Book a Call",
      badge: "Most Popular",
      featured: true,
      ctaPrimary: true,
    },
    {
      name: "Appointment Growth System",
      priceLead: "Starting at",
      price: "$1,500",
      per: "/month + ad spend",
      best: "For businesses that want us to help generate new appointment opportunities, not just capture the ones they already have.",
      promise: <><b>Promise:</b> Generate and qualify up to 30 appointment opportunities per month.</>,
      includes: [
        "Everything in Missed Lead Protection",
        "Landing page",
        "Lead generation campaign setup",
        "Ad lead form integration",
        "AI qualification flow",
        "Lead source tracking",
        "Appointment opportunity delivery",
        "Monthly performance review",
        "Bad lead replacement rules",
      ],
      cta: "Apply for Growth Plan",
      badge: "Application Only",
      featured: false,
      ctaPrimary: false,
    },
  ];

  return (
    <section className="section" id="pricing">
      <div className="container container--narrow">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <span className="eyebrow eyebrow--center">Pricing</span>
          <h2 style={{ marginTop: 14 }}>Simple founder pricing for our first local business partners.</h2>
          <p className="founder-note">Outcome-based plans. Cancel anytime in the first 7 days, no hard feelings.</p>
        </div>

        <div className="trial-banner">
          <div className="trial-banner__pulse" aria-hidden="true"><span /></div>
          <div className="trial-banner__copy">
            <div className="trial-banner__title">Free 7 Day Test</div>
            <p>Try the Lead Capture System on your real website for 7 days. If it creates real appointment opportunities, keep it. If not, walk away.</p>
          </div>
          <a href="#contact" className="btn btn--primary">Start Free 7 Day Test <Icon.Arrow /></a>
        </div>

        <div className="pricing-grid pricing-grid--three">
          {tiers.map((t) => (
            <div key={t.name} className={"tier" + (t.featured ? " tier--featured" : "")}>
              {t.badge && <span className="tier__badge">{t.badge}</span>}
              <div className="tier__name">{t.name}</div>
              <div className="tier__price">
                {t.priceLead && <span className="per">{t.priceLead}</span>}
                <span className="num">{t.price}</span>
                {t.per && <span className="per">{t.per}</span>}
              </div>
              <div className="tier__problem">{t.best}</div>
              {t.promise && <div className="tier__promise">{t.promise}</div>}
              <div className="tier__includes">Includes</div>
              <ul>
                {t.includes.map((line) => (
                  <li key={line}><Icon.CheckCircle /><span>{line}</span></li>
                ))}
              </ul>
              <div className="tier__cta">
                <a href="#contact" className={"btn " + (t.ctaPrimary ? "btn--primary" : "btn--ghost")}>
                  {t.cta} <Icon.Arrow />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p style={{
          maxWidth: 720, margin: "32px auto 0",
          textAlign: "center",
          fontSize: 12.5,
          color: "var(--ink-4)",
          lineHeight: 1.6,
        }}>
          Appointment opportunities are qualified requests, calls, or form submissions that match the agreed business rules. We do not guarantee closed deals, revenue, or close rate.
        </p>
      </div>
    </section>
  );
}

export function Contact() {
  const [form, setForm] = React.useState({ name: "", business: "", website: "", industry: "", phone: "", email: "", tier: "" });
  const [errors, setErrors] = React.useState({});
  const [done, setDone] = React.useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.business.trim()) errs.business = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Valid email required";
    if (!form.phone.trim()) errs.phone = "Required";
    if (!form.industry) errs.industry = "Required";
    setErrors(errs);
    if (!Object.keys(errs).length) setDone(true);
  };

  const fieldStyle = {
    fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase",
    color: "var(--ink-3)", fontWeight: 500, display: "block", marginBottom: 6,
  };
  const inputStyle = {
    width: "100%", font: "inherit", fontSize: 14.5,
    padding: "12px 14px", borderRadius: 10,
    border: "1px solid var(--line-strong)",
    background: "rgba(255,255,255,0.03)",
    color: "var(--ink-0)", outline: "none",
    transition: "border-color .15s ease, box-shadow .15s ease",
  };
  const onFocus = (e) => { e.target.style.borderColor = "var(--accent)"; e.target.style.boxShadow = "0 0 0 4px var(--accent-soft)"; };
  const onBlur = (e) => { e.target.style.borderColor = "var(--line-strong)"; e.target.style.boxShadow = "none"; };

  return (
    <section className="section" id="contact">
      <div className="container container--narrow">
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 36px" }}>
          <span className="eyebrow eyebrow--center">Contact</span>
          <h2 style={{ marginTop: 14 }}>Want this for your business?</h2>
          <p className="lead" style={{ marginTop: 16, marginInline: "auto" }}>
            Book a quick call and we'll show you exactly how BookdlyAI would capture and qualify leads for your specific business.
          </p>
          <div className="row" style={{ justifyContent: "center", marginTop: 24 }}>
            <a href="#" className="btn btn--primary btn--lg">Book a Call <Icon.Arrow /></a>
          </div>
        </div>

        {done ? (
          <div style={{
            maxWidth: 720, margin: "0 auto", textAlign: "center",
            padding: 36,
            background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
            border: "1px solid var(--accent)",
            borderRadius: 22,
            boxShadow: "0 0 60px -20px var(--accent-glow)",
          }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--accent)", color: "var(--accent-ink)", display: "grid", placeItems: "center", margin: "0 auto 16px" }}>
              <Icon.Check size={20} />
            </div>
            <h3 style={{ fontSize: 22 }}>Thanks, {form.name.split(" ")[0]}. We got it.</h3>
            <p className="lead" style={{ marginTop: 12, marginInline: "auto" }}>
              We will reach out to <b style={{ color: "var(--ink-0)" }}>{form.business}</b> at <b style={{ color: "var(--ink-0)" }}>{form.email}</b> within one business day to schedule your demo.
            </p>
            <button className="btn btn--ghost btn--sm" style={{ marginTop: 22 }} onClick={() => { setDone(false); setForm({ name: "", business: "", website: "", industry: "", phone: "", email: "", tier: "" }); }}>
              Submit another
            </button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate style={{
            maxWidth: 640, margin: "0 auto",
            padding: 32,
            background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
            border: "1px solid var(--line-strong)",
            borderRadius: 22,
            display: "grid", gap: 18,
            backdropFilter: "blur(8px)",
          }}>
            <p style={{ textAlign: "center", color: "var(--ink-3)", fontSize: 13, margin: "-6px 0 6px" }}>
              Or request a free demo for your business
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              <div>
                <label style={fieldStyle}>Name</label>
                <input style={inputStyle} value={form.name} onChange={set("name")} onFocus={onFocus} onBlur={onBlur} placeholder="Jane Smith" />
                {errors.name && <span style={{ color: "#ff7777", fontSize: 12 }}>{errors.name}</span>}
              </div>
              <div>
                <label style={fieldStyle}>Business name</label>
                <input style={inputStyle} value={form.business} onChange={set("business")} onFocus={onFocus} onBlur={onBlur} placeholder="Acme Roofing" />
                {errors.business && <span style={{ color: "#ff7777", fontSize: 12 }}>{errors.business}</span>}
              </div>
            </div>
            <div>
              <label style={fieldStyle}>Website</label>
              <input style={inputStyle} value={form.website} onChange={set("website")} onFocus={onFocus} onBlur={onBlur} placeholder="acmeroofing.com" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              <div>
                <label style={fieldStyle}>Industry</label>
                <select style={inputStyle} value={form.industry} onChange={set("industry")} onFocus={onFocus} onBlur={onBlur}>
                  <option value="" style={{ background: "#0f1218" }}>Choose one…</option>
                  {["Roofing", "Plumbing", "Water Restoration", "HVAC", "Electrical", "Med Spa", "Dental", "Law Firm", "Real Estate", "Insurance", "Other local service"].map(o => <option key={o} style={{ background: "#0f1218" }}>{o}</option>)}
                </select>
                {errors.industry && <span style={{ color: "#ff7777", fontSize: 12 }}>{errors.industry}</span>}
              </div>
              <div>
                <label style={fieldStyle}>Phone</label>
                <input style={inputStyle} value={form.phone} onChange={set("phone")} onFocus={onFocus} onBlur={onBlur} placeholder="(555) 123-4567" />
                {errors.phone && <span style={{ color: "#ff7777", fontSize: 12 }}>{errors.phone}</span>}
              </div>
            </div>
            <div>
              <label style={fieldStyle}>Email</label>
              <input style={inputStyle} value={form.email} onChange={set("email")} onFocus={onFocus} onBlur={onBlur} placeholder="you@business.com" />
              {errors.email && <span style={{ color: "#ff7777", fontSize: 12 }}>{errors.email}</span>}
            </div>
            <div>
              <label style={fieldStyle}>Which plan are you interested in?</label>
              <select style={inputStyle} value={form.tier} onChange={set("tier")} onFocus={onFocus} onBlur={onBlur}>
                <option value="" style={{ background: "#0f1218" }}>Choose one…</option>
                <option style={{ background: "#0f1218" }}>Lead Capture System - $297/mo</option>
                <option style={{ background: "#0f1218" }}>Missed Lead Protection - $697/mo</option>
                <option style={{ background: "#0f1218" }}>Appointment Growth System - Starting at $1,500/mo + ad spend</option>
                <option style={{ background: "#0f1218" }}>Not sure yet</option>
              </select>
            </div>
            <button className="btn btn--primary btn--lg" type="submit" style={{ marginTop: 6 }}>
              Request My Free Demo <Icon.Arrow />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <BrandMark size={28} />
            <p className="footer__tag">Lead-to-appointment system for local service businesses. Capture, qualify, and route appointment opportunities so fewer leads slip through the cracks.</p>
          </div>
          <div className="footer__cols">
            <div className="footer__col">
              <div className="footer__h">Product</div>
              <a href="#how">How it works</a>
              <a href="#try">Try it</a>
              <a href="#pricing">Pricing</a>
            </div>
            <div className="footer__col">
              <div className="footer__h">Company</div>
              <a href="#contact">Contact</a>
              <a href="#contact">Book a call</a>
              <a href="https://instagram.com/bookdlyai" target="_blank" rel="noreferrer" className="footer__ig">
                <span className="footer__ig-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
                  </svg>
                </span>
                @bookdlyai
              </a>
            </div>
            <div className="footer__col">
              <div className="footer__h">Legal</div>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 BookdlyAI. All rights reserved.</span>
          <span>Lead-to-appointment system for local service businesses.</span>
        </div>
      </div>
    </footer>
  );
}
