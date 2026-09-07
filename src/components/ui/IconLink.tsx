"use client";

import { cn } from "@/lib/utils";

type IconLinkProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  className?: string;
};

export function IconLink({ href, label, icon, className }: IconLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm text-text-primary transition-colors hover:border-accent hover:text-accent",
        className,
      )}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
