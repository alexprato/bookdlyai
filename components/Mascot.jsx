"use client";

import React from "react";

// BookdlyAI mascot — friendly humanoid robot, smiling and waving.
// `tone` controls fill weight: "solid" (full chrome) or "ghost" (line art on dark).
export function Mascot({ size = 56, tone = "solid", animate = true, className = "" }) {
  const id = React.useId().replace(/[^a-z0-9]/gi, "");
  const accent = "var(--accent)";
  const accentBright = "var(--accent-bright)";
  const isGhost = tone === "ghost";

  return (
    <svg
      className={"mascot " + (animate ? "mascot--animate " : "") + className}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      role="img"
      aria-label="BookdlyAI mascot"
    >
      <defs>
        <linearGradient id={"bodyGrad" + id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7fbff" />
          <stop offset="100%" stopColor="#c8d5e2" />
        </linearGradient>
        <linearGradient id={"faceGrad" + id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1620" />
          <stop offset="100%" stopColor="#0f1f2c" />
        </linearGradient>
        <radialGradient id={"glow" + id} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.55" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="60" cy="62" r="54" fill={`url(#glow${id})`} />

      <line x1="60" y1="22" x2="60" y2="14" stroke={isGhost ? accent : "#9aa7b3"} strokeWidth="2.4" strokeLinecap="round" />
      <circle className="mascot__antenna" cx="60" cy="11" r="3.6" fill={accent}>
        {animate && (
          <animate attributeName="opacity" values="1;0.45;1" dur="1.6s" repeatCount="indefinite" />
        )}
      </circle>

      <rect
        x="28" y="22" width="64" height="54" rx="18"
        fill={isGhost ? "none" : `url(#bodyGrad${id})`}
        stroke={isGhost ? accent : "#7d8a98"}
        strokeWidth={isGhost ? 2 : 1.4}
      />
      {!isGhost && (
        <rect x="33" y="26" width="40" height="6" rx="3" fill="#ffffff" opacity="0.7" />
      )}

      <rect
        x="36" y="33" width="48" height="32" rx="11"
        fill={isGhost ? "#08131c" : `url(#faceGrad${id})`}
        stroke={accent}
        strokeWidth="1.4"
        opacity={isGhost ? 1 : 0.95}
      />

      <g>
        <circle cx="49" cy="49" r="3.2" fill={accentBright}>
          {animate && (
            <animate attributeName="r" values="3.2;3.2;0.4;3.2;3.2" keyTimes="0;0.46;0.5;0.54;1" dur="4.2s" repeatCount="indefinite" />
          )}
        </circle>
        <circle cx="71" cy="49" r="3.2" fill={accentBright}>
          {animate && (
            <animate attributeName="r" values="3.2;3.2;0.4;3.2;3.2" keyTimes="0;0.46;0.5;0.54;1" dur="4.2s" repeatCount="indefinite" />
          )}
        </circle>
      </g>

      <path
        d="M51 56 Q60 62 69 56"
        stroke={accent}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />

      <circle cx="42" cy="58" r="1.4" fill={accent} opacity="0.55" />
      <circle cx="78" cy="58" r="1.4" fill={accent} opacity="0.55" />

      <rect x="24" y="42" width="6" height="14" rx="3" fill={isGhost ? "none" : "#9aa7b3"} stroke={isGhost ? accent : "none"} strokeWidth="1.6" />
      <rect x="90" y="42" width="6" height="14" rx="3" fill={isGhost ? "none" : "#9aa7b3"} stroke={isGhost ? accent : "none"} strokeWidth="1.6" />

      <rect x="54" y="76" width="12" height="6" rx="2" fill={isGhost ? "none" : "#7d8a98"} stroke={isGhost ? accent : "none"} strokeWidth="1.4" />

      <path
        d="M30 100 Q30 84 44 84 H76 Q90 84 90 100 V112 H30 Z"
        fill={isGhost ? "none" : `url(#bodyGrad${id})`}
        stroke={isGhost ? accent : "#7d8a98"}
        strokeWidth={isGhost ? 2 : 1.4}
      />
      <circle cx="60" cy="96" r="3" fill={accent} />
      <circle cx="60" cy="96" r="6" fill="none" stroke={accent} strokeWidth="1.2" opacity="0.5" />

      <rect x="22" y="86" width="10" height="20" rx="5" fill={isGhost ? "none" : `url(#bodyGrad${id})`} stroke={isGhost ? accent : "#7d8a98"} strokeWidth="1.4" />

      <g className="mascot__wave" style={{ transformOrigin: "92px 86px" }}>
        <rect x="88" y="58" width="9" height="32" rx="4.5" fill={isGhost ? "none" : `url(#bodyGrad${id})`} stroke={isGhost ? accent : "#7d8a98"} strokeWidth="1.4" />
        <circle cx="92.5" cy="54" r="7.5" fill={isGhost ? "#08131c" : "#e2e8ee"} stroke={accent} strokeWidth="1.6" />
        <path d="M89 50 v-4 M92.5 49 v-5 M96 50 v-4" stroke={accent} strokeWidth="1.4" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function BrandMark({ size = 26, withText = true, className = "" }) {
  return (
    <span className={"brand " + className}>
      <Mascot size={size + 8} animate={true} />
      {withText && <span className="brand__word">Bookdly<span className="brand__word--ai">AI</span></span>}
    </span>
  );
}
