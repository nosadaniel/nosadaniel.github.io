import { render } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders the name, title, tagline, and CTAs", () => {
    const { container } = render(<Hero />);
    expect(container).toMatchSnapshot();
  });
});
