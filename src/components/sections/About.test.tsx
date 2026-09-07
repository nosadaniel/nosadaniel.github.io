import { render } from "@testing-library/react";
import { About } from "./About";

describe("About", () => {
  it("renders summary, experience timeline, skills, and education", () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });
});
