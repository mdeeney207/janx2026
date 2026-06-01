export function EmbedCard({ title, src }: { title: string; src: string }){
  return (
    <section className="card" style={{ padding: 16 }}>
      <div style={{ display:"flex", alignItems:"baseline", justifyContent:"space-between", gap: 12, flexWrap:"wrap", marginBottom: 10 }}>
        <div style={{ fontWeight: 850 }}>{title}</div>
        <span className="small">If it loads slow, refresh once.</span>
      </div>
      <div style={{ borderRadius: 16, overflow:"hidden", border:"1px solid rgba(255,255,255,.12)", background:"rgba(0,0,0,.22)" }}>
        <iframe
          title={title}
          src={src}
          style={{ width:"100%", height: "720px", border: 0 }}
          loading="lazy"
        />
      </div>
    </section>
  );
}
