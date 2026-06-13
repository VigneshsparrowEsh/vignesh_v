import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, ArrowRight, ArrowDown, BarChart2, Lightbulb, FileText, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AMBER = "#F5A623";
const BG = "#0A0A0A";
const SURFACE = "#111111";
const BORDER = "rgba(255,255,255,0.08)";
const MUTED = "#6B6B6B";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
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
    document.querySelectorAll(".reveal-hidden").forEach((el) => observer.observe(el));
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { name: "Work", id: "portfolio" },
    { name: "Experience", id: "experience" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div style={{ background: BG, color: "#E4E4E4" }} className="min-h-screen overflow-x-hidden font-body selection:bg-[#F5A623] selection:text-black">

      {/* ── Navigation ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 h-20 px-6 md:px-12 flex items-center justify-between glass-nav ${scrolled ? "scrolled" : ""}`}>
        <div
          className="font-display text-2xl font-semibold tracking-wide text-white cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          Vignesh V.
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-zinc-500">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`hover:text-[#F5A623] transition-colors ${activeSection === link.id ? "text-[#F5A623]" : ""}`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <Button
          onClick={() => scrollTo("contact")}
          className="hidden md:flex border border-[#F5A623]/40 text-[#F5A623] bg-transparent hover:bg-[#F5A623] hover:text-black transition-all text-sm rounded-none px-5 h-9"
        >
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
            <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping-slow" style={{ background: AMBER }} />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ background: AMBER }} />
                </span>
                <span className="text-xs uppercase tracking-widest font-medium" style={{ color: AMBER }}>
                  Available for projects
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
                className="font-display font-medium leading-[1.08] text-white"
                style={{ fontSize: "clamp(2.6rem, 6vw, 5.5rem)" }}
              >
                I turn complex<br />
                <span className="italic" style={{ color: "#9A9A9A" }}>business problems</span><br />
                into clear decisions.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2 }}
                className="text-lg font-display leading-relaxed max-w-xl"
                style={{ color: MUTED }}
              >
                AI Business Analyst · Supply Chain · Data Storytelling<br />
                Based in Bengaluru, India.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Button
                  onClick={() => scrollTo("contact")}
                  className="text-black text-base px-8 py-6 rounded-none font-medium group transition-all"
                  style={{ background: AMBER }}
                >
                  Let's Talk
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a href="/vignesh_v_resume.pdf" download="Vignesh_V_Resume.pdf">
                  <Button
                    variant="outline"
                    className="text-base px-8 py-6 rounded-none font-medium transition-all"
                    style={{ borderColor: "rgba(255,255,255,0.15)", color: "#C4C4C4", background: "transparent" }}
                  >
                    <ArrowDown className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </a>
              </motion.div>
            </div>

            {/* Right — portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 order-1 lg:order-2"
            >
              <div className="relative w-full max-w-sm mx-auto group">
                {/* Amber offset shadow */}
                <div
                  className="absolute inset-0 translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"
                  style={{ background: `${AMBER}18` }}
                />
                <div className="absolute inset-0 border z-10 pointer-events-none" style={{ borderColor: "rgba(255,255,255,0.1)" }} />
                <div className="aspect-[4/5] overflow-hidden relative z-0">
                  <img
                    src="/vignesh.png"
                    alt="Vignesh V"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ filter: "none" }}
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Ticker ── */}
      <div style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, background: SURFACE }} className="overflow-hidden py-5">
        <div className="whitespace-nowrap flex w-fit animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center font-display font-semibold text-lg uppercase tracking-widest shrink-0" style={{ color: "#555" }}>
              <span className="mx-6" style={{ color: AMBER }}>◆</span> DATA ANALYSIS
              <span className="mx-6" style={{ color: AMBER }}>◆</span> AI STRATEGY
              <span className="mx-6" style={{ color: AMBER }}>◆</span> POWER BI DASHBOARDS
              <span className="mx-6" style={{ color: AMBER }}>◆</span> SQL & PYTHON
              <span className="mx-6" style={{ color: AMBER }}>◆</span> PROMPT ENGINEERING
              <span className="mx-6" style={{ color: AMBER }}>◆</span> BUSINESS ANALYSIS
              <span className="mx-6" style={{ color: AMBER }}>◆</span> RAG ARCHITECTURE
              <span className="mx-6" style={{ color: AMBER }}>◆</span> STAKEHOLDER MANAGEMENT
              <span className="mx-6" style={{ color: AMBER }}>◆</span> BRD / FRD WRITING
              <span className="mx-6" style={{ color: AMBER }}>◆</span> SUPPLY CHAIN ANALYTICS
            </div>
          ))}
        </div>
      </div>

      {/* ── Stats Strip ── */}
      <div style={{ background: SURFACE, borderBottom: `1px solid ${BORDER}` }}>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "3+", label: "Years Experience" },
              { value: "10+", label: "Projects Delivered" },
              { value: "3", label: "Companies" },
              { value: "87%", label: "ML Model Accuracy" },
            ].map((s, i) => (
              <div key={i} className="reveal-hidden flex flex-col gap-2 border-l pl-6" style={{ borderColor: BORDER, transitionDelay: `${i * 80}ms` }}>
                <span className="font-display text-4xl md:text-5xl font-medium text-white">{s.value}</span>
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
              <h2 className="font-display font-medium text-4xl md:text-5xl text-white mb-6">Experience</h2>
              <p className="text-base leading-relaxed" style={{ color: MUTED }}>3+ years across supply chain analytics, BI, consulting, and AI product development.</p>
            </div>

            <div className="flex flex-col">
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
                    "Automated daily supply chain reports using Python (Pandas) and Advanced Excel (Power Query, Pivot Tables)"
                  ]
                },
                {
                  role: "Data & Business Analyst",
                  company: "Spire Technologies Pvt Ltd, Bengaluru",
                  date: "Sep 2024 – Aug 2025",
                  bullets: [
                    "Analyzed large operational and campaign datasets using SQL and Python across 5+ client accounts, improving data accuracy from 75% to 85%",
                    "Designed and delivered 3+ Power BI dashboards aligned to Balanced Scorecard (BSC) metrics for real-time ROI monitoring",
                    "Conducted SWOT and PESTLE analyses; delivered strategic recommendations for 8+ senior stakeholders"
                  ]
                },
                {
                  role: "Business Analyst",
                  company: "Frankmax Tech Pvt Ltd, Nagercoil, Kanyakumari",
                  date: "Aug 2020 – Sep 2022",
                  bullets: [
                    "Gathered and documented business requirements via stakeholder interviews using BRD and FRD frameworks across 3+ internal teams",
                    "Analyzed operational and procurement data to identify bottlenecks — improving business performance from 60% to 80% in 6 months",
                    "Built and maintained Power BI and Advanced Excel dashboards to track vendor performance, costs, and project milestones"
                  ]
                }
              ].map((job, i) => (
                <div key={i} className="group py-9 reveal-hidden" style={{ borderTop: `1px solid ${BORDER}`, transitionDelay: `${i * 100}ms` }}>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="font-display font-medium text-xl md:text-2xl text-white group-hover:text-[#F5A623] transition-colors mb-1">
                        {job.role}
                      </h3>
                      <p className="text-sm" style={{ color: MUTED }}>{job.company}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-xs uppercase tracking-widest px-3 py-1.5 border font-medium whitespace-nowrap" style={{ borderColor: BORDER, color: "#888" }}>
                        {job.date}
                      </span>
                      {job.current && (
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 flex items-center gap-1.5 whitespace-nowrap" style={{ background: `${AMBER}20`, color: AMBER }}>
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
              <h2 className="font-display font-medium text-4xl md:text-5xl text-white mb-6">Education</h2>
              <p className="text-base leading-relaxed" style={{ color: MUTED }}>Formal degrees and applied technical training across business, engineering, and AI.</p>
            </div>
            <div className="flex flex-col">
              {[
                { degree: "MBA — Business Analytics & Operations Management", institution: "Anna University", location: "Chennai, India", year: "2022 – 2024" },
                { degree: "B.E. — Mechanical Engineering", institution: "RCET, Anna University", location: "Chennai, India", year: "2016 – 2020" },
                { degree: "Diploma — Electronics & Communication (Python & ML)", institution: "Netwoksz System", location: "Trivandrum, India", year: "2021" },
              ].map((edu, i) => (
                <div key={i} className="flex items-start gap-6 py-8 reveal-hidden" style={{ borderTop: `1px solid ${BORDER}`, transitionDelay: `${i * 100}ms` }}>
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
              <h2 className="font-display font-medium text-4xl md:text-5xl text-white">Professional Skills<br />Demonstrated</h2>
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
                  <a href="https://skillyou.in" target="_blank" rel="noopener noreferrer" className="text-xs font-medium uppercase tracking-wider px-3 py-1.5 border transition-colors whitespace-nowrap flex-shrink-0" style={{ borderColor: BORDER, color: MUTED }}>
                    skillyou.in ↗
                  </a>
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
                  <a href="https://cryptonice.lovable.app" target="_blank" rel="noopener noreferrer" className="text-xs font-medium uppercase tracking-wider px-3 py-1.5 border transition-colors whitespace-nowrap flex-shrink-0" style={{ borderColor: BORDER, color: MUTED }}>
                    cryptonice.lovable.app ↗
                  </a>
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
                  <a href="https://github.com/VigneshsparrowEsh/Heart_attack_pred" target="_blank" rel="noopener noreferrer" className="text-xs font-medium uppercase tracking-wider px-3 py-1.5 border transition-colors whitespace-nowrap flex-shrink-0" style={{ borderColor: BORDER, color: MUTED }}>
                    GitHub ↗
                  </a>
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
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section id="portfolio" className="py-24" style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 reveal-hidden">
            <div>
              <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: AMBER }}>— Portfolio</p>
              <h2 className="font-display font-medium text-4xl md:text-5xl text-white">Case Studies</h2>
            </div>
            <p className="text-sm max-w-sm text-right" style={{ color: MUTED }}>A selection of my best work in AI, analytics, and strategy.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-px mb-px" style={{ background: BORDER }}>
            {/* SkillYou Feature */}
            <div className="p-10 md:p-14 reveal-hidden flex flex-col justify-between min-h-[380px]" style={{ background: "#0D0D0D" }}>
              <div className="inline-block text-xs font-bold tracking-widest mb-10 px-3 py-1.5 border w-fit" style={{ borderColor: `${AMBER}30`, color: AMBER }}>
                🚀 AI Product
              </div>
              <div>
                <h3 className="font-display font-medium text-3xl md:text-4xl text-white leading-tight mb-5">SkillYou — AI-Powered Career Platform for the Disrupted Job Market</h3>
                <p className="text-base leading-relaxed" style={{ color: "#666" }}>End-to-end AI job platform combining job discovery, resume intelligence, and career pivot guidance. 5-layer intelligent job agent powered by Claude API, Supabase & PostgreSQL.</p>
              </div>
            </div>

            <div className="flex flex-col gap-px" style={{ background: BORDER }}>
              <div className="p-8 reveal-hidden flex-1" style={{ background: "#0D0D0D" }}>
                <div className="text-xs font-bold tracking-widest mb-5 px-3 py-1.5 border inline-block" style={{ borderColor: `${AMBER}30`, color: AMBER }}>📈 Data Analysis</div>
                <h3 className="font-display font-medium text-xl text-white mb-3">E-Commerce Retention & Inventory Scorecard</h3>
                <p className="text-sm" style={{ color: "#666" }}>Python + SQL RFM segmentation delivering churn reduction and stock optimization.</p>
              </div>
              <div className="p-8 reveal-hidden flex-1" style={{ background: "#0D0D0D" }}>
                <div className="text-xs font-bold tracking-widest mb-5 px-3 py-1.5 border inline-block" style={{ borderColor: `${AMBER}30`, color: AMBER }}>🏥 Machine Learning</div>
                <h3 className="font-display font-medium text-xl text-white mb-3">Heart Attack Prediction — 87% Accuracy</h3>
                <p className="text-sm" style={{ color: "#666" }}>Binary classification using Random Forest in Python (Sklearn).</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: BORDER }}>
            <div className="p-8 reveal-hidden" style={{ background: "#0D0D0D" }}>
              <div className="text-xs font-bold tracking-widest mb-5 px-3 py-1.5 border inline-block" style={{ borderColor: `${AMBER}30`, color: AMBER }}>📦 BI Dashboard</div>
              <h3 className="font-display font-medium text-xl text-white mb-3">Myntra Supply Chain KPI Dashboard</h3>
              <p className="text-sm" style={{ color: "#666" }}>Real-time Power BI tracking shipment KPIs and asset utilization for Flipkart.</p>
            </div>
            <div className="p-8 reveal-hidden" style={{ background: "#0D0D0D" }}>
              <div className="text-xs font-bold tracking-widest mb-5 px-3 py-1.5 border inline-block" style={{ borderColor: `${AMBER}30`, color: AMBER }}>🎯 Strategy</div>
              <h3 className="font-display font-medium text-xl text-white mb-3">BSC Client Dashboards — 5+ Accounts</h3>
              <p className="text-sm" style={{ color: "#666" }}>Balanced Scorecard dashboards enabling real-time ROI and conversion tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI / Edge Strip ── */}
      <section className="py-24">
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="reveal-hidden">
              <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: AMBER }}>— My Edge</p>
              <h2 className="font-display font-medium text-4xl md:text-5xl text-white mb-6">Built for the AI Era</h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: MUTED, maxWidth: "28rem" }}>
                Bridging the gap between technical possibility and business value. I don't just write SQL — I build systems that make decisions.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Prompt Engineering", "RAG Architecture", "Fine-tuning LLMs", "Vibe Coding", "Claude API", "AI Product Strategy", "ML (Sklearn)", "Supabase"].map((skill, i) => (
                  <span key={i} className="px-4 py-2 border text-sm hover:text-[#F5A623] transition-colors cursor-default" style={{ borderColor: BORDER, color: "#888" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: "Years of Experience", value: "3", suffix: "+" },
                { label: "Client Accounts Served", value: "5", suffix: "+" },
                { label: "ML Model Accuracy", value: "87", suffix: "%" },
                { label: "Open to Remote Global Roles", value: "100", suffix: "%" },
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center p-6 reveal-hidden" style={{ background: SURFACE, border: `1px solid ${BORDER}`, transitionDelay: `${i * 80}ms` }}>
                  <span className="text-base font-medium" style={{ color: "#AAA" }}>{stat.label}</span>
                  <div className="font-display font-medium text-4xl text-white">
                    {stat.value}<span style={{ color: AMBER }}>{stat.suffix}</span>
                  </div>
                </div>
              ))}
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
              <h2 className="font-display font-medium text-4xl md:text-5xl text-white">Areas of Expertise</h2>
            </div>
            <p className="text-sm max-w-sm text-right" style={{ color: MUTED }}>
              Partnering with teams to deliver clear insights, optimized processes, and AI-forward strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: BORDER }}>
            {[
              {
                Icon: BarChart2,
                title: "Data & Business Analysis",
                desc: "SQL queries, Python analysis, Power BI dashboards, KPI frameworks, and data storytelling that drives real decisions — not just reports."
              },
              {
                Icon: Lightbulb,
                title: "AI Strategy & Consulting",
                desc: "Identify where AI can cut costs, speed up processes, or unlock revenue. Map workflows to AI opportunities and build the roadmap."
              },
              {
                Icon: FileText,
                title: "Product & Requirements",
                desc: "Stakeholder interviews, BRD/FRD docs, process mapping, and Agile sprint facilitation. Bridge business and engineering teams."
              }
            ].map(({ Icon, title, desc }, i) => (
              <div key={i} className="group p-10 reveal-hidden relative overflow-hidden transition-colors duration-300" style={{ background: BG, transitionDelay: `${i * 100}ms` }}>
                <div className="absolute bottom-0 left-0 right-0 h-px transition-transform duration-300" style={{ background: AMBER, transform: "scaleX(0)", transformOrigin: "left" }} />
                <div
                  className="w-12 h-12 border flex items-center justify-center mb-8 transition-colors duration-300 group-hover:border-[#F5A623]"
                  style={{ borderColor: BORDER }}
                >
                  <Icon className="w-5 h-5 group-hover:text-[#F5A623] transition-colors" style={{ color: "#666" }} />
                </div>
                <h3 className="font-display font-medium text-xl text-white mb-4">{title}</h3>
                <p className="text-sm leading-relaxed mb-8" style={{ color: MUTED }}>{desc}</p>
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest group-hover:text-[#F5A623] transition-colors" style={{ color: "#666" }}>
                  Learn More <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24">
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="reveal-hidden">
              <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: AMBER }}>— Get In Touch</p>
              <h2 className="font-display font-medium text-4xl md:text-5xl text-white mb-6">Let's Work Together</h2>
              <p className="text-base leading-relaxed mb-12" style={{ color: MUTED, maxWidth: "28rem" }}>
                Open to fully remote roles as Business Analyst, AI Analyst, AI Consultant, or Product Analyst — anywhere globally. USD/EUR preferred.
              </p>

              <div className="space-y-3">
                {[
                  { href: "mailto:VIGVISHNU987@GMAIL.COM", Icon: Mail, label: "Email", value: "VIGVISHNU987@GMAIL.COM" },
                  { href: "https://linkedin.com/in/vignesh-v-051a001b3", Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/vignesh-v-051a001b3" },
                  { href: "https://github.com/VigneshsparrowEsh", Icon: Github, label: "GitHub", value: "VigneshsparrowEsh" },
                  { href: "tel:+919344941328", Icon: Phone, label: "Phone", value: "+91 93449 41328" },
                ].map(({ href, Icon, label, value }, i) => (
                  <a key={i} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                    className="flex items-center gap-4 p-4 border group transition-all duration-200"
                    style={{ borderColor: BORDER, background: SURFACE }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = `${AMBER}60`)}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}
                  >
                    <div className="w-10 h-10 border flex items-center justify-center transition-colors duration-200 group-hover:border-[#F5A623]" style={{ borderColor: BORDER }}>
                      <Icon className="w-4 h-4 group-hover:text-[#F5A623] transition-colors" style={{ color: "#777" }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: MUTED }}>{label}</p>
                      <p className="text-sm font-medium text-white">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="reveal-hidden" style={{ transitionDelay: "0.2s" }}>
              <div className="border p-8 md:p-10" style={{ borderColor: BORDER, background: SURFACE }}>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-medium" style={{ color: MUTED }}>First Name</label>
                      <Input placeholder="John" className="h-12 rounded-none border-0 border-b text-white placeholder:text-zinc-700 bg-transparent focus-visible:ring-0" style={{ borderColor: BORDER }} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-medium" style={{ color: MUTED }}>Last Name</label>
                      <Input placeholder="Doe" className="h-12 rounded-none border-0 border-b text-white placeholder:text-zinc-700 bg-transparent focus-visible:ring-0" style={{ borderColor: BORDER }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-medium" style={{ color: MUTED }}>Company / Role</label>
                    <Input placeholder="Tech Corp" className="h-12 rounded-none border-0 border-b text-white placeholder:text-zinc-700 bg-transparent focus-visible:ring-0" style={{ borderColor: BORDER }} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-medium" style={{ color: MUTED }}>Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="h-12 rounded-none border-0 border-b text-white placeholder:text-zinc-700 bg-transparent focus-visible:ring-0" style={{ borderColor: BORDER }} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-medium" style={{ color: MUTED }}>Message</label>
                    <Textarea placeholder="How can we work together?" className="rounded-none border-0 border-b text-white placeholder:text-zinc-700 bg-transparent focus-visible:ring-0 min-h-[130px] resize-none" style={{ borderColor: BORDER }} />
                  </div>
                  <Button className="w-full h-13 text-sm font-bold uppercase tracking-widest rounded-none text-black transition-all mt-4" style={{ background: AMBER, height: "3.25rem" }}>
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 border-t" style={{ borderColor: BORDER, background: SURFACE }}>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display text-xl font-medium text-white">Vignesh V.</div>
          <div className="text-xs text-center" style={{ color: MUTED }}>
            © {new Date().getFullYear()} Vignesh V — AI Business Analyst · Bengaluru, India
          </div>
          <div className="flex items-center gap-6 text-xs uppercase tracking-widest" style={{ color: MUTED }}>
            <a href="https://linkedin.com/in/vignesh-v-051a001b3" target="_blank" rel="noreferrer" className="hover:text-[#F5A623] transition-colors">LinkedIn</a>
            <a href="https://github.com/VigneshsparrowEsh" target="_blank" rel="noreferrer" className="hover:text-[#F5A623] transition-colors">GitHub</a>
            <button onClick={() => scrollTo("home")} className="hover:text-[#F5A623] transition-colors">↑ Top</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
