import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft, ArrowRight, Github, ExternalLink,
  Zap, Users, Clipboard, Target, CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomCursor from "@/components/CustomCursor";

const TEAL    = "#14B8A6";
const GREEN   = "#10B981";
const BG      = "#0A0A0A";
const SURFACE = "#111111";
const BORDER  = "rgba(255,255,255,0.08)";
const MUTED   = "#6B6B6B";

export default function ProofBuildPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const techStack = [
    { category: "Frontend", items: ["React", "Vite", "Tailwind CSS", "Radix UI", "Framer Motion"] },
    { category: "Backend & database", items: ["Supabase (Auth, Realtime, Storage)", "PostgreSQL", "Drizzle ORM", "Node.js"] },
    { category: "APIs & Webhooks", items: ["GitHub API Webhooks", "OAuth Providers", "SMTP Notifications"] }
  ];

  return (
    <div style={{ background: BG, color: "#E4E4E4" }} className="min-h-screen overflow-x-hidden font-body selection:bg-[#14B8A6] selection:text-black">
      {/* ── Custom Cursor ── */}
      <CustomCursor />

      {/* ── Navigation ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 h-20 px-6 md:px-12 flex items-center justify-between glass-nav ${scrolled ? "scrolled" : ""}`}>
        <Link href="/" className="font-display text-2xl font-semibold tracking-wide text-white cursor-none flex items-center gap-3">
          <ArrowLeft className="w-5 h-5 text-[#14B8A6]" />
          <span>Vignesh V.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-zinc-500">
          <Link href="/#portfolio" className="hover:text-[#14B8A6] transition-colors">Work</Link>
          <Link href="/#experience" className="hover:text-[#14B8A6] transition-colors">Experience</Link>
          <Link href="/#skills" className="hover:text-[#14B8A6] transition-colors">Skills</Link>
          <Link href="/#services" className="hover:text-[#14B8A6] transition-colors">Services</Link>
          <Link href="/#contact" className="hover:text-[#14B8A6] transition-colors">Contact</Link>
        </div>

        <Link href="/">
          <Button className="border border-[#14B8A6]/40 text-[#14B8A6] bg-transparent hover:bg-[#14B8A6] hover:text-black transition-all text-sm rounded-none px-5 h-9">
            Back to Home
          </Button>
        </Link>
      </nav>

      {/* Nav Accent Line */}
      <div className="fixed top-20 left-0 right-0 z-40 h-px" style={{ background: `${TEAL}22` }} />

      {/* ── Hero Section ── */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-20"
          style={{ background: `radial-gradient(circle, ${TEAL}, transparent)` }} />

        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="max-w-3xl flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-full"
                style={{ background: "rgba(20,184,166,0.15)", color: "#2dd4bf" }}>
                Collaborative Build Platform
              </span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">Active Product</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-semibold text-5xl md:text-7xl text-white leading-none tracking-tight">
              proof_of_Build
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl font-light leading-relaxed text-zinc-400">
              A community platform designed for builders to ship prototype solutions for challenges posted by startup founders within fast-paced build sprints.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4">
              <a href="https://proofbuild.in" target="_blank" rel="noreferrer">
                <Button className="text-black text-sm px-8 py-6 rounded-full font-semibold group transition-all hover:-translate-y-1 hover:shadow-xl"
                  style={{ background: TEAL }}>
                  Visit Live Site
                  <ExternalLink className="ml-2 h-4 w-4 text-black" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Key Metrics Strip ── */}
      <section style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }} className="py-14">
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "48-72h", label: "Sprint Duration", desc: "Strict build cycle optimized for prototype delivery" },
              { value: "5+", label: "Active Sprints", desc: "Collaborative design/build sprints launched in beta" },
              { value: "100%", label: "Realtime Sync", desc: "Live challenge feedback loops using Supabase channels" }
            ].map((metric, i) => (
              <div key={i} className="flex flex-col gap-2 border-l pl-6" style={{ borderColor: BORDER }}>
                <span className="font-display text-4xl font-semibold text-white">{metric.value}</span>
                <span className="text-xs uppercase tracking-widest font-bold" style={{ color: TEAL }}>{metric.label}</span>
                <span className="text-sm text-zinc-500">{metric.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Details ── */}
      <section className="py-24">
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
            
            {/* Left Content */}
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-5">
                <h2 className="font-display text-3xl font-medium text-white">The Business Challenge</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Early-stage startup founders often waste critical weeks trying to vet technical partners or build complex initial prototypes to test validation assumptions. Conversely, talented builders frequently lack real-world, high-impact problems to tackle for their portfolios.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  The mission of proof_of_Build is to bridge this gap. The platform needed to support structured hackathon-style challenge listings, builder profile verification, prototype uploads, and feedback dashboards.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h2 className="font-display text-3xl font-medium text-white">Key Platform Features</h2>
                <p className="text-zinc-400 leading-relaxed">
                  proof_of_Build is designed around collaborative, fast-paced shipping, utilizing realtime datastores to synchronize comments and team formations:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  {[
                    { title: "Founder Challenge Board", desc: "Provides structures for founders to list exact product hurdles, metrics, and API endpoints." },
                    { title: "Realtime Collaboration Workspace", desc: "Enables builders to form micro-teams and coordinate submissions synchronously." },
                    { title: "GitHub & Repo Integrations", desc: "Links directly to builder repositories to extract build history, checkouts, and deployments." },
                    { title: "Supabase Realtime Notifications", desc: "Synchronizes comments, reviews, and submission updates instantly for all participants." }
                  ].map((feat, i) => (
                    <li key={i} className="p-5 border flex flex-col gap-2" style={{ borderColor: BORDER, background: SURFACE }}>
                      <div className="flex items-center gap-2 text-white font-medium">
                        <CheckCircle className="w-4 h-4 text-[#2dd4bf]" />
                        {feat.title}
                      </div>
                      <p className="text-xs text-zinc-500 leading-relaxed">{feat.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Tech Column */}
            <div className="flex flex-col gap-10">
              <div className="p-8 border flex flex-col gap-6" style={{ borderColor: BORDER, background: SURFACE }}>
                <h3 className="text-xs uppercase tracking-widest font-bold text-white">Project Details</h3>
                <div className="flex flex-col gap-4 text-sm">
                  <div className="flex justify-between border-b pb-2" style={{ borderColor: BORDER }}>
                    <span className="text-zinc-500">Role</span>
                    <span className="text-white font-medium">Co-Founder &amp; Architect</span>
                  </div>
                  <div className="flex justify-between border-b pb-2" style={{ borderColor: BORDER }}>
                    <span className="text-zinc-500">Timeline</span>
                    <span className="text-white font-medium">2024</span>
                  </div>
                  <div className="flex justify-between border-b pb-2" style={{ borderColor: BORDER }}>
                    <span className="text-zinc-500">Category</span>
                    <span className="text-white font-medium">Startup Builder Community</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-xs uppercase tracking-widest font-bold text-white">Tech Stack</h3>
                <div className="flex flex-col gap-5">
                  {techStack.map((group, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">{group.category}</span>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <span key={item} className="text-xs px-2.5 py-1 rounded-full border"
                            style={{ borderColor: "rgba(20,184,166,0.25)", color: "#2dd4bf", background: "rgba(20,184,166,0.05)" }}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 border-t" style={{ borderColor: BORDER, background: SURFACE }}>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display text-xl font-medium text-white">VV.</div>
          <div className="text-xs text-center" style={{ color: MUTED }}>
            © {new Date().getFullYear()} Vignesh V — AI Business Analyst · Bengaluru, India
          </div>
          <div className="flex items-center gap-6 text-xs uppercase tracking-widest" style={{ color: MUTED }}>
            <a href="https://linkedin.com/in/vignesh-v-051a001b3" target="_blank" rel="noreferrer" className="hover:text-[#14B8A6] transition-colors">LinkedIn</a>
            <a href="https://github.com/VigneshsparrowEsh"        target="_blank" rel="noreferrer" className="hover:text-[#14B8A6] transition-colors">GitHub</a>
            <Link href="/" className="hover:text-[#14B8A6] transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
