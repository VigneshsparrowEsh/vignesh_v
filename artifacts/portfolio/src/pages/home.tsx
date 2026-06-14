import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Github, Linkedin, Phone,
  ArrowRight, ArrowDown, BarChart2, Lightbulb, FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroCanvas from "@/components/HeroCanvas";
import CustomCursor from "@/components/CustomCursor";

const AMBER   = "#F5A623";
const BG      = "#0A0A0A";
const SURFACE = "#111111";
const BORDER  = "rgba(255,255,255,0.08)";
const MUTED   = "#6B6B6B";

/* ─── Contact Form ─────────────────────────────────────────── */
function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName,  setLastName]  = useState("");
  const [subject,   setSubject]   = useState("");
  const [email,     setEmail]     = useState("");
  const [message,   setMessage]   = useState("");
  const [status,    setStatus]    = useState<"idle"|"sending"|"success"|"error">("idle");
  const [errorMsg,  setErrorMsg]  = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("Name, email, and message are required.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstName.trim()} ${lastName.trim()}`.trim(),
          email: email.trim(),
          subject: subject.trim() || "Portfolio Contact",
          message: message.trim(),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as {error?: string}).error ?? "Something went wrong");
      }
      setStatus("success");
      setFirstName(""); setLastName(""); setSubject(""); setEmail(""); setMessage("");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message.");
      setStatus("error");
    }
  };

  const inputCls = "h-12 rounded-none border-0 border-b text-white placeholder:text-zinc-700 bg-transparent focus-visible:ring-0";

  return (
    <div className="reveal-hidden" style={{ transitionDelay: "0.2s" }}>
      <div className="border p-8 md:p-10" style={{ borderColor: BORDER, background: SURFACE }}>
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
              style={{ background: `${AMBER}22`, border: `1px solid ${AMBER}55` }}>✓</div>
            <h3 className="font-display text-2xl font-medium text-white">Message Sent</h3>
            <p className="text-sm" style={{ color: MUTED }}>Thanks for reaching out — I'll get back to you soon.</p>
            <button onClick={() => setStatus("idle")} className="text-xs uppercase tracking-widest mt-2 hover:underline" style={{ color: AMBER }}>
              Send another
            </button>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-medium" style={{ color: MUTED }}>First Name *</label>
                <Input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="John" className={inputCls} style={{ borderColor: BORDER }} />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-medium" style={{ color: MUTED }}>Last Name</label>
                <Input value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Doe" className={inputCls} style={{ borderColor: BORDER }} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-medium" style={{ color: MUTED }}>Company / Role</label>
              <Input value={subject} onChange={e => setSubject(e.target.value)} placeholder="Tech Corp" className={inputCls} style={{ borderColor: BORDER }} />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-medium" style={{ color: MUTED }}>Email Address *</label>
              <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" className={inputCls} style={{ borderColor: BORDER }} />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-medium" style={{ color: MUTED }}>Message *</label>
              <Textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="How can we work together?"
                className="rounded-none border-0 border-b text-white placeholder:text-zinc-700 bg-transparent focus-visible:ring-0 min-h-[130px] resize-none"
                style={{ borderColor: BORDER }} />
            </div>
            {status === "error" && <p className="text-xs" style={{ color: "#ef4444" }}>{errorMsg}</p>}
            <Button type="submit" disabled={status === "sending"}
              className="w-full text-sm font-bold uppercase tracking-widest rounded-none text-black transition-all mt-4 disabled:opacity-60"
              style={{ background: AMBER, height: "3.25rem" }}>
              {status === "sending" ? "Sending…" : "Send Message"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}

/* ─── Main Page ─────────────────────────────────────────────── */
export default function Home() {
  const [scrolled,       setScrolled]       = useState(false);
  const [activeSection,  setActiveSection]  = useState("home");

  /* Nav scroll */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* Intersection observer — CSS reveal */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            if (entry.target.id) setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-10% 0px -10% 0px" }
    );
    document.querySelectorAll(".reveal-hidden").forEach((el) => obs.observe(el));
    document.querySelectorAll("section[id]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* GSAP scroll animations */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    /* Section headings slide from left */
    document.querySelectorAll(".gsap-heading").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        opacity: 0, x: -60, duration: 1, ease: "power3.out",
      });
    });

    /* Service cards cascade */
    gsap.from(".gsap-service-card", {
      scrollTrigger: { trigger: ".gsap-services-grid", start: "top 75%" },
      opacity: 0, y: 80, duration: 0.8, stagger: 0.15, ease: "power3.out",
    });

    /* Experience rows slide from right */
    gsap.from(".gsap-exp-item", {
      scrollTrigger: { trigger: ".gsap-exp-list", start: "top 80%" },
      opacity: 0, x: 50, duration: 0.7, stagger: 0.1, ease: "power2.out",
    });

    /* Case cards scale up */
    gsap.from(".gsap-case-card", {
      scrollTrigger: { trigger: ".gsap-cases-grid", start: "top 75%" },
      opacity: 0, scale: 0.92, y: 40, duration: 0.8, stagger: 0.12, ease: "back.out(1.4)",
    });

    /* AI skill pills wave */
    gsap.from(".gsap-ai-skill", {
      scrollTrigger: { trigger: ".gsap-ai-skills", start: "top 80%" },
      opacity: 0, y: 20, scale: 0.8, duration: 0.5, stagger: 0.06, ease: "back.out(2)",
    });

    /* Contact cards slide from left */
    gsap.from(".gsap-contact-card", {
      scrollTrigger: { trigger: ".gsap-contact-cards", start: "top 80%" },
      opacity: 0, x: -40, duration: 0.6, stagger: 0.1, ease: "power2.out",
    });

    /* Stats count-up */
    document.querySelectorAll(".gsap-stat").forEach((el) => {
      const target  = parseInt(el.getAttribute("data-target") ?? "0", 10);
      const suffix  = el.getAttribute("data-suffix") ?? "";
      const counter = { val: 0 };
      gsap.to(counter, {
        scrollTrigger: { trigger: el, start: "top 85%" },
        val: target, duration: 2, ease: "power2.out",
        onUpdate() { el.textContent = Math.ceil(counter.val) + suffix; },
      });
    });

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  /* Scroll progress bar */
  useEffect(() => {
    const bar = document.getElementById("scroll-progress-bar");
    if (!bar) return;
    const fn = () => {
      const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      bar.style.width = pct + "%";
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { name: "Work",       id: "portfolio"  },
    { name: "Experience", id: "experience" },
    { name: "Services",   id: "services"   },
    { name: "Contact",    id: "contact"    },
  ];

  return (
    <div style={{ background: BG, color: "#E4E4E4" }} className="min-h-screen overflow-x-hidden font-body selection:bg-[#F5A623] selection:text-black">

      {/* ── Scroll Progress Bar ── */}
      <div id="scroll-progress-bar" className="fixed top-0 left-0 z-[200] h-[3px] w-0 transition-none"
        style={{ background: "linear-gradient(90deg, #F5A623, #fff)" }} />

      {/* ── Custom Cursor ── */}
      <CustomCursor />

      {/* ── Navigation ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 h-20 px-6 md:px-12 flex items-center justify-between glass-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="font-display text-2xl font-semibold tracking-wide text-white cursor-none"
          onClick={() => scrollTo("home")}>
          Vignesh V.
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-zinc-500">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)}
              className={`hover:text-[#F5A623] transition-colors ${activeSection === link.id ? "text-[#F5A623]" : ""}`}>
              {link.name}
            </button>
          ))}
        </div>

        <Button onClick={() => scrollTo("contact")}
          className="hidden md:flex border border-[#F5A623]/40 text-[#F5A623] bg-transparent hover:bg-[#F5A623] hover:text-black transition-all text-sm rounded-none px-5 h-9">
          Let's Talk
        </Button>
      </nav>

      {/* Amber nav accent line */}
      <div className="fixed top-20 left-0 right-0 z-40 h-px" style={{ background: `${AMBER}22` }} />

      {/* ── Hero ── */}
      <section id="home" className="pt-36 pb-20 min-h-[90vh] flex items-center">
        <div className="container px-6 md:px-12 mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left */}
            <div className="lg:col-span-6 flex flex-col gap-8 order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping-slow" style={{ background: AMBER }} />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ background: AMBER }} />
                </span>
                <span className="text-xs uppercase tracking-widest font-medium" style={{ color: AMBER }}>Available for projects</span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35 }}>
                <p className="font-display text-xl font-light mb-3" style={{ color: MUTED }}>👋 Hello! I'm</p>
                <h1 className="font-display font-semibold leading-[1.06] text-white"
                  style={{ fontSize: "clamp(2.8rem, 6vw, 5.8rem)", letterSpacing: "-0.03em" }}>
                  Vignesh V.
                </h1>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
                <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border"
                  style={{ borderColor: `${AMBER}40`, background: `${AMBER}10`, color: AMBER }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: AMBER }} /> AI Business Analyst
                </span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.65 }}>
                <p className="text-base leading-relaxed max-w-lg" style={{ color: MUTED }}>
                  An AI-era Business Analyst, data storyteller, and founder. I turn complex business
                  problems into clear decisions using data, dashboards, and AI strategy. Also building{" "}
                  <a href="https://skillyou.in" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-[#F5A623] transition-colors" style={{ color: "#AAA" }}>
                    SkillYou
                  </a>
                  , an AI-powered career platform.
                </p>
              </motion.div>

              <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col gap-3 text-sm" style={{ color: "#AAA" }}>
                {[
                  "Translate business problems into data-driven solutions",
                  "Build AI strategies executives can act on today",
                  "Stakeholder alignment, BRDs, and sprint-ready specs",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-black" style={{ background: AMBER }}>✓</span>
                    {item}
                  </li>
                ))}
              </motion.ul>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.1 }}
                className="flex flex-wrap gap-4 pt-2">
                <Button onClick={() => scrollTo("contact")}
                  className="text-black text-sm px-8 py-6 rounded-full font-semibold group transition-all hover:-translate-y-1 hover:shadow-xl"
                  style={{ background: AMBER }}>
                  Let's Talk
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a href="/vignesh_v_resume.pdf" download="Vignesh_V_Resume.pdf">
                  <Button variant="outline"
                    className="text-sm px-8 py-6 rounded-full font-medium transition-all hover:-translate-y-1"
                    style={{ borderColor: "rgba(255,255,255,0.18)", color: "#C4C4C4", background: "transparent" }}>
                    <ArrowDown className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </a>
              </motion.div>
            </div>

            {/* Right — Portrait */}
            <div className="lg:col-span-6 order-1 lg:order-2 relative">
              {/* Floating badges */}
              <div className="absolute top-8 -left-2 z-10 animate-float1 hidden lg:block">
                <span className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-full shadow-2xl"
                  style={{ background: SURFACE, border: `1px solid ${BORDER}`, color: "#DDD" }}>
                  📊 Power BI Expert
                </span>
              </div>
              <div className="absolute bottom-20 -right-2 z-10 animate-float2 hidden lg:block">
                <span className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-full shadow-2xl"
                  style={{ background: SURFACE, border: `1px solid ${BORDER}`, color: "#DDD" }}>
                  🤖 AI Strategy
                </span>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 z-10 animate-floatBubble hidden lg:block" style={{ right: "-1rem" }}>
                <span className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-full shadow-2xl"
                  style={{ background: `${AMBER}20`, border: `1px solid ${AMBER}50`, color: AMBER }}>
                  Hello 👋
                </span>
              </div>
              {/* Photo */}
              <div className="relative w-full max-w-sm mx-auto group">
                <div className="absolute inset-0 translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"
                  style={{ background: `${AMBER}18` }} />
                <div className="absolute inset-0 border z-10 pointer-events-none" style={{ borderColor: "rgba(255,255,255,0.1)" }} />
                <div className="aspect-[4/5] overflow-hidden relative z-0">
                  <img src="/vignesh.png" alt="Vignesh V"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ filter: "none" }} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Social Strip ── */}
      <div style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl py-5 flex flex-wrap items-center justify-center md:justify-start gap-8">
          {[
            { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn",  href: "https://linkedin.com/in/vignesh-v-051a001b3" },
            { icon: <Github   className="w-4 h-4" />, label: "GitHub",    href: "https://github.com/VigneshsparrowEsh" },
            { icon: <Phone    className="w-4 h-4" />, label: "+91 93449 41328", href: "tel:+919344941328" },
            { icon: <Mail     className="w-4 h-4" />, label: "VIGVISHNU987@GMAIL.COM", href: "mailto:VIGVISHNU987@GMAIL.COM" },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium hover:text-[#F5A623] transition-colors"
              style={{ color: MUTED }}>
              {s.icon} {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* ── Ticker 1 — Dark ── */}
      <div style={{ background: "#0B0B0B", borderBottom: `1px solid ${BORDER}` }} className="overflow-hidden py-5">
        <div className="whitespace-nowrap flex w-fit animate-marquee">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center shrink-0" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#888" }}>
              {["DATA ANALYSIS","AI STRATEGY","POWER BI","SQL & PYTHON","PROMPT ENGINEERING","BUSINESS ANALYSIS","RAG ARCHITECTURE","STAKEHOLDER MANAGEMENT","BRD / FRD WRITING","STARTUP FOUNDER"].map((t) => (
                <span key={t} className="mx-6">
                  <span className="mr-6" style={{ color: AMBER }}>◆</span>{t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Stats Strip ── */}
      <div style={{ background: SURFACE, borderBottom: `1px solid ${BORDER}` }}>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "3", suffix: "+", label: "Years Experience" },
              { value: "10", suffix: "+", label: "Projects Delivered" },
              { value: "3", suffix: "",  label: "Companies" },
              { value: "87", suffix: "%", label: "ML Model Accuracy" },
            ].map((s, i) => (
              <div key={i} className="reveal-hidden flex flex-col gap-2 border-l pl-6"
                style={{ borderColor: BORDER, transitionDelay: `${i * 80}ms` }}>
                <span className="font-display text-4xl md:text-5xl font-medium text-white gsap-stat"
                  data-target={s.value} data-suffix={s.suffix}>
                  {s.value}{s.suffix}
                </span>
                <span className="text-xs uppercase tracking-widest" style={{ color: MUTED }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Experience ── */}
      <section id="experience" className="py-24">
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
            <div className="reveal-hidden">
              <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: AMBER }}>— Career</p>
              <h2 className="font-display font-medium text-4xl md:text-5xl text-white mb-6 gsap-heading">Experience</h2>
              <p className="text-base leading-relaxed" style={{ color: MUTED }}>3+ years across supply chain analytics, BI, consulting, and AI product development.</p>
            </div>

            <div className="flex flex-col gsap-exp-list">
              {[
                {
                  role: "Supply Chain Analyst Executive",
                  company: "Flipkart — Myntra | Central Control Tower, Bengaluru",
                  date: "Sep 2025 – Present",
                  current: true,
                  bullets: [
                    "Monitored end-to-end shipment planning across Myntra's Central Control Tower — tracking 5–8 lakh consignments per day from fulfillment centers to last-mile delivery",
                    "Contributed to achieving the BAU target of 3.7% asset utilization efficiency via root cause analysis and coordination with logistics partners",
                    "Built Power BI dashboards to track shipment KPIs, delivery SLAs, and fulfilment metrics for planning and logistics teams",
                    "Automated daily supply chain reports using Python (Pandas) and Advanced Excel (Power Query, Pivot Tables)",
                  ],
                },
                {
                  role: "Data & Business Analyst",
                  company: "Spire Technologies Pvt Ltd, Bengaluru",
                  date: "Sep 2024 – Aug 2025",
                  bullets: [
                    "Analyzed large operational and campaign datasets using SQL and Python across 5+ client accounts, improving data accuracy from 75% to 85%",
                    "Designed and delivered 3+ Power BI dashboards aligned to Balanced Scorecard (BSC) metrics for real-time ROI monitoring",
                    "Conducted SWOT and PESTLE analyses; delivered strategic recommendations for 8+ senior stakeholders",
                  ],
                },
                {
                  role: "Business Analyst",
                  company: "Frankmax Tech Pvt Ltd, Nagercoil, Kanyakumari",
                  date: "Aug 2020 – Sep 2022",
                  bullets: [
                    "Gathered and documented business requirements via stakeholder interviews using BRD and FRD frameworks across 3+ internal teams",
                    "Analyzed operational and procurement data to identify bottlenecks — improving business performance from 60% to 80% in 6 months",
                    "Built and maintained Power BI and Advanced Excel dashboards to track vendor performance, costs, and project milestones",
                  ],
                },
                {
                  role: "Founder — SkillYou AI Platform",
                  company: "Self-Founded · skillyou.in",
                  date: "2023 – Present",
                  bullets: [
                    "Designed and built a 5-layer AI job agent platform powered by Claude API, Supabase, and PostgreSQL",
                    "End-to-end product: job discovery, resume intelligence, career pivot guidance, and B2B revenue model",
                  ],
                },
              ].map((job, i) => (
                <div key={i} className="group py-9 gsap-exp-item" style={{ borderTop: `1px solid ${BORDER}` }}>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="font-display font-medium text-xl md:text-2xl text-white group-hover:text-[#F5A623] transition-colors mb-1">
                        {job.role}
                      </h3>
                      <p className="text-sm" style={{ color: MUTED }}>{job.company}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-xs uppercase tracking-widest px-3 py-1.5 border font-medium whitespace-nowrap"
                        style={{ borderColor: BORDER, color: "#888" }}>{job.date}</span>
                      {job.current && (
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 flex items-center gap-1.5 whitespace-nowrap"
                          style={{ background: `${AMBER}20`, color: AMBER }}>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: AMBER }} /> Current
                        </span>
                      )}
                    </div>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#888" }}>
                        <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: AMBER }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div style={{ borderTop: `1px solid ${BORDER}` }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section id="education" className="py-24" style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
            <div className="reveal-hidden">
              <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: AMBER }}>— Academic</p>
              <h2 className="font-display font-medium text-4xl md:text-5xl text-white mb-6 gsap-heading">Education</h2>
              <p className="text-base leading-relaxed" style={{ color: MUTED }}>Formal degrees and applied technical training across business, engineering, and AI.</p>
            </div>
            <div className="flex flex-col">
              {[
                { degree: "MBA — Business Analytics & Operations Management", institution: "Anna University", location: "Chennai, India", year: "2022 – 2024" },
                { degree: "B.E. — Mechanical Engineering",                    institution: "RCET, Anna University", location: "Chennai, India", year: "2016 – 2020" },
                { degree: "Diploma — Electronics & Communication (Python & ML)", institution: "Netwoksz System", location: "Trivandrum, India", year: "2021" },
              ].map((edu, i) => (
                <div key={i} className="flex items-start gap-6 py-8 reveal-hidden"
                  style={{ borderTop: `1px solid ${BORDER}`, transitionDelay: `${i * 100}ms` }}>
                  <div className="w-10 h-10 flex-shrink-0 border flex items-center justify-center" style={{ borderColor: BORDER }}>
                    <span style={{ color: AMBER, fontSize: "1.1rem" }}>◆</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-medium text-lg md:text-xl text-white mb-1 leading-snug">{edu.degree}</h3>
                    <p className="text-sm" style={{ color: MUTED }}>{edu.institution} — {edu.location}</p>
                  </div>
                  <div className="flex-shrink-0 px-3 py-1.5 border text-xs font-medium whitespace-nowrap" style={{ borderColor: BORDER, color: "#888" }}>
                    {edu.year}
                  </div>
                </div>
              ))}
              <div style={{ borderTop: `1px solid ${BORDER}` }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-24">
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 reveal-hidden">
            <div>
              <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: AMBER }}>— Work</p>
              <h2 className="font-display font-medium text-4xl md:text-5xl text-white gsap-heading">Professional Skills<br />Demonstrated</h2>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-right" style={{ color: MUTED }}>Live products, ML models, and analytics projects that show real depth.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px" style={{ background: BORDER }}>
            {/* SkillYou */}
            <div className="group reveal-hidden overflow-hidden" style={{ background: BG }}>
              <div className="overflow-hidden h-52 relative">
                <img src="/skillyou.png" alt="SkillYou" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" style={{ filter: "grayscale(20%)" }} />
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5" style={{ background: AMBER, color: "#000" }}>Live Product</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display font-medium text-2xl text-white">SkillYou</h3>
                  <a href="https://skillyou.in" target="_blank" rel="noopener noreferrer"
                    className="text-xs font-medium uppercase tracking-wider px-3 py-1.5 border transition-colors whitespace-nowrap flex-shrink-0"
                    style={{ borderColor: BORDER, color: MUTED }}>skillyou.in ↗</a>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>AI-powered career platform delivering personalised job recommendations, career path analysis, skill gap insights, and interview preparation. Built end-to-end and live.</p>
              </div>
            </div>

            {/* CryptoNice */}
            <div className="group reveal-hidden overflow-hidden" style={{ background: BG, transitionDelay: "0.1s" }}>
              <div className="overflow-hidden h-52 relative">
                <img src="/cryptonice.png" alt="CryptoNice" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" style={{ filter: "grayscale(20%)" }} />
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5" style={{ background: AMBER, color: "#000" }}>Live Product</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display font-medium text-2xl text-white">CryptoNice</h3>
                  <a href="https://cryptonice.lovable.app" target="_blank" rel="noopener noreferrer"
                    className="text-xs font-medium uppercase tracking-wider px-3 py-1.5 border transition-colors whitespace-nowrap flex-shrink-0"
                    style={{ borderColor: BORDER, color: MUTED }}>cryptonice.lovable.app ↗</a>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>Web3 portfolio and strategy platform for connecting crypto wallets, tracking real-time performance, and simulating crypto investment strategies.</p>
              </div>
            </div>

            {/* Heart Attack Prediction */}
            <div className="group reveal-hidden overflow-hidden" style={{ background: BG, transitionDelay: "0.2s" }}>
              <div className="h-52 flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, #0f0f1a 0%, #12122a 100%)" }}>
                <div className="text-center">
                  <span className="font-display text-6xl font-light text-white opacity-20">87%</span>
                  <p className="text-xs uppercase tracking-widest mt-2 font-medium" style={{ color: AMBER }}>Accuracy</p>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 border" style={{ borderColor: `${AMBER}40`, color: AMBER }}>ML Model</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display font-medium text-2xl text-white">Heart Attack Prediction</h3>
                  <a href="https://github.com/VigneshsparrowEsh/Heart_attack_pred" target="_blank" rel="noopener noreferrer"
                    className="text-xs font-medium uppercase tracking-wider px-3 py-1.5 border transition-colors whitespace-nowrap flex-shrink-0"
                    style={{ borderColor: BORDER, color: MUTED }}>GitHub ↗</a>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>Binary classification model predicting heart attack likelihood using Logistic Regression, Decision Tree, and Random Forest in Python (Sklearn). Achieved 87% accuracy.</p>
              </div>
            </div>

            {/* E-Commerce Retention */}
            <div className="group reveal-hidden overflow-hidden" style={{ background: BG, transitionDelay: "0.3s" }}>
              <div className="h-52 flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, #111108 0%, #1a1a0f 100%)" }}>
                <div className="text-center">
                  <span className="font-display text-6xl font-light text-white opacity-20">RFM</span>
                  <p className="text-xs uppercase tracking-widest mt-2 font-medium" style={{ color: AMBER }}>Analysis</p>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 border" style={{ borderColor: `${AMBER}40`, color: AMBER }}>MBA Capstone 2024</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display font-medium text-2xl text-white mb-3">E-Commerce Customer Retention</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>Customer churn prediction using RFM analysis and Python, segmenting users into loyalty tiers. Power BI dashboard tracking conversion rate, AOV, and cart abandonment.</p>
              </div>
            </div>

            {/* proof_of_Build */}
            <div className="group reveal-hidden overflow-hidden" style={{ background: BG, transitionDelay: "0.4s" }}>
              <div className="overflow-hidden h-52 relative">
                <img src="/proofofbuild.png" alt="proof_of_Build platform" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5" style={{ background: AMBER, color: "#000" }}>Live Product</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display font-medium text-2xl text-white">proof_of_Build</h3>
                  <a href="https://proofbuild.in/" target="_blank" rel="noopener noreferrer"
                    className="text-xs font-medium uppercase tracking-wider px-3 py-1.5 border transition-colors whitespace-nowrap flex-shrink-0"
                    style={{ borderColor: BORDER, color: MUTED }}>proofbuild.in ↗</a>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>A platform that connects builders and startup founders to solve real-world business problems. Founders post real challenges; builders ship working prototypes — with escrow, contracts, and conversion to long-term roles built in.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section id="portfolio" className="py-24" style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 reveal-hidden">
            <div>
              <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: AMBER }}>— Portfolio</p>
              <h2 className="font-display font-medium text-4xl md:text-5xl text-white gsap-heading">Case Studies</h2>
            </div>
            <p className="text-sm max-w-sm text-right" style={{ color: MUTED }}>A selection of my best work in AI, analytics, and strategy.</p>
          </div>

          <div className="gsap-cases-grid">
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-px mb-px" style={{ background: BORDER }}>
              <div className="p-10 md:p-14 case-card gsap-case-card flex flex-col justify-between min-h-[380px]" style={{ background: "#0D0D0D" }}>
                <div className="inline-block text-xs font-bold tracking-widest mb-10 px-3 py-1.5 border w-fit" style={{ borderColor: `${AMBER}30`, color: AMBER }}>
                  🚀 AI Product
                </div>
                <div>
                  <h3 className="font-display font-medium text-3xl md:text-4xl text-white leading-tight mb-5">SkillYou — AI-Powered Career Platform for the Disrupted Job Market</h3>
                  <p className="text-base leading-relaxed" style={{ color: "#666" }}>End-to-end AI job platform combining job discovery, resume intelligence, and career pivot guidance. 5-layer intelligent job agent powered by Claude API, Supabase & PostgreSQL.</p>
                </div>
              </div>

              <div className="flex flex-col gap-px" style={{ background: BORDER }}>
                <div className="p-8 case-card gsap-case-card flex-1" style={{ background: "#0D0D0D" }}>
                  <div className="text-xs font-bold tracking-widest mb-5 px-3 py-1.5 border inline-block" style={{ borderColor: `${AMBER}30`, color: AMBER }}>📈 Data Analysis</div>
                  <h3 className="font-display font-medium text-xl text-white mb-3">E-Commerce Retention & Inventory Scorecard</h3>
                  <p className="text-sm" style={{ color: "#666" }}>Python + SQL RFM segmentation delivering churn reduction and stock optimization.</p>
                </div>
                <div className="p-8 case-card gsap-case-card flex-1" style={{ background: "#0D0D0D" }}>
                  <div className="text-xs font-bold tracking-widest mb-5 px-3 py-1.5 border inline-block" style={{ borderColor: `${AMBER}30`, color: AMBER }}>🏥 Machine Learning</div>
                  <h3 className="font-display font-medium text-xl text-white mb-3">Heart Attack Prediction — 87% Accuracy</h3>
                  <p className="text-sm" style={{ color: "#666" }}>Binary classification using Random Forest in Python (Sklearn).</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: BORDER }}>
              <div className="p-8 case-card gsap-case-card" style={{ background: "#0D0D0D" }}>
                <div className="text-xs font-bold tracking-widest mb-5 px-3 py-1.5 border inline-block" style={{ borderColor: `${AMBER}30`, color: AMBER }}>📦 BI Dashboard</div>
                <h3 className="font-display font-medium text-xl text-white mb-3">Myntra Supply Chain KPI Dashboard</h3>
                <p className="text-sm" style={{ color: "#666" }}>Real-time Power BI tracking shipment KPIs and asset utilization for Flipkart.</p>
              </div>
              <div className="p-8 case-card gsap-case-card" style={{ background: "#0D0D0D" }}>
                <div className="text-xs font-bold tracking-widest mb-5 px-3 py-1.5 border inline-block" style={{ borderColor: `${AMBER}30`, color: AMBER }}>🎯 Strategy</div>
                <h3 className="font-display font-medium text-xl text-white mb-3">BSC Client Dashboards — 5+ Accounts</h3>
                <p className="text-sm" style={{ color: "#666" }}>Balanced Scorecard dashboards enabling real-time ROI and conversion tracking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI Era Strip ── */}
      <section className="py-24">
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-hidden">
              <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: AMBER }}>— My Edge</p>
              <h2 className="font-display font-medium text-4xl md:text-5xl text-white mb-6 gsap-heading">Built for the AI Era</h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: MUTED, maxWidth: "28rem" }}>
                Bridging the gap between technical possibility and business value. I don't just write SQL — I build systems that make decisions.
              </p>
              <div className="flex flex-wrap gap-2 gsap-ai-skills">
                {["Prompt Engineering","RAG Architecture","Fine-tuning LLMs","Vibe Coding","Claude API","AI Product Strategy","ML (Sklearn)","Supabase"].map((skill, i) => (
                  <span key={i} className="gsap-ai-skill px-4 py-2 border text-sm hover:text-[#F5A623] hover:border-[#F5A623]/40 transition-colors cursor-default"
                    style={{ borderColor: BORDER, color: "#888" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 3D Canvas */}
            <div className="reveal-hidden flex flex-col items-center gap-4" style={{ transitionDelay: "0.15s" }}>
              <div className="w-full animate-glow-pulse rounded-xl overflow-hidden" style={{ maxWidth: 480 }}>
                <HeroCanvas />
              </div>
              <p className="text-xs uppercase tracking-widest text-center" style={{ color: MUTED }}>
                Interactive · Move your cursor over the shape
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24" style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 reveal-hidden">
            <div>
              <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: AMBER }}>— My Services</p>
              <h2 className="font-display font-medium text-4xl md:text-5xl text-white gsap-heading">Areas of Expertise</h2>
            </div>
            <p className="text-sm max-w-sm text-right" style={{ color: MUTED }}>
              Partnering with teams to deliver clear insights, optimized processes, and AI-forward strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px gsap-services-grid" style={{ background: BORDER }}>
            {[
              {
                Icon: BarChart2,
                title: "Data & Business Analysis",
                desc: "SQL queries, Python analysis, Power BI dashboards, KPI frameworks, and data storytelling that drives real decisions — not just reports.",
              },
              {
                Icon: Lightbulb,
                title: "AI Strategy & Consulting",
                desc: "Identify where AI can cut costs, speed up processes, or unlock revenue. Map workflows to AI opportunities and build the roadmap.",
              },
              {
                Icon: FileText,
                title: "Product & Requirements",
                desc: "Stakeholder interviews, BRD/FRD docs, process mapping, and Agile sprint facilitation. Bridge business and engineering teams.",
              },
            ].map(({ Icon, title, desc }, i) => (
              <div key={i} className="service-card gsap-service-card group p-10 relative overflow-hidden transition-colors duration-300" style={{ background: BG }}>
                <div className="w-12 h-12 border flex items-center justify-center mb-8 transition-colors duration-300 group-hover:border-[#F5A623]"
                  style={{ borderColor: BORDER }}>
                  <Icon className="w-5 h-5 group-hover:text-[#F5A623] transition-colors" style={{ color: "#666" }} />
                </div>
                <h3 className="font-display font-medium text-xl text-white mb-4">{title}</h3>
                <p className="text-sm leading-relaxed mb-8" style={{ color: MUTED }}>{desc}</p>
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest group-hover:text-[#F5A623] transition-colors gap-2" style={{ color: "#666" }}>
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ticker 2 — Amber (reverse) ── */}
      <div style={{ background: AMBER }} className="overflow-hidden py-5">
        <div className="whitespace-nowrap flex w-fit animate-marquee-reverse">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center shrink-0"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "#0B0B0B" }}>
              {["OPEN TO REMOTE","USD/EUR COMPENSATION","FULL-TIME OR CONTRACT","WORLDWIDE ELIGIBLE","BENGALURU INDIA","AI-ERA ANALYST","AVAILABLE NOW"].map((t) => (
                <span key={t} className="mx-6">
                  <span className="mr-6">✦</span>{t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Contact ── */}
      <section id="contact" className="py-24">
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 reveal-hidden">
            <div>
              <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: AMBER }}>— Get In Touch</p>
              <h2 className="font-display font-medium text-4xl md:text-5xl text-white gsap-heading">Let's Work Together</h2>
            </div>
            <p className="text-sm max-w-xs text-right" style={{ color: MUTED }}>Open to fully remote roles as BA, AI Analyst, AI Consultant globally. USD/EUR preferred.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex flex-col gap-4 gsap-contact-cards">
                {[
                  { icon: <Mail     className="w-5 h-5" />, label: "Email",    value: "VIGVISHNU987@GMAIL.COM",              href: "mailto:VIGVISHNU987@GMAIL.COM" },
                  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "linkedin.com/in/vignesh-v-051a001b3",  href: "https://linkedin.com/in/vignesh-v-051a001b3" },
                  { icon: <Github   className="w-5 h-5" />, label: "GitHub",   value: "github.com/VigneshsparrowEsh",        href: "https://github.com/VigneshsparrowEsh" },
                  { icon: <Phone    className="w-5 h-5" />, label: "Phone",    value: "+91 93449 41328",                     href: "tel:+919344941328" },
                ].map((c, i) => (
                  <a key={i} href={c.href} target="_blank" rel="noreferrer"
                    className="contact-card gsap-contact-card flex items-center gap-5 p-5 border-l-2 group"
                    style={{ borderColor: `${AMBER}40`, background: `${AMBER}06` }}>
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:text-[#F5A623]"
                      style={{ color: AMBER }}>{c.icon}</div>
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: MUTED }}>{c.label}</p>
                      <p className="text-sm font-medium text-white">{c.value}</p>
                    </div>
                    <ArrowRight className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" style={{ color: AMBER }} />
                  </a>
                ))}
              </div>
            </div>

            <ContactForm />
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
            <a href="https://linkedin.com/in/vignesh-v-051a001b3" target="_blank" rel="noreferrer" className="hover:text-[#F5A623] transition-colors">LinkedIn</a>
            <a href="https://github.com/VigneshsparrowEsh"        target="_blank" rel="noreferrer" className="hover:text-[#F5A623] transition-colors">GitHub</a>
            <button onClick={() => scrollTo("home")} className="hover:text-[#F5A623] transition-colors">↑ Top</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
