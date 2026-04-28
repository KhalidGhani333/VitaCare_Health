import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="py-32 bg-gradient-hero text-center">
        <div className="container">
          <p className="text-accent font-semibold">• 404</p>
          <h1 className="mt-4 font-display text-6xl md:text-8xl font-bold text-primary">Page not found</h1>
          <p className="mt-6 text-muted-foreground">The page you're looking for doesn't exist or has moved.</p>
          <Link to="/" className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-primary/90">
            Back to Home
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
