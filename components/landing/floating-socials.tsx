"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Globe, Mail, ExternalLink, Instagram } from "lucide-react";

const links = [
  {
    label: "GitHub",
    sublabel: "princemehra9024",
    href: "https://github.com/princemehra9024",
    icon: Github,
    glow: "#ff6eb4",
    accent: "#ff2d87",
  },
  {
    label: "LinkedIn",
    sublabel: "prince-mehra",
    href: "https://www.linkedin.com/in/prince-mehra-562681366",
    icon: Linkedin,
    glow: "#4fc3f7",
    accent: "#0288d1",
  },
  {
    label: "Instagram",
    sublabel: "Executive Plans",
    href: "https://www.instagram.com/executive.plans?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: Instagram,
    glow: "#f06292",
    accent: "#E1306C",
  },
  {
    label: "Email",
    sublabel: "princemehra9024",
    href: "mailto:princemehra9024@gmail.com",
    icon: Mail,
    glow: "#ce93d8",
    accent: "#ab47bc",
  },
];

export function FloatingSocials() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(t);
  }, []);

  // Pulse animation cycling through icons
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => (prev + 1) % links.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-0 transition-all duration-700 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
      }`}
    >
      {/* Top line */}
      <div
        className="w-px h-12 mb-3"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,110,180,0.6))" }}
      />

      {/* Icon pills */}
      <div className="flex flex-col gap-2.5">
        {links.map((link, i) => {
          const Icon = link.icon;
          const isHov = hovered === i;
          const isPulse = pulse === i && hovered === null;
          const isActive = isHov || isPulse;

          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
              style={{
                transitionDelay: `${i * 50}ms`,
                border: `1.5px solid ${isActive ? link.glow : "rgba(255,110,180,0.25)"}`,
                background: isActive
                  ? `radial-gradient(circle at center, ${link.glow}35 0%, ${link.accent}18 60%, transparent 100%)`
                  : "rgba(0,0,0,0.55)",
                boxShadow: isHov
                  ? `0 0 24px ${link.glow}80, 0 0 10px ${link.glow}50, inset 0 0 12px ${link.glow}20`
                  : isPulse
                  ? `0 0 16px ${link.glow}60, 0 0 6px ${link.glow}40`
                  : "none",
                color: isActive ? link.glow : "rgba(255,255,255,0.35)",
                backdropFilter: "blur(10px)",
                transform: isHov ? "scale(1.18)" : isPulse ? "scale(1.08)" : "scale(1)",
              }}
            >
              {/* Pulse ring */}
              {isPulse && (
                <span
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{
                    border: `1px solid ${link.glow}`,
                    opacity: 0.4,
                    animationDuration: "1.2s",
                  }}
                />
              )}

              <Icon className="w-4 h-4 transition-transform duration-200 relative z-10" style={{ filter: isActive ? `drop-shadow(0 0 4px ${link.glow})` : "none" }} />

              {/* Expanded label tooltip */}
              <span
                className="absolute right-12 flex flex-col items-end pointer-events-none transition-all duration-200 whitespace-nowrap"
                style={{
                  opacity: isHov ? 1 : 0,
                  transform: isHov ? "translateX(0)" : "translateX(8px)",
                }}
              >
                <span
                  className="text-xs font-mono px-3 py-2 rounded-xl"
                  style={{
                    background: "rgba(0,0,0,0.92)",
                    border: `1px solid ${link.glow}60`,
                    color: link.glow,
                    backdropFilter: "blur(16px)",
                    boxShadow: `0 0 24px ${link.glow}40, 0 4px 20px rgba(0,0,0,0.5)`,
                  }}
                >
                  <span className="block font-bold tracking-wide">{link.label}</span>
                  <span className="block text-[10px] opacity-60 mt-0.5">{link.sublabel}</span>
                </span>
                {/* Tooltip arrow */}
                <span
                  className="absolute top-1/2 -right-[5px] -translate-y-1/2 w-2.5 h-2.5 rotate-45"
                  style={{
                    background: "rgba(0,0,0,0.92)",
                    borderTop: `1px solid ${link.glow}60`,
                    borderRight: `1px solid ${link.glow}60`,
                  }}
                />
              </span>
            </a>
          );
        })}
      </div>

      {/* Bottom line */}
      <div
        className="w-px h-12 mt-3"
        style={{ background: "linear-gradient(to bottom, rgba(255,110,180,0.6), transparent)" }}
      />
    </div>
  );
}
