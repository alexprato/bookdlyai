"use client";

import React from "react";
import { Nav, About, Problem, HowItWorks, Industries, TryIt, Pricing, Contact, Footer } from "./Sections";

const ACCENT = {
  color: "oklch(0.86 0.16 195)",
  bright: "oklch(0.92 0.18 195)",
  deep: "oklch(0.62 0.18 195)",
  ink: "#021015",
};

export default function App() {
  React.useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--accent", ACCENT.color);
    r.setProperty("--accent-bright", ACCENT.bright);
    r.setProperty("--accent-deep", ACCENT.deep);
    r.setProperty("--accent-ink", ACCENT.ink);
    r.setProperty("--accent-glow", `color-mix(in oklab, ${ACCENT.color} 70%, transparent)`);
    r.setProperty("--accent-soft", `color-mix(in oklab, ${ACCENT.color} 14%, transparent)`);
  }, []);

  return (
    <>
      <Nav />
      <main>
        <About />
        <Problem />
        <HowItWorks />
        <Industries />
        <TryIt />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
