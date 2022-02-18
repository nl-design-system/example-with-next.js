import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { Heading5 } from "./Heading5";
import "@testing-library/jest-dom";

describe("Heading 5", () => {
  it("renders a heading role element", () => {
    render(<Heading5>Breaking news</Heading5>);

    const heading = screen.getByRole("heading", {
      name: "Breaking news",
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it("renders a heading at heading level 5", () => {
    render(<Heading5>Breaking news</Heading5>);

    const heading = screen.getByRole("heading", {
      name: "Breaking news",
      level: 5,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders an HTML h5 element", () => {
    const { container } = render(<Heading5 />);

    const heading = container.querySelector("h5");

    expect(heading).toBeInTheDocument();
  });

  it("renders rich text content", () => {
    render(
      <Heading5>
        <strong>Breaking</strong> news
      </Heading5>
    );

    const heading = screen.getByRole("heading", {
      name: "Breaking news",
    });

    const richText = heading.querySelector("strong");

    expect(richText).toBeInTheDocument();
  });

  it("can be hidden", () => {
    const { container } = render(<Heading5 hidden />);

    const heading = container.querySelector("h5");

    expect(heading).not.toBeVisible();
  });

  it("can have a custom class name", () => {
    render(<Heading5 className="large" />);

    const heading = screen.getByRole("heading");

    expect(heading).toHaveClass("large");
  });

  it("supports ForwardRef in React", () => {
    const ref = createRef<HTMLHeadingElement>();

    render(<Heading5 ref={ref} />);

    const heading = screen.getByRole("heading");

    expect(ref.current).toBe(heading);
  });
});
