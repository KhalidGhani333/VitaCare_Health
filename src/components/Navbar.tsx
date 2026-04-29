import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
];
const pagesDropdown = [
  { to: "/team", label: "Team" },
  { to: "/#testimonials", label: "Testimonials" },
  { to: "/#faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="flex items-center gap-2 shrink-0">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 28C16 28 4 20 4 12C4 8 7 5 11 5C13 5 15 6 16 8C17 6 19 5 21 5C25 5 28 8 28 12C28 14 27 16 25 18" stroke="#3DB87A" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M22 14C24 12 27 13 28 16C29 19 27 22 24 22C22 22 21 21 20 19" stroke="#3DB87A" strokeWidth="2.5" strokeLinecap="round" fill="#C8E86A" fillOpacity="0.4"/>
    </svg>
    <span className={`font-display text-2xl font-bold ${light ? 'text-white' : 'text-primary'}`}>
      Vita<span className="text-accent">Care</span>
    </span>
  </Link>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const isActive = (to: string) => location.pathname === to;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`sticky top-0 z-50 bg-white transition-all ${scrolled ? 'shadow-soft' : ''}`}
    >
      <div className="container flex items-center justify-between h-20">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1 bg-secondary rounded-full px-2 py-2">
          {navLinks.map(l => (
            <Link key={l.to} to={l.to}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive(l.to) ? 'text-primary' : 'text-foreground/70 hover:text-primary'
              }`}>
              {isActive(l.to) && <span className="absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent"/>}
              <span className={isActive(l.to) ? 'pl-3' : ''}>{l.label}</span>
            </Link>
          ))}
          <div className="relative" onMouseEnter={() => setPagesOpen(true)} onMouseLeave={() => setPagesOpen(false)}>
            <button className="px-5 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-primary flex items-center gap-1">
              Pages <ChevronDown size={14} />
            </button>
            <AnimatePresence>
              {pagesOpen && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-card p-2 min-w-[180px]">
                  {pagesDropdown.map(p => (
                    <Link key={p.to} to={p.to} className="block px-4 py-2 rounded-xl text-sm hover:bg-secondary transition-colors">
                      {p.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden sm:inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-5 py-3 rounded-full text-sm font-semibold transition-all active:scale-[0.97]">
            Contact Us <ArrowUpRight size={16}/>
          </Link>
          <button className="lg:hidden w-11 h-11 rounded-full bg-secondary flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
            className="lg:hidden overflow-hidden border-t border-border bg-white">
            <div className="container py-6 flex flex-col gap-2">
              {[...navLinks, ...pagesDropdown, { to: "/book", label: "Book Appointment" }, { to: "/contact", label: "Contact Us" }].map(l => (
                <Link key={l.to} to={l.to} className="px-4 py-3 rounded-xl hover:bg-secondary text-base font-medium">{l.label}</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
