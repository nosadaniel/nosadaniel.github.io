import { render, screen } from "@testing-library/react";
import { About } from "./About";

describe("About", () => {
  it("renders summary, experience timeline, skills, and education", () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });

  it("renders email, LinkedIn, and GitHub links, and no phone number", async () => {
    const { container } = render(<About />);
    await screen.findByText("nosadaniel02@gmail.com");
    expect(container.textContent).not.toMatch(/\+\d{2,}/);
  });
});
