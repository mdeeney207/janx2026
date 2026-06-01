import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function CTA() {
  return (
    <div
      className="card"
      style={{ padding: 18, display: "flex", flexDirection: "column", gap: 12 }}
    >
      <div className="pill">Quick Actions</div>

      <div style={{ fontWeight: 950, fontSize: 20 }}>
        Register and check standings.
      </div>

      <div className="small">
        Length-only tournament format with staff-reviewed leaderboard updates.
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 6 }}>
        <a
          className="btn btnPrimary"
          href={siteConfig.registerUrl}
          target="_blank"
          rel="noreferrer"
        >
          Register
        </a>

        <Link className="btn" href="/leaderboard">
          View Leaderboard
        </Link>
      </div>
    </div>
  );
}
