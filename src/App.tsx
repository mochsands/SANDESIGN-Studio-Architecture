/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Menu, 
  X, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Linkedin, 
  Facebook,
  Compass,
  PenTool,
  Home,
  CheckCircle2,
  Quote,
  Maximize,
  Layers,
  Box
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const SERVICES = [
  {
    id: "ARCH-01",
    title: "Architectural Vision",
    description: "Creating structural masterpieces that harmonize with their environment and Indonesian heritage.",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "INT-02",
    title: "Interior Curation",
    description: "Bespoke interior spaces that reflect personal identity while maximizing functional luxury.",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "DB-03",
    title: "Design-Build Excellence",
    description: "A seamless transition from blueprint to reality with our integrated construction management.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1503387762-592dee58292b?auto=format&fit=crop&q=80&w=800"
  }
];

const PORTFOLIO = [
  {
    id: "PRJ-2024-01",
    name: "coba",
    category: "Residential",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "PRJ-2024-02",
    name: "coba coba",
    category: "Residential",
    location: "Jakarta, Indonesia",
    image: "https://images.unsplash.com/photo-1600607687940-477a63bd39d8?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "PRJ-2024-03",
    name: "coba coba coba",
    category: "Commercial",
    location: "Surabaya, Indonesia",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
  }
];

const PROCESS = [
  { step: "01", title: "Vision Discovery", desc: "Understanding your lifestyle, needs, and aspirations." },
  { step: "02", title: "Conceptual Blueprint", desc: "Translating ideas into visionary architectural sketches." },
  { step: "03", title: "Material Curation", desc: "Selecting the finest materials for longevity and aesthetics." },
  { step: "04", title: "Precision Execution", desc: "Meticulous construction and project management." },
  { step: "05", title: "The Handover", desc: "Delivering your masterpiece with absolute perfection." }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-black selection:text-white arch-grid cursor-none">
      {/* Custom Crosshair Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: "spring", damping: 30, stiffness: 250, mass: 0.5 }}
      >
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white"></div>
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white"></div>
      </motion.div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? "bg-white/90 backdrop-blur-md py-4 border-black/5" : "bg-transparent py-8 border-transparent"}`}>
        <div className="max-w-[1800px] mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-black rounded-none flex items-center justify-center text-white font-bold text-xl">S</div>
            <div className="flex flex-col">
              <span className="text-xl tracking-tighter uppercase font-black leading-none">SANDESIGN</span>
              <span className="text-[8px] mono uppercase tracking-[0.4em] opacity-40">Studio Architecture • Est. 2011</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-16 text-[10px] mono uppercase tracking-[0.3em] font-bold">
            <a href="#about" className="hover:opacity-50 transition-opacity relative group">
              About
            </a>
            <a href="#services" className="hover:opacity-50 transition-opacity relative group">
              Services
            </a>
            <a href="#portfolio" className="hover:opacity-50 transition-opacity relative group">
              Portfolio
            </a>
            <a href="#contact" className="btn-formal">
              Consult Now
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-12 text-4xl font-black tracking-tighter uppercase"
          >
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Consult</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 z-0 grid grid-cols-4 md:grid-cols-12 h-full w-full pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-black/[0.03] h-full relative">
              <span className="absolute top-4 left-2 mono text-[8px] opacity-10">0{i+1}</span>
            </div>
          ))}
        </div>

        <div className="max-w-[1800px] mx-auto px-8 w-full grid md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-12">
                <span className="mono text-[10px] uppercase tracking-[0.5em] font-bold opacity-30">
                  [ ARCHITECTURAL LEGACY / INDONESIA ]
                </span>
              </div>
              <h1 className="text-8xl md:text-[14rem] leading-[0.8] mb-16 tracking-tighter uppercase font-black">
                Visionary <br /> <span className="text-stroke">Structure</span>
              </h1>
              <div className="flex flex-col md:flex-row gap-16 items-start md:items-center">
                <p className="max-w-md text-black/40 text-xl leading-tight font-medium">
                  Bridging the gap between visionary architectural concepts and meticulous execution. We build the future of Indonesian luxury.
                </p>
                <a href="#contact" className="btn-formal group flex items-center gap-6">
                  Start Project <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="md:col-span-4 relative hidden md:block">
            <motion.div 
              style={{ y: heroY, opacity: heroOpacity }}
              className="aspect-[3/4] blueprint-border overflow-hidden grayscale"
            >
              <img 
                src="https://images.unsplash.com/photo-1600607687940-477a63bd39d8?auto=format&fit=crop&q=80&w=2000" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-8 -left-8 bg-black p-10 text-white mono text-[10px] uppercase tracking-[0.4em] z-20 font-bold">
              6.2088° S, 106.8456° E
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stats */}
      <section className="border-b border-black/5 bg-white relative overflow-hidden">
        <div className="absolute inset-0 arch-grid-fine opacity-20 pointer-events-none"></div>
        <div className="max-w-[1800px] mx-auto grid grid-cols-2 md:grid-cols-4 relative z-10">
          {[
            { label: "Years Excellence", value: "15+", id: "EST-11" },
            { label: "Projects Delivered", value: "200+", id: "PRJ-CNT" },
            { label: "Design Awards", value: "12", id: "AWD-WIN" },
            { label: "Client Satisfaction", value: "99%", id: "SAT-SCR" }
          ].map((stat, i) => (
            <div key={i} className="p-16 border-r border-black/5 last:border-r-0 group hover:bg-neutral-50 transition-colors relative overflow-hidden">
              <span className="mono text-[9px] uppercase tracking-widest opacity-20 mb-6 block">[{stat.id}]</span>
              <div className="text-7xl font-black tracking-tighter mb-4">{stat.value}</div>
              <div className="text-[10px] mono uppercase tracking-widest opacity-40 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About - Split Layout */}
      <section id="about" className="py-48 border-b border-black/5 relative">
        <div className="max-w-[1800px] mx-auto px-8 grid md:grid-cols-12 gap-32 items-center">
          <div className="md:col-span-6">
            <div className="relative aspect-square blueprint-border overflow-hidden grayscale">
              <img 
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=1200" 
                alt="Architectural Detail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="md:col-span-6">
            <span className="mono text-[10px] uppercase tracking-[0.5em] opacity-30 mb-12 block font-bold">
              [ PHILOSOPHY / SANDESIGN ]
            </span>
            <h2 className="text-7xl md:text-9xl mb-16 leading-[0.9] uppercase font-black tracking-tighter">
              The Wisdom <br /> of Execution
            </h2>
            <div className="space-y-12">
              <p className="text-black/40 text-2xl leading-tight font-medium max-w-xl">
                SANDESIGN Studio Architecture was founded on the belief that visionary design should be accessible, sustainable, and meticulously crafted.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {["Visionary Design", "Uncompromising Quality", "Absolute Integrity", "Precision Engineering"].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-12 h-[1px] bg-black/10 group-hover:w-20 group-hover:bg-black transition-all duration-500"></div>
                    <span className="mono text-[10px] uppercase tracking-widest font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Grid Layout */}
      <section id="services" className="py-48 bg-white relative">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="flex justify-between items-end mb-32">
            <div>
              <span className="mono text-[10px] uppercase tracking-[0.5em] opacity-30 mb-6 block font-bold">[ CAPABILITIES ]</span>
              <h2 className="text-7xl md:text-9xl uppercase font-black tracking-tighter">Expertise</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 border-t border-black/5">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
                className="p-16 border-r border-b border-black/5 group transition-all duration-700 relative overflow-hidden"
              >
                <div className="absolute top-8 right-8 mono text-[10px] opacity-10 font-bold">{service.id}</div>
                <h3 className="text-5xl uppercase font-black tracking-tighter mb-8 group-hover:translate-x-4 transition-transform duration-700">{service.title}</h3>
                <p className="text-black/30 text-lg leading-tight mb-16 h-24 font-medium">{service.description}</p>
                <div className="aspect-video blueprint-border overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio - Horizontal Scroll Style */}
      <section id="portfolio" className="py-48 bg-black text-white overflow-hidden relative">
        <div className="max-w-[1800px] mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <div>
              <span className="mono text-[10px] uppercase tracking-[0.5em] opacity-30 mb-6 block font-bold">[ PORTFOLIO ]</span>
              <h2 className="text-7xl md:text-9xl uppercase font-black tracking-tighter">Works</h2>
            </div>
            <div className="flex gap-4">
              <button className="w-20 h-20 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                <ChevronRight className="w-8 h-8 rotate-180 group-hover:-translate-x-2 transition-transform" />
              </button>
              <button className="w-20 h-20 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-1 bg-white/5">
            {PORTFOLIO.map((project, i) => (
              <motion.div 
                key={i}
                className="group relative aspect-[3/4] overflow-hidden bg-neutral-900"
              >
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-30 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-12 left-12 mono text-[10px] uppercase tracking-widest font-bold opacity-40">
                  {project.id}
                </div>
                <div className="absolute bottom-0 left-0 p-16 w-full">
                  <span className="mono text-[10px] uppercase tracking-widest opacity-40 mb-6 block font-bold">{project.category}</span>
                  <h3 className="text-5xl uppercase font-black tracking-tighter mb-8">{project.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-[10px] mono uppercase tracking-widest opacity-30 font-bold">{project.location}</p>
                    <div className="w-12 h-12 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                      <Maximize className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Technical Timeline */}
      <section className="py-48 border-b border-black/5 relative">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid md:grid-cols-12 gap-32">
            <div className="md:col-span-5">
              <span className="mono text-[10px] uppercase tracking-[0.5em] opacity-30 mb-8 block font-bold">[ WORKFLOW ]</span>
              <h2 className="text-7xl md:text-9xl uppercase font-black tracking-tighter mb-16">Method</h2>
              <div className="p-16 blueprint-border bg-white">
                <Layers className="w-12 h-12 mb-12" />
                <p className="text-black/40 text-xl leading-tight font-medium">
                  Our process is a synthesis of creative intuition and engineering precision. We ensure every detail is accounted for from initial sketch to final handover.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-7">
              <div className="space-y-0">
                {PROCESS.map((p, i) => (
                  <div key={i} className="group flex items-start gap-16 py-20 border-b border-black/5 last:border-b-0 hover:bg-neutral-50 transition-all px-12 -mx-12 relative overflow-hidden">
                    <div className="mono text-8xl text-black/[0.03] group-hover:text-black/[0.08] transition-colors font-black tracking-tighter">{p.step}</div>
                    <div className="flex-1">
                      <h3 className="text-3xl uppercase font-black tracking-tighter mb-6 group-hover:translate-x-4 transition-transform duration-500">{p.title}</h3>
                      <p className="text-black/30 text-lg leading-tight font-medium max-w-lg">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Modern Form */}
      <section id="contact" className="py-48 bg-white relative">
        <div className="max-w-[1800px] mx-auto px-8">
          <div className="grid md:grid-cols-12 blueprint-border overflow-hidden">
            <div className="md:col-span-5 p-16 md:p-32 bg-black text-white relative">
              <div className="absolute inset-0 arch-grid opacity-5 pointer-events-none"></div>
              <span className="mono text-[10px] uppercase tracking-[0.5em] opacity-30 mb-12 block font-bold relative z-10">[ INQUIRY ]</span>
              <h2 className="text-7xl md:text-9xl uppercase font-black tracking-tighter mb-20 relative z-10">Connect</h2>
              
              <div className="space-y-16 relative z-10">
                <div className="flex gap-12 group">
                  <div className="mono text-[10px] opacity-20 group-hover:opacity-100 transition-opacity font-bold">01</div>
                  <div>
                    <div className="text-[10px] mono uppercase tracking-widest opacity-30 mb-4 font-bold">Office</div>
                    <div className="text-xl font-bold">Jakarta, Indonesia</div>
                  </div>
                </div>
                <div className="flex gap-12 group">
                  <div className="mono text-[10px] opacity-20 group-hover:opacity-100 transition-opacity font-bold">02</div>
                  <div>
                    <div className="text-[10px] mono uppercase tracking-widest opacity-30 mb-4 font-bold">Direct</div>
                    <div className="text-xl font-bold">+62 21 555 0123</div>
                  </div>
                </div>
                <div className="flex gap-12 group">
                  <div className="mono text-[10px] opacity-20 group-hover:opacity-100 transition-opacity font-bold">03</div>
                  <div>
                    <div className="text-[10px] mono uppercase tracking-widest opacity-30 mb-4 font-bold">Email</div>
                    <div className="text-xl font-bold">hello@sandesign.studio</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 p-16 md:p-32 bg-white relative">
              <form className="space-y-16 relative z-10">
                <div className="grid md:grid-cols-2 gap-16">
                  <div className="space-y-6">
                    <label className="mono text-[10px] uppercase tracking-widest font-bold opacity-30">Full Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-black/10 py-6 focus:border-black outline-none transition-colors mono text-sm font-bold" placeholder="John Doe" />
                  </div>
                  <div className="space-y-6">
                    <label className="mono text-[10px] uppercase tracking-widest font-bold opacity-30">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-black/10 py-6 focus:border-black outline-none transition-colors mono text-sm font-bold" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-6">
                  <label className="mono text-[10px] uppercase tracking-widest font-bold opacity-30">Project Type</label>
                  <select className="w-full bg-transparent border-b border-black/10 py-6 focus:border-black outline-none transition-colors mono text-sm appearance-none cursor-pointer font-bold">
                    <option>Residential Architecture</option>
                    <option>Interior Design</option>
                    <option>Commercial Development</option>
                  </select>
                </div>
                <div className="space-y-6">
                  <label className="mono text-[10px] uppercase tracking-widest font-bold opacity-30">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-black/10 py-6 focus:border-black outline-none transition-colors mono text-sm resize-none font-bold" placeholder="Tell us about your vision..."></textarea>
                </div>
                <button className="btn-formal w-full flex items-center justify-center gap-8 group">
                  Send Inquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 bg-white border-t border-black/5 relative overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-24 mb-32">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-black flex items-center justify-center text-white font-black text-3xl">S</div>
              <div className="flex flex-col">
                <span className="text-3xl tracking-tighter uppercase font-black leading-none">SANDESIGN</span>
                <span className="text-[10px] mono uppercase tracking-[0.4em] opacity-30 font-bold">Studio Architecture</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-24">
              <div className="space-y-8">
                <div className="mono text-[10px] uppercase tracking-widest font-bold opacity-30">Navigation</div>
                <div className="flex flex-col gap-6 text-[10px] mono uppercase tracking-widest font-bold">
                  <a href="#" className="hover:opacity-50 transition-opacity">Home</a>
                  <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
                  <a href="#services" className="hover:opacity-50 transition-opacity">Services</a>
                </div>
              </div>
              <div className="space-y-8">
                <div className="mono text-[10px] uppercase tracking-widest font-bold opacity-30">Social</div>
                <div className="flex flex-col gap-6 text-[10px] mono uppercase tracking-widest font-bold">
                  <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
                  <a href="#" className="hover:opacity-50 transition-opacity">LinkedIn</a>
                  <a href="#" className="hover:opacity-50 transition-opacity">Facebook</a>
                </div>
              </div>
              <div className="space-y-8 hidden md:block">
                <div className="mono text-[10px] uppercase tracking-widest font-bold opacity-30">Contact</div>
                <div className="flex flex-col gap-6 text-[10px] mono uppercase tracking-widest font-bold opacity-40">
                  <span>+62 21 555 0123</span>
                  <span>hello@sandesign.studio</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-black/5 gap-12">
            <div className="mono text-[10px] uppercase tracking-[0.4em] opacity-20 font-bold">
              © 2026 SANDESIGN Studio Architecture.
            </div>
            <div className="mono text-[10px] uppercase tracking-[0.4em] opacity-20 font-bold">
              Jakarta • Indonesia • MMXXVI
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
