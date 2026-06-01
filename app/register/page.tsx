import { siteConfig } from "@/lib/siteConfig";
import { SectionHeader } from "@/components/Section";

export default function RegisterPage(){
  return (
    <section className="section">
      <div className="container" style={{ display:"flex", flexDirection:"column", gap: 16 }}>
        <SectionHeader
          kicker="Register"
          title="Lock your spot"
          desc="Registration opens/closes based on the tournament schedule. Use the official link below."
        />
        <div className="card" style={{ padding: 18 }}>
          <div style={{ display:"flex", gap: 10, flexWrap:"wrap", alignItems:"center", justifyContent:"space-between" }}>
            <div>
              <div style={{ fontWeight: 900, fontSize: 18 }}>Official Registration</div>
              <div className="small">CheddarUp</div>
            </div>
            <a className="btn btnPrimary" href={siteConfig.registerUrl} target="_blank" rel="noreferrer">Open Registration</a>
          </div>
          <hr className="hr" />
          <div className="small">
            If you have questions, email <a href={`mailto:${siteConfig.contactEmail}`} style={{ textDecoration:"underline" }}>{siteConfig.contactEmail}</a>.
          </div>
        </div>
      </div>
    </section>
  );
}
