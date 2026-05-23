"use client";

import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Globe, ExternalLink } from "lucide-react";

const features = [
  { 
    title: "Executive Plans", 
    description: "Agency owner leading with full dedication"
  },
  { 
    title: "3+ Years Freelancing", 
    description: "Persuasion, communication & real impact"
  },
  { 
    title: "50+ Websites", 
    description: "Landing pages to web applications"
  },
  { 
    title: "Client-First Vision", 
    description: "Comfort, confidence & professional experience"
  },
];

export function DevelopersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="developers" ref={sectionRef} className="relative pt-8 lg:pt-10 pb-12 lg:pb-20 overflow-hidden">

      {/* Image — absolute, bottom-right, behind all content */}
      <div
        className={`absolute bottom-0 right-0 w-[55%] h-[85%] pointer-events-none transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2813%29-OQ2DiR3ElVsUg8kTvTL1kC5A3Q6maM.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-left-top"
        />
        {/* Fade left edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        {/* Fade top edge */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent" />
      </div>

      {/* All text content sits on top */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header — Full width */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            About Me
          </span>
          <h2 className="text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] text-glow-pink">
            Prince Mehra.
          </h2>
        </div>

        {/* Description + Features — left half only */}
        <div
          className={`max-w-[52%] transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Bio paragraphs with highlighted keywords */}
          <div className="space-y-4 mb-10 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              I own my agency,{" "}
              <span className="text-white font-semibold">Executive Plans</span>, and I&apos;m deeply passionate about my work. My team is not just a team — they are a part of me, and I lead them with full{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #ff008c, #ff4fd8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 700,
                }}
              >
                dedication
              </span>
              .
            </p>
            <p>
              I have strong{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #ff4fd8, #ff008c)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 700,
                }}
              >
                persuasion &amp; communication
              </span>{" "}
              skills, and I genuinely enjoy developing meaningful work. I always try to create projects that add real{" "}
              <span className="text-white font-semibold">impact</span> instead of just looking good.
            </p>
            <p>
              Making my clients feel happy, comfortable, and confident while working with me is one of my biggest priorities. I always try to build strong{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #ff66ff, #ff4fd8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 700,
                }}
              >
                bonds
              </span>{" "}
              with my clients and give them a full professional experience with real value.
            </p>
            <p>
              I also always stay open to connecting with others because I believe every person carries knowledge and a different way of thinking. That&apos;s the reason I constantly look for new{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #ff008c, #ff66ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 700,
                }}
              >
                opportunities
              </span>{" "}
              and ways to grow.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 50 + 200}ms` }}
              >
                <h3 className="font-medium mb-1" style={{ color: "#ff008c" }}>{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div
            className={`flex flex-wrap gap-3 mt-10 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="https://github.com/princemehra9024"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/20 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/60 transition-all duration-300 group"
            >
              <Github className="w-4 h-4" />
              GitHub
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://www.linkedin.com/in/prince-mehra-562681366"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/20 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/60 transition-all duration-300 group"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}
