import { Link } from "react-router-dom";
import { Logo } from "./Navbar";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const socials = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-20 grid md:grid-cols-3 gap-12">
        <div>
          <p className="text-accent text-sm font-semibold mb-5">• QUICK LINKS</p>
          <ul className="space-y-3 text-white/80">
            {[["/","Home"],["/about","About Us"],["/services","Services"],["/blog","Blog"],["/contact","Contact"],["/book","Book Appointment"]].map(([to,l]) => (
              <li key={to}><Link to={to} className="hover:text-accent transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <Logo light />
          <p className="text-white/70 mt-5 text-sm leading-relaxed max-w-xs mx-auto">
            VitaCare provides trusted, compassionate private healthcare for families and individuals across London.
          </p>
          <p className="text-white/60 mt-4 text-xs">18 Harley Street, Marylebone, London W1G 9PL</p>
          <div className="flex justify-center gap-3 mt-6">
            {socials.map(({Icon, href, label}) => (
              <a key={label} href={href} aria-label={label} className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Icon size={16}/>
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-accent text-sm font-semibold mb-5">• INFORMATION</p>
          <ul className="space-y-3 text-white/80 text-sm">
            <li><Link to="/contact" className="hover:text-accent">Privacy Policy</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Terms & Conditions</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Cookie Policy</Link></li>
            <li><Link to="/contact" className="hover:text-accent">CQC Registration</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Accessibility Statement</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Sitemap</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 bg-black/20">
        <div className="container py-5 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/60">
          <p>© 2026 VitaCare Private Health Ltd · Registered in England & Wales No. 11847362 · CQC Registration No. 1-4829017683</p>
          <p>GMC Registered · CQC Regulated · ICO Registered</p>
        </div>
      </div>
    </footer>
  );
}
