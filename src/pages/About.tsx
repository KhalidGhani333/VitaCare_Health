import SimplePage from "@/components/SimplePage";
import { Reveal } from "@/components/anim";
import heroTeam from "@/assets/hero-team.jpg";

export default function About() {
  return (
    <SimplePage kicker="ABOUT US" title="Dedicated to Your Health, Every Step of the Way"
      subtitle="VitaCare Private Health is a family-run private clinic in the heart of Marylebone, providing trusted GP, dental, pharmacy and telehealth services to families across Central London since 2002.">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <img src={heroTeam} alt="VitaCare team" className="rounded-3xl shadow-card w-full"/>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-3xl font-bold text-primary">Our story</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Founded by Dr. James Whitfield in 2002, VitaCare began as a single GP practice on Harley Street with a simple mission: deliver the warm, personalised family medicine of a village surgery with the standards and convenience of London's finest private clinics.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Today, our 35+ GMC-registered specialists, GDC-registered dentists and CQC-regulated team welcome over 350,000 patients through the door each year — and even more via our secure telehealth platform.
          </p>
          <h3 className="mt-8 font-display text-xl font-bold text-primary">Our values</h3>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>• Compassionate care that puts the patient first</li>
            <li>• Transparent, fair private pricing — no surprises</li>
            <li>• Same-day access, evening and Saturday appointments</li>
            <li>• British clinical excellence backed by GMC, CQC, GDC and ICO registration</li>
          </ul>
        </Reveal>
      </div>
    </SimplePage>
  );
}
