"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Prince delivered our website ahead of schedule. His attention to detail and technical skills are exceptional.",
    author: "Dr. Manish Gautam",
    role: "Owner",
    company: "Shree Kalyaan Hospital",
    metric: { value: "2x", label: "Faster delivery" },
  },
  {
    quote: "Working with Prince was a great experience. He understood our vision and brought it to life perfectly.",
    author: "Aryan Bhatnagar",
    role: "Owner",
    company: "Aryan Heights",
    metric: { value: "100%", label: "Satisfaction" },
  },
  {
    quote: "The website Prince built for us has transformed how we do business. Highly recommend his services.",
    author: "Deepak Mehra",
    role: "Owner",
    company: "Shri Shyam Safa House",
    metric: { value: "50%", label: "Efficiency gain" },
  },
  {
    quote: "Professional, responsive, and talented. Prince is our go-to developer for all web projects now.",
    author: "Shivraj Mehra",
    role: "Owner",
    company: "Mau Darbar Contractor",
    metric: { value: "4", label: "Projects together" },
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
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

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > activeIndex ? "right" : "left");
    setActiveIndex(index);
  };

  const goPrev = () => {
    setDirection("left");
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goNext = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 lg:py-20 overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Sakura tree background image — right side */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] z-0 pointer-events-none">
        <Image
          src="/images/sakura-tree.png"
          alt="Glowing neon sakura tree"
          fill
          className="object-cover object-center"
          style={{ opacity: 0.38 }}
          priority
        />
        {/* Gradient fade — pure black, no pink */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #000000 15%, transparent 65%)" }}
        />
      </div>

      {/* Sakura branch background image — left side, growing animation */}
      <div
        className={`absolute left-0 top-[22%] w-[180px] md:w-[280px] lg:w-[380px] h-[55%] z-0 pointer-events-none branch-grow ${
          isVisible ? "active" : ""
        }`}
      >
        <Image
          src="/images/rootimg.png"
          alt="Sakura branch"
          fill
          className="object-contain object-left"
          style={{
            filter: "drop-shadow(0 0 30px rgba(255, 110, 180, 0.35)) brightness(1.05)",
          }}
          priority
        />
      </div>

      {/* Floating petal particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${4 + (i % 3) * 3}px`,
              height: `${4 + (i % 3) * 3}px`,
              background: i % 2 === 0 ? "#ff008c" : "#ff4fd8",
              top: `${8 + i * 6.5}%`,
              left: `${4 + i * 7}%`,
              opacity: 0.12 + (i % 4) * 0.06,
              animationDelay: `${i * 0.35}s`,
              animationDuration: `${2 + i * 0.25}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-20">
          <div>
            <span
              className="inline-flex items-center gap-3 text-sm font-mono mb-4"
              style={{ color: "#ff008c" }}
            >
              <span className="w-12 h-px" style={{ background: "#ff008c" }} />
              Testimonials
            </span>
            <h2
              className={`text-4xl lg:text-5xl font-display transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ color: "#fbcfe8" }}
            >
              Client
              <span style={{ color: "#ff4fd8" }}> feedback.</span>
            </h2>
          </div>

          {/* Navigation arrows */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={goPrev}
              className="p-4 transition-all duration-200"
              style={{ border: "1px solid #ff008c55", color: "#ff008c", background: "transparent" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#ff008c20")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNext}
              className="p-4 transition-all duration-200"
              style={{ border: "1px solid #ff008c55", color: "#ff008c", background: "transparent" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#ff008c20")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Quote side */}
          <div className="lg:col-span-7 relative">
            <span
              className="absolute -left-4 -top-8 text-[200px] font-display leading-none select-none"
              style={{ color: "#ff008c15" }}
            >
              &ldquo;
            </span>

            <div className="relative">
              <blockquote
                key={activeIndex}
                className="text-3xl lg:text-4xl xl:text-5xl font-display leading-[1.2] tracking-tight animate-fadeSlideIn"
                style={{ color: "#fbcfe8" }}
              >
                {activeTestimonial.quote}
              </blockquote>

              {/* Author */}
              <div className="mt-12 flex items-center gap-6">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #ff008c, #ff4fd8)" }}
                >
                  <span className="font-display text-xl" style={{ color: "#1a0010" }}>
                    {activeTestimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-medium" style={{ color: "#fbcfe8" }}>
                    {activeTestimonial.author}
                  </p>
                  <p style={{ color: "#ff4fd880" }}>
                    {activeTestimonial.role}, {activeTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Metric & controls side */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-6">

            {/* Active metric — border matching sakura surface */}
            <div
              key={`metric-${activeIndex}`}
              className="p-10 animate-fadeSlideIn"
              style={{
                border: "1px solid #ff008c",
                boxShadow: "0 0 18px #ff008c30, inset 0 0 12px #ff008c08",
                background: "#0a0005",
              }}
            >
              <span
                className="text-7xl lg:text-8xl font-display block mb-4"
                style={{
                  background: "linear-gradient(135deg, #ff008c, #ff4fd8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {activeTestimonial.metric.value}
              </span>
              <span className="text-lg" style={{ color: "#ff4fd880" }}>
                {activeTestimonial.metric.label}
              </span>
            </div>

            {/* Progress bar indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className="flex-1 h-1 overflow-hidden"
                  style={{ background: "#ff008c20" }}
                >
                  <div
                    className={`h-full transition-all duration-300 ${
                      idx === activeIndex ? "w-full" : idx < activeIndex ? "w-full opacity-50" : "w-0"
                    }`}
                    style={{
                      background: "linear-gradient(90deg, #ff008c, #ff4fd8)",
                      animation: idx === activeIndex ? "progress 8s linear forwards" : undefined,
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Company list */}
            <div className="mt-4 pt-6" style={{ borderTop: "1px solid #ff008c20" }}>
              <span
                className="text-xs font-mono uppercase tracking-widest block mb-4"
                style={{ color: "#ff008c50" }}
              >
                Featured companies
              </span>
              <div className="flex flex-wrap gap-3">
                {testimonials.map((t, idx) => (
                  <button
                    key={t.company}
                    onClick={() => goTo(idx)}
                    className="px-4 py-2 text-sm transition-all"
                    style={{
                      border: idx === activeIndex ? "1px solid #ff008c" : "1px solid #ff008c30",
                      color: idx === activeIndex ? "#ff008c" : "#ff008c60",
                      background: idx === activeIndex ? "#ff008c15" : "transparent",
                    }}
                  >
                    {t.company}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.5s ease-out forwards;
        }
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .branch-grow {
          clip-path: inset(0 100% 0 0);
          transform: scale(0.94) rotate(-3deg);
          transition: clip-path 2.8s cubic-bezier(0.16, 1, 0.3, 1), transform 3s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.8s ease-out;
          opacity: 0;
          transform-origin: left center;
        }
        .branch-grow.active {
          clip-path: inset(0 0 0 0);
          transform: scale(1) rotate(0deg);
          opacity: 0.32;
        }
      `}</style>
    </section>
  );
}
