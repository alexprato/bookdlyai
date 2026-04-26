# BookdlyAI — Deployment Design

**Date:** 2026-04-26
**Status:** Approved (option B)

## Problem

The user has a Claude-Designer export of the BookdlyAI landing page. Files load React via CDN and compile JSX in the browser with Babel — fine for prototyping inside Claude.ai, not deployable. The chat component calls `window.claude.complete()`, a sandbox-only API. The user wants a real Vercel-deployable site.

## Goals

- Convert the export into a Next.js (App Router) app deployable to Vercel.
- Preserve every visual element of `BookdlyAI.html`.
- Keep the scripted dental chat flow working locally with no API key needed (option B).
- Off-script user input gets a friendly canned reply, not a `window.claude` crash.
- Single command to run locally: `npm install && npm run dev`.

## Non-goals

- Real LLM integration (deferred — option B). The `live-chat.jsx` LLM path becomes a stub.
- Custom CMS, blog, or admin. Static landing page only.
- The Claude Designer "Tweaks" panel does not ship.

## Architecture

```
ai-front-desk/
├── app/
│   ├── layout.jsx          # html/body, Inter + JetBrains Mono fonts, mascot favicon, metadata
│   ├── page.jsx            # imports <App /> as a client component
│   └── globals.css         # exact copy of styles.css
├── components/
│   ├── App.jsx             # "use client". Accent CSS vars + section composition. Tweaks panel removed.
│   ├── Sections.jsx        # Nav, About, TryIt, Pricing, Contact, Footer
│   ├── LiveChat.jsx        # scripted flow only; off-script returns a canned reply
│   ├── Mascot.jsx          # SVG mascot + BrandMark
│   └── Icons.jsx           # icon set
├── public/                 # static assets if any
├── package.json
├── next.config.mjs
├── .gitignore
└── README.md
```

## Component conversion rules

- Drop every `window.Foo = Foo` line. Replace `const X = window.X` reads with named ESM imports.
- Top-level files that use hooks get `"use client"` directives.
- `app.jsx` no longer calls `ReactDOM.createRoot` — Next handles mounting.
- `live-chat.jsx`: the `freeformReply` helper is replaced with a function that returns a canned message:
  > "I can help you request an appointment. Want to start?"
  No network call, no API key.
- `tweaks-panel.jsx` and the `<TweaksPanel>` block in `App.jsx` are deleted entirely. Accent stays at the existing `neon-cyan` default.
- `BookdlyAI.html` and the three `AI Appointment Engine*.html` files are deleted.

## Run / deploy

- Local: `npm install && npm run dev` → http://localhost:3000
- Vercel: `vercel deploy` (or push to GitHub + import). No env vars required for option B.

## Risk / open items

- `styles.css` references font families loaded by `<link>` in the original HTML. We move those font links into `app/layout.jsx` (`<link>` tags inside `<head>`, or Next's `next/font`). Either works; using direct `<link>` tags is the lower-risk port since CSS already targets the loaded family names by string.
- Component file globals (`window.Mascot`, etc.) are referenced from sibling files — every reference must be updated to a real import or the build will fail.
- The mascot SVG inside the favicon (`data:image/svg+xml;...`) needs to survive the move into Next metadata. We can keep it as a data URL in `metadata.icons`, or write a static `public/favicon.svg`. Static file is simpler.
