# APsurance Health Plan Assistant — embed widget

A standalone, self-contained chat widget for **APsurance.com**. Drop one
`<script>` block into your site and a chat launcher appears in the bottom-right
corner. No build step. No dependencies. Independent from BookdlyAI.

## Files

| File | What it is |
| --- | --- |
| [widget.js](widget.js) | The widget source. Vanilla JS, ~9 KB. |
| [preview.html](preview.html) | A local test page that mounts the widget. Open it in a browser to try the full flow. |
| `README.md` | This file. |

## Test it locally first

```bash
cd apsurance-widget
# any static server works — examples:
python -m http.server 8000        # then open http://localhost:8000/preview.html
# or
npx serve .                        # then open the printed URL + /preview.html
```

Open the launcher, run through both paths (**Check if I qualify** and **Talk
to Alex**), and watch the browser console. With no webhook configured, the
captured lead is logged there as `[APsurance lead — no webhookUrl configured]`.

## Install on APsurance.com (GoHighLevel)

1. In GHL, open **Sites → your site → Settings → Tracking Code** (or **Footer
   Code** / **Custom Code**, depending on your GHL version).
2. Paste the snippet below.
3. Replace `webhookUrl` with your real endpoint when you're ready to start
   capturing leads. Until then, the lead just logs to the visitor's browser
   console — useful for testing without exposing live data.
4. Save → publish your site.

```html
<!-- 1. Optional config (set BEFORE the widget script). -->
<script>
  window.APSURANCE_WIDGET_CONFIG = {
    webhookUrl:  "",            // e.g. "https://services.leadconnectorhq.com/hooks/..."
    primaryColor: "#1aa6c4",    // brand color
    position:    "right"        // "right" or "left"
  };
</script>

<!-- 2. The widget. Either:
        a) inline the contents of widget.js inside this <script>, OR
        b) host widget.js publicly and point src at it. -->
<script src="https://YOUR-CDN/apsurance-widget.js"></script>
```

### Two ways to deliver the script

**Option A — inline (zero hosting).** Open `widget.js`, copy its entire
contents, and paste them between `<script>` tags directly. The whole widget
ends up living inside your GHL Tracking Code field. Easiest, no infrastructure.

**Option B — host externally.** Upload `widget.js` to any static host (Vercel,
Netlify, Cloudflare R2, S3, etc.) and reference it via
`<script src="https://...">`. Easier to update later — push a new `widget.js`
and every site picks it up on next page load.

## Lead payload

When the visitor finishes the flow, the widget POSTs JSON to your webhook:

```json
{
  "source": "apsurance-chatbot",
  "mode": "qualify",
  "zip": "33128",
  "householdSize": "3",
  "yearlyIncome": "$45,000",
  "fullName": "Alex Smith",
  "phone": "555-123-4567",
  "bestTime": "weekday afternoons",
  "capturedAt": "2026-04-26T18:00:00Z",
  "pageUrl": "https://apsurance.com/some-page"
}
```

`mode` is either `"qualify"` (full 6-question flow) or `"talk"` (3-question
shortcut for visitors who clicked **Talk to Alex** instead).

For `mode === "talk"`, `zip`, `householdSize`, and `yearlyIncome` are absent.

The webhook URL is provider-agnostic — anything that accepts a POST with
`Content-Type: application/json` works:

| Tool | Where to get the URL |
| --- | --- |
| GoHighLevel | Workflows → Trigger → Inbound Webhook → copy URL |
| Zapier | New zap → trigger "Webhooks by Zapier — Catch Hook" → copy URL |
| Make.com | New scenario → "Webhooks — Custom webhook" → copy address |
| n8n | Webhook node → copy production URL |
| APCC / custom | Any URL that handles POST JSON |

## Compliance notes (built into the script)

- Bot says **"may qualify"** — never "you qualify" / "approved" / "guaranteed".
- No SMS / texting / "confirmation text" language.
- No email asked.
- No long dashes, no underscores, no markdown, no emoji.
- All bot copy lives in the `COPY` object near the top of `widget.js` for easy
  legal review.

## Customizing

- **Brand color**: change `primaryColor` in the config block (any CSS color).
- **Position**: `"right"` (default) or `"left"`.
- **Copy / questions / flow**: edit the `COPY` object and `handleStep` function
  in `widget.js`.
- **Avatar**: the "AP" initials in the header come from the `<div class="apsr-avatar">AP</div>`
  line — replace with an `<img>` if you want a logo.

## What the widget does NOT do

- It does not ask for an email, state, current insurance, or coverage start
  date — by design.
- It does not validate phone or zip format. The webhook receives whatever the
  visitor types.
- It does not store leads itself. If `webhookUrl` is empty, leads only exist in
  the visitor's browser console.
- It does not send anything to BookdlyAI. The two projects are fully separate.
