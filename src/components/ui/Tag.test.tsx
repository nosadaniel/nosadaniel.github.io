import { render } from "@testing-library/react";
import { Tag } from "./Tag";

describe("Tag", () => {
  it("renders its label", () => {
    const { container } = render(<Tag>Python</Tag>);
    expect(container).toMatchSnapshot();
  });
});
