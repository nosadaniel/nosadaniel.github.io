import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Projects />
        <BlogTeaser />
        <About />
      </main>
      <Footer />
    </>
  );
}
