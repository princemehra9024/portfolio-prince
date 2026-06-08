"use client";

import { ArrowUpRight, Github, Linkedin, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const footerLinks = {
  Services: [
    { name: "Web Development", href: "#features" },
    { name: "App Development", href: "#features" },
    { name: "UI/UX Design", href: "#features" },
    { name: "Consulting", href: "#features" },
  ],
  About: [
    { name: "Background", href: "#developers" },
    { name: "Experience", href: "#infra" },
    { name: "Tech Stack", href: "#integrations" },
    { name: "Projects", href: "#projects" },
  ],
  Contact: [
    { name: "princemehra9024@gmail.com", href: "mailto:princemehra9024@gmail.com" },
    { name: "+91 9024546041", href: "tel:+919024546041" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/prince-mehra-562681366" },
    { name: "GitHub", href: "https://github.com/princemehra9024" },
  ],
};

const socialLinks = [
  { name: "Email", href: "mailto:princemehra9024@gmail.com", icon: "email" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/prince-mehra-562681366", icon: "linkedin" },
  { name: "GitHub", href: "https://github.com/princemehra9024", icon: "github" },

];

function AnimatedWaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(255, 0, 140, 0.3)";
      ctx.lineWidth = 1;

      for (let wave = 0; wave < 3; wave++) {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 5) {
          const y =
            height * 0.5 +
            Math.sin(x * 0.01 + time + wave * 0.5) * 30 +
            Math.sin(x * 0.02 + time * 1.5 + wave) * 20;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      time += 0.02;
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}

const catMessages = [
  "Building websites isn't my job. It's how I solve business problems.",
  "I turn ideas into products people actually use.",
  "From design to deployment, I handle the complete development journey.",
  "Every project starts with understanding the business, not writing code.",
  "Clean code today means fewer problems tomorrow.",
  "Founder of Executive Plans — helping businesses grow through technology.",
  "I build websites, apps, automations, and digital systems that scale.",
  "My goal is simple: create digital experiences that generate results.",
  "Technology should save time, increase revenue, and simplify work.",
  "Currently exploring advanced system design and scalable architectures.",
  "Every day I learn something new and apply it to real projects.",
  "Curiosity is my favorite development tool.",
  "The best developers never stop being students.",
  "Fun Fact: I enjoy solving coding challenges more than watching movies.",
  "Fun Fact: I often redesign projects multiple times before launch.",
  "Fun Fact: Most of my ideas come while debugging.",
  "Fun Fact: I started with simple websites and now build complete solutions.",
  "I focus on solutions, not excuses.",
  "Good design attracts users. Great development keeps them.",
  "Details matter. That's where quality lives.",
  "Fast websites create better user experiences.",
  "I enjoy building browser games to experiment with new ideas.",
  "Creating interactive experiences is one of my favorite challenges.",
  "I love turning complex concepts into simple user experiences.",
  "Outside client work, I explore AI, automation, and web technologies.",
  "Based in India, working with clients worldwide.",
  "I believe consistency beats motivation.",
  "I enjoy transforming ideas into products that create impact.",
  "Building, learning, and improving — that's the routine.",
  "Meow! Prince is probably debugging something right now.",
  "I inspected the code. Approved. 🐾",
  "Current status: Turning coffee into code.",
  "Warning: Developer may suddenly get new project ideas.",
  "This human spends too much time improving pixels.",
  "Meow! Ask him about web development, not about sleep schedules.",
];

function InteractiveCat() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMessageIndex(Math.floor(Math.random() * catMessages.length));
    
    // Initial delay before first message shows
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const runCycle = () => {
      setIsVisible(false);
      setTimeout(() => {
        setMessageIndex((prev) => (prev + Math.floor(Math.random() * 5) + 1) % catMessages.length);
        setIsVisible(true);
      }, 3500); // 3.5 second gap
    };

    // Cycle every 11.5 seconds (8s visible + 3.5s gap)
    const intervalId = setInterval(runCycle, 11500);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="absolute bottom-full right-0 md:right-4 z-20 flex flex-col items-end">
      {/* Tooltip positioned to the left of the cat */}
      <div 
        className={`absolute top-1/2 right-full mr-4 md:mr-6 -translate-y-1/2 pointer-events-none transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="relative w-max max-w-[220px] md:max-w-[300px] bg-black/90 backdrop-blur-md border border-[#ff6eb4]/40 rounded-2xl p-4 shadow-[0_0_20px_rgba(255,110,180,0.15)]">
          <p className="text-xs md:text-sm text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 leading-relaxed font-medium">
            {catMessages[messageIndex]}
          </p>
          <div className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#ff6eb4]/10 to-transparent blur-xl"></div>
          </div>
          {/* Tail */}
          <div 
            className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-black border-t border-r rotate-45 border-[#ff6eb4]/40 transform"
          ></div>
        </div>
      </div>

      {/* Cat Image */}
      <img 
        src="/images/lucky-cat-transparent.png" 
        alt="Lucky Cat" 
        className="w-32 h-32 md:w-48 md:h-48 object-contain translate-y-4 md:translate-y-6 drop-shadow-[0_0_15px_rgba(255,110,180,0.2)] hover:scale-105 transition-transform duration-300 origin-bottom"
      />
    </div>
  );
}

export function FooterSection() {
  return (
    <footer className="relative bg-black">
      {/* Panoramic banner image */}
      <div className="relative w-full h-[280px] md:h-[360px] overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2810%29-UnDKstODkIENp5xqTYUEpt0Sm8tNOw.png"
          alt="Bioluminescent landscape"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient fade to black at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        {/* Subtle dark vignette on sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Footer content — black background, white text */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-4">
                <span className="text-2xl font-display text-white">Executive Plans</span>
              </a>
              <p className="text-xs font-mono mb-1" style={{ color: "#ff6eb4" }}>by Prince Mehra</p>

              <p className="text-white/50 leading-relaxed mb-6 max-w-xs text-sm mt-3">
                Agency Owner with strong{" "}
                <span style={{ color: "#ff6eb4", fontWeight: 600 }}>leadership</span>,{" "}
                <span style={{ color: "#ff85c1", fontWeight: 600 }}>bonding</span> &amp;{" "}
                <span style={{ color: "#e040fb", fontWeight: 600 }}>communication</span> skills.
                Building real impact for clients worldwide.
              </p>

              <div className="text-sm text-white/40 mb-5 space-y-1">
                <p>princemehra9024@gmail.com</p>
                <p>+91 9024546041</p>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={link.name}
                    className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/40 hover:text-white hover:border-white/60 hover:bg-white/10 transition-all duration-300 group"
                  >
                    {link.icon === "linkedin" && <Linkedin className="w-4 h-4" />}
                    {link.icon === "github" && <Github className="w-4 h-4" />}
                    {link.icon === "globe" && <Globe className="w-4 h-4" />}
                    {link.icon === "email" && <span className="text-xs font-mono">@</span>}
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium text-white mb-5">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar with Signature */}
        <div className="relative py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Interactive Lucky Cat */}
          <InteractiveCat />

          <p className="text-sm text-white/30">
            &copy; 2025 Executive Plans. All rights reserved.
          </p>

          {/* Signature */}
          <div className="flex flex-col items-center md:items-end gap-1">
            <span
              className="text-xs font-mono tracking-widest uppercase"
              style={{ color: "#ff6eb450" }}
            >
              Crafted by
            </span>
            <span
              className="font-display text-2xl tracking-wide"
              style={{
                background: "linear-gradient(90deg, #ff6eb4, #e040fb, #ff2d87)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.04em",
              }}
            >
              Prince Mehra
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-white/30">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#eca8d6]" />
              Available for projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
