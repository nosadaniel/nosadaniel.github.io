import { render, screen } from "@testing-library/react";
import { StatCallout } from "./StatCallout";

describe("StatCallout", () => {
  it("renders every stat label", () => {
    const stats = [
      { label: "Accuracy", value: "93.4%" },
      { label: "Precision", value: "97.4%" },
    ];
    const { container } = render(<StatCallout stats={stats} />);

    expect(screen.getByText("Accuracy")).toBeInTheDocument();
    expect(screen.getByText("Precision")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
