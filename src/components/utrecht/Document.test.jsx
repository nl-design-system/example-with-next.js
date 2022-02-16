import { render } from "@testing-library/react";
import { createRef } from "react";
import { Document } from "./Document";
import "@testing-library/jest-dom";

describe("Document", () => {
  it("renders an HTML div element", () => {
    const { container } = render(<Document>Hello, world</Document>);

    const div = container.querySelector("div:only-child");

    expect(div).toBeInTheDocument();
  });

  it("renders a design system BEM class name", () => {
    const { container } = render(<Document>Hello, world</Document>);

    const doc = container.querySelector(":only-child");

    expect(doc).toHaveClass("utrecht-document");
  });

  it("displays as CSS block element", () => {
    const { container } = render(<Document>Hello, world</Document>);

    const doc = container.querySelector(":only-child");

    expect(doc).toBeVisible();
    expect(doc).toHaveStyle({ display: "block" });
  });

  it("renders rich text content", () => {
    const { container } = render(
      <Document>
        <h1>Hello, world</h1>
      </Document>
    );

    const doc = container.querySelector(":only-child");

    const richText = doc.querySelector("h1");

    expect(richText).toBeInTheDocument();
  });

  it("can be hidden", () => {
    const { container } = render(<Document hidden>Secret</Document>);

    const doc = container.querySelector(":only-child");

    expect(doc).not.toBeVisible();
  });

  it("can have a custom class name", () => {
    const { container } = render(<Document className="large">Hello, world</Document>);

    const doc = container.querySelector(":only-child");

    expect(doc).toHaveClass("large");
  });

  it("supports ForwardRef in React", () => {
    const ref = createRef();

    const { container } = render(<Document ref={ref}>Hello, world</Document>);

    const doc = container.querySelector(":only-child");

    expect(ref.current).toBe(doc);
  });
});
