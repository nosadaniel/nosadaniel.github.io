import { render, screen } from "@testing-library/react";
import { Contact } from "./Contact";

describe("Contact", () => {
  it("renders email, LinkedIn, and GitHub links, and no phone number", async () => {
    const { container } = render(<Contact />);
    await screen.findByText("nosadaniel02@gmail.com");
    expect(container.textContent).not.toMatch(/\+\d{2,}/);
    expect(container).toMatchSnapshot();
  });
});
