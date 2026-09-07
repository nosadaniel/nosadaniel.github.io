import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "./ThemeToggle";

describe("ThemeToggle", () => {
  it("renders the toggle button once mounted", async () => {
    const { container } = render(
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <ThemeToggle />
      </ThemeProvider>,
    );

    await screen.findByRole("button");
    expect(container).toMatchSnapshot();
  });
});
