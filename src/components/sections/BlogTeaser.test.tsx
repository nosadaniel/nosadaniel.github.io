import { render } from "@testing-library/react";
import { BlogTeaser } from "./BlogTeaser";

describe("BlogTeaser", () => {
  it("renders the blog post title, summary, and read-more link", async () => {
    const jsx = await BlogTeaser();
    const { container } = render(jsx);
    expect(container).toMatchSnapshot();
  });
});
