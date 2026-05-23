"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Globe } from "lucide-react";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section ref={sectionRef} className="relative py-12 lg:py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 px-8 lg:px-12 py-10 lg:py-14">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left content */}
              <div className="flex-1">
              <h2 className="text-6xl md:text-7xl lg:text-[72px] font-display tracking-tight mb-8 leading-[0.95]">
                Let&apos;s work
                <br />
                together.
              </h2>

              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
                Ready to build something with{" "}
                <span style={{ color: "#ff008c", fontWeight: 700 }}>real impact</span>?
                Let&apos;s connect and create something you&apos;ll be{" "}
                <span style={{ color: "#ff4fd8", fontWeight: 700 }}>proud</span> of.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
                  asChild
                >
                  <a href="mailto:princemehra9024@gmail.com">
                    Email Me
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
                  asChild
                >
                  <a href="tel:+919024546041">
                    Call: 9024546041
                  </a>
                </Button>
              </div>

              {/* Separate Highly Attractive WhatsApp Card */}
              <a 
                href="https://wa.me/919024546041" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative flex items-center overflow-hidden w-full max-w-md h-24 px-8 rounded-3xl group border border-white/10 hover:border-[#ff008c]/60 shadow-[0_0_20px_rgba(255,0,140,0.1)] hover:shadow-[0_0_40px_rgba(255,0,140,0.3)] hover:-translate-y-2 transition-all duration-500"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 scale-110 transition-all duration-700 pointer-events-none"
                >
                  <source src="/videos/bg-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors z-10 pointer-events-none" />
                
                <div className="relative z-20 flex flex-col items-start drop-shadow-xl">
                  <span className="text-[#ff008c] text-xs font-mono tracking-widest mb-1 uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff008c] animate-pulse" />
                    Available Now
                  </span>
                  <span className="text-white font-display text-2xl tracking-wide flex items-center">
                    Chat on WhatsApp
                    <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-2 text-white/70 group-hover:text-white" />
                  </span>
                </div>
              </a>

              <p className="text-sm text-muted-foreground mt-8 font-mono">
                princemehra9024@gmail.com
              </p>

              {/* Quick Social Links */}
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="https://github.com/princemehra9024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/20 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-all duration-300 group"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/prince-mehra-562681366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/20 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                
              </div>
              </div>

              {/* Right image */}
              <div className="hidden lg:flex items-center justify-center w-[450px] lg:w-[500px] h-[350px] lg:h-[400px] -mr-8">
                <img
                  src="/images/bridge.png"
                  alt="Two trees connected by glowing arcs"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
