import { render } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  it("renders default (non-featured) card", () => {
    const { container } = render(<Card>Content</Card>);
    expect(container).toMatchSnapshot();
  });

  it("renders featured card with extra styling", () => {
    const { container } = render(<Card featured>Featured content</Card>);
    expect(container).toMatchSnapshot();
  });
});
