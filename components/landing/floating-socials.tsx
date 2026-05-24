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
  },
  {
    label: "LinkedIn",
    sublabel: "prince-mehra",
    href: "https://www.linkedin.com/in/prince-mehra-562681366",
    icon: Linkedin,
    glow: "#ff2d87",
  },
  {
    label: "Instagram",
    sublabel: "Executive Plans",
    href: "https://www.instagram.com/executive.plans?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: Instagram,
    glow: "#E1306C",
  },
  {
    label: "Email",
    sublabel: "princemehra9024",
    href: "mailto:princemehra9024@gmail.com",
    icon: Mail,
    glow: "#ff6eb4",
  },
];

export function FloatingSocials() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-0 transition-all duration-700 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
      }`}
    >
      {/* Top line */}
      <div
        className="w-px h-10 mb-2"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,110,180,0.4))" }}
      />

      {/* Icon pills */}
      <div className="flex flex-col gap-1.5">
        {links.map((link, i) => {
          const Icon = link.icon;
          const isHov = hovered === i;
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300"
              style={{
                transitionDelay: `${i * 50}ms`,
                border: `1px solid ${isHov ? link.glow + "90" : "rgba(255,110,180,0.2)"}`,
                background: isHov
                  ? `radial-gradient(circle at center, ${link.glow}25 0%, transparent 70%)`
                  : "rgba(0,0,0,0.4)",
                boxShadow: isHov
                  ? `0 0 18px ${link.glow}55, 0 0 6px ${link.glow}40`
                  : "none",
                color: isHov ? link.glow : "rgba(255,255,255,0.4)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Icon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />

              {/* Expanded label tooltip */}
              <span
                className="absolute right-11 flex flex-col items-end pointer-events-none transition-all duration-200 whitespace-nowrap"
                style={{
                  opacity: isHov ? 1 : 0,
                  transform: isHov ? "translateX(0)" : "translateX(6px)",
                }}
              >
                <span
                  className="text-xs font-mono px-2.5 py-1.5 rounded-lg"
                  style={{
                    background: "rgba(0,0,0,0.85)",
                    border: `1px solid ${link.glow}50`,
                    color: link.glow,
                    backdropFilter: "blur(12px)",
                    boxShadow: `0 0 20px ${link.glow}30`,
                  }}
                >
                  <span className="block font-semibold">{link.label}</span>
                  <span className="block text-[10px] opacity-70">{link.sublabel}</span>
                </span>
              </span>
            </a>
          );
        })}
      </div>

      {/* Bottom line */}
      <div
        className="w-px h-10 mt-2"
        style={{ background: "linear-gradient(to bottom, rgba(255,110,180,0.4), transparent)" }}
      />
    </div>
  );
}
