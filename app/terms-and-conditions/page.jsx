import SiteFrame from "../../components/SiteFrame";

export const metadata = {
  title: "Terms and Conditions | BookdlyAI",
  description: "Terms governing use of BookdlyAI's appointment generation and qualification services.",
};

export default function TermsPage() {
  return (
    <SiteFrame>
      <section className="legal">
        <div className="container container--tight">
          <span className="eyebrow">Legal</span>
          <h1 style={{ marginTop: 12 }}>Terms and Conditions</h1>
          <p className="legal__meta">Last updated April 27, 2026</p>

          <p style={{ marginTop: 28 }}>
            These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of BookdlyAI&apos;s services and website. By submitting a form, signing an order, or using our services, you agree to these Terms.
          </p>

          <h2>Services</h2>
          <p>
            BookdlyAI provides appointment generation and qualification services for local service businesses. We help capture local interest, qualify prospects, and deliver appointment-ready opportunities to the business that has been approved for a given territory.
          </p>

          <h2>Definition of a Qualified Appointment</h2>
          <p>A qualified appointment includes:</p>
          <ul>
            <li>Real name and phone number</li>
            <li>Correct zip code or service area</li>
            <li>Requested the service</li>
            <li>Answered basic qualification questions</li>
            <li>Agreed to a call, estimate, inspection, or appointment window</li>
          </ul>
          <p>
            Spam, wrong-area leads, fake submissions, and clearly unqualified inquiries do not count as qualified appointments.
          </p>

          <h2>No Guarantee of Outcomes</h2>
          <p>
            BookdlyAI does not guarantee closed sales, revenue, profit, or jobs. We help generate qualified appointments. The business is responsible for follow-up, estimates, pricing, licensing, service delivery, and closing the job.
          </p>

          <h2>Territory Availability</h2>
          <p>
            Territory availability is reviewed on a first-come basis and is not guaranteed unless confirmed in writing by BookdlyAI. Submitting a request does not create an exclusive territory by itself.
          </p>

          <h2>3 Appointment Test</h2>
          <p>
            The 3 appointment test is a paid trial designed to prove the system before a longer commitment. Specific terms, pricing, qualification rules, and timing of the 3 appointment test may vary by industry and territory and will be agreed in writing before the test begins.
          </p>

          <h2>Communication Consent</h2>
          <p>
            By submitting a form or otherwise contacting BookdlyAI, you agree that BookdlyAI may contact you by phone, email, or text about your request and our services.
          </p>
          <ul>
            <li>Message and data rates may apply.</li>
            <li>Message frequency may vary.</li>
            <li>Reply <strong>STOP</strong> to opt out of text messages at any time.</li>
            <li>Reply <strong>HELP</strong> for help.</li>
            <li>Consent to receive messages is not a condition of purchase.</li>
          </ul>

          <h2>Carrier Liability Disclaimer</h2>
          <p>
            Wireless carriers are not liable for delayed or undelivered messages. Delivery of SMS messages may depend on your mobile carrier, network availability, and other factors outside of BookdlyAI&rsquo;s control.
          </p>

          <h2>Age Restriction</h2>
          <p>
            BookdlyAI services are intended for users who are 18 years of age or older. By using BookdlyAI.com or submitting a form, you confirm that you are at least 18 years old.
          </p>

          <h2>Acceptable Use</h2>
          <ul>
            <li>You will provide accurate information about your business and service area.</li>
            <li>You will not use BookdlyAI services to harass, defraud, or mislead prospects.</li>
            <li>You will comply with all applicable laws, including consumer protection, do-not-call, telemarketing, and licensing rules in your jurisdiction.</li>
            <li>You will not resell, share, or transfer leads or appointments to third parties without written approval from BookdlyAI.</li>
          </ul>

          <h2>Fees and Refunds</h2>
          <p>
            Fees, billing terms, and refund rules will be specified in your order or service agreement. The 3 appointment test and any monthly territory fees are non-refundable once delivery has begun unless otherwise agreed in writing.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, BookdlyAI is not liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits or revenue, arising out of or related to your use of our services. Our total liability for any claim related to the services will not exceed the amount you paid to BookdlyAI in the three months preceding the event giving rise to the claim.
          </p>

          <h2>Disclaimers</h2>
          <p>
            The services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. BookdlyAI disclaims all warranties to the maximum extent permitted by law, including any warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. The &ldquo;last updated&rdquo; date at the top of this page reflects the latest revision. Continued use of the services after an update means you accept the updated Terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms can be sent to{" "}
            <a href="mailto:bookdlyai@gmail.com">bookdlyai@gmail.com</a>{" "}
            or <a href="tel:+19544839010">(954) 483-9010</a>.
          </p>
        </div>
      </section>
    </SiteFrame>
  );
}
