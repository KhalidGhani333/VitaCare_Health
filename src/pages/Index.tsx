import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { ArrowUpRight, ArrowRight, Mail, Phone, Check, ChevronDown, Calendar, Leaf, Star, CalendarCheck, Quote } from "lucide-react";
import PageShell from "@/components/PageShell";
import { CountUp, Reveal, fadeUp } from "@/components/anim";
import heroDoctor from "@/assets/cta-doctor.jpg";
import heroNurse from "@/assets/hero-nurse.jpg";
import heroTeam from "@/assets/team-1.jpg";
import svcGp from "@/assets/svc-gp.jpg";
import svcPharmacy from "@/assets/svc-pharmacy.jpg";
import svcDental from "@/assets/svc-dental.jpg";
import svcTelehealth from "@/assets/svc-telehealth.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-3.jpg";
import blog3 from "@/assets/blog-3.jpg";
import ctaDoctor from "@/assets/cta-doctor.jpg";

const PillBtn = ({ to, children, variant = "primary", className = "" }: { to: string; children: React.ReactNode; variant?: "primary" | "outline" | "accent"; className?: string }) => {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "bg-white text-primary border border-border hover:border-accent",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90",
  };
  return (
    <Link to={to} className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all active:scale-[0.97] ${variants[variant]} ${className}`}>
      {children} <ArrowUpRight size={16}/>
    </Link>
  );
};

const Label = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <div className={`inline-flex items-center gap-2 text-sm font-semibold ${light ? 'text-white/80' : 'text-accent'}`}>
    <span className="w-2 h-2 rounded-full bg-accent"/> {children}
  </div>
);

// ---------- HERO ----------
function Hero() {
  const cards = [
    { img: heroDoctor, label: "5K+ Happy Patients", avatars: true },
    { img: heroNurse, label: "24/7 Emergency Support" },
    { img: heroTeam, label: "10+ Years Trusted NHS-Trained Doctors" },
  ];
  return (
    <section className="bg-gradient-hero pt-16 pb-24 overflow-hidden">
      <div className="container text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="font-display text-5xl md:text-6xl font-bold text-primary leading-[1.05] max-w-5xl mx-auto">
          Trustworthy{" "}
          <span className="inline-block border-2 border-accent rounded-2xl px-4 py-1 text-accent">Care</span>{" "}
          for You<br/> and Your Family
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg">
          Comprehensive, compassionate private healthcare designed to support your family's well-being at every stage of life. Same-day appointments available.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-3">
          <PillBtn to="/book">Book Appointment</PillBtn>
          <PillBtn to="/services" variant="outline">Explore Services</PillBtn>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              className="relative rounded-3xl overflow-hidden shadow-card aspect-[4/5] group">
              <img src={c.img} alt={c.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
              <div className="absolute inset-x-4 bottom-4 bg-primary/95 backdrop-blur text-white rounded-2xl px-4 py-3 flex items-center gap-3">
                {c.avatars && (
                  <div className="flex -space-x-2">
                    {[heroDoctor, heroNurse, heroTeam].map((a, j) => (
                      <img key={j} src={a} alt="" className="w-7 h-7 rounded-full border-2 border-primary object-cover"/>
                    ))}
                  </div>
                )}
                <span className="text-sm font-semibold">{c.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- MARQUEE ----------
function ContactMarquee() {
  const item = (
    <div className="flex items-center gap-8 px-6 text-white/90 whitespace-nowrap">
      <span className="text-accent text-2xl">✦</span>
      <span className="flex items-center gap-2"><Mail size={16}/> hello@vitacare.co.uk</span>
      <span className="text-accent text-2xl">✦</span>
      <span className="flex items-center gap-2"><Phone size={16}/> +44 (0)20 7946 0888</span>
    </div>
  );
  return (
    <section className="bg-primary py-5 overflow-hidden">
      <div className="flex animate-marquee w-max">
        {Array.from({ length: 8 }).map((_, i) => <div key={i}>{item}</div>)}
      </div>
    </section>
  );
}

// ---------- ABOUT ----------
function About() {
  const stats = [
    { n: 10, s: "+", l: "Years of Excellence" },
    { n: 97, s: "%", l: "Patient Satisfaction" },
    { n: 35, s: "+", l: "GMC-Registered Specialists" },
    { n: 22, s: "+", l: "Awards & Accreditations" },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <Label>ABOUT US</Label>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-primary leading-tight">
              Dedicated to Your Health,<br/>Every Step of the Way
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At VitaCare Private Health, we provide compassionate, reliable medical services tailored to individuals and families across Central London. Whether you visit us in person at our Marylebone clinic or connect through our secure telehealth platform, our GMC-registered team is here to deliver accessible care with the highest level of professionalism.
            </p>
            <div className="mt-6"><PillBtn to="/about" variant="accent">About Us</PillBtn></div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-12">
          {stats.map((st, i) => (
            <Reveal key={i} delay={i} className={i > 0 ? "md:border-l border-border md:pl-8" : ""}>
              <div className="font-display text-5xl md:text-6xl font-bold text-primary">
                <CountUp to={st.n}/>{st.s}
              </div>
              <p className="mt-2 text-muted-foreground text-sm">{st.l}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- SERVICES ----------
const services = [
  { n: "01", title: "General Practice & Family Health", img: svcGp, slug: "gp",
    bullets: ["Same-day GP appointments from £89", "GMC-registered doctors, 30-minute consultations", "Fit notes, referral letters, health screening"] },
  { n: "02", title: "Pharmacy & Prescriptions", img: svcPharmacy, slug: "pharmacy",
    bullets: ["Private prescriptions issued same visit", "Free digital prescription delivery via partner pharmacy", "Expert medication management & review"] },
  { n: "03", title: "Dental Care", img: svcDental, slug: "dental",
    bullets: ["CQC-regulated private dental care", "Check-ups from £65, whitening from £299", "GDC-registered dentists, flexible appointments"] },
  { n: "04", title: "Telehealth & Video Consultations", img: svcTelehealth, slug: "telehealth",
    bullets: ["Secure video GP appointments from £49", "Available 8am–10pm, 7 days a week", "Prescriptions, referrals, fit notes issued online"] },
];

function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container">
        <Reveal>
          <Label>OUR SERVICES</Label>
          <div className="mt-4 grid md:grid-cols-2 gap-8 items-end">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary leading-tight">
              Complete Care for Your<br/>Everyday Health Needs
            </h2>
            <p className="text-muted-foreground">
              At VitaCare, we offer a full range of private healthcare services for you and your family — in person in Marylebone or online from anywhere in the UK.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 border-t border-border">
          {services.map((s) => (
            <Link to={`/services/${s.slug}`} key={s.n}
              className="group relative grid grid-cols-12 items-center gap-6 py-8 border-b border-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-soft opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
              <span className="relative col-span-2 md:col-span-1 text-accent font-display text-xl font-bold">[{s.n}]</span>
              <div className="relative col-span-10 md:col-span-4 h-7 overflow-hidden">
                <div className="title-scroll">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-primary leading-tight">{s.title}</h3>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-accent leading-tight">{s.title}</h3>
                </div>
              </div>
              <div className="relative hidden md:block col-span-2">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-20 object-cover rounded-2xl"/>
              </div>
              <ul className="relative col-span-12 md:col-span-4 space-y-1 text-sm text-muted-foreground">
                {s.bullets.map((b, j) => <li key={j}>• {b}</li>)}
              </ul>
              <div className="relative col-span-12 md:col-span-1 flex justify-end">
                <span className="w-12 h-12 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <ArrowUpRight size={18}/>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- WHY ----------
function Why() {
  const cards = [
    { Icon: Leaf, title: "Comprehensive Care in One Place", desc: "From GP visits and dental care to prescriptions and telehealth — all your family's healthcare needs under one roof in Marylebone, London.", elev: false },
    { Icon: Star, title: "GMC-Registered Local Care Experts", desc: "Every doctor at VitaCare holds full GMC registration and CQC accreditation. Our team delivers personalised care with compassion — earning the lasting trust of families across Central London.", elev: true },
    { Icon: CalendarCheck, title: "Easy & Convenient Appointments", desc: "Book your appointment online in under 2 minutes, skip NHS waiting times, and see a doctor the same day — in person or via video. Flexible slots including evenings and Saturdays.", elev: false },
  ];
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">Why Choose VitaCare?</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            At VitaCare, we offer a wide range of healthcare services for you and your family — whether in person or online.
          </p>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6 items-end">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 1.5}>
              <div className={`bg-white rounded-3xl p-8 shadow-card text-left ${c.elev ? 'md:-mt-8 md:pt-12 border-t-4 border-accent' : ''}`}>
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-accent mb-6">
                  <c.Icon size={26}/>
                </div>
                <h3 className="font-display text-xl font-bold text-primary leading-tight">{c.title}</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- BOOK CTA ----------
function BookCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="relative py-28 overflow-hidden bg-primary">
      <img src={ctaDoctor} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-30"/>
      <div className="absolute inset-0 bg-primary/60"/>
      <div ref={ref} className="container relative text-center text-white">
        <motion.h2
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={inView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-display text-5xl md:text-6xl font-bold leading-tight">
          Book Your Appointment Today
        </motion.h2>
        <Reveal delay={2}>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            {["Fast & secure online booking","Flexible morning, evening & weekend slots","In-person (Marylebone) or virtual options"].map(t => (
              <span key={t} className="flex items-center gap-2"><Check size={16} className="text-accent"/> {t}</span>
            ))}
          </div>
          <div className="mt-8"><PillBtn to="/book" variant="accent">Book an Appointment</PillBtn></div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- TESTIMONIALS ----------
const testimonials = [
  { name: "Monica T.", area: "Marylebone", title: "Clean, Professional", text: "The clinic is spotless and the team is incredibly professional. I always feel confident I'm in the best hands. My whole family has been coming here for years." },
  { name: "Emily C.", area: "Fitzrovia", title: "Genuinely Caring Staff", text: "Everyone made me feel comfortable and heard. It's rare to find such kind and attentive care in London these days. I couldn't recommend VitaCare more highly." },
  { name: "David R.", area: "Paddington", title: "Fast, Easy Appointments", text: "I booked online in minutes and saw the doctor the same day. Super convenient and completely stress-free. Far better than waiting weeks for an NHS appointment." },
  { name: "Priya K.", area: "St John's Wood", title: "Trusted by Our Family", text: "We've been coming here for years. The doctors know us, the care is always consistent and thoughtful. Best private clinic in Central London by far." },
];

function Testimonials() {
  const [paused, setPaused] = useState(false);
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container">
        <Reveal>
          <Label>TESTIMONIAL</Label>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-primary">What Our Patients Say</h2>
        </Reveal>
      </div>
      <div className="mt-12 overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <motion.div
          animate={{ x: paused ? undefined : ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 w-max"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="relative w-[360px] md:w-[420px] bg-white border border-border rounded-3xl p-8 shadow-soft">
              <Quote size={40} className="absolute top-6 right-6 text-accent/40"/>
              <h3 className="font-display italic text-2xl font-bold text-primary">"{t.title}"</h3>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{t.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">{t.name[0]}</div>
                <div>
                  <p className="font-semibold text-primary text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.area}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ---------- FAQ ----------
const faqs = [
  { q: "How do I book an appointment?", a: "You can book online 24/7 through our website in under 2 minutes — simply choose your service, preferred doctor, and time slot. Same-day appointments are available Monday to Saturday. You can also call us on +44 (0)20 7946 0888 or WhatsApp us." },
  { q: "Do you accept walk-in patients?", a: "Yes — walk-ins are welcome at our Marylebone clinic during opening hours. However, we recommend booking in advance to guarantee your preferred time slot and doctor, especially for same-day appointments." },
  { q: "Does my private health insurance cover VitaCare?", a: "We work with most major UK private health insurers including Bupa, AXA Health, Aviva, and Vitality. Contact us with your policy details and we'll confirm coverage before your appointment. Excess fees and policy terms apply." },
  { q: "Can I consult a doctor online?", a: "Absolutely. Our secure video consultation service is available 8am–10pm, 7 days a week. Our GMC-registered doctors can issue private prescriptions, referral letters, and fit notes digitally. Appointments from £49." },
  { q: "What pharmacy services do you offer?", a: "Our in-house pharmacy team provides same-visit private prescriptions, medication reviews, and expert guidance. Digital prescriptions can be delivered free to your home via our partner pharmacy, or collected from any UK pharmacy." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container max-w-4xl">
        <Reveal>
          <div className="text-center">
            <Label>FAQ</Label>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-primary">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground">We've answered the most common questions to help you feel confident before your appointment.</p>
          </div>
        </Reveal>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-secondary rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center p-6 text-left">
                <span className="font-display font-semibold text-lg text-primary pr-4">{f.q}</span>
                <motion.span animate={{ rotate: open === i ? 180 : 0 }} className="w-10 h-10 shrink-0 rounded-full bg-white flex items-center justify-center text-primary">
                  <ChevronDown size={18}/>
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- TEAM ----------
const team = [
  { img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=800&h=1000", name: "Dr. James Whitfield", role: "Principal GP & Clinical Director" },
  { img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800&h=1000", name: "Dr. Priya Sharma", role: "GP & Women's Health Specialist" },
  { img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&h=1000", name: "Dr. Omar Hassan", role: "GP & Chronic Disease Management" },
  { img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800&h=1000", name: "Dr. Sarah Chen", role: "Dental Surgeon (GDC Registered)" },
  { img: "https://images.unsplash.com/photo-1557862412-317437f64170?auto=format&fit=crop&q=80&w=800&h=1000", name: "Dr. Eleanor Vance", role: "Specialist Doctor" },
];

function Team() {
  return (
    <section className="bg-gradient-soft pt-24 pb-0">
      <div className="container text-center">
        <Reveal>
          <Label>MEET OUR TEAM</Label>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-primary">Caring Experts You Can Trust</h2>
        </Reveal>
      </div>
      <div className="mt-14 grid grid-cols-2 md:grid-cols-5 w-full">
        {team.map((m, i) => (
          <Link to="/team" key={i} className="group relative aspect-square overflow-hidden">
            <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary via-primary/70 to-transparent p-5 text-white translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
              <p className="font-display font-bold text-lg">{m.name}</p>
              <p className="text-xs text-white/80">{m.role}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="h-3 bg-gradient-cta"/>
    </section>
  );
}

// ---------- BLOG ----------
const blogs = [
  { slug: "heart-health", img: blog1, date: "April 15, 2026", read: "5 min read", title: "5 Everyday Habits for a Healthier Heart", sub: "How small daily choices dramatically reduce your cardiovascular risk — advice from our GPs." },
  { slug: "private-gp", img: blog2, date: "April 2, 2026", read: "8 min read", title: "Signs It's Time to See a Private GP (Not Wait for the NHS)", sub: "Knowing when to seek faster care can make all the difference to your health outcomes." },
  { slug: "stress-health", img: blog3, date: "March 20, 2026", read: "7 min read", title: "How Stress Affects Your Body — and What Your GP Can Do", sub: "Chronic stress has real physical effects. Our doctors explain the signs and solutions." },
];

function Blog() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="flex flex-wrap justify-between items-end gap-4">
          <Reveal>
            <Label>BLOG</Label>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-primary">Health Tips & Insights</h2>
          </Reveal>
          <PillBtn to="/blog" variant="accent">View More Blog</PillBtn>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {blogs.map((b, i) => (
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
      </div>
    </section>
  );
}

// ---------- FINAL CTA ----------
function FinalCTA() {
  const img1 = "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=400&h=400";
  const img2 = "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=400";
  const img3 = "https://images.unsplash.com/photo-1557862412-317437f64170?auto=format&fit=crop&q=80&w=400&h=400";

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <Reveal>
          <div className="relative bg-gradient-cta rounded-[2.5rem] p-12 md:p-16 overflow-hidden">
            <img src={img1} alt="" loading="lazy" className="hidden md:block absolute -left-4 top-8 w-24 h-24 rounded-2xl object-cover rotate-[-8deg] shadow-card"/>
            <img src={img2} alt="" loading="lazy" className="hidden md:block absolute left-12 bottom-8 w-20 h-20 rounded-2xl object-cover rotate-[6deg] shadow-card"/>
            <img src={img3} alt="" loading="lazy" className="hidden md:block absolute right-8 top-12 w-24 h-24 rounded-2xl object-cover rotate-[8deg] shadow-card"/>
            <div className="relative text-center max-w-2xl mx-auto">
              <Label light>APPOINTMENT</Label>
              <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold text-primary leading-tight">Start Your Health Journey Today</h2>
              <p className="mt-4 text-primary/80">Book online for trusted check-ups, prescriptions, and convenient medical care. GMC-registered doctors. Same-day availability.</p>
              <div className="mt-8"><PillBtn to="/book">Book Your Appointment</PillBtn></div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 text-center overflow-hidden">
          <h3 className="font-display font-bold text-primary leading-none" style={{ fontSize: "clamp(80px, 14vw, 200px)", letterSpacing: "-0.05em" }}>VitaCare</h3>
        </div>
      </div>

      <div className="bg-primary py-6 mt-8 overflow-hidden">
        <div className="flex animate-marquee w-max">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-6 px-6 text-white whitespace-nowrap font-display text-2xl">
              <span>Book Appointment Now</span>
              <ArrowRight size={20}/>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <PageShell>
      <Hero />
      <ContactMarquee />
      <About />
      <Services />
      <Why />
      <BookCTA />
      <Testimonials />
      <FAQ />
      <Blog />
    </PageShell>
  );
}
