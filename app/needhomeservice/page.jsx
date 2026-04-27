import SiteFrame from "../../components/SiteFrame";
import NeedHomeServiceForm from "../../components/NeedHomeServiceForm";

export const metadata = {
  title: "Need a Home Service Pro? | BookdlyAI",
  description:
    "Tell BookdlyAI what home service you need and we'll help connect you with a local service provider in your area.",
};

export default function NeedHomeServicePage() {
  return (
    <SiteFrame>
      <section className="section">
        <div className="container container--tight">
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 28px" }}>
            <span className="eyebrow eyebrow--center">Homeowners</span>
            <h1 style={{ marginTop: 14 }}>Need a home service pro?</h1>
            <p className="lead" style={{ marginTop: 14, marginInline: "auto" }}>
              Tell us what you need and we&apos;ll help connect you with a local service provider in your area.
            </p>
            <p className="hero__support" style={{ margin: "10px auto 0" }}>
              Simple request. Fast follow-up. Local service help.
            </p>
          </div>
          <h2 style={{ textAlign: "center", fontSize: 20, marginBottom: 18 }}>
            Request a Home Service Appointment
          </h2>
          <NeedHomeServiceForm />
        </div>
      </section>
    </SiteFrame>
  );
}
