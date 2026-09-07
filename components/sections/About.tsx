import { Tag } from "@/components/ui/Tag";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { education, certifications } from "@/content/education";
import { skillGroups } from "@/content/skills";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <h2 className="font-display text-3xl font-bold text-text-primary">About</h2>
      <p className="mt-4 max-w-prose leading-relaxed text-text-secondary">{profile.summary}</p>

      <h3 className="mt-12 font-display text-xl font-semibold text-text-primary">Experience</h3>
      <div className="mt-6 flex flex-col gap-8">
        {experience.map((role) => (
          <div key={`${role.company}-${role.period}`} className="border-l-2 border-border pl-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h4 className="font-medium text-text-primary">
                {role.role}, {role.company}
              </h4>
              <span className="font-mono text-xs text-text-secondary">{role.period}</span>
            </div>
            <p className="text-xs text-text-secondary">{role.location}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-text-secondary">
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {role.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-12 font-display text-xl font-semibold text-text-primary">Skills</h3>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.group}>
            <h4 className="text-sm font-medium text-text-primary">{group.group}</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-12 font-display text-xl font-semibold text-text-primary">Education & Certifications</h3>
      <div className="mt-6 flex flex-col gap-4">
        {education.map((entry) => (
          <div key={entry.degree}>
            <p className="font-medium text-text-primary">{entry.degree}</p>
            <p className="text-sm text-text-secondary">
              {entry.institution}, {entry.period}
            </p>
            {entry.detail && <p className="text-sm text-text-secondary">{entry.detail}</p>}
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {certifications.map((cert) => (
          <Tag key={cert}>{cert}</Tag>
        ))}
      </div>
    </section>
  );
}
