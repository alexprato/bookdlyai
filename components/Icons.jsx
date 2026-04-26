export const Icon = {
  Arrow: ({ size = 15 }) => (
    <svg className="arrow" width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Check: ({ size = 12 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  CheckCircle: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.3" opacity="0.4" />
      <path d="M5.5 9.2l2.5 2.5L13 6.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Sparkle: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M7 1.5l1.5 4 4 1.5-4 1.5L7 12.5l-1.5-4-4-1.5 4-1.5L7 1.5z" fill="currentColor" />
    </svg>
  ),
  Phone: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 3.5c0-.6.4-1 1-1h1.6c.5 0 .9.3 1 .8l.5 2c.1.4-.1.9-.5 1.1l-1 .6c.7 1.5 1.9 2.7 3.4 3.4l.6-1c.2-.4.7-.6 1.1-.5l2 .5c.5.1.8.5.8 1V12c0 .6-.4 1-1 1h-.5C5.4 13 3 10.6 3 4v-.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
  Shield: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5l5.5 2v4.2c0 3.3-2.3 6.2-5.5 6.8-3.2-.6-5.5-3.5-5.5-6.8V3.5L8 1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M5.8 8l1.6 1.6L10.4 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Building: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2.5 13.5V4l5.5-2 5.5 2v9.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M2.5 13.5h11M6 6.5h.5M9.5 6.5h.5M6 9h.5M9.5 9h.5M7 13.5v-2.5h2v2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};
