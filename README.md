# BookdlyAI

AI front desk landing page for local service businesses.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project layout

```
app/
  layout.jsx          # html shell, fonts, metadata, favicon
  page.jsx            # mounts <App />
  globals.css         # site styles
  api/chat/route.js   # POST endpoint used by the chat (canned by default)
components/
  App.jsx             # accent vars, section composition
  Sections.jsx        # Nav, About, TryIt, Pricing, Contact, Footer
  LiveChat.jsx        # scripted dental flow + canned off-script reply
  Mascot.jsx          # SVG mascot + brand wordmark
  Icons.jsx           # icon set
public/
  favicon.svg
```

## Chatbot

The `/api/chat` route returns a friendly canned reply by default — no Anthropic
API key required. The scripted dental flow runs entirely client-side.

To enable real LLM answers for off-script questions, copy `.env.local.example`
to `.env.local` and set:

```
ANTHROPIC_API_KEY=sk-ant-...
```

The route detects the key and routes free-form questions to Claude. No code
changes needed.

## Deploy to Vercel

1. Push this directory to a GitHub repository.
2. Import the repo in Vercel (https://vercel.com/new).
3. (Optional) Add `ANTHROPIC_API_KEY` under Settings → Environment Variables to
   enable real LLM answers.
4. Deploy. Vercel auto-detects Next.js — no build config needed.
