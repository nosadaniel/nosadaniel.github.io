"use client";

import { useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { profile } from "@/content/profile";

const links = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-display text-lg font-semibold text-text-primary">
          NA
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-text-secondary transition-colors hover:text-accent"
            >
              <span className="text-accent">0{index + 1}</span> {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={profile.resume}
            className="text-sm text-text-secondary transition-colors hover:text-accent"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text-primary"
          >
            {open ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-text-secondary hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a href={profile.resume} className="text-sm text-text-secondary hover:text-accent">
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
