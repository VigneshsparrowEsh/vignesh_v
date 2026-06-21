import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft, ArrowRight, Github, ExternalLink,
  Coins, TrendingUp, BarChart2, Shield, CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomCursor from "@/components/CustomCursor";

const INDIGO  = "#6366F1";
const PURPLE  = "#8B5CF6";
const BG      = "#0A0A0A";
const SURFACE = "#111111";
const BORDER  = "rgba(255,255,255,0.08)";
const MUTED   = "#6B6B6B";

export default function CryptoNicePage() {
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
    { category: "Frontend", items: ["Vite", "React", "Tailwind CSS", "Recharts", "Framer Motion"] },
    { category: "Web3 Integration", items: ["Ethers.js", "Wagmi", "Web3Modal", "WalletConnect"] },
    { category: "APIs & Data", items: ["CoinGecko API", "DeFiLlama API", "Cross-chain analytics"] }
  ];

  return (
    <div style={{ background: BG, color: "#E4E4E4" }} className="min-h-screen overflow-x-hidden font-body selection:bg-[#6366F1] selection:text-white">
      {/* ── Custom Cursor ── */}
      <CustomCursor />

      {/* ── Navigation ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 h-20 px-6 md:px-12 flex items-center justify-between glass-nav ${scrolled ? "scrolled" : ""}`}>
        <Link href="/" className="font-display text-2xl font-semibold tracking-wide text-white cursor-none flex items-center gap-3">
          <ArrowLeft className="w-5 h-5 text-[#6366F1]" />
          <span>Vignesh V.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-zinc-500">
          <Link href="/#portfolio" className="hover:text-[#6366F1] transition-colors">Work</Link>
          <Link href="/#experience" className="hover:text-[#6366F1] transition-colors">Experience</Link>
          <Link href="/#skills" className="hover:text-[#6366F1] transition-colors">Skills</Link>
          <Link href="/#services" className="hover:text-[#6366F1] transition-colors">Services</Link>
          <Link href="/#contact" className="hover:text-[#6366F1] transition-colors">Contact</Link>
        </div>

        <Link href="/">
          <Button className="border border-[#6366F1]/40 text-[#6366F1] bg-transparent hover:bg-[#6366F1] hover:text-white transition-all text-sm rounded-none px-5 h-9">
            Back to Home
          </Button>
        </Link>
      </nav>

      {/* Nav Accent Line */}
      <div className="fixed top-20 left-0 right-0 z-40 h-px" style={{ background: `${INDIGO}22` }} />

      {/* ── Hero Section ── */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-20"
          style={{ background: `radial-gradient(circle, ${INDIGO}, transparent)` }} />

        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
          <div className="max-w-3xl flex flex-col gap-6">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-full"
                style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8" }}>
                Web3 Platform
              </span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">Active Showcase</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-semibold text-5xl md:text-7xl text-white leading-none tracking-tight">
              CryptoNice
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl font-light leading-relaxed text-zinc-400">
              A premium, interactive Web3 dashboard connecting decentralized wallets, mapping cross-chain yield statistics, and simulating impermanent loss risk factors.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4">
              <a href="https://cryptonice.lovable.app" target="_blank" rel="noreferrer">
                <Button className="text-white text-sm px-8 py-6 rounded-full font-semibold group transition-all hover:-translate-y-1 hover:shadow-xl"
                  style={{ background: INDIGO }}>
                  Visit Live Site
                  <ExternalLink className="ml-2 h-4 w-4" />
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
              { value: "<800ms", label: "Page Load Time", desc: "Highly optimized bundle sizes and client caching" },
              { value: "3+", label: "Chains Integrated", desc: "Aggregated wallet balances across Ethereum, Polygon, & Arbitrum" },
              { value: "99%", label: "Simulation Accuracy", desc: "Projected yields versus actual historic performance modeling" }
            ].map((metric, i) => (
              <div key={i} className="flex flex-col gap-2 border-l pl-6" style={{ borderColor: BORDER }}>
                <span className="font-display text-4xl font-semibold text-white">{metric.value}</span>
                <span className="text-xs uppercase tracking-widest font-bold" style={{ color: INDIGO }}>{metric.label}</span>
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
                  Decentralized finance (DeFi) users regularly interact with dozens of protocols across several blockchain layers. This fragmentation makes calculating real-time portfolio value, net yield, and impermanent loss exposure for liquidity providers extremely time-consuming and manual.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  The requirement was to design a clean, responsive, and secure Web3 hub that automatically fetches wallet assets, summarizes protocol stakes, and simulates yield strategies to support smarter asset allocation.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h2 className="font-display text-3xl font-medium text-white">Key Platform Features</h2>
                <p className="text-zinc-400 leading-relaxed">
                  CryptoNice achieves this by integrating client-side provider libraries directly with multi-chain block explorers and analytical indexers:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  {[
                    { title: "Multi-Wallet Connect", desc: "Supports metamask, Coinbase Wallet, and WalletConnect standard connectors." },
                    { title: "Portfolio Aggregation", desc: "Aggregates balances, tokens, and yield farm contracts across major Layer 2 networks." },
                    { title: "Risk Simulation Module", desc: "Simulates potential impermanent loss patterns using historical asset volatility models." },
                    { title: "Interactive Yield Curves", desc: "Calculates projected ROI over custom horizons using Recharts visualizations." }
                  ].map((feat, i) => (
                    <li key={i} className="p-5 border flex flex-col gap-2" style={{ borderColor: BORDER, background: SURFACE }}>
                      <div className="flex items-center gap-2 text-white font-medium">
                        <CheckCircle className="w-4 h-4 text-[#818cf8]" />
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
                    <span className="text-white font-medium">Lead Developer</span>
                  </div>
                  <div className="flex justify-between border-b pb-2" style={{ borderColor: BORDER }}>
                    <span className="text-zinc-500">Timeline</span>
                    <span className="text-white font-medium">2024</span>
                  </div>
                  <div className="flex justify-between border-b pb-2" style={{ borderColor: BORDER }}>
                    <span className="text-zinc-500">Category</span>
                    <span className="text-white font-medium">Decentralized Finance (DeFi)</span>
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
                            style={{ borderColor: "rgba(99,102,241,0.25)", color: "#818cf8", background: "rgba(99,102,241,0.05)" }}>
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
            <a href="https://linkedin.com/in/vignesh-v-051a001b3" target="_blank" rel="noreferrer" className="hover:text-[#6366F1] transition-colors">LinkedIn</a>
            <a href="https://github.com/VigneshsparrowEsh"        target="_blank" rel="noreferrer" className="hover:text-[#6366F1] transition-colors">GitHub</a>
            <Link href="/" className="hover:text-[#6366F1] transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
