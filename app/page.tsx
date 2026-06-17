import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { InfoCards } from "@/components/InfoCards";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="proHero">
        <Image
          src="/hero.jpg"
          alt="Janx Striper Tournament in York, Maine"
          fill
          priority
          className="proHeroImage"
        />
        <div className="proHeroOverlay" />

        <div className="container proHeroContent">
          <div className="heroBadge">York, Maine • Length Only</div>

          <h1 className="proHeroTitle">Janx Striper Tournament</h1>

          <p className="proHeroText">4 days. One fish. Length decides.</p>

          <p className="proHeroSubtext">
            A striped bass tournament hosted out of Lobster in the Rough,
            benefiting Dana-Farber and Sweetser.
          </p>

          <div className="proHeroActions">
            <a
              className="btn btnPrimary"
              href={siteConfig.registerUrl}
              target="_blank"
              rel="noreferrer"
            >
              Register Now
            </a>

            <Link className="btn btnDark" href="/leaderboard">
              View Leaderboard
            </Link>
          </div>

          <div
            aria-label="Scan QR code to register for the Janx Striper Tournament"
            style={{
              marginTop: 24,
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
              padding: 14,
              borderRadius: 22,
              background: "rgba(0,0,0,.54)",
              border: "1px solid rgba(255,255,255,.18)",
              boxShadow: "0 18px 44px rgba(0,0,0,.28)",
              backdropFilter: "blur(10px)",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: 128,
                height: 128,
                borderRadius: 16,
                background: "white",
                padding: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/registration-qr.png"
                alt="QR code to register for the Janx Striper Tournament"
                width={112}
                height={112}
                priority
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <div style={{ maxWidth: 260 }}>
              <div
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: 850,
                  letterSpacing: "-.2px",
                }}
              >
                Scan to buy your ticket
              </div>
              <p
                className="small"
                style={{
                  margin: "6px 0 0",
                  lineHeight: 1.45,
                  color: "rgba(255,255,255,.78)",
                }}
              >
                Use your phone camera or tap Register Now to purchase your
                tournament entry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section className="sectionTight">
        <div className="container">
          <div className="sectionHeading">
            <span>2026 Tournament Info</span>
            <h2>Tournament snapshot</h2>
            <p>Key details in one quick glance.</p>
          </div>

          <InfoCards />
        </div>
      </section>

      {/* HQ */}
      <section className="sectionTight">
        <div className="container">
          <div className="hqPanel card">
            <div className="hqMain">
              <span className="eyebrow">Tournament HQ</span>
              <h2>Lobster in the Rough</h2>
              <p>
                Tournament headquarters for check-in, captain’s dinner, awards,
                food, drinks, and the Janx crowd.
              </p>

              <div className="hqFeatures">
                <span>Captain’s Dinner • July 16</span>
                <span>Awards • July 19</span>
                <span>Food & drinks</span>
                <span>Outdoor atmosphere</span>
              </div>

              <div className="hqActions">
                <a
                  className="btn btnPrimary"
                  href={siteConfig.registerUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Register
                </a>

                <Link className="btn btnDark" href="/sponsors">
                  View Sponsors
                </Link>
              </div>
            </div>

            <div className="hqDetails">
              <div>
                <span className="eyebrow">Address</span>
                <strong>1000 US Route One</strong>
                <p>York, ME 03909</p>
              </div>

              <div>
                <span className="eyebrow">Phone</span>
                <strong>(207) 363-1285</strong>
              </div>

              <div>
                <span className="eyebrow">Website</span>
                <a
                  className="externalLink"
                  href="https://www.theroughyorkmaine.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  theroughyorkmaine.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sectionTight">
        <div className="container">
          <div className="sectionHeading">
            <span>How it works</span>
            <h2>Simple rules. Clean leaderboard.</h2>
            <p>No scales, no weight debates. Measure it, verify it, post it.</p>
          </div>

          <div className="stepsGrid">
            <div className="stepCard card">
              <span>01</span>
              <h3>Register</h3>
              <p>Lock your entry and team name before tournament start.</p>
            </div>

            <div className="stepCard card">
              <span>02</span>
              <h3>Measure</h3>
              <p>Fish flat, nose at zero, tape visible, tail pinched.</p>
            </div>

            <div className="stepCard card">
              <span>03</span>
              <h3>Verify</h3>
              <p>
                Approved catches are reviewed and added to the official
                standings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERBOARD */}
      <section className="sectionTight">
        <div className="container">
          <div className="sectionHeading">
            <span>Live standings</span>
            <h2>Leaderboard</h2>
            <p>
              View the official Janx standings without a Google embed or public
              submission form.
            </p>
          </div>

          <div
            className="card"
            style={{
              padding: 28,
              display: "grid",
              gap: 18,
              borderRadius: 24,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.035))",
            }}
          >
            <div>
              <span className="eyebrow">Official Standings</span>
              <h3 style={{ marginTop: 8 }}>2026 Janx Leaderboard</h3>
              <p
                className="muted"
                style={{
                  maxWidth: 720,
                  lineHeight: 1.65,
                  marginTop: 8,
                }}
              >
                Follow top catches, fish lengths, angler names, team names, and
                approved entries on the custom leaderboard page.
              </p>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="btn btnPrimary" href="/leaderboard">
                View Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
