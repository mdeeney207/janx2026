export function SectionHeader({ title, kicker, desc }: { title: string; kicker?: string; desc?: string }){
  return (
    <div style={{ marginBottom: 14 }}>
      {kicker ? <div className="pill" style={{ marginBottom: 10 }}>{kicker}</div> : null}
      <h2 className="h2">{title}</h2>
      {desc ? <p className="p">{desc}</p> : null}
    </div>
  );
}
