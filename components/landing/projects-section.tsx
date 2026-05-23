"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ExternalLink, Star, Smartphone } from "lucide-react";

const projects = [
  {
    title: "Aryan Heights",
    category: "Real Estate Website",
    description:
      "Modern real estate platform featuring property listings, virtual tours, and lead inquiry management. Built for maximum conversions.",
    link: "https://www.aryanheights.in/",
    tags: ["Next.js", "UI/UX", "Real Estate"],
    highlight: true,
    award: "Featured on ",
    color: "#ff008c",
  },
  {
    title: "Shree Kalyaan Hospital",
    category: "Healthcare Website",
    description:
      "Professional hospital website with appointment booking, services showcase, and a patient information portal — trusted by real patients.",
    link: "https://www.shreekalyaanhospital.com/",
    tags: ["Healthcare", "React", "Booking"],
    highlight: false,
    award: null,
    color: "#ff4fd8",
  },
  {
    title: "Aapno College",
    category: "Community Mobile App",
    description:
      "College community app for sharing documents, notes, and posts securely. Features lead finding, contact management, and workflow tools.",
    link: null,
    tags: ["Mobile App", "Community", "React Native"],
    highlight: false,
    award: null,
    color: "#ff66ff",
  },
];

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <section id="projects" ref={sectionRef} className="relative pt-4 pb-16 lg:pt-8 lg:pb-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 lg:mb-20">
          <span
            className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="w-12 h-px bg-foreground/20" />
            Featured Work
          </span>

          <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-6xl md:text-7xl lg:text-[100px] font-display tracking-tight leading-none">
              Recent
              <br />
              <span className="text-muted-foreground">projects.</span>
            </h2>
            <a
              href="https://www.aryanheights.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors group mb-2"
            >
              View live work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative border overflow-hidden rounded-xl transition-all duration-500 cursor-pointer ${
                hoveredIndex === index
                  ? "scale-[1.02] shadow-2xl"
                  : "scale-100"
              } ${
                project.highlight
                  ? "border-[#ff008c]/30 bg-[#ff008c]/[0.04]"
                  : "border-foreground/10 bg-foreground/[0.02]"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: `${index * 100 + 200}ms`,
                boxShadow:
                  hoveredIndex === index
                    ? `0 0 40px ${project.color}25, 0 20px 60px rgba(0,0,0,0.3)`
                    : "none",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Award badge */}
              {project.award && (
                <div
                  className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono"
                  style={{
                    background: "rgba(255,0,140,0.15)",
                    border: "1px solid rgba(255,0,140,0.4)",
                    color: "#ff4fd8",
                  }}
                >
                  <Star className="w-3 h-3 fill-current" />
                  {project.award}
                </div>
              )}

              {/* Thumbnail area */}
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-foreground/5 to-foreground/10">
                {/* Animated gradient orb */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(ellipse at 50% 50%, ${project.color}20 0%, transparent 70%)`,
                  }}
                />

                {/* Project number watermark */}
                <span
                  className="absolute bottom-4 right-6 text-[80px] font-display leading-none select-none"
                  style={{ color: `${project.color}15` }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Floating tag pills */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-[10px] font-mono border border-foreground/20 bg-background/50 text-foreground/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Animated diagonal line */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, ${project.color} 0px, ${project.color} 1px, transparent 1px, transparent 20px)`,
                  }}
                />

                {/* Bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  {project.category}
                </span>

                <h3
                  className="text-xl font-display mt-2 mb-3 group-hover:translate-x-1 transition-transform duration-300"
                  style={{ color: hoveredIndex === index ? project.color : undefined }}
                >
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-mono transition-all duration-300 group/link"
                    style={{ color: project.color }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Live Site
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground">
                    <Smartphone className="w-4 h-4" />
                    Mobile App — Coming Soon
                  </span>
                )}
              </div>

              {/* Animated bottom glow bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    hoveredIndex === index ? "w-full" : "w-0"
                  }`}
                  style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div
          className={`flex flex-wrap items-center gap-12 pt-16 mt-16 border-t border-foreground/10 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {[
            { value: "50+", label: "Websites Delivered" },
            { value: "4+", label: "Apps Built" },
            { value: "3+", label: "Years Experience" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-3">
              <span
                className="text-3xl font-display"
                style={{
                  background: "linear-gradient(90deg, #ff008c, #ff4fd8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
