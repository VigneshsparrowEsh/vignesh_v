import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft, ArrowRight, ExternalLink, CheckCircle, Cpu, Sparkles,
  Database, Code, BarChart2, BookOpen, Layers, Target, Users,
  MessageSquare, FileText, Award, DollarSign, TrendingUp, HelpCircle,
  Clock, ShieldAlert, Zap, Compass, RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomCursor from "@/components/CustomCursor";

const PURPLE  = "#8B5CF6";
const AMBER   = "#F5A623";
const BG      = "#0A0A0A";
const SURFACE = "#111111";
const BORDER  = "rgba(255,255,255,0.08)";
const MUTED   = "#6B6B6B";

export default function SkillYouPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productEcosystem = [
    {
      Icon: Compass,
      title: "Career Discovery Engine",
      features: [
        "Discover suitable career paths",
        "Match interests and strengths",
        "Explore salary trends",
        "Understand industry demand"
      ]
    },
    {
      Icon: BarChart2,
      title: "Skill Gap Analyzer",
      features: [
        "Analyze current skills vs desired career",
        "Identify missing critical competencies",
        "Output quantitative gap score",
        "Prioritize learning paths"
      ]
    },
    {
      Icon: MessageSquare,
      title: "AI Career Advisor",
      features: [
        "Interactive chatbot advisor",
        "Recommend relevant certifications",
        "Suggest smart career transitions",
        "Provide contextual interview coaching"
      ]
    },
    {
      Icon: Layers,
      title: "Learning Roadmap Builder",
      features: [
        "30-Day actionable sprint plans",
        "90-Day detailed competency mapping",
        "6-Month career milestones roadmap",
        "Resource & project suggestions"
      ]
    },
    {
      Icon: FileText,
      title: "Resume & Profile Optimizer",
      features: [
        "Semantic resume parse and analysis",
        "ATS compliance scoring",
        "LinkedIn profile copy optimization",
        "Portfolio project ideas for matching roles"
      ]
    },
    {
      Icon: Award,
      title: "Job Readiness Score",
      features: [
        "Skill readiness assessment",
        "Resume and portfolio quality rating",
        "Interview mock scoring",
        "Real-time market competitiveness index"
      ]
    }
  ];

  const transitionSteps = [
    {
      step: "Step 1",
      title: "Career Analysis",
      desc: "User uploads resume and LinkedIn profile. SkillYou generates a detailed Career Health Report showing AI Disruption Risk, strengths, skill gaps, salary benchmarks, and the top 5 custom career pivots.",
      badge: "Free"
    },
    {
      step: "Step 2",
      title: "Transition Selection",
      desc: "User selects their target role (e.g., 'AI Product Manager'). The platform creates an exact Transition Blueprint analyzing current vs. required skills, time estimates, transition difficulty, and expected salary growth."
    },
    {
      step: "Step 3",
      title: "Personalized Roadmap",
      desc: "Generates a structured, week-by-week curriculum. Example: Weeks 1–2 (Business & Market Analysis), Weeks 3–4 (AI Fundamentals like LLMs & Use Cases), Weeks 5–6 (PM concepts like PRDs), Weeks 7–8 (building a portfolio project like an AI Career Advisor), and Weeks 9–12 (interview prep & applications)."
    },
    {
      step: "Step 4",
      title: "Human Service Layer",
      desc: "Integrates specialized mentorship packages enabling direct expert review of blueprints, portfolio review, LinkedIn audits, and mock interview coaching, unlocking immediate revenue generation."
    },
    {
      step: "Step 5",
      title: "Resume Transformation",
      desc: "Rewrites the user's legacy resume (e.g., Data Analyst) into a high-impact resume tailored for the target role (e.g., AI Data Analyst) emphasizing target achievements, keywords, and AI projects."
    },
    {
      step: "Step 6",
      title: "LinkedIn Optimization",
      desc: "Delivers custom-crafted headlines, 'About' sections, rewritten experience highlights, and featured item lists optimized for recruiter search algorithms."
    },
    {
      step: "Step 7",
      title: "Portfolio Building",
      desc: "Guides the user to build path-specific projects. For Data Analysts transitioning to AI Data Analysts: building Customer Churn Predictors, Sales Forecast Dashboards, or AI Insights Tools."
    },
    {
      step: "Step 8",
      title: "Interview Preparation",
      desc: "Provides mock interviews with role-specific case studies, behavioral questions, and instant AI-driven analytical feedback."
    },
    {
      step: "Step 9",
      title: "Job Matching & Tailoring",
      desc: "Identifies top matching open positions, maps compatibility scores, and guides the application strategy to accelerate hire rates."
    }
  ];

  return (
    <div style={{ background: BG, color: "#E4E4E4" }} className="min-h-screen overflow-x-hidden font-body selection:bg-[#8B5CF6] selection:text-white">
      {/* ── Custom Cursor ── */}
      <CustomCursor />

      {/* ── Navigation ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 h-20 px-6 md:px-12 flex items-center justify-between glass-nav ${scrolled ? "scrolled" : ""}`}>
        <Link href="/" className="font-display text-2xl font-semibold tracking-wide text-white cursor-none flex items-center gap-3">
          <ArrowLeft className="w-5 h-5 text-[#8B5CF6]" />
          <span>Vignesh V.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-zinc-500">
          <Link href="/#portfolio" className="hover:text-[#8B5CF6] transition-colors">Work</Link>
          <Link href="/#experience" className="hover:text-[#8B5CF6] transition-colors">Experience</Link>
          <Link href="/#skills" className="hover:text-[#8B5CF6] transition-colors">Skills</Link>
          <Link href="/#services" className="hover:text-[#8B5CF6] transition-colors">Services</Link>
          <Link href="/#contact" className="hover:text-[#8B5CF6] transition-colors">Contact</Link>
        </div>

        <Link href="/">
          <Button className="border border-[#8B5CF6]/40 text-[#8B5CF6] bg-transparent hover:bg-[#8B5CF6] hover:text-white transition-all text-sm rounded-none px-5 h-9">
            Back to Home
          </Button>
        </Link>
      </nav>

      {/* Nav Accent Line */}
      <div className="fixed top-20 left-0 right-0 z-40 h-px" style={{ background: `${BORDER}` }} />

      {/* ── Hero / Overview ── */}
      <section className="pt-36 pb-16 relative overflow-hidden">
        {/* Deep background mesh purple glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-20"
          style={{ background: `radial-gradient(circle, ${PURPLE}, transparent)` }} />

        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Hero details left */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full"
                  style={{ background: "rgba(139,92,246,0.18)", color: "#a78bfa" }}>
                  Startup Case Study
                </span>
                <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full text-zinc-400 border" style={{ borderColor: BORDER }}>
                  Role: Founder &amp; Architect
                </span>
              </div>

              <h1 className="font-display font-semibold text-5xl md:text-7xl text-white leading-none tracking-tight">
                SkillYou
              </h1>
              <p className="font-display text-2xl font-light text-zinc-400 italic">
                AI-Powered Career Growth Platform
              </p>
              <p className="text-base md:text-lg leading-relaxed text-zinc-400 max-w-3xl">
                Helping students and professionals discover high-yield career paths, identify critical skill gaps, build personalized learning roadmaps, and become job-ready in the AI-disrupted economy.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a href="https://skillyou.in" target="_blank" rel="noreferrer">
                  <Button className="text-white text-sm px-8 py-6 rounded-full font-semibold group transition-all hover:-translate-y-1 hover:shadow-xl"
                    style={{ background: PURPLE }}>
                    Visit Live Site
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Quick Metadata Box Right */}
            <div className="lg:col-span-4 w-full p-8 border flex flex-col gap-6" style={{ borderColor: BORDER, background: SURFACE }}>
              <h3 className="text-xs uppercase tracking-widest font-bold text-white border-b pb-3" style={{ borderColor: BORDER }}>Platform Metadata</h3>
              <div className="flex flex-col gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Status</span>
                  <span className="text-white font-medium">Concept → MVP Dev</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Business Strategy</span>
                  <span className="text-white font-medium text-right">Freemium + Services</span>
                </div>
                <div className="flex flex-col gap-1.5 pt-2">
                  <span className="text-zinc-500 block">Core Vision</span>
                  <p className="text-xs text-[#a78bfa] leading-relaxed italic">
                    "Democratize career guidance and make high-quality, personalized career coaching accessible to everyone, regardless of background."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1. The Problem ── */}
      <section className="py-20 border-t" style={{ borderColor: BORDER }}>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-16">
            <div>
              <p className="text-xs uppercase tracking-widest font-medium mb-3" style={{ color: AMBER }}>— Part One</p>
              <h2 className="font-display font-medium text-4xl text-white mb-6">Why SkillYou Exists</h2>
              <p className="text-zinc-400 leading-relaxed">
                Most students and professionals lack structured direction when attempting to align their capabilities with an evolving, AI-driven job market. 
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Career Confusion", desc: "Professionals are unsure which career path matches their core strengths, resulting in choice paralysis amidst conflicting advice." },
                  { title: "Skill Gap Uncertainty", desc: "Users don't know which competencies employers actually prioritize or how to translate job descriptions into learning goals." },
                  { title: "Fragmented Journeys", desc: "Courses, certifications, and career advisory services are scattered across mismatched and expensive platforms." }
                ].map((prob, i) => (
                  <div key={i} className="p-6 border flex flex-col gap-3" style={{ borderColor: BORDER, background: SURFACE }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-black" style={{ background: AMBER }}>
                      {i + 1}
                    </div>
                    <h4 className="font-medium text-white text-base">{prob.title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{prob.desc}</p>
                  </div>
                ))}
              </div>

              {/* Market Problems Table */}
              <div className="mt-4">
                <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-4">Current Market Landscape</h4>
                <div className="overflow-x-auto border" style={{ borderColor: BORDER }}>
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b" style={{ borderColor: BORDER, background: "rgba(255,255,255,0.02)" }}>
                        <th className="p-4 font-semibold text-white">Market Challenge</th>
                        <th className="p-4 font-semibold text-white">Existing Competitor Solution</th>
                        <th className="p-4 font-semibold text-zinc-400">Limitation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y" style={{ borderColor: BORDER }}>
                      {[
                        { challenge: "Generic recommendations", competitor: "Traditional Job Boards", limit: "Keyword match only; misses potential transitions" },
                        { challenge: "No personalized guidance", competitor: "Learning Portals", limit: "Leaves users to design their own curriculums" },
                        { challenge: "No skill-gap analysis", competitor: "Course Marketplaces", limit: "Pushes courses instead of analyzing user readiness" },
                        { challenge: "Expensive career coaching", competitor: "Executive Consultants", limit: "Out of reach for students and mid-level searchers" }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                          <td className="p-4 font-medium text-white">{row.challenge}</td>
                          <td className="p-4 text-zinc-400">{row.competitor}</td>
                          <td className="p-4 text-xs text-zinc-500">{row.limit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. The Solution ── */}
      <section className="py-20 border-t" style={{ borderColor: BORDER, background: SURFACE }}>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
            <span className="text-xs uppercase tracking-widest font-bold" style={{ color: PURPLE }}>— Part Two</span>
            <h2 className="font-display font-medium text-4xl md:text-5xl text-white">Introducing SkillYou</h2>
            <p className="text-lg text-zinc-400 leading-relaxed font-light">
              SkillYou combines advanced AI orchestration, contextual career intelligence, and targeted learning blueprints into a unified growth platform.
            </p>
            <div className="w-16 h-px my-2" style={{ background: PURPLE }} />
            <blockquote className="font-display text-2xl md:text-3xl italic font-light text-white leading-relaxed max-w-2xl">
              "Know where you are, understand where you want to go, and get an AI-generated roadmap to reach there."
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── 3. Product Ecosystem ── */}
      <section className="py-24 border-t" style={{ borderColor: BORDER }}>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 mb-16 text-center md:text-left">
            <p className="text-xs uppercase tracking-widest font-medium" style={{ color: PURPLE }}>— Part Three</p>
            <h2 className="font-display font-medium text-4xl text-white">Product Ecosystem Modules</h2>
            <p className="text-sm text-zinc-500 max-w-md">Deconstructing the core features powered by the SkillYou AI engine.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productEcosystem.map((module, i) => (
              <div key={i} className="p-8 border flex flex-col gap-6 transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: BORDER, background: SURFACE }}>
                <div className="w-12 h-12 border flex items-center justify-center" style={{ borderColor: `${PURPLE}40`, color: PURPLE }}>
                  <module.Icon className="w-5 h-5" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-display font-medium text-xl text-white">{module.title}</h3>
                  <ul className="flex flex-col gap-2.5">
                    {module.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-2 text-xs leading-relaxed text-zinc-400">
                        <CheckCircle className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Career Transition Program ── */}
      <section className="py-24 border-t" style={{ borderColor: BORDER, background: "#0A0A0E" }}>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-16">
            {/* Left intro to program */}
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold" style={{ color: PURPLE }}>— Core Program</span>
              <h2 className="font-display font-medium text-4xl text-white">Skillyou Career Transition Program</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Rather than selling general information, SkillYou delivers a high-yield transformation path. It answers the fundamental promise:
              </p>
              <div className="p-5 border-l-2 text-white italic text-sm font-medium" style={{ borderColor: PURPLE, background: "rgba(139,92,246,0.05)" }}>
                "Get from your current role to your target role in 90 days."
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                We target transitions such as QA / Operations Executive to AI Data Analyst or AI Product Manager.
              </p>
            </div>

            {/* Right Steps list */}
            <div className="flex flex-col gap-px" style={{ background: BORDER }}>
              {transitionSteps.map((stepItem, idx) => (
                <div key={idx} className="p-8 flex gap-6 hover:bg-white/[0.01] transition-colors" style={{ background: BG }}>
                  <span className="text-xs uppercase font-bold tracking-widest px-3 py-1 border h-fit text-[#a78bfa] shrink-0" style={{ borderColor: `${PURPLE}40` }}>
                    {stepItem.step}
                  </span>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h4 className="font-display font-medium text-xl text-white">{stepItem.title}</h4>
                      {stepItem.badge && (
                        <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 bg-green-500/20 text-green-400">
                          {stepItem.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">{stepItem.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Transition Service Packages ── */}
      <section className="py-24 border-t" style={{ borderColor: BORDER }}>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold" style={{ color: AMBER }}>— Monetization</span>
            <h2 className="font-display font-medium text-4xl text-white mt-3">Transition Program Packages</h2>
            <p className="text-sm text-zinc-500 mt-2">Paid tiers leveraging high-value human validation overlaying the AI insights.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Career Blueprint",
                price: "₹999",
                bullets: ["Career Pivot Analysis", "Target Role Transition Plan", "Full PDF Insights Report", "AI-Generated Learning Roadmap"],
                highlight: false
              },
              {
                title: "Career Accelerator",
                price: "₹2,999",
                bullets: ["Everything in Blueprint", "Human Resume Review", "LinkedIn Profile Audit", "1-on-1 Job Search Strategy Session"],
                highlight: true
              },
              {
                title: "Career Transformation",
                price: "₹7,999",
                bullets: ["Everything in Accelerator", "Weekly Mentorship Calls", "Mock Interview Sessions", "Portfolio Project Code Reviews", "Direct Job Search Guidance"],
                highlight: false
              }
            ].map((pkg, i) => (
              <div key={i} className="p-8 border flex flex-col justify-between relative"
                style={{
                  borderColor: pkg.highlight ? PURPLE : BORDER,
                  background: pkg.highlight ? "linear-gradient(180deg, rgba(139,92,246,0.15) 0%, rgba(17,17,17,0.5) 100%)" : SURFACE
                }}>
                {pkg.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-[#8B5CF6] text-white">
                    Most Popular
                  </span>
                )}
                <div className="space-y-6">
                  <h3 className="font-display font-medium text-2xl text-white">{pkg.title}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-4xl font-semibold text-white">{pkg.price}</span>
                    <span className="text-xs text-zinc-500">/ One-time</span>
                  </div>
                  <ul className="flex flex-col gap-3 pt-4 border-t" style={{ borderColor: BORDER }}>
                    {pkg.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-2.5 text-xs text-zinc-400">
                        <CheckCircle className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full mt-8 rounded-none text-xs uppercase tracking-widest font-bold"
                  style={{
                    background: pkg.highlight ? PURPLE : "transparent",
                    border: pkg.highlight ? "none" : `1px solid ${BORDER}`,
                    color: "white"
                  }}>
                  Select Package
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Why I Started SkillYou ── */}
      <section className="py-24 border-t" style={{ borderColor: BORDER, background: SURFACE }}>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-widest font-bold" style={{ color: AMBER }}>— The Story</span>
              <h2 className="font-display font-medium text-4xl text-white">Personal Motivation</h2>
              <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                <p>
                  While exploring AI, career development, and education technology, I noticed that students and professionals often struggle to make informed career decisions. 
                </p>
                <p>
                  Many people spend years learning skills without knowing whether those skills align with market demand. I wanted to create a platform that acts like a personal AI career mentor—guiding users from career discovery to skill development and job readiness.
                </p>
                <p className="font-medium text-white italic">
                  "SkillYou was born from the belief that everyone deserves personalized career guidance, regardless of their background or financial situation."
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 border" style={{ borderColor: BORDER, background: BG }}>
              <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-4">Founder Execution MVP Focus</h4>
              <div className="space-y-4 text-xs text-zinc-500 leading-relaxed">
                <p>
                  "You do not need mentors, courses, or a massive platform initially. We build only: Resume Upload, Career Analysis, Pivot Engine, Blueprint Generator, and a Payment Gateway."
                </p>
                <p>
                  This self-contained MVP allows SkillYou to validate actual user demand and generate cash flow before investing in build-out latency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Business Model & Target Customers ── */}
      <section className="py-24 border-t" style={{ borderColor: BORDER }}>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Business Model */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest font-bold" style={{ color: PURPLE }}>— Strategy</span>
                <h2 className="font-display font-medium text-4xl text-white">Revenue Channels</h2>
              </div>

              <div className="flex flex-col gap-6">
                {[
                  { title: "Freemium Subscription (SaaS)", desc: "Free basic assessment. Monthly SaaS fee of ₹499/mo to unlock unlimited AI coaching and active roadmap builds." },
                  { title: "Paid Resume & LinkedIn Services", desc: "One-time package offerings (₹999–₹2,999) targeting immediate ATS and visual recruiter optimizations." },
                  { title: "Affiliate & Placement Partnerships", desc: "Referral and affiliate commissions generated from suggested courses, bootcamps, and certification portals." },
                  { title: "B2B Licensing", desc: "Enterprise licensing plans designed for university career departments, training institutes, and placement cells." },
                  { title: "Enterprise Upskilling", desc: "Corporate dashboard portals to manage employee transition routing and internal talent mobility analytics." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-black" style={{ background: PURPLE }}>
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-medium text-white text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Target Customers */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest font-bold" style={{ color: AMBER }}>— Segment</span>
                <h2 className="font-display font-medium text-4xl text-white">Target Customers</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Students (16-25)", desc: "Need low-cost career discovery engines, active roadmaps, and starter skill recommendations." },
                  { title: "Job Seekers", desc: "Need high-impact resume building, mock interviews, and transition blueprints." },
                  { title: "Working Professionals", desc: "Need upskilling roadmaps to earn promotions and pivot into technical AI specialties." },
                  { title: "Educational Institutions", desc: "Need unified student career dashboards and quantitative skill gap assessment suites." }
                ].map((cust, idx) => (
                  <div key={idx} className="p-6 border flex flex-col gap-3" style={{ borderColor: BORDER, background: SURFACE }}>
                    <h4 className="font-medium text-white text-sm">{cust.title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{cust.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Competitive & Competitive Table ── */}
      <section className="py-24 border-t" style={{ borderColor: BORDER, background: SURFACE }}>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-16">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold" style={{ color: PURPLE }}>— Competitive Intel</span>
              <h2 className="font-display font-medium text-4xl text-white mt-3">Competitive Positioning</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mt-4">
                SkillYou bridges the gap between pure content marketplaces and high-cost manual coaching, automating individual analytics.
              </p>
            </div>

            <div className="overflow-x-auto border" style={{ borderColor: BORDER }}>
              <table className="w-full text-left border-collapse text-sm bg-black/20">
                <thead>
                  <tr className="border-b" style={{ borderColor: BORDER, background: "rgba(255,255,255,0.02)" }}>
                    <th className="p-4 font-semibold text-white">Platform</th>
                    <th className="p-4 font-semibold text-white">Career Guidance</th>
                    <th className="p-4 font-semibold text-white">AI Advisor</th>
                    <th className="p-4 font-semibold text-white">Skill Gap Analysis</th>
                    <th className="p-4 font-semibold text-white">Roadmap</th>
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ borderColor: BORDER }}>
                  {[
                    { name: "Coursera", guidance: "Limited", ai: "No", gap: "No", roadmap: "No" },
                    { name: "LinkedIn Learning", guidance: "Partial", ai: "No", gap: "Partial", roadmap: "No" },
                    { name: "CareerFoundry", guidance: "Partial", ai: "No", gap: "No", roadmap: "Partial" },
                    { name: "SkillYou", guidance: "Yes (AI)", ai: "Yes", gap: "Yes", roadmap: "Yes", highlight: true }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.01] transition-colors"
                      style={{ background: row.highlight ? "rgba(139,92,246,0.05)" : "transparent" }}>
                      <td className="p-4 font-medium text-white flex items-center gap-2">
                        {row.highlight && <Sparkles className="w-3.5 h-3.5 text-[#a78bfa]" />}
                        {row.name}
                      </td>
                      <td className="p-4 text-zinc-400">{row.guidance}</td>
                      <td className="p-4 text-zinc-400">{row.ai}</td>
                      <td className="p-4 text-zinc-400">{row.gap}</td>
                      <td className="p-4 text-zinc-400 font-medium" style={{ color: row.highlight ? "#a78bfa" : "#888" }}>{row.roadmap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Roadmap & Market ── */}
      <section className="py-24 border-t" style={{ borderColor: BORDER }}>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Go-To-Market */}
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold" style={{ color: AMBER }}>— Market Strategy</span>
              <h2 className="font-display font-medium text-4xl text-white">Go-To-Market Plan</h2>
              <div className="flex flex-col gap-6">
                {[
                  { phase: "Phase 1: Student Focus", desc: "Establish beachhead with college students and fresh graduates via LinkedIn campaigns, online tech groups, and student campus ambassadors." },
                  { phase: "Phase 2: Professionals", desc: "Scale to mid-level working professionals seeking transition paths. Leverage SEO, LinkedIn career webinars, and value-add resume reviews." },
                  { phase: "Phase 3: Institutional B2B", desc: "Secure direct university integrations, student placement workshops, and enterprise talent transition licensing contracts." }
                ].map((gtm, i) => (
                  <div key={i} className="border-l-2 pl-4 py-2" style={{ borderColor: AMBER }}>
                    <h4 className="font-medium text-white text-base mb-1">{gtm.phase}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{gtm.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Roadmap */}
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold" style={{ color: PURPLE }}>— Tech Milestones</span>
              <h2 className="font-display font-medium text-4xl text-white">Product Roadmap</h2>
              <div className="flex flex-col gap-6">
                {[
                  { ver: "MVP Release", desc: "Deploy initial career assessment modules, core LLM-guided advisor, and basic static roadmap generation pipelines." },
                  { ver: "Version 2.0", desc: "Integrate specialized resume parsing engine and structured client-side skill-gap analyzers." },
                  { ver: "Version 3.0", desc: "Launch dynamic job-post matching networks and real-time interactive AI interview coaching modules." },
                  { ver: "Version 4.0", desc: "Build out multi-tenant institutional dashboards and B2B corporate talent mobility hubs." }
                ].map((rdm, i) => (
                  <div key={i} className="border-l-2 pl-4 py-2" style={{ borderColor: PURPLE }}>
                    <h4 className="font-medium text-white text-base mb-1">{rdm.ver}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{rdm.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder Takeaways ── */}
      <section className="py-24 border-t" style={{ borderColor: BORDER, background: SURFACE }}>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto flex flex-col gap-8">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold" style={{ color: PURPLE }}>— Takeaways</span>
              <h2 className="font-display font-medium text-4xl text-white">Founder Case Study Learnings</h2>
            </div>
            
            <div className="space-y-6 text-zinc-400 text-sm leading-relaxed">
              <p>
                Building SkillYou validated a core product belief: <strong>users pay for transformation, not information</strong>. Packaging career guidance as a structured 90-day transition blueprint created immediate, high-converting value compared to simply offering access to catalog courses.
              </p>
              <p>
                From an operational standpoint, deploying the platform as a lean MVP (leveraging Supabase infrastructure and AI pipelines) proved that validation can happen in real-time, driving early revenue before scaling massive platform infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {["Product Strategy", "Market Research", "AI Engineering", "SaaS Execution"].map((tag) => (
                <div key={tag} className="p-4 border text-center text-xs font-bold uppercase tracking-wider text-white"
                  style={{ borderColor: BORDER, background: BG }}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / Back to home ── */}
      <section className="py-20 border-t text-center" style={{ borderColor: BORDER }}>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <h3 className="font-display font-medium text-3xl text-white mb-6">Explore More Showcase Case Studies</h3>
          <div className="flex justify-center gap-4">
            <Link href="/cryptonice">
              <Button variant="outline" className="border-zinc-800 text-zinc-400 hover:text-white rounded-full px-6 py-5">
                Next: CryptoNice
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/">
              <Button className="rounded-full px-6 py-5" style={{ background: PURPLE }}>
                Back to Home
              </Button>
            </Link>
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
            <a href="https://linkedin.com/in/vignesh-v-051a001b3" target="_blank" rel="noreferrer" className="hover:text-[#8B5CF6] transition-colors">LinkedIn</a>
            <a href="https://github.com/VigneshsparrowEsh"        target="_blank" rel="noreferrer" className="hover:text-[#8B5CF6] transition-colors">GitHub</a>
            <Link href="/" className="hover:text-[#8B5CF6] transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
