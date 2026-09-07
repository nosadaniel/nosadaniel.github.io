import { render, screen } from "@testing-library/react";
import { Nav } from "./Nav";

describe("Nav", () => {
  it("renders the nav bar with all anchor links and no mobile menu open", async () => {
    const { container } = render(<Nav />);
    await screen.findAllByRole("button");
    expect(container).toMatchSnapshot();
  });
});
