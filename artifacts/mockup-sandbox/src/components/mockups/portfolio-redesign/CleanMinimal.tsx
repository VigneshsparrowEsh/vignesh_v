import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export default function CleanMinimal() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-slate-900 font-['DM_Sans',sans-serif] selection:bg-[#F5A623] selection:text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <div className="font-['DM_Serif_Display',serif] text-2xl font-bold tracking-tight">VV.</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-[#F5A623] transition-colors">Services</a>
          <a href="#experience" className="hover:text-[#F5A623] transition-colors">Experience</a>
          <a href="#skills" className="hover:text-[#F5A623] transition-colors">Skills</a>
        </div>
        <a href="mailto:hello@example.com" className="flex items-center gap-2 text-sm font-medium hover:text-[#F5A623] transition-colors">
          <Mail className="w-4 h-4" />
          <span>Get in touch</span>
        </a>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-8 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-[#F5A623] font-semibold tracking-wider text-sm uppercase">AI Business Analyst</h2>
              <h1 className="font-['DM_Serif_Display',serif] text-6xl md:text-7xl leading-tight text-slate-900">
                Vignesh V.
              </h1>
              <p className="text-xl text-slate-600 font-light leading-relaxed max-w-md">
                "I turn complex business problems into clear decisions."
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 rounded-none text-base h-auto">
                View My Work
              </Button>
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-6 rounded-none text-base h-auto group">
                Contact Me <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="relative justify-self-center md:justify-self-end">
            <div className="relative z-10 w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
              <img 
                src="/__mockup/images/vignesh.png" 
                alt="Vignesh V" 
                className="w-full h-full object-cover rounded-full shadow-2xl shadow-slate-200/50 grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80";
                }}
              />
            </div>
            {/* Amber accent line */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#F5A623] z-20"></div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-32 pt-12 border-t border-slate-200/60">
          <div className="grid grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="text-3xl font-['DM_Serif_Display',serif] text-slate-900 mb-1">3+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-['DM_Serif_Display',serif] text-slate-900 mb-1">10+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-['DM_Serif_Display',serif] text-slate-900 mb-1">3</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Companies</div>
            </div>
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section id="services" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-['DM_Serif_Display',serif] mb-4">Areas of Expertise</h2>
            <div className="w-12 h-1 bg-[#F5A623]"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Data & Business Analysis", desc: "Extracting actionable insights from complex datasets to drive strategic decisions." },
              { title: "AI Strategy & Consulting", desc: "Guiding organizations in adopting AI solutions to optimize operations and growth." },
              { title: "Product & Requirements", desc: "Translating business needs into precise technical requirements for product teams." }
            ].map((service, i) => (
              <div key={i} className="group p-8 border border-slate-100 hover:border-slate-200 bg-[#FAFAF8] transition-all relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#F5A623] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience & Skills brief */}
      <section className="py-24 max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-['DM_Serif_Display',serif] mb-8">Experience</h2>
            <div className="space-y-8">
              {[
                { role: "AI Business Analyst", company: "Flipkart", period: "Sep 2025–Present" },
                { role: "Business Analyst", company: "Spire Technologies", period: "Sep 2024–Aug 2025" },
                { role: "Data Analyst", company: "Frankmax Tech", period: "Aug 2021–Sep 2022" }
              ].map((job, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-slate-200">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-slate-300"></div>
                  <h3 className="font-bold text-lg text-slate-900">{job.role}</h3>
                  <div className="flex items-center gap-2 mt-1 text-slate-600">
                    <span className="font-medium text-[#F5A623]">{job.company}</span>
                    <span>·</span>
                    <span className="text-sm font-light">{job.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-['DM_Serif_Display',serif] mb-8">Core Skills</h2>
            <div className="flex flex-wrap gap-3">
              {["Python", "SQL", "Power BI", "Tableau", "AI Strategy", "Supply Chain", "Data Storytelling"].map((skill, i) => (
                <span key={i} className="px-4 py-2 border border-slate-200 text-sm font-medium text-slate-700 bg-white">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
