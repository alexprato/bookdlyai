import SiteFrame from "../../components/SiteFrame";
import ClaimTerritoryForm from "../../components/ClaimTerritoryForm";

export const metadata = {
  title: "Claim Your 3 Appointment Test | BookdlyAI",
  description:
    "Tell BookdlyAI your industry and target zip codes to request a 3 appointment test in your local service territory.",
};

export default function ClaimTerritoryPage() {
  return (
    <SiteFrame>
      <section className="section">
        <div className="container container--tight">
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 36px" }}>
            <span className="eyebrow eyebrow--center">3 Appointment Test</span>
            <h1 style={{ marginTop: 16 }}>Claim Your 3 Appointment Test</h1>
            <p className="lead" style={{ marginTop: 16, marginInline: "auto" }}>
              Tell us your industry and target zip codes. We&apos;ll review your area and contact you about setting up the test.
            </p>
          </div>
          <ClaimTerritoryForm />
        </div>
      </section>
    </SiteFrame>
  );
}
