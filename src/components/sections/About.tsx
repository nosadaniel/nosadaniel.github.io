import { EnvelopeSimple, LinkedinLogo, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { IconLink } from "@/components/ui/IconLink";
import { profile } from "@/content/profile";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <h2 className="font-display text-3xl font-bold text-text-primary">About</h2>
      <p className="mt-4 max-w-prose leading-relaxed text-text-secondary">{profile.summary}</p>

      <div id="contact" className="mt-12">
        <h3 className="font-display text-xl font-semibold text-text-primary">Contact</h3>
        <p className="mt-2 max-w-prose text-text-secondary">
          Open to conversations about AI, cybersecurity, and full-stack engineering roles or collaborations.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <IconLink
            href={`mailto:${profile.contact.email}`}
            label={profile.contact.email}
            icon={<EnvelopeSimple size={18} aria-hidden="true" />}
          />
          <IconLink href={profile.contact.linkedin} label="LinkedIn" icon={<LinkedinLogo size={18} aria-hidden="true" />} />
          <IconLink href={profile.contact.github} label="GitHub" icon={<GithubLogo size={18} aria-hidden="true" />} />
        </div>
      </div>
    </section>
  );
}
