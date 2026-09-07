import { render, screen, fireEvent } from "@testing-library/react";
import { ExpandableText } from "./ExpandableText";

const shortText = "A short description.";
const longText =
  "This is a deliberately long description used to verify that text past the preview threshold gets collapsed by default and can be expanded by the reader on demand, revealing the rest of the sentence.";

describe("ExpandableText", () => {
  it("renders short text plainly with no toggle", () => {
    render(<ExpandableText text={shortText} />);
    expect(screen.getByText(shortText)).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("renders long text collapsed by default with a Read more toggle", () => {
    const { container } = render(<ExpandableText text={longText} />);
    const button = screen.getByRole("button", { name: /read more/i });

    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByText(longText)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("expands to Show less on click", () => {
    render(<ExpandableText text={longText} />);
    fireEvent.click(screen.getByRole("button", { name: /read more/i }));

    expect(screen.getByRole("button", { name: /show less/i })).toHaveAttribute("aria-expanded", "true");
  });
});
