import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { Heading1 } from "./Heading1";
import "@testing-library/jest-dom";

describe("Heading 1", () => {
  it("renders a heading role element", () => {
    render(<Heading1>Breaking news</Heading1>);

    const heading = screen.getByRole("heading", {
      name: "Breaking news",
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it("renders a heading at heading level 1", () => {
    render(<Heading1>Breaking news</Heading1>);

    const heading = screen.getByRole("heading", {
      name: "Breaking news",
      level: 1,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders an HTML h1 element", () => {
    const { container } = render(<Heading1>Breaking news</Heading1>);

    const heading = container.querySelector("h1");

    expect(heading).toBeInTheDocument();
  });

  it("renders rich text content", () => {
    render(
      <Heading1>
        <strong>Breaking</strong> news
      </Heading1>
    );

    const heading = screen.getByRole("heading", {
      name: "Breaking news",
    });

    const richText = heading.querySelector("strong");

    expect(richText).toBeInTheDocument();
  });

  it("can be hidden", () => {
    const { container } = render(<Heading1 hidden>Secret</Heading1>);

    const heading = container.querySelector("h1");

    expect(heading).not.toBeVisible();
  });

  it("can have a custom class name", () => {
    render(<Heading1 className="large">Order now</Heading1>);

    const heading = screen.getByRole("heading");

    expect(heading).toHaveClass("large");
  });

  it("supports ForwardRef in React", () => {
    const ref = createRef();

    render(<Heading1 ref={ref}>OK</Heading1>);

    const heading = screen.getByRole("heading");

    expect(ref.current).toBe(heading);
  });
});
