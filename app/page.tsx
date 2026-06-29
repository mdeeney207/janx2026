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
          <div className="heroBadge">York, Maine • July 16–19, 2026</div>

          <h1 className="proHeroTitle">Janx Striper Tournament</h1>

          <p className="proHeroText">Pro • Amateur • Team Divisions</p>

          <p className="proHeroSubtext">
            Four days of striped bass fishing, competition, and community.
            Hosted at Lobster in the Rough in York, Maine, benefiting Sweetser
            Maine and York Community Service.
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

            <div style={{ maxWidth: 280 }}>
              <div
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: 850,
                  letterSpacing: "-.2px",
                }}
              >
                Register Today
              </div>
              <p
                className="small"
                style={{
                  margin: "6px 0 0",
                  lineHeight: 1.45,
                  color: "rgba(255,255,255,.78)",
                }}
              >
                Scan with your phone camera or tap Register Now to register for
                the 2026 Janx Striper Tournament.
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

      {/* NEW FOR 2026 */}
      <section className="sectionTight">
        <div className="container">
          <div className="sectionHeading">
            <span>New for 2026</span>
            <h2>More ways to compete.</h2>
            <p>
              Choose one division, register solo or as a team, and fish for
              individual and team awards.
            </p>
          </div>

          <div className="stepsGrid">
            <div className="stepCard card">
              <span>PRO</span>
              <h3>Pro Division</h3>
              <p>1st $750 • 2nd $500 • 3rd $250</p>
            </div>

            <div className="stepCard card">
              <span>AM</span>
              <h3>Amateur Division</h3>
              <p>1st $300 • 2nd $200 • 3rd $100</p>
            </div>

            <div className="stepCard card">
              <span>TEAM</span>
              <h3>Team Entry</h3>
              <p>
                $450 for up to 4 anglers. Save $50. Team name is required at
                registration.
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              marginTop: 18,
              padding: 24,
              borderRadius: 24,
              display: "grid",
              gap: 10,
            }}
          >
            <span className="eyebrow">Team Prize • $250</span>
            <h3 style={{ margin: 0 }}>Boat team scoring</h3>
            <p className="muted" style={{ margin: 0, lineHeight: 1.65 }}>
              The team prize is based on the total length of each angler&apos;s
              largest single catch on the boat. Additional team rules will be
              outlined at registration and Captain&apos;s Dinner.
            </p>
          </div>

          <div
            className="card"
            style={{
              marginTop: 18,
              padding: 24,
              borderRadius: 24,
              display: "grid",
              gap: 10,
            }}
          >
            <span className="eyebrow">Entry Includes</span>
            <h3 style={{ margin: 0 }}>Everything you need for tournament weekend</h3>
            <ul className="muted" style={{ margin: "4px 0 0", paddingLeft: 20, lineHeight: 1.8 }}>
              <li>$20 dinner voucher per registered angler</li>
              <li>Official tournament hat</li>
              <li>Tournament shirt</li>
              <li>Tournament registration kit</li>
              <li>Register before July 1 for the best chance to receive your requested shirt size on tournament day.</li>
            </ul>
          </div>
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
                Tournament headquarters for registration, Captain&apos;s Dinner,
                50/50 raffle, Silent Auction, awards ceremony, food, drinks,
                and the Janx community.
              </p>

              <div className="hqFeatures">
                <span>Captain&apos;s Dinner • July 16</span>
                <span>Silent Auction • July 16–19</span>
                <span>Awards • July 19</span>
                <span>Food • Drinks • Live Music</span>
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
              <p>
                Choose individual or team entry, then select either the Pro or
                Amateur division.
              </p>
            </div>

            <div className="stepCard card">
              <span>02</span>
              <h3>Catch &amp; Measure</h3>
              <p>
                Measure your largest striped bass according to tournament
                rules.
              </p>
            </div>

            <div className="stepCard card">
              <span>03</span>
              <h3>Compete</h3>
              <p>
                Approved catches are reviewed and added to the live leaderboard
                throughout the tournament.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="sectionTight">
        <div className="container">
          <div
            className="card"
            style={{
              padding: 28,
              borderRadius: 24,
              display: "grid",
              gap: 12,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.035))",
            }}
          >
            <span className="eyebrow">Benefits</span>
            <h2 style={{ margin: 0 }}>Supporting mental health recovery and our community.</h2>
            <p className="muted" style={{ maxWidth: 820, lineHeight: 1.65, margin: 0 }}>
              The 2026 Janx Striper Tournament benefits Sweetser Maine and the
              York Community Service. Let&apos;s support mental health recovery
              and our local community.
            </p>
          </div>
        </div>
      </section>

      {/* REGISTRATION OPTIONS */}
      <section className="sectionTight">
        <div className="container">
          <div className="sectionHeading">
            <span>Registration</span>
            <h2>Register by July 16 at 5 PM.</h2>
            <p>Choose the option that is easiest for you.</p>
          </div>

          <div className="stepsGrid">
            <div className="stepCard card">
              <span>ONLINE</span>
              <h3>Website</h3>
              <p>
                Register online at janxstripertournament.com or tap Register Now
                before July 16 at 5:00 PM.
              </p>
            </div>

            <div className="stepCard card">
              <span>QR</span>
              <h3>Scan the QR Code</h3>
              <p>Use your phone camera to register instantly.</p>
            </div>

            <div className="stepCard card">
              <span>VENMO</span>
              <h3>@scott-harrington-95</h3>
              <p>
                Include your name and requested shirt size in the payment
                message.
              </p>
            </div>

            <div className="stepCard card">
              <span>IN PERSON</span>
              <h3>Captain&apos;s Dinner</h3>
              <p>Cash or check accepted at Captain&apos;s Dinner.</p>
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
