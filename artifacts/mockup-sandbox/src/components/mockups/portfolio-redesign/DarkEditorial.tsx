import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Briefcase, ChevronRight, BarChart, Lightbulb, Grid } from "lucide-react";

export default function DarkEditorial() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-300 font-sans selection:bg-[#F5A623] selection:text-[#0A0A0A]">
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --font-display: 'Cormorant Garamond', serif;
          --font-body: 'Inter', sans-serif;
        }
        .font-display {
          font-family: var(--font-display);
        }
        .font-body {
          font-family: var(--font-body);
        }
      `}} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-[#F5A623]/20 bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display text-2xl font-semibold tracking-wide text-zinc-100">
            Vignesh V.
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-zinc-400 font-medium">
            <a href="#about" className="hover:text-[#F5A623] transition-colors">About</a>
            <a href="#services" className="hover:text-[#F5A623] transition-colors">Services</a>
            <a href="#experience" className="hover:text-[#F5A623] transition-colors">Experience</a>
          </div>
          <Button variant="outline" className="hidden md:flex border-[#F5A623]/50 text-[#F5A623] hover:bg-[#F5A623] hover:text-[#0A0A0A] transition-all font-body">
            Let's Talk
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[85vh] flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5A623] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F5A623]"></span>
              </span>
              <span className="text-[#F5A623] text-sm uppercase tracking-widest font-medium">Available for projects</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] text-zinc-100">
                I turn complex <br/>
                <span className="italic text-zinc-400">business problems</span><br/>
                into clear decisions.
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-zinc-400 font-display max-w-2xl leading-relaxed">
              AI Business Analyst · Supply Chain · Data Storytelling based in Bengaluru, India.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-[#F5A623] text-[#0A0A0A] hover:bg-[#F5A623]/90 text-lg px-8 py-6 rounded-none font-medium transition-all group">
                Let's Talk
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 text-lg px-8 py-6 rounded-none transition-all">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Portrait Column */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto group">
              <div className="absolute inset-0 bg-[#F5A623]/5 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <div className="absolute inset-0 border border-zinc-800 z-10 pointer-events-none"></div>
              <img 
                src="/__mockup/images/vignesh.png" 
                alt="Vignesh V"
                className="w-full h-full object-cover object-top relative z-0 transition-all duration-700 group-hover:scale-[1.02]"
                style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.9)" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-zinc-800 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-zinc-800/0 md:divide-zinc-800">
            <div className="flex flex-col gap-2 md:px-8">
              <span className="font-display text-4xl md:text-5xl text-zinc-100">3+</span>
              <span className="text-sm text-zinc-500 uppercase tracking-wider font-medium">Years Experience</span>
            </div>
            <div className="flex flex-col gap-2 md:px-8">
              <span className="font-display text-4xl md:text-5xl text-zinc-100">10+</span>
              <span className="text-sm text-zinc-500 uppercase tracking-wider font-medium">Projects Delivered</span>
            </div>
            <div className="flex flex-col gap-2 md:px-8">
              <span className="font-display text-4xl md:text-5xl text-zinc-100">3</span>
              <span className="text-sm text-zinc-500 uppercase tracking-wider font-medium">Companies</span>
            </div>
            <div className="flex flex-col justify-center md:px-8">
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'Power BI', 'Tableau', 'AI Strategy', 'Supply Chain'].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-300 rounded-none border border-zinc-700/50 font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="services">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-[#F5A623] text-sm uppercase tracking-widest font-medium mb-4">Core Competencies</h2>
            <h3 className="font-display text-4xl md:text-5xl text-zinc-100">Areas of Expertise</h3>
          </div>
          <Button variant="link" className="text-zinc-400 hover:text-[#F5A623] group p-0">
            View full capabilities 
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Data & Business Analysis",
              desc: "Transforming raw data into actionable insights through robust SQL queries and advanced data modeling.",
              icon: BarChart
            },
            {
              title: "AI Strategy & Consulting",
              desc: "Bridging the gap between technical AI capabilities and tangible business value.",
              icon: Lightbulb
            },
            {
              title: "Product & Requirements",
              desc: "Translating stakeholder needs into precise technical requirements and product roadmaps.",
              icon: Grid
            }
          ].map((service, i) => (
            <Card key={i} className="bg-[#111111] border-zinc-800 rounded-none group hover:border-[#F5A623]/50 transition-colors duration-500">
              <CardContent className="p-8 flex flex-col gap-6">
                <div className="h-12 w-12 rounded-full bg-zinc-800/50 flex items-center justify-center text-zinc-400 group-hover:text-[#F5A623] group-hover:bg-[#F5A623]/10 transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display text-2xl text-zinc-100 mb-3">{service.title}</h4>
                  <p className="text-zinc-500 leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Overview */}
      <section className="py-24 px-6 max-w-3xl mx-auto" id="experience">
        <h2 className="text-[#F5A623] text-sm uppercase tracking-widest font-medium mb-4 text-center">Career</h2>
        <h3 className="font-display text-4xl md:text-5xl text-zinc-100 mb-16 text-center">Selected Experience</h3>

        <div className="space-y-12">
          {[
            {
              role: "Business Analyst",
              company: "Flipkart",
              period: "Sep 2025–Present"
            },
            {
              role: "Data Analyst",
              company: "Spire Technologies",
              period: "Sep 2024–Aug 2025"
            },
            {
              role: "Associate Analyst",
              company: "Frankmax Tech",
              period: "Aug 2021–Sep 2022"
            }
          ].map((job, i) => (
            <div key={i} className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-8 hover:border-zinc-600 transition-colors">
              <div>
                <h4 className="font-display text-2xl text-zinc-100 group-hover:text-[#F5A623] transition-colors">{job.role}</h4>
                <div className="text-zinc-500 mt-1 flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  {job.company}
                </div>
              </div>
              <div className="text-sm text-zinc-600 uppercase tracking-wider font-medium text-left sm:text-right">
                {job.period}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 rounded-none px-8">
            View Full Resume
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-[#0A0A0A] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display text-xl text-zinc-100">
            Vignesh V.
          </div>
          <div className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Vignesh V. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-zinc-400">
            <a href="#" className="hover:text-[#F5A623] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#F5A623] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#F5A623] transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}