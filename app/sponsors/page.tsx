import { SectionHeader } from "@/components/Section";
import { siteConfig } from "@/lib/siteConfig";

export default function SponsorsPage(){
  return (
    <section className="section">
      <div className="container" style={{ display:"flex", flexDirection:"column", gap: 16 }}>
        <SectionHeader
          kicker="Sponsors"
          title="Partners who make this happen"
          desc="Tap a sponsor to visit their site. Want to sponsor? Email us."
        />

        <div className="grid grid3">
          {siteConfig.sponsors.map(s => (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="card" style={{ padding: 18 }}>
              <div className="pill" style={{ marginBottom: 10 }}>Sponsor</div>
              <div style={{ fontWeight: 950, fontSize: 18 }}>{s.name}</div>
              <div className="small" style={{ marginTop: 8 }}>{s.href}</div>
            </a>
          ))}
        </div>

        <div className="card" style={{ padding: 18 }}>
          <div style={{ fontWeight: 950, marginBottom: 6 }}>Sponsor packages</div>
          <div className="small">
            Add your logo + link, mention during awards, and social shout-outs. Email{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} style={{ textDecoration:"underline" }}>{siteConfig.contactEmail}</a>.
          </div>
        </div>
      </div>
    </section>
  );
}
