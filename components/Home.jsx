"use client";

import React from "react";
import Link from "next/link";
import { Mascot } from "./Mascot";

const ArrowIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const XIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const CATEGORIES = [
  {
    name: "Repairs",
    examples: "Plumbing, pool repair, HVAC, electrical, leak detection",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a4 4 0 1 0 3 3l3.3 3.3-3 3-3.3-3.3a4 4 0 0 1-3-3M14.7 6.3l-3-3-3 3 3 3M5 14l-3 3 5 5 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round"/></svg>
    ),
  },
  {
    name: "Outdoor Projects",
    examples: "Pavers, fencing, concrete, tree removal, landscaping",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3c3 0 5 2 5 4 2 0 3 1.5 3 3.5 0 2.5-2 4-4 4h-1v6h-6v-6H8c-2 0-4-1.5-4-4 0-2 1-3.5 3-3.5 0-2 2-4 5-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
    ),
  },
  {
    name: "Home Improvement",
    examples: "Roofing, remodeling, epoxy floors, windows, painting",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 12l9-7 9 7M5 12v8h14v-8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round"/><path d="M9 20v-5h6v5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
    ),
  },
  {
    name: "Restoration & Specialty",
    examples: "Mold, water damage, restoration, insulation, pest control",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3l5 7c0 3-2 5-5 5s-5-2-5-5l5-7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M5 19h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
    ),
  },
];

const PRICING = [
  {
    name: "Starter",
    price: "$497",
    target: "3 to 5 qualified appointment opportunities",
  },
  {
    name: "Growth",
    price: "$997",
    target: "8 to 12 qualified appointment opportunities",
    featured: true,
  },
  {
    name: "Market",
    price: "$1,997",
    target: "15 to 20 qualified appointment opportunities",
  },
];

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <span className="tag"><span className="dot" /> Exclusive zip-code territories</span>
          <div className="hero__mascot" aria-hidden="true">
            <Mascot size={120} />
          </div>
          <h1 style={{ marginTop: 16 }}>
            Qualified appointments for <span className="gradient-text">local service businesses</span>
          </h1>
          <p className="hero__sub" style={{ margin: "18px auto 0", textAlign: "center" }}>
            BookdlyAI helps home service companies capture, qualify, and book appointment-ready prospects in exclusive zip-code territories. Try 3 qualified appointments before you commit.
          </p>
          <div className="row hero__ctas" style={{ justifyContent: "center" }}>
            <Link href="/claim-territory" className="btn btn--primary btn--lg">
              Claim Your 3 Appointment Test <ArrowIcon size={15} />
            </Link>
            <a href="#how-it-works" className="btn btn--ghost btn--lg">
              See How It Works
            </a>
          </div>
          <ul className="hero-bullets">
            <li><span className="check"><CheckIcon /></span> 3 appointment test</li>
            <li><span className="check"><CheckIcon /></span> Exclusive zip-code territories</li>
            <li><span className="check"><CheckIcon /></span> Appointment-ready prospects</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const bad = [
    "Same lead sold to competitors",
    "Weak qualification",
    "No territory protection",
  ];
  const good = [
    "One business per niche per area",
    "Qualification before handoff",
    "Zip-code territory model",
  ];
  return (
    <section className="section section--tight" id="problem">
      <div className="container container--narrow">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <span className="eyebrow eyebrow--center">The problem</span>
          <h2 style={{ marginTop: 12 }}>Stop buying shared leads</h2>
          <p className="lead" style={{ marginTop: 14, marginInline: "auto" }}>
            Most lead companies sell the same contact to multiple contractors. BookdlyAI focuses on qualified appointments and exclusive territories.
          </p>
        </div>

        <div className="compare">
          <div className="compare__card compare__card--bad">
            <div className="compare__title">
              Shared Lead Companies
              <span className="compare__pill">Old way</span>
            </div>
            <ul className="compare__list">
              {bad.map((b) => (
                <li key={b}>
                  <span className="ic"><XIcon /></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="compare__card compare__card--good">
            <div className="compare__title">
              BookdlyAI
              <span className="compare__pill">Our model</span>
            </div>
            <ul className="compare__list">
              {good.map((g) => (
                <li key={g}>
                  <span className="ic"><CheckIcon /></span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThreeTest() {
  const steps = [
    "Pick your target zip codes",
    "We capture local interest",
    "Prospects get qualified",
    "You receive appointment-ready opportunities",
    "If the test works, you can lock in the territory",
  ];
  const qualified = [
    "Real contact info",
    "Correct service area",
    "Requested the service",
    "Basic questions answered",
    "Agreed to a call, estimate, or appointment window",
  ];
  return (
    <section className="section section--tight" id="three-test">
      <div className="container container--narrow">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <span className="eyebrow eyebrow--center">3 Appointment Test</span>
          <h2 style={{ marginTop: 12 }}>
            Try <span className="gradient-text">3 qualified appointments</span> first
          </h2>
          <p className="lead" style={{ marginTop: 14, marginInline: "auto" }}>
            Before a monthly territory, we prove the system with 3 qualified appointments in your service area.
          </p>
        </div>

        <div className="three-test__grid">
          <ol className="steps steps--compact">
            {steps.map((s, i) => (
              <li key={s} className="step-row">
                <div className="step-row__num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{s}</h3>
              </li>
            ))}
          </ol>

          <aside className="qualified-card">
            <div className="qualified-card__h">
              <span className="qualified-card__pill">Qualified =</span>
              A qualified appointment includes:
            </div>
            <ul>
              {qualified.map((q) => (
                <li key={q}>
                  <span className="ic"><CheckIcon /></span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
          <Link href="/claim-territory" className="btn btn--primary btn--lg">
            Claim Your 3 Appointment Test <ArrowIcon size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Territory() {
  const cards = [
    { name: "Starter Territory", body: "3 to 5 zip codes for a focused local test." },
    { name: "Growth Territory", body: "10 to 15 zip codes for consistent appointment flow." },
    { name: "Market Lockout", body: "A larger exclusive service area for serious operators." },
  ];
  return (
    <section className="section section--tight" id="territories">
      <div className="container container--narrow">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <span className="eyebrow eyebrow--center">Territories</span>
          <h2 style={{ marginTop: 12 }}>Lock down your zip codes</h2>
          <p className="lead" style={{ marginTop: 14, marginInline: "auto" }}>
            One business per niche per territory. If your area is open and the test works, you can claim it before competitors do.
          </p>
        </div>

        <div className="three-grid">
          {cards.map((c) => (
            <div key={c.name} className="card">
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <span style={{
                  width: 32, height: 32, borderRadius: 9,
                  background: "var(--accent-soft)", color: "var(--accent-bright)",
                  display: "grid", placeItems: "center",
                }}><PinIcon /></span>
                <div className="card__title" style={{ margin: 0 }}>{c.name}</div>
              </div>
              <div className="card__body">{c.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="section section--tight" id="industries">
      <div className="container container--narrow">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <span className="eyebrow eyebrow--center">Industries</span>
          <h2 style={{ marginTop: 12 }}>Built for home service businesses</h2>
          <p className="lead" style={{ marginTop: 14, marginInline: "auto" }}>
            From urgent repairs to high-ticket installs, BookdlyAI helps local home service companies capture and qualify appointment-ready prospects.
          </p>
        </div>
        <div className="category-grid">
          {CATEGORIES.map((c) => (
            <div key={c.name} className="category-card">
              <span className="category-card__icon">{c.icon}</span>
              <div>
                <div className="category-card__name">{c.name}</div>
                <div className="category-card__examples">{c.examples}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="industries__more">
          And more. If the job is local, service-based, and worth showing up for, it can usually fit the BookdlyAI model.
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    "Local traffic comes in",
    "Prospect submits details",
    "BookdlyAI qualifies the opportunity",
    "Appointment details are organized",
    "Your business follows up and closes",
  ];
  return (
    <section className="section section--tight" id="how-it-works">
      <div className="container container--narrow">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <span className="eyebrow eyebrow--center">How It Works</span>
          <h2 style={{ marginTop: 12 }}>How it works</h2>
        </div>
        <ol className="steps steps--compact" style={{ marginTop: 28 }}>
          {steps.map((s, i) => (
            <li key={s} className="step-row">
              <div className="step-row__num">{String(i + 1).padStart(2, "0")}</div>
              <h3>{s}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section section--tight" id="pricing">
      <div className="container container--narrow">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <span className="eyebrow eyebrow--center">Pricing</span>
          <h2 style={{ marginTop: 12 }}>Simple monthly territory pricing</h2>
          <p className="lead" style={{ marginTop: 14, marginInline: "auto" }}>
            After the 3 appointment test, keep your area with one flat monthly plan. No shared leads. No per-lead surprises.
          </p>
        </div>
        <div className="three-grid">
          {PRICING.map((p) => (
            <div key={p.name} className={"price-card" + (p.featured ? " price-card--featured" : "")}>
              {p.featured && <span className="price-card__badge">Most popular</span>}
              <div className="price-card__name">{p.name}</div>
              <div className="price-card__price">
                <span className="num">{p.price}</span>
                <span className="per">/month</span>
              </div>
              <div className="price-card__target">
                <span className="price-card__target-label">Target</span>
                {p.target}
              </div>
              <Link href="/claim-territory" className={"btn " + (p.featured ? "btn--primary" : "btn--ghost")} style={{ marginTop: 18, width: "100%" }}>
                Claim Territory <ArrowIcon size={14} />
              </Link>
            </div>
          ))}
        </div>
        <p className="pricing__note">
          Appointment targets are monthly service goals, not guaranteed closed jobs or revenue.
        </p>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta" id="contact">
      <div className="final-cta__inner">
        <span className="eyebrow eyebrow--center">Get started</span>
        <h2 style={{ marginTop: 14 }}>Want to test your territory?</h2>
        <p className="lead" style={{ margin: "14px auto 0" }}>
          Tell us your industry and zip codes. If your area is open, we&apos;ll set up your 3 appointment test.
        </p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
          <Link href="/claim-territory" className="btn btn--primary btn--lg">
            Claim Your 3 Appointment Test <ArrowIcon size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <ThreeTest />
      <Territory />
      <Industries />
      <HowItWorks />
      <Pricing />
      <FinalCta />
    </>
  );
}
