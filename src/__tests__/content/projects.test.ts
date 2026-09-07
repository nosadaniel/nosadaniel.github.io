import { projects, categoryLabels } from "@/content/projects";

describe("projects content", () => {
  it("has at least one project", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("every project has required non-empty fields", () => {
    for (const project of projects) {
      expect(project.slug.length).toBeGreaterThan(0);
      expect(project.title.length).toBeGreaterThan(0);
      expect(project.description.length).toBeGreaterThan(0);
      expect(project.role.length).toBeGreaterThan(0);
      expect(project.techStack.length).toBeGreaterThan(0);
      expect(Object.keys(categoryLabels)).toContain(project.category);
    }
  });

  it("has unique slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every link is a well-formed URL or path", () => {
    for (const project of projects) {
      for (const link of project.links) {
        expect(() => {
          if (link.href.startsWith("/")) return;
          new URL(link.href);
        }).not.toThrow();
      }
    }
  });

  it("the featured project has stats", () => {
    const featured = projects.filter((p) => p.featured);
    expect(featured.length).toBe(1);
    expect(featured[0].stats?.length).toBeGreaterThan(0);
  });
});
