"use client";

import React from "react";
import Link from "next/link";

const ArrowIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const URGENCY = [
  "ASAP / Emergency",
  "Within a few days",
  "Within 1–2 weeks",
  "This month",
  "Just getting quotes",
];

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  service: "",
  city: "",
  zip: "",
  homeowner: "",
  urgency: "",
  bestTime: "",
  notes: "",
  consent: false,
};

export default function NeedHomeServiceForm() {
  const [form, setForm] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [done, setDone] = React.useState(false);

  const set = (k) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [k]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = "Required";
    if (!form.lastName.trim()) errs.lastName = "Required";
    if (!form.phone.trim()) errs.phone = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Valid email required";
    if (!form.service.trim()) errs.service = "Required";
    if (!form.city.trim()) errs.city = "Required";
    if (!form.zip.trim()) errs.zip = "Required";
    if (!form.homeowner) errs.homeowner = "Required";
    if (!form.urgency) errs.urgency = "Required";
    if (!form.consent) errs.consent = "You must agree to be contacted";
    return errs;
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (!Object.keys(errs).length) {
      setDone(true);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (done) {
    return (
      <div className="success-card">
        <div className="ic-success"><CheckIcon /></div>
        <h2 style={{ fontSize: 24 }}>Your request was received.</h2>
        <p className="lead" style={{ margin: "14px auto 0" }}>
          We&apos;ll review your details and contact you about the next step.
        </p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
          <Link href="/" className="btn btn--ghost">Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="form-shell">
      <div className="form-grid-2">
        <div>
          <label className="form-label" htmlFor="firstName">First name</label>
          <input id="firstName" className="form-input" value={form.firstName} onChange={set("firstName")} placeholder="Jane" autoComplete="given-name" />
          {errors.firstName && <span className="form-error">{errors.firstName}</span>}
        </div>
        <div>
          <label className="form-label" htmlFor="lastName">Last name</label>
          <input id="lastName" className="form-input" value={form.lastName} onChange={set("lastName")} placeholder="Smith" autoComplete="family-name" />
          {errors.lastName && <span className="form-error">{errors.lastName}</span>}
        </div>
      </div>

      <div className="form-grid-2">
        <div>
          <label className="form-label" htmlFor="phone">Phone</label>
          <input id="phone" type="tel" className="form-input" value={form.phone} onChange={set("phone")} placeholder="(555) 123-4567" autoComplete="tel" required />
          {errors.phone && <span className="form-error">{errors.phone}</span>}
        </div>
        <div>
          <label className="form-label" htmlFor="email">Email</label>
          <input id="email" type="email" className="form-input" value={form.email} onChange={set("email")} placeholder="you@email.com" autoComplete="email" />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>
      </div>

      <div>
        <label className="form-label" htmlFor="service">Service needed</label>
        <input id="service" className="form-input" value={form.service} onChange={set("service")} placeholder="e.g. Roof leak repair, paver install, mold remediation" />
        {errors.service && <span className="form-error">{errors.service}</span>}
      </div>

      <div className="form-grid-2">
        <div>
          <label className="form-label" htmlFor="city">City</label>
          <input id="city" className="form-input" value={form.city} onChange={set("city")} placeholder="Tampa, FL" autoComplete="address-level2" />
          {errors.city && <span className="form-error">{errors.city}</span>}
        </div>
        <div>
          <label className="form-label" htmlFor="zip">Zip code</label>
          <input id="zip" className="form-input" value={form.zip} onChange={set("zip")} placeholder="33602" autoComplete="postal-code" inputMode="numeric" />
          {errors.zip && <span className="form-error">{errors.zip}</span>}
        </div>
      </div>

      <div className="form-grid-2">
        <div>
          <label className="form-label" htmlFor="homeowner">Are you the homeowner?</label>
          <select id="homeowner" className="form-select" value={form.homeowner} onChange={set("homeowner")}>
            <option value="" style={{ background: "#0c182b" }}>Choose one…</option>
            <option style={{ background: "#0c182b" }}>Yes</option>
            <option style={{ background: "#0c182b" }}>No, I rent</option>
            <option style={{ background: "#0c182b" }}>Property manager / other</option>
          </select>
          {errors.homeowner && <span className="form-error">{errors.homeowner}</span>}
        </div>
        <div>
          <label className="form-label" htmlFor="urgency">How soon do you need help?</label>
          <select id="urgency" className="form-select" value={form.urgency} onChange={set("urgency")}>
            <option value="" style={{ background: "#0c182b" }}>Choose one…</option>
            {URGENCY.map((u) => <option key={u} style={{ background: "#0c182b" }}>{u}</option>)}
          </select>
          {errors.urgency && <span className="form-error">{errors.urgency}</span>}
        </div>
      </div>

      <div>
        <label className="form-label" htmlFor="bestTime">Best time to contact you</label>
        <input id="bestTime" className="form-input" value={form.bestTime} onChange={set("bestTime")} placeholder="Weekdays after 5pm" />
      </div>

      <div>
        <label className="form-label" htmlFor="notes">Project details / notes</label>
        <textarea id="notes" className="form-textarea" value={form.notes} onChange={set("notes")} placeholder="Anything that helps us match you with the right pro" />
      </div>

      <div>
        <label className="form-label" htmlFor="photos">Upload photos (optional)</label>
        <input id="photos" type="file" multiple accept="image/*" className="form-input" />
      </div>

      <label className="form-consent">
        <input type="checkbox" checked={form.consent} onChange={set("consent")} required />
        <span>
          By checking this box, I consent to receive marketing and promotional messages including special offers, discounts, new product updates among others from BookdlyAI at the phone number provided. Frequency may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
        </span>
      </label>
      {errors.consent && <span className="form-error" style={{ marginTop: -8 }}>{errors.consent}</span>}

      <button type="submit" className="btn btn--primary btn--lg" style={{ marginTop: 6 }}>
        Request Help <ArrowIcon size={15} />
      </button>

      <p className="form-fineprint">
        By submitting, you agree to our{" "}
        <Link href="/terms-and-conditions">Terms and Conditions</Link>{" "}
        and{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    </form>
  );
}
