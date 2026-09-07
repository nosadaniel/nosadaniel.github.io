"use client";

import { useId, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

// Heuristic, not a measured overflow check: past this length a description
// reliably wraps past 3 lines at typical card width, so it gets collapsed.
const PREVIEW_THRESHOLD = 150;

export function ExpandableText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();

  if (text.length <= PREVIEW_THRESHOLD) {
    return <p className="mt-3 text-sm leading-relaxed text-text-secondary">{text}</p>;
  }

  return (
    <div className="mt-3">
      <p
        id={id}
        className={cn(
          "overflow-hidden text-sm leading-relaxed text-text-secondary transition-[max-height] duration-300 ease-in-out motion-reduce:transition-none",
          expanded ? "max-h-[32rem]" : "max-h-[4.5rem]",
        )}
      >
        {text}
      </p>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={id}
        className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-accent"
      >
        {expanded ? "Show less" : "Read more"}
        <CaretDown
          size={12}
          aria-hidden="true"
          className={cn("transition-transform duration-200 motion-reduce:transition-none", expanded && "rotate-180")}
        />
      </button>
    </div>
  );
}
