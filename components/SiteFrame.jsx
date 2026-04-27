"use client";

import React from "react";
import Link from "next/link";
import { BrandMark } from "./Mascot";

const NAV_LINKS = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Industries", href: "/#industries" },
  { label: "Pricing", href: "/#pricing" },
];

export function Nav() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="nav">
        <div className="nav__inner">
          <Link href="/" className="brand-link" aria-label="BookdlyAI home">
            <BrandMark size={24} />
          </Link>
          <nav className="nav__links" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
            <Link href="/claim-territory">Claim Territory</Link>
          </nav>
          <div className="nav__cta">
            <button
              type="button"
              className="nav__toggle"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            <Link href="/claim-territory" className="btn btn--primary btn--sm">
              <span className="cta-text-long">Claim Territory</span>
              <span aria-hidden="true" style={{ display: "inline-flex" }}>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </header>

      {open && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <button
            type="button"
            className="mobile-close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <Link href="/claim-territory" onClick={() => setOpen(false)}>Claim Territory</Link>
        </div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <BrandMark size={28} />
            <p className="footer__tag">
              Qualified appointments for local service businesses. Exclusive zip-code territories. Try 3 first.
            </p>
          </div>
          <div className="footer__cols">
            <div className="footer__col">
              <div className="footer__h">Get Started</div>
              <Link href="/claim-territory">Claim Territory</Link>
              <Link href="/#how-it-works">How It Works</Link>
              <Link href="/#pricing">Pricing</Link>
            </div>
            <div className="footer__col">
              <div className="footer__h">Company</div>
              <Link href="/#contact">Contact</Link>
              <a href="mailto:support@bookdlyai.com">support@bookdlyai.com</a>
            </div>
            <div className="footer__col">
              <div className="footer__h">Legal</div>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} BookdlyAI. All rights reserved.</span>
          <span>Qualified appointments. Exclusive zip-code territories.</span>
        </div>
      </div>
    </footer>
  );
}

export default function SiteFrame({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
