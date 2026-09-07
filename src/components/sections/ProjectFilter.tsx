"use client";

import { useMemo, useState } from "react";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";
import { categoryLabels, type Project, type ProjectCategory } from "@/content/projects";

const categories: (ProjectCategory | "all")[] = ["all", "ai", "cybersecurity", "open-source", "mobile", "infra"];

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active, projects],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-4 py-1.5 font-mono text-xs transition-colors",
              active === category
                ? "border-accent text-accent"
                : "border-border text-text-secondary hover:border-accent hover:text-accent",
            )}
          >
            {category === "all" ? "All" : categoryLabels[category]}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <Card key={project.slug} featured={project.featured}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-text-primary">{project.title}</h3>
              {project.featured && (
                <span className="shrink-0 rounded-full border border-accent px-2 py-0.5 font-mono text-[11px] text-accent">
                  Featured
                </span>
              )}
            </div>

            {project.company && <p className="mt-1 text-sm text-text-secondary">{project.company}</p>}

            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{project.description}</p>

            {project.stats && (
              <div className="mt-4 grid grid-cols-2 gap-4 border-y border-border py-4 sm:grid-cols-4">
                {project.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-mono text-xl font-semibold text-accent">{stat.value}</div>
                    <div className="text-xs text-text-secondary">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>

            <p className="mt-4 text-xs text-text-secondary">
              {project.role} &middot; {project.period}
            </p>

            {project.note && <p className="mt-2 text-xs text-text-secondary italic">{project.note}</p>}

            {project.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                  >
                    {link.label}
                    <ArrowSquareOut size={14} aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
