import { siteConfig } from "@/lib/siteConfig";

function MiniCard({ label, value }: { label: string; value: string }){
  return (
    <div className="card" style={{ padding: 16 }}>
      <div className="small" style={{ marginBottom: 6 }}>{label}</div>
      <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: "-.2px" }}>{value}</div>
    </div>
  );
}

export function InfoCards(){
  return (
    <div className="grid grid4">
      <MiniCard label={siteConfig.dates.label} value={siteConfig.dates.value} />
      <MiniCard label="HQ" value="Lobster in the Rough" />
      <MiniCard label={siteConfig.entry.label} value={siteConfig.entry.value} />
      <MiniCard label={siteConfig.prizes.label} value={siteConfig.prizes.value} />
    </div>
  );
}
