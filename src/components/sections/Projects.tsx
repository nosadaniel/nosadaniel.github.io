import { ProjectFilter } from "@/components/sections/ProjectFilter";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <h2 className="font-display text-3xl font-bold text-text-primary">Projects</h2>
      <p className="mt-2 max-w-prose text-text-secondary">
        Production systems, research, and open source, across AI, cybersecurity, and infrastructure.
      </p>

      <div className="mt-10">
        <ProjectFilter projects={projects} />
      </div>
    </section>
  );
}
