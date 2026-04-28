import SimplePage from "@/components/SimplePage";
import { useState } from "react";
import { toast } from "sonner";

const services = ["General Practice (£89)", "Dental Check-up (£65)", "Telehealth Video GP (£49)", "Pharmacy Consultation", "Health Screening"];

export default function Book() {
  const [done, setDone] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    toast.success("Appointment requested — we'll confirm by phone within the hour.");
  };
  return (
    <SimplePage kicker="APPOINTMENT" title="Book Your Appointment"
      subtitle="Same-day appointments available Mon–Sat. Our team will confirm by phone within the hour.">
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto bg-white border border-border rounded-3xl p-8 shadow-card space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">First name</label>
            <input required className="w-full rounded-xl border border-border px-4 py-3 focus:border-accent outline-none"/>
          </div>
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Last name</label>
            <input required className="w-full rounded-xl border border-border px-4 py-3 focus:border-accent outline-none"/>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Email</label>
            <input required type="email" className="w-full rounded-xl border border-border px-4 py-3 focus:border-accent outline-none"/>
          </div>
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Phone (UK)</label>
            <input required type="tel" placeholder="+44 ..." className="w-full rounded-xl border border-border px-4 py-3 focus:border-accent outline-none"/>
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-primary mb-2">Service</label>
          <select required className="w-full rounded-xl border border-border px-4 py-3 focus:border-accent outline-none bg-white">
            <option value="">Select a service…</option>
            {services.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Preferred date</label>
            <input required type="date" className="w-full rounded-xl border border-border px-4 py-3 focus:border-accent outline-none"/>
          </div>
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">Preferred time</label>
            <input required type="time" className="w-full rounded-xl border border-border px-4 py-3 focus:border-accent outline-none"/>
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-primary mb-2">Notes (optional)</label>
          <textarea rows={3} className="w-full rounded-xl border border-border px-4 py-3 focus:border-accent outline-none"/>
        </div>
        <p className="text-xs text-muted-foreground">By submitting you agree to be contacted regarding your appointment. ICO-registered. Read our Privacy Policy.</p>
        <button type="submit" disabled={done} className="w-full bg-primary text-white rounded-full py-4 font-semibold hover:bg-primary/90 transition-all active:scale-[0.97]">
          {done ? "Request received ✓" : "Request appointment"}
        </button>
      </form>
    </SimplePage>
  );
}
