import PageShell from "@/components/PageShell";
import { Reveal } from "@/components/anim";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

export function PageHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-gradient-hero py-20 md:py-28">
      <div className="container text-center">
        <Reveal>
          <p className="text-accent font-semibold text-sm">• {kicker}</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold text-primary leading-tight">{title}</h1>
          {subtitle && <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-lg">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}

export function CTAFooter({ title = "Ready to book your appointment?" }: { title?: string }) {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">{title}</h2>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/book" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all active:scale-[0.97]">
              Book Appointment <ArrowUpRight size={16}/>
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white border border-border text-primary px-6 py-3.5 rounded-full text-sm font-semibold hover:border-accent transition-all">
              Contact Us <ArrowUpRight size={16}/>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function SimplePage({ kicker, title, subtitle, children }: { kicker: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <PageShell>
      <PageHeader kicker={kicker} title={title} subtitle={subtitle}/>
      <section className="py-20 bg-white">
        <div className="container">{children}</div>
      </section>
      <CTAFooter />
    </PageShell>
  );
}
