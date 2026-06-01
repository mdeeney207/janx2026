import { SectionHeader } from "@/components/Section";
import { siteConfig } from "@/lib/siteConfig";

export default function AboutPage(){
  return (
    <section className="section">
      <div className="container" style={{ display:"flex", flexDirection:"column", gap: 16 }}>
        <SectionHeader
          kicker="About"
          title="Why we run it"
          desc="A tournament with purpose — community, competition, and giving back."
        />

        <div className="card" style={{ padding: 18 }}>
          <div style={{ fontWeight: 950, fontSize: 18, marginBottom: 10 }}>The story</div>
          <p className="p">
            This tournament is built around a simple format: length-only striped bass, photo proof, and a live leaderboard.
            It’s meant to be competitive without turning into chaos.
          </p>
          <p className="p" style={{ marginTop: 10 }}>
            We also use it to support causes that matter — including Dana-Farber and Sweetser.
          </p>
          <hr className="hr" />
          <div className="small">
            Contact: <a href={`mailto:${siteConfig.contactEmail}`} style={{ textDecoration:"underline" }}>{siteConfig.contactEmail}</a>
          </div>
        </div>

        <div className="grid grid2">
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 950, fontSize: 18, marginBottom: 8 }}>What “Length Only” means</div>
            <ul style={{ margin: 0, paddingLeft: 18, color:"rgba(234,241,255,.82)", lineHeight: 1.75 }}>
              <li>No scales. No debates over weight.</li>
              <li>Clear photo proof = easy verification.</li>
              <li>Fast updates to the leaderboard.</li>
            </ul>
          </div>
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 950, fontSize: 18, marginBottom: 8 }}>HQ / Awards</div>
            <div className="small">Set exact times for captain’s meeting, awards, and any dinner here.</div>
            <div style={{ marginTop: 10, fontWeight: 900 }}>Lobster in the Rough</div>
            <div className="small">York, Maine</div>
          </div>
        </div>
      </div>
    </section>
  );
}
