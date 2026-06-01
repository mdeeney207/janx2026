import fs from "node:fs/promises";
import path from "node:path";
import type { CSSProperties } from "react";
import { siteConfig } from "@/lib/siteConfig";

type LeaderboardRow = {
  rank: number;
  angler: string;
  team: string;
  fishLength: string;
  date: string;
  status: string;
};

function parseCsv(csv: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < csv.length; i++) {
    const char = csv[i];
    const next = csv[i + 1];

    if (char === '"' && inQuotes && next === '"') {
      cell += '"';
      i++;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(cell.trim());
      cell = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (cell || row.length) {
        row.push(cell.trim());
        rows.push(row);
        row = [];
        cell = "";
      }

      if (char === "\r" && next === "\n") i++;
    } else {
      cell += char;
    }
  }

  if (cell || row.length) {
    row.push(cell.trim());
    rows.push(row);
  }

  return rows.filter((r) => r.some(Boolean));
}

function normalizeHeader(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function pick(row: Record<string, string>, possibleHeaders: string[]) {
  for (const header of possibleHeaders) {
    const value = row[normalizeHeader(header)];
    if (value) return value;
  }

  return "";
}

function getLengthNumber(value: string) {
  const match = value.match(/\d+(\.\d+)?/);
  return match ? Number(match[0]) : 0;
}

async function getLeaderboardRows(): Promise<LeaderboardRow[]> {
  try {
    const csvPath = path.join(process.cwd(), "data", "leaderboard.csv");
    const csv = await fs.readFile(csvPath, "utf8");
    const parsed = parseCsv(csv);

    if (parsed.length < 2) return [];

    const headers = parsed[0].map(normalizeHeader);

    const rows = parsed.slice(1).map((cells) => {
      const row: Record<string, string> = {};

      headers.forEach((header, index) => {
        row[header] = cells[index] ?? "";
      });

      return row;
    });

    return rows
      .map((row, index) => {
        const fishLength =
          pick(row, ["length", "fish length", "fish length inches", "inches"]) || "";

        return {
          rank: Number(pick(row, ["rank"])) || index + 1,
          team: pick(row, ["team", "team name", "boat", "crew"]) || "—",
          angler:
            pick(row, ["angler", "angler name", "name", "captain", "fisherman"]) ||
            "Pending",
          fishLength: fishLength || "—",
          date: pick(row, ["date", "caught on", "date caught", "submitted"]) || "—",
          status: pick(row, ["status", "approved", "verified"]) || "Approved",
        };
      })
      .filter((row) => row.angler !== "Pending" || row.fishLength !== "—")
      .sort((a, b) => getLengthNumber(b.fishLength) - getLengthNumber(a.fishLength))
      .map((row, index) => ({
        ...row,
        rank: index + 1,
      }));
  } catch {
    return [];
  }
}

export default async function LeaderboardPage() {
  const rows = await getLeaderboardRows();
  const topThree = rows.slice(0, 3);

  return (
    <main className="section">
      <div className="container" style={{ display: "grid", gap: 28 }}>
        <section style={{ display: "grid", gap: 16, padding: "42px 0 10px" }}>
          <p className="eyebrow">Live Standings</p>

          <h1 style={{ maxWidth: 860 }}>2026 Janx Striper Tournament Leaderboard</h1>

          <p className="muted" style={{ maxWidth: 760, fontSize: 18, lineHeight: 1.65 }}>
            Official standings for the Janx Striper Tournament. Entries are ranked by
            submitted striped bass length after review.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
            <a
              className="btn btnPrimary"
              href={siteConfig.registerUrl}
              target="_blank"
              rel="noreferrer"
            >
              Register
            </a>
          </div>
        </section>

        {topThree.length > 0 ? (
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            {topThree.map((row) => (
              <article
                key={`${row.rank}-${row.angler}-${row.fishLength}`}
                className="card"
                style={{
                  padding: 24,
                  borderRadius: 24,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035))",
                }}
              >
                <p className="eyebrow">#{row.rank}</p>

                <h2 style={{ marginTop: 8 }}>{row.angler}</h2>

                <p className="muted">{row.team}</p>

                <div style={{ marginTop: 22 }}>
                  <strong style={{ fontSize: 34, letterSpacing: "-0.04em" }}>
                    {row.fishLength}
                  </strong>

                  <p className="muted" style={{ marginTop: 4 }}>
                    {row.date}
                  </p>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="card" style={{ padding: 28, borderRadius: 24 }}>
            <p className="eyebrow">Leaderboard Pending</p>

            <h2 style={{ marginTop: 8 }}>No approved catches posted yet.</h2>

            <p className="muted" style={{ maxWidth: 680, lineHeight: 1.65 }}>
              Once catches are reviewed and added to the official leaderboard CSV,
              the standings will appear here.
            </p>
          </section>
        )}

        <section className="card" style={{ padding: 0, borderRadius: 24, overflow: "hidden" }}>
          <div
            style={{
              padding: "20px 22px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div>
              <p className="eyebrow">Official Table</p>
              <h2 style={{ marginTop: 6 }}>Full Standings</h2>
            </div>

            <p className="muted">Updated from the official tournament CSV.</p>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: 720,
              }}
            >
              <thead>
                <tr>
                  {["Rank", "Angler", "Team / Boat", "Length", "Date", "Status"].map(
                    (header) => (
                      <th key={header} style={thStyle}>
                        {header}
                      </th>
                    ),
                  )}
                </tr>
              </thead>

              <tbody>
                {rows.length > 0 ? (
                  rows.map((row) => (
                    <tr key={`${row.rank}-${row.angler}-${row.team}-${row.fishLength}`}>
                      <td style={tdStyle}>#{row.rank}</td>
                      <td style={tdStrongStyle}>{row.angler}</td>
                      <td style={tdStyle}>{row.team}</td>
                      <td style={tdStrongStyle}>{row.fishLength}</td>
                      <td style={tdStyle}>{row.date}</td>
                      <td style={tdStyle}>
                        <span style={badgeStyle}>{row.status}</span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} style={{ ...tdStyle, padding: 24 }}>
                      No leaderboard rows are available yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section
          className="card"
          style={{
            padding: 26,
            borderRadius: 24,
            display: "grid",
            gap: 8,
          }}
        >
          <p className="eyebrow">Tournament HQ</p>

          <h2>Lobster in the Rough</h2>

          <p className="muted" style={{ maxWidth: 760, lineHeight: 1.65 }}>
            Tournament headquarters, sponsor location, captain’s dinner location,
            awards location, and home base for the Janx Striper Tournament community
            in York, Maine.
          </p>

          <div style={{ marginTop: 10 }}>
            <a
              className="btn ghost"
              href="https://www.theroughyorkmaine.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Lobster in the Rough
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

const thStyle: CSSProperties = {
  textAlign: "left",
  padding: "14px 18px",
  fontSize: 12,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.58)",
  borderBottom: "1px solid rgba(255,255,255,0.1)",
};

const tdStyle: CSSProperties = {
  padding: "16px 18px",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  color: "rgba(255,255,255,0.72)",
};

const tdStrongStyle: CSSProperties = {
  ...tdStyle,
  color: "rgba(255,255,255,0.94)",
  fontWeight: 700,
};

const badgeStyle: CSSProperties = {
  display: "inline-flex",
  padding: "6px 10px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  fontSize: 12,
};
