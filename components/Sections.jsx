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
          <a href="#about">About</a>
          <a href="#try">Try it</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav__cta">
          <a href="#contact" className="btn btn--primary btn--sm">Book a call <Icon.Arrow size={13} /></a>
        </div>
      </div>
    </header>
  );
}

export function About() {
  const promises = [
    { icon: Icon.Sparkle, text: "Added to your existing website. No rebuild needed." },
    { icon: Icon.Phone, text: "Keep your current business number for phone backup." },
    { icon: Icon.Shield, text: "AI only steps in when your team can't pick up." },
    { icon: Icon.Building, text: "For dentists, med spas, roofers, plumbers, HVAC, law firms, and other local service businesses." },
  ];
  return (
    <section className="hero" id="about">
      <div className="container">
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <span className="tag"><span className="dot" /> Friendly AI front desk for local businesses</span>
          <div className="hero__mascot" aria-hidden="true">
            <Mascot size={140} />
          </div>
          <h1 style={{ marginTop: 18 }}>
            Add an <span className="gradient-text">AI front desk</span> to your website.
          </h1>
          <p className="hero__sub" style={{ margin: "22px auto 0", textAlign: "center" }}>
            BookdlyAI helps local businesses answer website questions, collect appointment requests, and catch missed calls without rebuilding their website.
          </p>
          <div className="hero__ctas row" style={{ justifyContent: "center", marginTop: 28 }}>
            <a href="#try" className="btn btn--primary btn--lg"><Icon.Sparkle /> Try the chatbot live</a>
            <a href="#pricing" className="btn btn--ghost btn--lg">See pricing</a>
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
                Try the chatbot <span className="gradient-text">yourself</span>.
              </h2>
              <p className="lead">
                Here is how BookdlyAI would work on a real business website. This is a working demo set up as <b style={{ color: "var(--ink-0)" }}>Elite Roofing</b>. Ask anything, or tap one of the suggested questions.
              </p>
              <div className="demo__chips">
                <DemoChip text="Roof leak" />
                <DemoChip text="Roof replacement" />
                <DemoChip text="Storm damage" />
                <DemoChip text="Free inspection" />
                <DemoChip text="Ask a question" />
              </div>
              <p className="demo__hint">
                Roofing example shown. We customize the chatbot for your business, services, and booking flow.
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
      name: "AI Website Front Desk",
      price: "$500",
      per: "/month",
      best: "Best for businesses that want their website to capture more calls, quote requests, and appointments.",
      includes: [
        "AI chatbot added to existing website",
        "Answers common questions",
        "Collects lead details",
        "Appointment or quote request flow",
        "Sends request to your office",
        "Basic monthly report",
        "No website rebuild needed",
      ],
      cta: "Try It Free for 7 Days",
      featured: false,
      ctaPrimary: false,
    },
    {
      name: "Full AI Front Desk",
      price: "$1,000",
      per: "/month",
      best: "Best for businesses that want website chat plus missed-call and after-hours backup.",
      includes: [
        "Everything in Tier 1",
        "Missed-call AI backup",
        "After-hours AI answering",
        "Business keeps current phone number",
        "Staff answers first",
        "If no one answers, AI collects caller details",
        "Call summaries sent to your office",
        "Includes up to 100 AI-handled call minutes/month",
      ],
      cta: "Book a Call",
      badge: "Most Popular",
      featured: true,
      ctaPrimary: true,
    },
    {
      name: "Growth Appointment Engine",
      priceLead: "Starting at",
      price: "$1,500",
      per: "/month + ad spend",
      best: "For businesses that want new appointment opportunities generated for them, not just better website conversion.",
      promise: <><b>Launch offer:</b> Get 10 qualified appointment opportunities or we keep working until you do.</>,
      includes: [
        "Everything in Tier 2",
        "Landing page",
        "Lead generation campaign setup",
        "Lead tracking",
        "Qualification flow",
        "Appointment request delivery",
        "Monthly performance review",
      ],
      cta: "Apply for Growth Plan",
      badge: "Done For You Growth",
      featured: false,
      ctaPrimary: false,
      disclaimer: "Qualified opportunities only. We do not guarantee closed deals, revenue, or close rate.",
    },
  ];

  return (
    <section className="section" id="pricing">
      <div className="container container--narrow">
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <span className="eyebrow eyebrow--center">Pricing</span>
          <h2 style={{ marginTop: 14 }}>Simple, flat monthly pricing.</h2>
          <p className="founder-note">Founder pricing for our first local business partners.</p>
        </div>

        <div className="trial-banner">
          <div className="trial-banner__pulse" aria-hidden="true"><span /></div>
          <div className="trial-banner__copy">
            <div className="trial-banner__title">Free 7 Day Test</div>
            <p>Try the AI Website Front Desk on a demo page or your real website for 7 days. If it creates real appointment opportunities, keep it. If not, no hard feelings.</p>
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
              {t.callout && <div className="tier__callout">{t.callout}</div>}
              <div className="tier__includes">Includes</div>
              <ul>
                {t.includes.map((line) => (
                  <li key={line}><Icon.CheckCircle /><span>{line}</span></li>
                ))}
              </ul>
              {t.note && (
                <p className="tier__note">{t.note}</p>
              )}
              {t.disclaimer && (
                <p className="tier__disclaimer">{t.disclaimer}</p>
              )}
              <div className="tier__cta">
                <a href="#contact" className={"btn " + (t.ctaPrimary ? "btn--primary" : "btn--ghost")}>
                  {t.cta} <Icon.Arrow />
                </a>
              </div>
            </div>
          ))}
        </div>
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
          <h2 style={{ marginTop: 14 }}>Want this on your website?</h2>
          <p className="lead" style={{ marginTop: 16, marginInline: "auto" }}>
            Book a quick call and we'll show you how BookdlyAI would work for your business.
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
                  {["Roofing", "Plumbing", "Water Restoration", "HVAC", "Med Spa", "Dental", "Law Firm", "Insurance", "Other local service"].map(o => <option key={o} style={{ background: "#0f1218" }}>{o}</option>)}
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
              <label style={fieldStyle}>Which tier are you interested in?</label>
              <select style={inputStyle} value={form.tier} onChange={set("tier")} onFocus={onFocus} onBlur={onBlur}>
                <option value="" style={{ background: "#0f1218" }}>Choose one…</option>
                <option style={{ background: "#0f1218" }}>AI Website Front Desk - $500/mo</option>
                <option style={{ background: "#0f1218" }}>Full AI Front Desk - $1,000/mo</option>
                <option style={{ background: "#0f1218" }}>Growth Appointment Engine - Starting at $1,500/mo + ad spend</option>
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
            <p className="footer__tag">AI front desk for websites, missed calls, and appointment requests.</p>
          </div>
          <div className="footer__cols">
            <div className="footer__col">
              <div className="footer__h">Product</div>
              <a href="#about">About</a>
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
          <span>Friendly AI booking for local service businesses.</span>
        </div>
      </div>
    </footer>
  );
}
