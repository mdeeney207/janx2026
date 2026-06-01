import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function SiteFooter(){
  return (
    <footer style={{ padding:"26px 0 44px", borderTop:"1px solid rgba(255,255,255,.12)", marginTop: 26 }}>
      <div className="container" style={{ display:"flex", flexDirection:"column", gap: 10 }}>
        <div style={{ display:"flex", justifyContent:"space-between", gap: 12, flexWrap:"wrap" }}>
          <div>
            <div style={{ fontWeight: 850 }}>{siteConfig.title}</div>
            <div className="small">{siteConfig.locationLine}</div>
          </div>
          <div style={{ display:"flex", gap: 10, flexWrap:"wrap" }}>
            <Link className="pill" href="/rules">Rules</Link>
            <Link className="pill" href="/leaderboard">Leaderboard</Link>
            <a className="pill" href={`mailto:${siteConfig.contactEmail}`}>Contact</a>
          </div>
        </div>
        <div className="small">
          © {new Date().getFullYear()} Janx Striper Tournament. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
