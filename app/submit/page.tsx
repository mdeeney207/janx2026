import { siteConfig } from "@/lib/siteConfig";
import { SectionHeader } from "@/components/Section";

export default function SubmitPage() {
  return (
    <section className="section">
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <SectionHeader
          kicker="Submit Catch"
          title="Catch Submission"
          desc="Upload your official tournament submission using the form below."
        />

        <div className="card" style={{ padding: 32 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <div>
              <h3
                style={{
                  margin: 0,
                  fontSize: 28,
                  fontWeight: 900,
                }}
              >
                Photo proof required
              </h3>

              <p className="p" style={{ maxWidth: 760 }}>
                Fish must be measured clearly on a visible tape with the
                entire fish shown. Blurry, cropped, or edited photos may be
                rejected.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <a
                className="btn btnRed"
                href={siteConfig.submitUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Submission Form
              </a>

              <a className="btn btnDark" href="/rules">
                Read Tournament Rules
              </a>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: 32 }}>
          <h3
            style={{
              marginTop: 0,
              fontSize: 24,
              fontWeight: 900,
            }}
          >
            Submission Tips
          </h3>

          <div className="grid grid2">
            <div>
              <ul className="p">
                <li>Fish flat on measuring tape</li>
                <li>Nose touching zero mark</li>
                <li>Tail pinched naturally</li>
                <li>Entire tape visible</li>
              </ul>
            </div>

            <div>
              <ul className="p">
                <li>One fish per submission</li>
                <li>Use clear daylight photos</li>
                <li>No edited or filtered images</li>
                <li>Keep original photo available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}