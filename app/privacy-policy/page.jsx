import SiteFrame from "../../components/SiteFrame";

export const metadata = {
  title: "Privacy Policy | BookdlyAI",
  description: "How BookdlyAI collects, uses, and protects information from local service businesses and prospects.",
};

export default function PrivacyPolicyPage() {
  return (
    <SiteFrame>
      <section className="legal">
        <div className="container container--tight">
          <span className="eyebrow">Legal</span>
          <h1 style={{ marginTop: 12 }}>Privacy Policy</h1>
          <p className="legal__meta">Last updated April 27, 2026</p>

          <p style={{ marginTop: 28 }}>
            BookdlyAI (&ldquo;BookdlyAI,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) provides appointment generation and qualification services for local service businesses. This Privacy Policy explains what information we collect, how we use it, and the choices you have.
          </p>

          <h2>Information We Collect</h2>
          <ul>
            <li>Business and contact details you submit through our forms (business name, owner name, phone, email, industry, city, target zip codes).</li>
            <li>Information about your business needs (average job value, current lead source, jobs wanted per month, best time to contact).</li>
            <li>Prospect information collected on behalf of our business clients (name, phone, zip code, service need, urgency, appointment notes).</li>
            <li>Basic technical information from website visits, such as device type, browser, and pages viewed.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To review your territory request and contact you about your 3 appointment test.</li>
            <li>To deliver qualified appointment opportunities to the appropriate local service business.</li>
            <li>To improve our services, communications, and customer support.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2>Phone, Email, and Text Communications</h2>
          <p>
            When you submit a form on our site, you agree that BookdlyAI may contact you by phone, email, or text about your request and our services.
          </p>
          <ul>
            <li>Message and data rates may apply.</li>
            <li>Message frequency may vary.</li>
            <li>Reply <strong>STOP</strong> to opt out of text messages at any time.</li>
            <li>Reply <strong>HELP</strong> for help.</li>
            <li>Consent to receive messages is not a condition of purchase.</li>
          </ul>

          <h2>How We Share Information</h2>
          <p>
            BookdlyAI does not sell personal information. SMS opt-in data and consent are not sold, rented, or shared with third parties for their own marketing purposes.
          </p>
          <p>
            We may share information only as needed to deliver our services, including:
          </p>
          <ul>
            <li>With the local service business that purchases the territory or appointment test, so they can follow up with the prospect.</li>
            <li>With service providers (such as hosting, email, communication, and analytics platforms) acting on our behalf under appropriate confidentiality terms.</li>
            <li>When required by law or to protect our rights, our clients, or the public.</li>
          </ul>

          <h2>Cookie and Tracking Information</h2>
          <p>
            BookdlyAI.com may use cookies, pixels, analytics tools, tracking technologies, and similar technologies to understand website traffic, improve website performance, measure marketing effectiveness, remember user preferences, and improve our services. These technologies may collect information such as browser type, device type, pages visited, referral source, approximate location, and interactions with our website.
          </p>
          <p>
            You can control or disable cookies through your browser settings. Disabling cookies may affect how certain parts of the website function.
          </p>

          <h2>Data Security Practices</h2>
          <p>
            BookdlyAI uses reasonable administrative, technical, and organizational safeguards designed to protect the information we collect from unauthorized access, use, disclosure, alteration, or destruction. However, no method of internet transmission or electronic storage is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain information for as long as needed to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. You may request deletion of your information by contacting us at the email below.
          </p>

          <h2>Your Choices</h2>
          <ul>
            <li>You may opt out of marketing communications at any time by replying STOP to a text, clicking unsubscribe in an email, or contacting us directly.</li>
            <li>You may request access to or deletion of your information by emailing us.</li>
          </ul>

          <h2>Children</h2>
          <p>
            BookdlyAI is intended for businesses and adults. We do not knowingly collect information from children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The &ldquo;last updated&rdquo; date at the top of this page reflects the latest revision.
          </p>

          <h2>Contact</h2>
          <p>
            Questions or requests about privacy can be sent to{" "}
            <a href="mailto:bookdlyai@gmail.com">bookdlyai@gmail.com</a>{" "}
            or <a href="tel:+19544839010">(954) 483-9010</a>.
          </p>
        </div>
      </section>
    </SiteFrame>
  );
}
