import SimplePage from "@/components/SimplePage";
import { useParams, Navigate } from "react-router-dom";
import { Reveal } from "@/components/anim";
import { Check } from "lucide-react";
import svcGp from "@/assets/svc-gp.jpg";
import svcPharmacy from "@/assets/svc-pharmacy.jpg";
import svcDental from "@/assets/svc-dental.jpg";
import svcTelehealth from "@/assets/svc-telehealth.jpg";

const data: Record<string, { title: string; kicker: string; img: string; price: string; intro: string; features: string[] }> = {
  gp: {
    title: "General Practice & Family Health", kicker: "GP SERVICES", img: svcGp, price: "From £89",
    intro: "Same-day GP appointments with GMC-registered doctors at our Marylebone clinic. 30-minute consultations give us time to listen, examine, and care for you properly.",
    features: ["Same-day appointments, Mon–Sat", "30-minute private consultations", "Fit notes & referral letters", "Full health screening packages", "Travel vaccinations", "Women's & men's health"],
  },
  pharmacy: {
    title: "Pharmacy & Prescriptions", kicker: "PHARMACY", img: svcPharmacy, price: "Same-visit",
    intro: "Our in-house private pharmacy team issues prescriptions during your visit and offers expert medication management.",
    features: ["Private prescriptions same visit", "Free digital prescription delivery", "Medication reviews", "Repeat prescription service", "Travel medication advice", "Vaccinations & injections"],
  },
  dental: {
    title: "Dental Care", kicker: "DENTAL", img: svcDental, price: "From £65",
    intro: "CQC-regulated private dental care from GDC-registered dentists. Check-ups, hygiene, whitening and cosmetic treatments in a calm, modern setting.",
    features: ["Check-ups from £65", "Hygiene from £85", "Teeth whitening from £299", "Composite bonding & veneers", "Invisalign & orthodontics", "Emergency dental appointments"],
  },
  telehealth: {
    title: "Telehealth & Video Consultations", kicker: "TELEHEALTH", img: svcTelehealth, price: "From £49",
    intro: "See a GMC-registered doctor by secure video, anywhere in the UK. Available 8am–10pm, 7 days a week.",
    features: ["Video GP from £49", "Available 8am–10pm, 7 days", "Private prescriptions issued online", "Fit notes by email", "Referral letters digitally", "Repeat issues handled remotely"],
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = slug ? data[slug] : null;
  if (!s) return <Navigate to="/services" replace />;
  return (
    <SimplePage kicker={s.kicker} title={s.title} subtitle={s.intro}>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Reveal>
          <img src={s.img} alt={s.title} className="rounded-3xl shadow-card w-full"/>
        </Reveal>
        <Reveal delay={1}>
          <span className="text-accent font-semibold">{s.price}</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary">What's included</h2>
          <ul className="mt-6 space-y-3">
            {s.features.map(f => (
              <li key={f} className="flex items-start gap-3"><Check size={20} className="text-accent shrink-0 mt-0.5"/> <span className="text-muted-foreground">{f}</span></li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SimplePage>
  );
}
