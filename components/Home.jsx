"use client";

import React from "react";
import Link from "next/link";
import { Mascot } from "./Mascot";

const ArrowIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CATEGORIES = [
  {
    name: "Repairs",
    examples: "Plumbing, HVAC, electrical, pool repair, leak detection",
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
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <span className="tag"><span className="dot" /> Exclusive zip-code territories</span>
          <div className="hero__mascot" aria-hidden="true">
            <Mascot size={104} />
          </div>
          <h1 style={{ marginTop: 14 }}>
            Qualified appointments for <span className="gradient-text">home service businesses</span>
          </h1>
          <p className="hero__sub" style={{ margin: "16px auto 0", textAlign: "center" }}>
            BookdlyAI helps local service businesses get qualified appointment opportunities in exclusive zip-code territories.
          </p>
          <p className="hero__support">
            Try 3 qualified appointments first. If it works, keep the territory.
          </p>
          <div className="row hero__ctas" style={{ justifyContent: "center" }}>
            <Link href="/claim-territory" className="btn btn--primary btn--lg">
              Claim Your 3 Appointment Test <ArrowIcon size={15} />
            </Link>
            <a href="#how-it-works" className="btn btn--ghost btn--lg">
              How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    "Pick your service area",
    "We capture and qualify local prospects",
    "You receive appointment-ready opportunities",
    "If it works, you keep the territory",
  ];
  return (
    <section className="section section--tight" id="how-it-works">
      <div className="container container--narrow">
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
          <span className="eyebrow eyebrow--center">How it works</span>
          <h2 style={{ marginTop: 12 }}>
            Try <span className="gradient-text">3 qualified appointments</span> first
          </h2>
        </div>
        <ol className="steps-quad">
          {steps.map((s, i) => (
            <li key={s} className="step-quad">
              <div className="step-quad__num">{String(i + 1).padStart(2, "0")}</div>
              <div className="step-quad__text">{s}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="section section--tight" id="industries">
      <div className="container container--narrow">
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
          <span className="eyebrow eyebrow--center">Industries</span>
          <h2 style={{ marginTop: 12 }}>Built for home service businesses</h2>
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
          And more. If the job is local, service-based, and worth showing up for, it usually fits the BookdlyAI model.
        </p>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section section--tight" id="pricing">
      <div className="container container--narrow">
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
          <span className="eyebrow eyebrow--center">Pricing</span>
          <h2 style={{ marginTop: 12 }}>Simple monthly pricing</h2>
          <p className="lead" style={{ marginTop: 12, marginInline: "auto" }}>
            After the 3 appointment test, keep your territory with one flat monthly plan.
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
              <Link href="/claim-territory" className={"btn " + (p.featured ? "btn--primary" : "btn--ghost")} style={{ marginTop: 16, width: "100%" }}>
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

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Industries />
      <Pricing />
    </>
  );
}
