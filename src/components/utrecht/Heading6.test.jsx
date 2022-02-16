import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { Heading6 } from "./Heading6";
import "@testing-library/jest-dom";

describe("Heading 6", () => {
  it("renders a heading role element", () => {
    render(<Heading6>Breaking news</Heading6>);

    const heading = screen.getByRole("heading", {
      name: "Breaking news",
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it("renders a heading at heading level 6", () => {
    render(<Heading6>Breaking news</Heading6>);

    const heading = screen.getByRole("heading", {
      name: "Breaking news",
      level: 6,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders an HTML h6 element", () => {
    const { container } = render(<Heading6>Breaking news</Heading6>);

    const heading = container.querySelector("h6");

    expect(heading).toBeInTheDocument();
  });

  it("renders rich text content", () => {
    render(
      <Heading6>
        <strong>Breaking</strong> news
      </Heading6>
    );

    const heading = screen.getByRole("heading", {
      name: "Breaking news",
    });

    const richText = heading.querySelector("strong");

    expect(richText).toBeInTheDocument();
  });

  it("can be hidden", () => {
    const { container } = render(<Heading6 hidden>Secret</Heading6>);

    const heading = container.querySelector("h6");

    expect(heading).not.toBeVisible();
  });

  it("can have a custom class name", () => {
    render(<Heading6 className="large">Order now</Heading6>);

    const heading = screen.getByRole("heading");

    expect(heading).toHaveClass("large");
  });

  it("supports ForwardRef in React", () => {
    const ref = createRef();

    render(<Heading6 ref={ref}>OK</Heading6>);

    const heading = screen.getByRole("heading");

    expect(ref.current).toBe(heading);
  });
});
