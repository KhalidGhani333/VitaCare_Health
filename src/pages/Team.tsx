import SimplePage from "@/components/SimplePage";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";
import { Reveal } from "@/components/anim";

const members = [
  { img: team1, name: "Dr. James Whitfield", role: "Principal GP & Clinical Director", bio: "MBBS, MRCGP. 24 years' experience in private and NHS general practice. Founded VitaCare in 2002." },
  { img: team2, name: "Dr. Priya Sharma", role: "GP & Women's Health Specialist", bio: "MBBS, MRCGP, DRCOG. Special interest in women's health, contraception and menopause care." },
  { img: team3, name: "Dr. Omar Hassan", role: "GP & Chronic Disease Management", bio: "MBChB, MRCGP. Diabetes, hypertension and cardiovascular risk specialist. NHS hospital background." },
  { img: team4, name: "Dr. Sarah Chen", role: "Dental Surgeon (GDC Registered)", bio: "BDS (Lond). Cosmetic dentistry, Invisalign provider. 12 years' experience in private practice." },
  { img: team5, name: "Ms. Helen Drew", role: "Lead Nurse Practitioner", bio: "RGN, BSc. Travel medicine, vaccinations, minor surgery and chronic disease management." },
];

export default function Team() {
  return (
    <SimplePage kicker="MEET OUR TEAM" title="Caring Experts You Can Trust"
      subtitle="Every clinician at VitaCare holds full GMC, GDC or NMC registration and is subject to ongoing CQC inspection.">
      <div className="grid md:grid-cols-3 gap-8">
        {members.map((m, i) => (
          <Reveal key={m.name} delay={i}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-card">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover"/>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary">{m.name}</h3>
                <p className="text-accent text-sm font-semibold mt-1">{m.role}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SimplePage>
  );
}
