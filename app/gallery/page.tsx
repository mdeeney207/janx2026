import { SectionHeader } from "@/components/Section";

const placeholders = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Photo ${i + 1}`,
}));

export default function GalleryPage(){
  return (
    <section className="section">
      <div className="container" style={{ display:"flex", flexDirection:"column", gap: 16 }}>
        <SectionHeader
          kicker="Gallery"
          title="Tournament moments"
          desc="Drop real photos into /public/gallery and swap these placeholders."
        />

        <div className="grid grid3">
          {placeholders.map(p => (
            <div key={p.id} className="card" style={{ padding: 12 }}>
              <div style={{
                borderRadius: 16,
                height: 180,
                border: "1px solid rgba(255,255,255,.12)",
                background: "linear-gradient(135deg, rgba(29,78,216,.20), rgba(239,68,68,.12))"
              }} />
              <div style={{ padding: "10px 6px 2px" }}>
                <div style={{ fontWeight: 900 }}>{p.title}</div>
                <div className="small">Replace with real images.</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
