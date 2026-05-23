import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, MapPin, ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            if (entry.target.id) {
              setActiveSection(entry.target.id);
            }
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
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "My Work", id: "portfolio" },
    { name: "Experience", id: "experience" },
    { name: "Services", id: "services" },
    { name: "Contact me", id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex items-center justify-between glass-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="font-display font-extrabold text-xl tracking-tight cursor-pointer" onClick={() => scrollTo("home")}>
          it's me — VV.
        </div>
        
        <div className="hidden md:flex items-center bg-white border border-border rounded-full p-1 shadow-sm">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              data-testid={`nav-link-${link.id}`}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                activeSection === link.id ? "bg-black text-white" : "text-muted hover:text-black"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="mailto:VIGVISHNU987@GMAIL.COM" data-testid="nav-email-link" className="text-sm font-medium hover:text-amber transition-colors">
            VIGVISHNU987@GMAIL.COM
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 min-h-[90vh] flex flex-col justify-center">
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="font-display font-semibold text-2xl md:text-3xl text-muted">
                  <span className="animate-wave mr-2">👋</span> Hello! I'm
                </span>
                <h1 className="font-display font-extrabold text-[clamp(52px,7vw,88px)] leading-[1.05] tracking-[-0.03em] mt-2 mb-6">
                  Vignesh V.
                </h1>
                <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#F5A623]"></span>
                  AI Business Analyst
                </div>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-muted md:text-xl leading-relaxed max-w-xl"
              >
                Hi! I'm Vignesh — an AI-era Business Analyst, data storyteller, and founder. I turn complex business problems into clear decisions using data, dashboards, and AI strategy. Also building SkillYou, an AI-powered career platform.
              </motion.p>

              <motion.ul 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-3 text-base md:text-lg"
              >
                {[
                  "Translate business problems into data-driven solutions",
                  "Build AI strategies executives can act on today",
                  "Stakeholder alignment, BRDs, and sprint-ready specs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-1 text-xs">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <Button size="lg" className="rounded-full bg-black text-white hover:bg-black/90 px-8 h-12" onClick={() => scrollTo("contact")}>
                  Let's Talk <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-black text-black hover:bg-black/5 px-8 h-12">
                  Download CV <ArrowDown className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>

            {/* Right Photo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end lg:pr-12"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[conic-gradient(from_180deg,#FFD580,#FF8FA3,#A8EDFF,#B8F0C8,#FFD580)] blur-[60px] opacity-60 rounded-full z-0 pointer-events-none"></div>
              
              <div className="relative z-10 w-full max-w-[320px] aspect-[4/5] bg-white rounded-2xl border border-border shadow-xl overflow-hidden group">
                <img src="/vignesh.png" alt="Vignesh V" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                
                {/* Floating Badges */}
                <div className="absolute -left-12 top-12 bg-white border border-border shadow-lg rounded-xl py-3 px-4 animate-float flex items-center gap-2">
                  <span className="text-xl">📊</span>
                  <span className="font-semibold text-sm">Power BI Expert</span>
                </div>
                
                <div className="absolute -left-8 bottom-24 bg-white border border-border shadow-lg rounded-xl py-3 px-4 animate-float-delayed flex items-center gap-2">
                  <span className="text-xl">🤖</span>
                  <span className="font-semibold text-sm">AI Strategy</span>
                </div>

                <div className="absolute -right-6 bottom-12 bg-black text-white shadow-lg rounded-full py-2 px-5 animate-float flex items-center gap-2 text-sm font-medium">
                  Hello <span className="animate-wave inline-block">👋</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Strip */}
      <div className="bg-black text-white py-4 px-6 overflow-hidden reveal-hidden">
        <div className="container mx-auto max-w-7xl flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm font-medium text-white/80">
          <a href="https://linkedin.com/in/vignesh-v-051a001b3" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <span className="hidden md:inline text-white/20">|</span>
          <a href="https://github.com/VigneshsparrowEsh" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <span className="hidden md:inline text-white/20">|</span>
          <span>+91 93449 41328</span>
          <span className="hidden md:inline text-white/20">|</span>
          <a href="mailto:VIGVISHNU987@GMAIL.COM" className="hover:text-white transition-colors text-right md:ml-auto">VIGVISHNU987@GMAIL.COM</a>
        </div>
      </div>

      {/* Ticker */}
      <div className="bg-black border-t border-white/10 overflow-hidden py-5 reveal-hidden">
        <div className="whitespace-nowrap flex w-fit animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center text-white font-display font-bold text-xl uppercase tracking-wider shrink-0">
              <span className="mx-6 text-[#F5A623]">◆</span> DATA ANALYSIS
              <span className="mx-6 text-[#F5A623]">◆</span> AI STRATEGY
              <span className="mx-6 text-[#F5A623]">◆</span> POWER BI DASHBOARDS
              <span className="mx-6 text-[#F5A623]">◆</span> SQL & PYTHON
              <span className="mx-6 text-[#F5A623]">◆</span> PROMPT ENGINEERING
              <span className="mx-6 text-[#F5A623]">◆</span> BUSINESS ANALYSIS
              <span className="mx-6 text-[#F5A623]">◆</span> RAG ARCHITECTURE
              <span className="mx-6 text-[#F5A623]">◆</span> STAKEHOLDER MANAGEMENT
              <span className="mx-6 text-[#F5A623]">◆</span> BRD / FRD WRITING
              <span className="mx-6 text-[#F5A623]">◆</span> STARTUP FOUNDER
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white border-y border-border">
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 reveal-hidden">
            <div>
              <p className="uppercase tracking-widest text-sm font-semibold text-muted mb-4">— My Services</p>
              <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight max-w-lg">WHAT I'M<br/>OFFERING</h2>
            </div>
            <div className="text-left md:text-right max-w-sm">
              <p className="text-muted mb-6">Partnering with teams to deliver clear insights, optimized processes, and AI-forward strategies.</p>
              <Button variant="outline" className="rounded-full border-black text-black hover:bg-black hover:text-white transition-colors">ALL SERVICES</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "📊", title: "Data & Business Analysis", desc: "SQL queries, Python analysis, Power BI dashboards, KPI frameworks, and data storytelling that drives real decisions — not just reports." },
              { icon: "🤖", title: "AI Strategy & Consulting", desc: "Identify where AI can cut costs, speed up processes, or unlock revenue. Map workflows to AI opportunities and build the roadmap." },
              { icon: "🗂️", title: "Product & Requirements", desc: "Stakeholder interviews, BRD/FRD docs, process mapping, and Agile sprint facilitation. Bridge business and engineering teams." }
            ].map((service, i) => (
              <div key={i} className="group bg-white border border-border p-8 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden reveal-hidden" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F5A623] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="w-14 h-14 border border-border rounded-xl flex items-center justify-center text-2xl mb-8 bg-background">
                  {service.icon}
                </div>
                <h3 className="font-display font-bold text-xl mb-4">{service.title}</h3>
                <p className="text-muted leading-relaxed mb-8">{service.desc}</p>
                <a href="#" className="inline-flex items-center text-sm font-bold uppercase tracking-wider group-hover:text-[#F5A623] transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-background">
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
            <div className="reveal-hidden">
              <p className="uppercase tracking-widest text-sm font-semibold text-muted mb-4">— Career</p>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-6">EXPERIENCE</h2>
              <p className="text-lg text-muted">3+ years across supply chain analytics, BI, consulting, and AI product development.</p>
            </div>

            <div className="flex flex-col">
              {[
                { role: "Supply Chain Analyst Executive", company: "Flipkart — Myntra | Central Control Tower, Bengaluru", date: "Sep 2025–Present", current: true },
                { role: "Data & Business Analyst", company: "Spire Technologies Pvt Ltd, Bengaluru", date: "Job Duration — 1 Year" },
                { role: "Business Analyst", company: "Frankmax Tech Pvt Ltd, Nagercoil", date: "Job Duration — 1 Year" },
                { role: "Founder — SkillYou AI Platform", company: "Self-Founded Startup", date: "2023–Present" },
                { role: "MBA — Business Analytics & Ops", company: "Anna University, Chennai", date: "2022–2024" }
              ].map((job, i) => (
                <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-t border-border last:border-b transition-colors hover:bg-white reveal-hidden px-4 -mx-4" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="mb-4 md:mb-0">
                    <h3 className="font-display font-bold text-xl md:text-2xl mb-2">{job.role}</h3>
                    <p className="text-muted">{job.company}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="px-4 py-1.5 border border-border rounded-full text-sm font-medium bg-white whitespace-nowrap">
                      {job.date}
                    </div>
                    {job.current && (
                      <div className="px-3 py-1.5 bg-black text-white rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]"></span> Current
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="portfolio" className="py-24 bg-white border-y border-border">
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 reveal-hidden">
            <div>
              <p className="uppercase tracking-widest text-sm font-semibold text-muted mb-4">— Portfolio</p>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">CASE STUDY</h2>
            </div>
            <p className="text-muted max-w-sm text-left md:text-right">A selection of my best work in AI, analytics, and strategy.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 mb-6">
            <div className="col-span-1 lg:row-span-2 bg-[#0F0F0F] rounded-2xl p-8 md:p-12 text-white border border-border relative overflow-hidden group reveal-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-black to-[#1a1a1a] z-0"></div>
              <div className="relative z-10 h-full flex flex-col justify-between min-h-[400px]">
                <div className="inline-block px-3 py-1 rounded-full border border-white/20 text-xs font-bold tracking-wider mb-12 w-fit bg-white/5 backdrop-blur-sm">
                  🚀 AI PRODUCT
                </div>
                <div>
                  <h3 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-6">SkillYou — AI-Powered Career Platform for the Disrupted Job Market</h3>
                  <p className="text-white/70 text-lg leading-relaxed max-w-xl">End-to-end AI job platform combining job discovery, resume intelligence, and career pivot guidance. 5-layer intelligent job agent powered by Claude API, Supabase & PostgreSQL. Freemium + B2B data licensing revenue model.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F2EB] rounded-2xl p-8 border border-border group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 reveal-hidden delay-100">
              <div className="inline-block px-3 py-1 rounded-full border border-black/10 text-xs font-bold tracking-wider mb-6 bg-white/50">
                📈 DATA ANALYSIS
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">E-Commerce Retention & Inventory Scorecard</h3>
              <p className="text-muted">Python + SQL RFM segmentation delivering churn reduction and stock optimization.</p>
            </div>

            <div className="bg-[#EBF3F5] rounded-2xl p-8 border border-border group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 reveal-hidden delay-200">
              <div className="inline-block px-3 py-1 rounded-full border border-black/10 text-xs font-bold tracking-wider mb-6 bg-white/50">
                🏥 MACHINE LEARNING
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Heart Attack Prediction — 87% Accuracy ML Model</h3>
              <p className="text-muted">Binary classification using Random Forest in Python (Sklearn). 87% accuracy.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FAF7F2] rounded-2xl p-8 border border-border group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 reveal-hidden">
              <div className="inline-block px-3 py-1 rounded-full border border-black/10 text-xs font-bold tracking-wider mb-6 bg-white/50">
                📦 BI DASHBOARD
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Myntra Supply Chain KPI Dashboard</h3>
              <p className="text-muted">Real-time Power BI tracking shipment KPIs and asset utilization for Flipkart.</p>
            </div>

            <div className="bg-[#EBF5F0] rounded-2xl p-8 border border-border group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 reveal-hidden delay-100">
              <div className="inline-block px-3 py-1 rounded-full border border-black/10 text-xs font-bold tracking-wider mb-6 bg-white/50">
                🎯 STRATEGY
              </div>
              <h3 className="font-display font-bold text-xl mb-3">BSC Client Dashboards — 5+ Accounts</h3>
              <p className="text-muted">Balanced Scorecard dashboards enabling real-time ROI and conversion tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-black py-24 text-white">
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-hidden">
              <p className="uppercase tracking-widest text-sm font-semibold text-white/50 mb-4">— My Edge</p>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-6">Built for the AI Era</h2>
              <p className="text-lg text-white/70 mb-8 max-w-md">Bridging the gap between technical possibility and business value. I don't just write SQL — I build systems that make decisions.</p>
              
              <div className="flex flex-wrap gap-3">
                {["Prompt Engineering", "RAG Architecture", "Fine-tuning LLMs", "Vibe Coding", "Claude API", "AI Product Strategy", "ML (Sklearn)", "Supabase"].map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-full border border-white/20 text-sm hover:border-[#F5A623] hover:text-[#F5A623] transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: "Years of Experience", value: "3", suffix: "+" },
                { label: "Client Accounts Served", value: "5", suffix: "+" },
                { label: "ML Model Accuracy", value: "87", suffix: "%" },
                { label: "Open to Remote Global Roles", value: "100", suffix: "%" },
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center bg-[#0F0F0F] border border-[#1E1E1E] p-6 rounded-xl reveal-hidden" style={{ transitionDelay: `${i * 100}ms` }}>
                  <span className="text-lg font-medium text-white/80">{stat.label}</span>
                  <div className="font-display font-extrabold text-4xl">
                    {stat.value}<span className="text-[#F5A623]">{stat.suffix}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="reveal-hidden">
              <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-6">Let's Work Together</h2>
              <p className="text-lg text-muted mb-12 max-w-md">
                Open to fully remote roles as Business Analyst, AI Analyst, AI Consultant, or Product Analyst — anywhere globally. USD/EUR preferred.
              </p>

              <div className="space-y-4">
                <a href="mailto:VIGVISHNU987@GMAIL.COM" className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white group hover:border-black transition-all">
                  <div className="w-12 h-12 bg-background flex items-center justify-center rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 transition-transform group-hover:translate-x-2">
                    <p className="text-sm text-muted mb-1">Email</p>
                    <p className="font-medium">VIGVISHNU987@GMAIL.COM</p>
                  </div>
                </a>

                <a href="https://linkedin.com/in/vignesh-v-051a001b3" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white group hover:border-black transition-all">
                  <div className="w-12 h-12 bg-background flex items-center justify-center rounded-lg group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 transition-transform group-hover:translate-x-2">
                    <p className="text-sm text-muted mb-1">LinkedIn</p>
                    <p className="font-medium">linkedin.com/in/vignesh-v-051a001b3</p>
                  </div>
                </a>

                <a href="https://github.com/VigneshsparrowEsh" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white group hover:border-black transition-all">
                  <div className="w-12 h-12 bg-background flex items-center justify-center rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="flex-1 transition-transform group-hover:translate-x-2">
                    <p className="text-sm text-muted mb-1">GitHub</p>
                    <p className="font-medium">VigneshsparrowEsh</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white group hover:border-black transition-all">
                  <div className="w-12 h-12 bg-background flex items-center justify-center rounded-lg group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 transition-transform group-hover:translate-x-2">
                    <p className="text-sm text-muted mb-1">Phone</p>
                    <p className="font-medium">+91 93449 41328</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal-hidden delay-200">
              <div className="bg-white border border-border rounded-2xl p-8 md:p-10 shadow-sm">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input placeholder="John" className="h-12 bg-background" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input placeholder="Doe" className="h-12 bg-background" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company / Role</label>
                    <Input placeholder="Tech Corp" className="h-12 bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="h-12 bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea placeholder="How can we work together?" className="min-h-[150px] bg-background resize-none" />
                  </div>
                  <Button className="w-full h-14 text-base font-bold rounded-xl bg-black text-white hover:bg-black/90">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 border-t border-white/10">
        <div className="container px-6 md:px-12 mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display font-extrabold text-2xl">
            VV.
          </div>
          <div className="text-sm text-white/50 text-center">
            © 2025 Vignesh V — AI Business Analyst · Bengaluru, India
          </div>
          <button onClick={() => scrollTo("home")} className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-2">
            ↑ Back to Top
          </button>
        </div>
      </footer>
    </div>
  );
}
