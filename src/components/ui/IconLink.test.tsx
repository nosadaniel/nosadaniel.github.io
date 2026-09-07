import { render } from "@testing-library/react";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { IconLink } from "./IconLink";

describe("IconLink", () => {
  it("renders an external link with the given icon and label", () => {
    const { container } = render(
      <IconLink
        href="mailto:test@example.com"
        label="test@example.com"
        icon={<EnvelopeSimple size={18} aria-hidden="true" />}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
