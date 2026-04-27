"use client";

import React from "react";
import Link from "next/link";

const INDUSTRIES = [
  "Pool repair and leak detection",
  "Pavers and concrete",
  "Mold and water restoration",
  "Tree removal",
  "Fencing",
  "Epoxy garage floors",
  "Roofing",
  "Plumbing",
  "Other home service",
];

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

const initialState = {
  business: "",
  owner: "",
  phone: "",
  email: "",
  industry: "",
  city: "",
  zips: "",
  jobValue: "",
  currentSource: "",
  jobsWanted: "",
  bestTime: "",
  consent: false,
};

export default function ClaimTerritoryForm() {
  const [form, setForm] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [done, setDone] = React.useState(false);

  const set = (k) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [k]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!form.business.trim()) errs.business = "Required";
    if (!form.owner.trim()) errs.owner = "Required";
    if (!form.phone.trim()) errs.phone = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Valid email required";
    if (!form.industry) errs.industry = "Required";
    if (!form.city.trim()) errs.city = "Required";
    if (!form.zips.trim()) errs.zips = "Required";
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
        <h2 style={{ fontSize: 24 }}>Your territory request was received.</h2>
        <p className="lead" style={{ margin: "14px auto 0" }}>
          We&apos;ll review your area and contact you to set up your 3 appointment test.
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
          <label className="form-label" htmlFor="business">Business name</label>
          <input id="business" className="form-input" value={form.business} onChange={set("business")} placeholder="Acme Roofing" autoComplete="organization" />
          {errors.business && <span className="form-error">{errors.business}</span>}
        </div>
        <div>
          <label className="form-label" htmlFor="owner">Owner name</label>
          <input id="owner" className="form-input" value={form.owner} onChange={set("owner")} placeholder="Jane Smith" autoComplete="name" />
          {errors.owner && <span className="form-error">{errors.owner}</span>}
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
          <input id="email" type="email" className="form-input" value={form.email} onChange={set("email")} placeholder="you@business.com" autoComplete="email" />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>
      </div>

      <div className="form-grid-2">
        <div>
          <label className="form-label" htmlFor="industry">Industry</label>
          <select id="industry" className="form-select" value={form.industry} onChange={set("industry")}>
            <option value="" style={{ background: "#0c182b" }}>Choose one…</option>
            {INDUSTRIES.map((i) => <option key={i} style={{ background: "#0c182b" }}>{i}</option>)}
          </select>
          {errors.industry && <span className="form-error">{errors.industry}</span>}
        </div>
        <div>
          <label className="form-label" htmlFor="city">City</label>
          <input id="city" className="form-input" value={form.city} onChange={set("city")} placeholder="Tampa, FL" autoComplete="address-level2" />
          {errors.city && <span className="form-error">{errors.city}</span>}
        </div>
      </div>

      <div>
        <label className="form-label" htmlFor="zips">Target zip codes</label>
        <input id="zips" className="form-input" value={form.zips} onChange={set("zips")} placeholder="33602, 33603, 33604" />
        {errors.zips && <span className="form-error">{errors.zips}</span>}
      </div>

      <div className="form-grid-2">
        <div>
          <label className="form-label" htmlFor="jobValue">Average job value</label>
          <input id="jobValue" className="form-input" value={form.jobValue} onChange={set("jobValue")} placeholder="$2,500" />
        </div>
        <div>
          <label className="form-label" htmlFor="currentSource">Current monthly lead source</label>
          <input id="currentSource" className="form-input" value={form.currentSource} onChange={set("currentSource")} placeholder="Google Ads, referrals, etc." />
        </div>
      </div>

      <div className="form-grid-2">
        <div>
          <label className="form-label" htmlFor="jobsWanted">How many more jobs do you want per month?</label>
          <input id="jobsWanted" className="form-input" value={form.jobsWanted} onChange={set("jobsWanted")} placeholder="e.g. 10" />
        </div>
        <div>
          <label className="form-label" htmlFor="bestTime">Best time to contact you</label>
          <input id="bestTime" className="form-input" value={form.bestTime} onChange={set("bestTime")} placeholder="Weekdays after 5pm" />
        </div>
      </div>

      <label className="form-consent">
        <input type="checkbox" checked={form.consent} onChange={set("consent")} required />
        <span>
          By checking this box, I consent to receive marketing and promotional messages including special offers, discounts, new product updates among others from BookdlyAI at the phone number provided. Frequency may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
        </span>
      </label>
      {errors.consent && <span className="form-error" style={{ marginTop: -8 }}>{errors.consent}</span>}

      <button type="submit" className="btn btn--primary btn--lg" style={{ marginTop: 6 }}>
        Submit Territory Request <ArrowIcon size={15} />
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
