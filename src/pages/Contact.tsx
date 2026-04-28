import SimplePage from "@/components/SimplePage";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success("Message sent — we'll be in touch within one working day.");
  };
  return (
    <SimplePage kicker="CONTACT" title="Get in Touch with VitaCare" subtitle="Our Marylebone team is here to help with appointments, insurance queries and general enquiries.">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display text-2xl font-bold text-primary">Visit our clinic</h2>
          <ul className="mt-6 space-y-4 text-muted-foreground">
            <li className="flex gap-3"><MapPin className="text-accent shrink-0 mt-1" size={18}/> 18 Harley Street, Marylebone, London W1G 9PL</li>
            <li className="flex gap-3"><Phone className="text-accent shrink-0 mt-1" size={18}/> +44 (0)20 7946 0888</li>
            <li className="flex gap-3"><Mail className="text-accent shrink-0 mt-1" size={18}/> hello@vitacare.co.uk</li>
            <li className="flex gap-3"><Clock className="text-accent shrink-0 mt-1" size={18}/> Mon–Fri 08:00–19:00 · Sat 09:00–14:00<br/>Telehealth: 8am–10pm, 7 days</li>
          </ul>
          <div className="mt-8 bg-secondary rounded-2xl p-6 text-sm text-muted-foreground">
            <strong className="text-primary">Areas served:</strong> Marylebone, Fitzrovia, Paddington, St John's Wood, Mayfair, Regent's Park.
          </div>
        </div>
        <form onSubmit={onSubmit} className="bg-white border border-border rounded-3xl p-8 shadow-card space-y-4">
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Full name</label>
            <input required className="w-full rounded-xl border border-border px-4 py-3 focus:border-accent outline-none"/>
          </div>
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Email</label>
            <input required type="email" className="w-full rounded-xl border border-border px-4 py-3 focus:border-accent outline-none"/>
          </div>
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Phone (optional)</label>
            <input className="w-full rounded-xl border border-border px-4 py-3 focus:border-accent outline-none"/>
          </div>
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Message</label>
            <textarea required rows={5} className="w-full rounded-xl border border-border px-4 py-3 focus:border-accent outline-none"/>
          </div>
          <button type="submit" disabled={sent} className="w-full bg-primary text-white rounded-full py-3.5 font-semibold hover:bg-primary/90 transition-all active:scale-[0.97]">
            {sent ? "Message sent ✓" : "Send message"}
          </button>
        </form>
      </div>
    </SimplePage>
  );
}
