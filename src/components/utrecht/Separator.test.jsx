import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { Separator } from "./Separator";
import "@testing-library/jest-dom";

describe("Separator", () => {
  it("renders an separator role element", () => {
    render(<Separator />);

    const separator = screen.getByRole("separator");

    expect(separator).toBeInTheDocument();
    expect(separator).toBeVisible();
  });

  it("renders an hr HTML element", () => {
    const { container } = render(<Separator />);

    const separator = container.querySelector("hr");

    expect(separator).toBeInTheDocument();
  });

  it("renders no content inside the separator", () => {
    render(<Separator>Hello world</Separator>);

    const separator = screen.getByRole("separator");

    expect(separator).toBeEmptyDOMElement();
  });

  it("can be hidden", () => {
    const { container } = render(<Separator hidden />);

    const separator = container.querySelector("hr");

    expect(separator).not.toBeVisible();
  });

  it("can have a custom class name", () => {
    render(<Separator className="decorative" />);

    const separator = screen.getByRole("separator");

    expect(separator).toHaveClass("decorative");
  });

  it("supports ForwardRef in React", () => {
    const ref = createRef();

    render(<Separator ref={ref} />);

    const separator = screen.getByRole("separator");

    expect(ref.current).toBe(separator);
  });
});
