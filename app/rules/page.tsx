import { SectionHeader } from "@/components/Section";
import { siteConfig } from "@/lib/siteConfig";

function RuleBlock({ title, items }: { title: string; items: string[] }){
  return (
    <div className="card" style={{ padding: 18 }}>
      <div style={{ fontWeight: 950, fontSize: 18, marginBottom: 10 }}>{title}</div>
      <ul style={{ margin: 0, paddingLeft: 18, color:"rgba(234,241,255,.82)", lineHeight: 1.75 }}>
        {items.map((x, i) => <li key={i}>{x}</li>)}
      </ul>
    </div>
  );
}

export default function RulesPage(){
  return (
    <section className="section">
      <div className="container" style={{ display:"flex", flexDirection:"column", gap: 16 }}>
        <SectionHeader
          kicker="Rules"
          title="Clear rules = no arguments"
          desc="This is a complete, enforceable ruleset. Adjust anything that differs for your tournament year in lib/siteConfig.ts or by editing this page."
        />

        <div className="grid grid2">
          <RuleBlock
            title="Eligibility"
            items={[
              "Striped Bass only. Scup/bluefish/etc. do not count.",
              "Length-only tournament (no weight).",
              "Tournament boundaries: set and publish before day 1 (update this line).",
              "Catch-and-release: if your tournament is C&R, state it clearly here and enforce it consistently."
            ]}
          />
          <RuleBlock
            title="Measuring Standard (Required)"
            items={[
              "Fish must be measured on a tape/measuring board with clear inch marks.",
              "Fish straight and flat, nose at the zero mark.",
              "Tail pinched to maximum natural length.",
              "Tape must be fully visible from zero through the end of the tail.",
              "Blurry, cropped, obstructed, or questionable images will be rejected."
            ]}
          />
        </div>

        <div className="grid grid2">
          <RuleBlock
            title="Photo Proof (Required)"
            items={[
              "One photo per submitted fish (video optional).",
              "Photo must include: full fish, full tape, and a clear length reading.",
              "No image editing, filters that obscure markings, or ‘enhancement’ that changes the evidence.",
              "Organizers may request the original photo file for verification."
            ]}
          />
          <RuleBlock
            title="Submission"
            items={[
              "All entries must be submitted using the official form (Submit Catch page).",
              "Submit within the tournament window only (no early/late entries).",
              "One submission per fish; if you submit duplicates, the most recent may be used.",
              "The tournament director’s decision is final."
            ]}
          />
        </div>

        <div className="grid grid2">
          <RuleBlock
            title="Ties"
            items={[
              "Primary: longest verified length wins.",
              "Tie-breaker (choose one and delete the others): earliest verified submission OR additional photo angle OR coin-flip at awards.",
              "Publish the tie-breaker before day 1 so it’s not debated later."
            ]}
          />
          <RuleBlock
            title="Disqualification"
            items={[
              "Edited/altered photos, unclear measurement, or misrepresentation.",
              "Unsportsmanlike conduct toward staff or other anglers.",
              "Violation of state/federal fishing regulations.",
              "Any attempt to bypass the rules or verification process."
            ]}
          />
        </div>

        <div className="card" style={{ padding: 18 }}>
          <div style={{ fontWeight: 950, fontSize: 18, marginBottom: 8 }}>Questions</div>
          <div className="small">
            Email: <a href={`mailto:${siteConfig.contactEmail}`} style={{ textDecoration:"underline" }}>{siteConfig.contactEmail}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
