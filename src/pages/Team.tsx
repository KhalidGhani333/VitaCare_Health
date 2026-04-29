import SimplePage from "@/components/SimplePage";
import { Reveal } from "@/components/anim";

const members = [
  { img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=800&h=1000", name: "Dr. James Whitfield", role: "Principal GP & Clinical Director", bio: "MBBS, MRCGP. 24 years' experience in private and NHS general practice. Founded VitaCare in 2002." },
  { img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800&h=1000", name: "Dr. Priya Sharma", role: "GP & Women's Health Specialist", bio: "MBBS, MRCGP, DRCOG. Special interest in women's health, contraception and menopause care." },
  { img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&h=1000", name: "Dr. Omar Hassan", role: "GP & Chronic Disease Management", bio: "MBChB, MRCGP. Diabetes, hypertension and cardiovascular risk specialist. NHS hospital background." },
  { img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800&h=1000", name: "Dr. Sarah Chen", role: "Dental Surgeon (GDC Registered)", bio: "BDS (Lond). Cosmetic dentistry, Invisalign provider. 12 years' experience in private practice." },
  // { img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800&h=1000", name: "Dr. Eleanor Vance", role: "Specialist Doctor", bio: "MD, PhD. Extensive research in diagnostic imaging and patient care." },
];

export default function Team() {
  return (
    <SimplePage kicker="MEET OUR TEAM" title="Caring Experts You Can Trust"
      subtitle="Every clinician at VitaCare holds full GMC, GDC or NMC registration and is subject to ongoing CQC inspection.">
      <div className="grid md:grid-cols-3 gap-8">
        {members.map((m, i) => (
          <Reveal key={m.name} delay={i}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-card">
              <div className="aspect-square overflow-hidden">
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
