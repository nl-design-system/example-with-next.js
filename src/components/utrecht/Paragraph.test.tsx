import { render } from "@testing-library/react";
import { createRef } from "react";
import { Paragraph } from "./Paragraph";
import "@testing-library/jest-dom";

describe("Paragraph", () => {
  it("renders an HTML p element", () => {
    const { container } = render(<Paragraph>Hello, world</Paragraph>);

    const paragraph = container.querySelector("p");

    expect(paragraph).toBeInTheDocument();
  });

  it("renders a block element", () => {
    const { container } = render(<Paragraph>Hello, world</Paragraph>);

    const paragraph = container.querySelector("p");

    expect(paragraph).toHaveStyle({ display: "block" });
  });

  it("renders rich text content", () => {
    const { container } = render(
      <Paragraph>
        Hello, <strong>world</strong>
      </Paragraph>
    );

    const paragraph = container.querySelector("p");

    const richText = paragraph?.querySelector("strong");

    expect(richText).toBeInTheDocument();
  });

  it("is not a lead paragraph variant by default", () => {
    const { container } = render(<Paragraph>Hello, world</Paragraph>);

    const paragraph = container.querySelector("p");

    expect(paragraph).not.toHaveClass("utrecht-paragraph--lead");
  });

  it("has a lead paragraph variant", () => {
    const { container } = render(<Paragraph lead>Hello, world</Paragraph>);

    const leadParagraph = container.querySelector("p");

    expect(leadParagraph).toHaveClass("utrecht-paragraph--lead");
  });

  it("can be hidden", () => {
    const { container } = render(<Paragraph hidden>Secret</Paragraph>);

    const paragraph = container.querySelector("p");

    expect(paragraph).not.toBeVisible();
  });

  it("can have a custom class name", () => {
    const { container } = render(<Paragraph className="intro">Order now</Paragraph>);

    const paragraph = container.querySelector("p");

    expect(paragraph).toHaveClass("intro");
  });

  it("supports ForwardRef in React", () => {
    const ref = createRef<HTMLParagraphElement>();

    const { container } = render(<Paragraph ref={ref}>OK</Paragraph>);

    const paragraph = container.querySelector("p");

    expect(ref.current).toBe(paragraph);
  });
});
