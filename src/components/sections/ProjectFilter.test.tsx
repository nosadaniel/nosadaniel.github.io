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
    slug: "test-cybersecurity-project",
    title: "Test Cybersecurity Project",
    category: "cybersecurity",
    period: "2025",
    description: "A test cybersecurity project.",
    techStack: ["Terraform"],
    role: "Full development",
    links: [],
  },
];

describe("ProjectFilter", () => {
  it("renders all projects by default", () => {
    const { container } = render(<ProjectFilter projects={fixtureProjects} />);
    expect(screen.getByText("Test AI Project")).toBeInTheDocument();
    expect(screen.getByText("Test Cybersecurity Project")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("filters to only the selected category", () => {
    render(<ProjectFilter projects={fixtureProjects} />);
    fireEvent.click(screen.getByText("Cybersecurity Applications"));

    expect(screen.getByText("Test Cybersecurity Project")).toBeInTheDocument();
    expect(screen.queryByText("Test AI Project")).not.toBeInTheDocument();
    expect(screen.queryByText("Test Featured Project")).not.toBeInTheDocument();
  });

  it("puts the featured project first in the default All view", () => {
    render(<ProjectFilter projects={fixtureProjects} />);
    const titles = screen.getAllByRole("heading", { level: 3 }).map((el) => el.textContent);
    expect(titles[0]).toBe("Test Featured Project");
  });

  it("does not force the featured project first once a category is picked", () => {
    render(<ProjectFilter projects={fixtureProjects} />);
    fireEvent.click(screen.getByText("LLM & AI Agentic Applications"));

    const titles = screen.getAllByRole("heading", { level: 3 }).map((el) => el.textContent);
    // Fixture order within the "ai" category is [Test AI Project, Test Featured Project]
    expect(titles[0]).toBe("Test AI Project");
  });

  it("renders the featured project's stats", () => {
    render(<ProjectFilter projects={fixtureProjects} />);
    expect(screen.getByText("99%")).toBeInTheDocument();
    expect(screen.getByText("Featured")).toBeInTheDocument();
  });
});
