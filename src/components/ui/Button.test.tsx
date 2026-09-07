import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders an internal link as a Next Link", () => {
    const { container } = render(<Button href="/#projects">View Projects</Button>);
    expect(container).toMatchSnapshot();
  });

  it("renders an external link with target and rel set", () => {
    const { container } = render(
      <Button href="https://github.com/nosadaniel" variant="secondary">
        GitHub
      </Button>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders a mailto link without target blank", () => {
    const { container } = render(<Button href="mailto:test@example.com">Email</Button>);
    expect(container).toMatchSnapshot();
  });
});
