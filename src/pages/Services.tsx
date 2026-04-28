import SimplePage from "@/components/SimplePage";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import svcGp from "@/assets/svc-gp.jpg";
import svcPharmacy from "@/assets/svc-pharmacy.jpg";
import svcDental from "@/assets/svc-dental.jpg";
import svcTelehealth from "@/assets/svc-telehealth.jpg";
import { Reveal } from "@/components/anim";

const items = [
  { slug: "gp", img: svcGp, title: "General Practice & Family Health", price: "From £89", desc: "Same-day GP appointments with GMC-registered doctors. 30-minute consultations, fit notes, referral letters and full health screening." },
  { slug: "pharmacy", img: svcPharmacy, title: "Pharmacy & Prescriptions", price: "Same-visit", desc: "Private prescriptions issued during your visit, with free digital delivery via our partner pharmacy and expert medication review." },
  { slug: "dental", img: svcDental, title: "Dental Care", price: "From £65", desc: "CQC-regulated private dental care with GDC-registered dentists. Check-ups, hygiene, whitening from £299, and cosmetic treatments." },
  { slug: "telehealth", img: svcTelehealth, title: "Telehealth & Video Consultations", price: "From £49", desc: "Secure video GP appointments 8am–10pm, 7 days a week. Prescriptions, referrals and fit notes issued online." },
];

export default function Services() {
  return (
    <SimplePage kicker="OUR SERVICES" title="Complete Care for Your Everyday Health Needs"
      subtitle="Comprehensive private healthcare in person at our Marylebone clinic or online, anywhere in the UK.">
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((s, i) => (
          <Reveal key={s.slug} delay={i}>
            <Link to={`/services/${s.slug}`} className="group block bg-white border border-border rounded-3xl overflow-hidden hover:shadow-card hover:-translate-y-1 transition-all">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
              </div>
              <div className="p-7">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-display text-2xl font-bold text-primary">{s.title}</h3>
                  <span className="text-accent text-sm font-semibold whitespace-nowrap">{s.price}</span>
                </div>
                <p className="mt-3 text-muted-foreground">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">Learn more <ArrowUpRight size={14}/></span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </SimplePage>
  );
}
