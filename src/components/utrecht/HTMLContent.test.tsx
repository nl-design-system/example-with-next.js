import { render } from "@testing-library/react";
import { createRef } from "react";
import { HTMLContent } from "./HTMLContent";
import "@testing-library/jest-dom";

describe("HTML content", () => {
  it("renders an HTML div element", () => {
    const { container } = render(<HTMLContent />);

    const div = container.querySelector("div:only-child");

    expect(div).toBeInTheDocument();
  });

  it("renders a design system BEM class name", () => {
    const { container } = render(<HTMLContent />);

    const doc = container.querySelector(":only-child");

    expect(doc).toHaveClass("utrecht-html");
  });

  it("displays as CSS block element", () => {
    const { container } = render(<HTMLContent />);

    const doc = container.querySelector(":only-child");

    expect(doc).toBeVisible();
    expect(doc).toHaveStyle({ display: "block" });
  });

  it("renders rich text content", () => {
    const { container } = render(
      <HTMLContent>
        <h1>Hello, world</h1>
      </HTMLContent>
    );

    const doc = container.querySelector(":only-child");

    const richText = doc?.querySelector("h1");

    expect(richText).toBeInTheDocument();
  });

  it("can be hidden", () => {
    const { container } = render(<HTMLContent hidden />);

    const doc = container.querySelector(":only-child");

    expect(doc).not.toBeVisible();
  });

  it("can have a custom class name", () => {
    const { container } = render(<HTMLContent className="max-w-prose mx-auto" />);

    const doc = container.querySelector(":only-child");

    expect(doc).toHaveClass("max-w-prose");
    expect(doc).toHaveClass("mx-auto");
  });

  it("supports ForwardRef in React", () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<HTMLContent ref={ref} />);

    const doc = container.querySelector(":only-child");

    expect(ref.current).toBe(doc);
  });
});
