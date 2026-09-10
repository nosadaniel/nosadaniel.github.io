import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 pb-16 pt-16 sm:px-6 md:grid-cols-[3fr_2fr] md:pt-24">
      <div className="order-2 md:order-1">
        <h1 className="font-display text-4xl font-bold leading-tight text-text-primary md:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-lg text-accent">{profile.title}</p>

        <p className="mt-6 max-w-prose text-base leading-relaxed text-text-secondary">
          {profile.heroTagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/#projects">View Projects</Button>
          <Button href="/#about" variant="secondary">
            About Me
          </Button>
        </div>
      </div>

      <div className="order-1 flex justify-center md:order-2 md:justify-end">
        <div className="relative h-52 w-52 overflow-hidden rounded-full border border-border bg-white md:h-64 md:w-64">
          <Image
            src={profile.headshot}
            alt={profile.name}
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
