import SimplePage from "@/components/SimplePage";
import { Link } from "react-router-dom";
import { Calendar, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/anim";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const posts = [
  { slug: "heart-health", img: blog1, date: "April 15, 2026", read: "5 min read", title: "5 Everyday Habits for a Healthier Heart", sub: "How small daily choices dramatically reduce your cardiovascular risk — advice from our GPs." },
  { slug: "private-gp", img: blog2, date: "April 2, 2026", read: "8 min read", title: "Signs It's Time to See a Private GP (Not Wait for the NHS)", sub: "Knowing when to seek faster care can make all the difference to your health outcomes." },
  { slug: "stress-health", img: blog3, date: "March 20, 2026", read: "7 min read", title: "How Stress Affects Your Body — and What Your GP Can Do", sub: "Chronic stress has real physical effects. Our doctors explain the signs and solutions." },
];

export default function Blog() {
  return (
    <SimplePage kicker="BLOG" title="Health Tips & Insights" subtitle="Trusted advice from our GMC-registered doctors at VitaCare Marylebone.">
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((b, i) => (
          <Reveal key={b.slug} delay={i}>
            <Link to={`/blog/${b.slug}`} className="group block bg-white rounded-3xl overflow-hidden shadow-card border-t-4 border-transparent hover:border-accent hover:-translate-y-1.5 transition-all duration-300">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={b.img} alt={b.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar size={12}/> {b.date}</span>
                  <span>· {b.read}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-primary leading-snug">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.sub}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">Read More <ArrowUpRight size={14}/></span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </SimplePage>
  );
}
