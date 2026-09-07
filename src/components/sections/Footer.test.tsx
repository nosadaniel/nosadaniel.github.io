import { render } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders the tech credit and copyright lines", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
