'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { SiTypescript, SiNextdotjs, SiSupabase, SiPrisma, SiDebian } from 'react-icons/si';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efek untuk mengubah background navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background text-on-background font-body-lg selection:bg-primary-container selection:text-white">
      {/* TopNavBar */}
      <header
        className={`fixed top-0 w-full z-50 backdrop-blur-md transition-colors duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-background/90 border-b border-white/10' : 'bg-transparent border-b border-transparent md:border-white/10'
        }`}
      >
        <div className="h-16 flex justify-between items-center px-5 md:px-20 max-w-360 mx-auto relative z-20">
          <div className="text-[24px] md:text-[32px] font-extrabold text-on-surface tracking-tighter">
            YZD
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8 font-label-caps text-[12px] uppercase tracking-widest font-semibold">
            <a className="text-on-surface transition-colors duration-300 hover:text-primary-container" href="#about">About</a>
            <a className="text-on-surface transition-colors duration-300 hover:text-primary-container" href="#focus">Focus</a>
            <a className="text-on-surface transition-colors duration-300 hover:text-primary-container" href="#projects">Projects</a>
            <a className="text-on-surface transition-colors duration-300 hover:text-primary-container" href="#impact">Impact</a>
            <a className="text-on-surface transition-colors duration-300 hover:text-primary-container" href="#contact">Contact</a>
          </div>

          {/* Tombol Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-on-surface text-3xl focus:outline-none transition-transform duration-300 hover:text-primary-container"
            >
              {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </div>

        {/* Dropdown Menu Mobile - Floating Premium Version */}
        <div 
          className={`md:hidden absolute top-20 right-5 w-48 bg-background/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl origin-top-right transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col font-label-caps text-[12px] uppercase tracking-widest font-semibold divide-y divide-white/10 text-right">
            <a className="text-on-surface hover:text-primary-container hover:bg-white/5 transition-colors px-5 py-4 block rounded-t-xl" href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a className="text-on-surface hover:text-primary-container hover:bg-white/5 transition-colors px-5 py-4 block" href="#focus" onClick={() => setIsMobileMenuOpen(false)}>Focus</a>
            <a className="text-on-surface hover:text-primary-container hover:bg-white/5 transition-colors px-5 py-4 block" href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            <a className="text-on-surface hover:text-primary-container hover:bg-white/5 transition-colors px-5 py-4 block" href="#impact" onClick={() => setIsMobileMenuOpen(false)}>Impact</a>
            <a className="text-on-surface hover:text-primary-container hover:bg-white/5 transition-colors px-5 py-4 block rounded-b-xl" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center px-5 md:px-20 max-w-360 mx-auto pt-16">
          <div className="absolute inset-0 z-0 overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute top-1/4 -right-20 w-125 h-125 bg-primary-container/10 blur-[120px] rounded-full"></div>
          </div>
          <div className="relative z-10 space-y-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 font-label-caps text-[12px] font-semibold text-primary-container uppercase tracking-[0.2em]">
              <span className="w-8 h-px bg-primary-container"></span>
              Yazid Putra Muhammad Riziq  
            </div>
            <h1 className="text-[48px] md:text-[80px] leading-[1.1] text-on-surface font-extrabold tracking-tight">
              Product-Oriented <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-container to-primary">Web Developer</span> & Systems Analyst
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl text-lg md:text-xl leading-relaxed">
              Bridging technical possibilities with real-world business needs. I design systems that solve complex problems with surgical precision.
            </p>
            <div className="pt-8">
              <a href="#projects" className="inline-block text-center group relative px-8 py-4 bg-transparent border border-primary-container text-primary-container font-label-caps text-[12px] font-semibold uppercase tracking-widest overflow-hidden transition-all hover:bg-primary-container/10 hover:scale-105 active:scale-95">
                View My Work
              </a>
            </div>
          </div>
          <div className="absolute bottom-12 right-20 hidden md:flex items-center gap-4 text-secondary/40 font-label-caps text-[10px] uppercase tracking-[0.4em] origin-right transform rotate-90">
            <span>Scroll to explore</span>
            <span className="w-12 h-px bg-secondary/20"></span>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 px-5 md:px-20 max-w-360 mx-auto" id="about">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-[32px] font-bold text-on-surface uppercase tracking-tight">Core Philosophy</h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed text-lg">
                Focusing on core logic, intuitive UX, and system architecture. I act as an <span className="text-primary-container font-bold">AI Foreman</span>, leveraging advanced tools to handle boilerplate code while I focus on high-impact logic and business alignment.
              </p>
            </div>
            <div className="relative h-100 w-full glass-card rounded-xl overflow-hidden group">
              <Image 
                src="/yazid_profile.jpg" 
                alt="Yazid Riziq Profile" 
                fill
                className="object-cover transition-all duration-700 opacity-100 scale-100 md:opacity-50 md:grayscale md:scale-110 md:group-hover:grayscale-0 md:group-hover:opacity-100 md:group-hover:scale-100" 
              />
            </div>
          </div>
        </section>

        {/* Tech Focus Section */}
        <section className="py-32 bg-surface-container-lowest/50 border-y border-white/5" id="focus">
          <div className="px-5 md:px-20 max-w-360 mx-auto">
            <div className="text-center mb-24 space-y-4">
              <h2 className="text-[32px] font-bold text-on-surface">Technologies I’m Currently Exploring & Building With</h2>
              <p className="text-on-surface-variant font-label-caps text-[12px] font-semibold uppercase tracking-widest">Actively mastering these through hands-on execution</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {/* TypeScript */}
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center group-hover:border-primary-container transition-colors duration-300">
                  <SiTypescript className="text-[28px] text-on-surface group-hover:text-primary-container transition-colors duration-300" />
                </div>
                <span className="font-label-caps text-[12px] font-semibold text-on-surface opacity-60">TypeScript</span>
              </div>
              
              {/* Next.js */}
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center group-hover:border-primary-container transition-colors duration-300">
                  <SiNextdotjs className="text-[28px] text-on-surface group-hover:text-primary-container transition-colors duration-300" />
                </div>
                <span className="font-label-caps text-[12px] font-semibold text-on-surface opacity-60">Next.js</span>
              </div>
              
              {/* Supabase */}
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center group-hover:border-primary-container transition-colors duration-300">
                  <SiSupabase className="text-[28px] text-on-surface group-hover:text-primary-container transition-colors duration-300" />
                </div>
                <span className="font-label-caps text-[12px] font-semibold text-on-surface opacity-60">Supabase</span>
              </div>
              
              {/* Prisma */}
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center group-hover:border-primary-container transition-colors duration-300">
                  <SiPrisma className="text-[28px] text-on-surface group-hover:text-primary-container transition-colors duration-300" />
                </div>
                <span className="font-label-caps text-[12px] font-semibold text-on-surface opacity-60">Prisma</span>
              </div>
              
              {/* Debian WSL */}
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center group-hover:border-primary-container transition-colors duration-300">
                  <SiDebian className="text-[28px] text-on-surface group-hover:text-primary-container transition-colors duration-300" />
                </div>
                <span className="font-label-caps text-[12px] font-semibold text-on-surface opacity-60">WSL Debian</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-32 px-5 md:px-20 max-w-360 mx-auto" id="projects">
          <h2 className="text-[32px] font-bold text-on-surface mb-16 uppercase tracking-tight border-l-4 border-primary-container pl-6">Selected Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card 1: KitaAtur.com */}
            <div className="glass-card p-10 rounded-xl space-y-8 group transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="aspect-video w-full overflow-hidden rounded bg-surface-container mb-6 relative">
                  <Image 
                    src="/KitaAtur.com.jpg"
                    alt="KitaAtur.com Prototyping"
                    fill
                    className="object-cover transition-all duration-700 opacity-100 scale-100 md:opacity-50 md:grayscale md:group-hover:grayscale-0 md:group-hover:opacity-100 md:group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background to-transparent opacity-60"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    <span className="text-primary-container font-label-caps text-[12px] font-semibold tracking-widest uppercase">Active Development</span>
                  </div>
                  <h3 className="text-[32px] font-bold text-on-surface">KitaAtur.com</h3>
                  <p className="font-body-sm text-on-surface-variant leading-relaxed">
                    A targeted HRIS concept designed to eliminate operational friction in small businesses, initiated through direct user interviews. Currently validating the core automation logic and workflows via Telegram integration, while the production architecture is actively being mapped out for a Next.js web dashboard and WhatsApp API ecosystem.
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-label-caps tracking-widest text-on-surface-variant uppercase">Next.js</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-label-caps tracking-widest text-on-surface-variant uppercase">NestJS</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-label-caps tracking-widest text-on-surface-variant uppercase">Supabase</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-label-caps tracking-widest text-on-surface-variant uppercase">Telegram API</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <a href="https://drive.google.com/file/d/1pc9fysQnw3lBJTZ7vuGdndThGZY56Ro-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-label-caps text-[12px] font-semibold text-on-surface-variant group-hover:text-primary-container flex items-center gap-2 transition-colors w-fit">
                  VIEW ARCHITECTURE <span>→</span>
                </a>
              </div>
            </div>

            {/* Project Card 2: Equaly */}
            <div className="glass-card p-10 rounded-xl space-y-8 group transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="aspect-video w-full overflow-hidden rounded bg-surface-container mb-6 relative">
                  {/* Gunakan Image Next.js dan arahkan ke file yang akan kamu buat nanti */}
                  <Image 
                    src="/Equaly.jpg" 
                    alt="Equaly Platform Architecture" 
                    fill
                    className="object-cover transition-all duration-700 opacity-100 scale-100 md:opacity-50 md:grayscale md:group-hover:grayscale-0 md:group-hover:opacity-100 md:group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background to-transparent opacity-60"></div>
                </div>
                <div className="space-y-4">
                  {/* Dibungkus div dengan flex agar tingginya sejajar presisi dengan Project 1 */}
                  <div className="flex items-center gap-2">
                    <span className="text-primary-container font-label-caps text-[12px] font-semibold tracking-widest uppercase">AI Matchmaking Engine</span>
                  </div>
                  <h3 className="text-[32px] font-bold text-on-surface">Equaly</h3>
                  <p className="font-body-sm text-on-surface-variant leading-relaxed">
                    An inclusive job matching platform for the Deaf and Hard-of-Hearing community. Powered by a highly efficient hybrid AI pipeline and a 5-dimensional deterministic scoring model (DeepSeek API) to evaluate disability accommodations, communication spectrums, and skill sets.
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-label-caps tracking-widest text-on-surface-variant uppercase">Laravel</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-label-caps tracking-widest text-on-surface-variant uppercase">Livewire</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-label-caps tracking-widest text-on-surface-variant uppercase">DeepSeek AI</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-label-caps tracking-widest text-on-surface-variant uppercase">SQLite</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <a href="https://github.com/Lomba-Unity-14/Equaly" target="_blank" rel="noopener noreferrer" className="font-label-caps text-[12px] font-semibold text-on-surface-variant group-hover:text-primary-container flex items-center gap-2 transition-colors w-fit">
                  VIEW REPOSITORY <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-32 px-5 md:px-20 max-w-360 mx-auto overflow-hidden" id="impact">
          <div className="relative glass-card p-16 rounded-xl border-amber-500/10">
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary-container/20 blur-3xl"></div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-8">
                <h2 className="text-[32px] font-bold text-on-surface uppercase tracking-tight">Leadership & Strategic Impact</h2>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-primary-container">IT Community Chairman</h4>
                  <p className="font-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
                    Focused on building solid operational ecosystems and standardized documentation for long-term sustainability. I drive results by aligning technical talent with strategic mission goals.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center border-l border-white/10 pl-8 space-y-2">
                <div className="text-4xl font-extrabold text-on-surface">30+</div>
                <div className="font-label-caps text-[12px] font-semibold text-on-surface-variant uppercase tracking-widest">Active Members</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 bg-background border-t border-white/5" id="contact">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-5 md:px-20 max-w-360 mx-auto">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-primary-container font-bold text-xl uppercase tracking-tighter">YZD</div>
            <p className="font-body-sm text-on-surface-variant">© 2024 Yazid Putra Muhammad Riziq. Built with precision.</p>
          </div>
          <div className="flex gap-8 font-label-caps text-[12px] font-semibold uppercase tracking-widest">
            <a className="text-on-surface-variant hover:text-primary-container transition-all hover:underline underline-offset-4" href="https://linkedin.com/in/yazid-riziq">LinkedIn</a>
            <a className="text-on-surface-variant hover:text-primary-container transition-all hover:underline underline-offset-4" href="https://github.com/YazidRiziq">GITHUB</a>
            <a className="text-on-surface-variant hover:text-primary-container transition-all hover:underline underline-offset-4" href="mailto:yazidputra95@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}