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
          <Button href="/#contact" variant="secondary">
            Contact
          </Button>
        </div>
      </div>

      <div className="order-1 flex justify-center md:order-2 md:justify-end">
        <Image
          src={profile.headshot}
          alt={profile.name}
          width={240}
          height={240}
          priority
          className="h-48 w-48 rounded-full border border-border object-cover md:h-60 md:w-60"
        />
      </div>
    </section>
  );
}
