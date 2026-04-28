import SimplePage from "@/components/SimplePage";
import { useParams, Navigate, Link } from "react-router-dom";
import { posts } from "./Blog";
import { Calendar, ArrowLeft } from "lucide-react";

const content: Record<string, string[]> = {
  "heart-health": [
    "Cardiovascular disease remains the UK's biggest killer — but the latest evidence shows that simple, consistent daily habits can cut your risk by more than 50%. Here's what our GMC-registered GPs at VitaCare Marylebone recommend.",
    "1. Move for 30 minutes a day. A brisk walk through Regent's Park counts. Aim for 150 minutes of moderate activity per week.",
    "2. Eat the Mediterranean way. Plenty of vegetables, oily fish, olive oil and whole grains; less red and processed meat.",
    "3. Sleep 7–9 hours. Poor sleep raises blood pressure and stress hormones overnight.",
    "4. Know your numbers. Have your blood pressure, cholesterol and HbA1c checked annually from age 40.",
    "5. Manage stress proactively. Chronic stress is now recognised as an independent cardiovascular risk factor.",
    "Book a private health screening at VitaCare from £189 — same-day appointments available.",
  ],
  "private-gp": [
    "NHS waiting times for routine GP appointments now stretch to 2–4 weeks in much of London. For some conditions, that's perfectly safe. For others, it isn't.",
    "Consider a private GP when: a worrying symptom needs investigating quickly; you need a fit note for work today; you require a referral letter for an insurer; or you simply want a 30-minute consultation rather than the standard 8.",
    "At VitaCare, all our GPs are GMC-registered and hold MRCGP. Many also have NHS hospital backgrounds, so referrals are seamless.",
    "Same-day appointments from £89. Book online or call +44 (0)20 7946 0888.",
  ],
  "stress-health": [
    "Stress isn't just in your head. Sustained activation of the HPA axis raises cortisol, blood pressure and inflammation — and over time contributes to heart disease, type 2 diabetes, IBS and depression.",
    "Common physical signs: tension headaches, jaw clenching, disrupted sleep, palpitations, gut symptoms, recurrent infections.",
    "What your GP can do: rule out other causes (thyroid, anaemia, B12), refer for talking therapy, prescribe short-term medication where appropriate, and coordinate lifestyle support.",
    "Book a 30-minute private GP appointment to talk things through — in person in Marylebone or by video.",
  ],
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;
  return (
    <SimplePage kicker="BLOG" title={post.title} subtitle={post.sub}>
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-accent font-semibold mb-8"><ArrowLeft size={14}/> All articles</Link>
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
          <Calendar size={14}/> {post.date} · {post.read}
        </div>
        <img src={post.img} alt={post.title} className="rounded-3xl shadow-card w-full mb-10"/>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
          {content[post.slug!]?.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </SimplePage>
  );
}
