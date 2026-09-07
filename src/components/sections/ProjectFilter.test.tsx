import { render, screen, fireEvent } from "@testing-library/react";
import { ProjectFilter } from "./ProjectFilter";
import type { Project } from "@/content/projects";

const fixtureProjects: Project[] = [
  {
    slug: "test-ai-project",
    title: "Test AI Project",
    category: "ai",
    period: "2025",
    description: "A test AI project.",
    techStack: ["Python"],
    role: "Full development",
    links: [{ label: "GitHub", href: "https://github.com/example/test" }],
  },
  {
    slug: "test-featured-project",
    title: "Test Featured Project",
    category: "ai",
    period: "2025",
    description: "A test featured project with stats.",
    techStack: ["Python"],
    role: "Full development",
    featured: true,
    stats: [{ label: "Accuracy", value: "99%" }],
    links: [],
  },
  {
    slug: "test-infra-project",
    title: "Test Infra Project",
    category: "infra",
    period: "2025",
    description: "A test infra project.",
    techStack: ["Terraform"],
    role: "Full development",
    links: [],
  },
];

describe("ProjectFilter", () => {
  it("renders all projects by default", () => {
    const { container } = render(<ProjectFilter projects={fixtureProjects} />);
    expect(screen.getByText("Test AI Project")).toBeInTheDocument();
    expect(screen.getByText("Test Infra Project")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("filters to only the selected category", () => {
    render(<ProjectFilter projects={fixtureProjects} />);
    fireEvent.click(screen.getByText("Infrastructure & DevOps"));

    expect(screen.getByText("Test Infra Project")).toBeInTheDocument();
    expect(screen.queryByText("Test AI Project")).not.toBeInTheDocument();
  });

  it("renders the featured project's stats", () => {
    render(<ProjectFilter projects={fixtureProjects} />);
    expect(screen.getByText("99%")).toBeInTheDocument();
    expect(screen.getByText("Featured")).toBeInTheDocument();
  });
});
