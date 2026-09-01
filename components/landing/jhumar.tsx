"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Jhumar({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`pointer-events-none animate-jhumar ${className || "fixed top-0 right-10 md:right-24 xl:right-32 z-50"}`}>
      <div className="relative">
        <Image
          src="/images/lantern.png"
          alt="Decorative Lantern"
          width={250}
          height={400}
          className="w-32 md:w-48 lg:w-56 h-auto drop-shadow-[0_0_20px_rgba(255,110,180,0.5)]"
          priority
        />
      </div>
    </div>
  );
}
