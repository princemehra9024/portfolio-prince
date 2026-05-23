"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Shree Kalyaan Hospital",
    category: "Healthcare Website",
    description: "Professional hospital website with appointment booking, services showcase, and patient information portal.",
    link: "https://www.shreekalyaanhospital.com/",
    image: "/images/project-hospital.jpg",
  },
  {
    title: "Aryan Heights",
    category: "Real Estate Website",
    description: "Modern real estate platform featuring property listings, virtual tours, and inquiry management.",
    link: "https://aryanheights.in/",
    image: "/images/project-realestate.jpg",
  },
  {
    title: "App Aapno Colleg",
    category: "Community App",
    description: "College community app for sharing documents, notes, and posts securely. Features lead finding, contact management based on matching needs, and workflow management like your manager.",
    link: null,
    image: "/images/project-app.jpg",
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
    <section id="projects" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <span className="w-12 h-px bg-foreground/20" />
            Featured Work
          </span>

          <h2 className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Recent
            <br />
            <span className="text-muted-foreground">projects.</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative border border-foreground/10 bg-foreground/[0.02] overflow-hidden transition-all duration-500 ${
                hoveredIndex === index ? "border-foreground/30 scale-[1.02]" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-foreground/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-display text-foreground/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  {project.category}
                </span>
                
                <h3 className="text-xl font-display mt-2 mb-3 group-hover:translate-x-1 transition-transform">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-mono text-foreground hover:text-foreground/70 transition-colors"
                  >
                    Visit Site
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground">
                    Mobile App
                  </span>
                )}
              </div>

              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/10 overflow-hidden">
                <div className={`h-full bg-foreground transition-all duration-500 ${
                  hoveredIndex === index ? "w-full" : "w-0"
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className={`flex flex-wrap items-center gap-12 pt-16 mt-16 border-t border-foreground/10 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          {[
            { value: "50+", label: "Websites" },
            { value: "4+", label: "Apps" },
            { value: "3+", label: "Years" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-3">
              <span className="text-3xl font-display">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
