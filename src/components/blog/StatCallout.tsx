"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { label: string; value: string };

function AnimatedNumber({ value }: { value: string }) {
  const numeric = parseFloat(value);
  const suffix = value.replace(/[0-9.]/g, "");
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (Number.isNaN(numeric) || !ref.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplay(numeric);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 800;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setDisplay(Math.round(numeric * progress * 10) / 10);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numeric]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function StatCallout({ stats }: { stats: Stat[] }) {
  return (
    <div className="my-8 grid grid-cols-2 gap-6 rounded-lg border border-border bg-surface p-6 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label}>
          <div className="font-mono text-2xl font-semibold text-accent">
            <AnimatedNumber value={stat.value} />
          </div>
          <div className="text-xs text-text-secondary">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
