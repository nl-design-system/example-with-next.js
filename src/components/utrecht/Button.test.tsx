import { render, screen } from "@testing-library/react";
import { createRef, FormEvent } from "react";
import { Button } from "./Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("renders a button role element", () => {
    render(<Button>OK</Button>);

    const button = screen.getByRole("button", {
      name: "OK",
    });

    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });

  it("renders an HTML button element", () => {
    const { container } = render(<Button>OK</Button>);

    const button = container.querySelector("button");

    expect(button).toBeInTheDocument();
  });

  it("renders labels that contain HTML rich text content", () => {
    render(
      <Button>
        Order <strong>now</strong>
      </Button>
    );

    const button = screen.getByRole("button", {
      name: "Order now",
    });

    const richText = button.querySelector("strong");

    expect(richText).toBeInTheDocument();
  });

  it("is not busy by default", () => {
    render(<Button>Save</Button>);

    const button = screen.getByRole("button");

    expect(button).not.toHaveAttribute("aria-busy");
  });

  it("does not specify `aria-busy` when not busy", () => {
    render(<Button busy={false}>Save</Button>);

    const button = screen.getByRole("button");

    expect(button).not.toHaveAttribute("aria-busy");
  });

  it("is not a submit button by default", () => {
    const { container } = render(<Button>OK</Button>);

    const button = container.querySelector("button");

    expect(button).not.toHaveAttribute("type", "submit");
  });

  it("is not disabled by default", () => {
    render(<Button>OK</Button>);

    const button = screen.getByRole("button");

    expect(button).not.toBeDisabled();

    expect(button).not.toHaveAttribute("aria-disabled");

    expect(button).not.toHaveAttribute("disabled");
  });

  it("can have a busy state", () => {
    render(<Button busy={true}>Save</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveAttribute("aria-busy", "true");
  });

  it("can have a disabled state", () => {
    render(<Button disabled={true}>Save</Button>);

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });

  it("can be a submit button", () => {
    const { container } = render(<Button type="submit">Submit</Button>);

    const button = container.querySelector("button");

    expect(button).toHaveAttribute("type", "submit");
  });

  it("can be a reset button", () => {
    const { container } = render(<Button type="reset">Reset</Button>);

    const button = container.querySelector("button");

    expect(button).toHaveAttribute("type", "reset");
  });

  it("can be hidden", () => {
    const { container } = render(<Button hidden>Secret button</Button>);

    const button = container.querySelector("button");

    expect(button).not.toBeVisible();
  });

  it("does not trigger a form action by default", () => {
    const handleSubmit = jest.fn();
    const handleReset = jest.fn();

    render(
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <Button>Do nothing</Button>
      </form>
    );

    const button = screen.getByRole("button");

    button.click();

    expect(handleReset).not.toHaveBeenCalled();
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("can trigger a form reset", () => {
    const handleReset = jest.fn();

    render(
      <form onReset={handleReset}>
        <Button type="reset">Reset</Button>
      </form>
    );

    const button = screen.getByRole("button", {
      name: "Reset",
    });

    button.click();

    expect(handleReset).toHaveBeenCalled();
  });

  it("does not trigger a form reset when disabled", () => {
    const handleReset = jest.fn();

    render(
      <form onReset={handleReset}>
        <Button type="reset" disabled>
          Reset
        </Button>
      </form>
    );

    const button = screen.getByRole("button", {
      name: "Reset",
    });

    button.click();

    expect(handleReset).not.toHaveBeenCalled();
  });

  it("can trigger a form submit", () => {
    const cancelSubmit = (event: FormEvent) => {
      // Avoid actually triggering a submit, which has no implementation outside of a browser.
      event.preventDefault();
    };

    const handleSubmit = jest.fn(cancelSubmit);

    render(
      <form onSubmit={handleSubmit}>
        <Button type="submit">Submit</Button>
      </form>
    );

    const button = screen.getByRole("button", {
      name: "Submit",
    });

    button.click();

    expect(handleSubmit).toHaveBeenCalled();
  });

  it("does not trigger a form submit when disabled", () => {
    const handleSubmit = jest.fn();

    render(
      <form onSubmit={handleSubmit}>
        <Button type="submit" disabled>
          Submit
        </Button>
      </form>
    );

    const button = screen.getByRole("button", {
      name: "Submit",
    });

    button.click();

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("can trigger a form submit of an associated owner form", () => {
    const cancelSubmit = (event: FormEvent) => {
      // Avoid actually triggering a submit, which has no implementation outside of a browser.
      event.preventDefault();
    };

    const handleSubmit = jest.fn(cancelSubmit);

    render(
      <>
        <form onSubmit={handleSubmit} id="example" />
        <Button type="submit" form="example">
          Submit
        </Button>
      </>
    );

    const button = screen.getByRole("button", {
      name: "Submit",
    });

    button.click();

    expect(handleSubmit).toHaveBeenCalled();
  });

  it("can trigger a form reset of an associated owner form", () => {
    const handleReset = jest.fn();

    render(
      <>
        <form onReset={handleReset} id="example" />
        <Button type="reset" form="example">
          Reset
        </Button>
      </>
    );

    const button = screen.getByRole("button", {
      name: "Reset",
    });

    button.click();

    expect(handleReset).toHaveBeenCalled();
  });

  it("can have a custom class name", () => {
    render(<Button className="large">Order now</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("large");
  });

  it("can trigger a click event", () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>OK</Button>);

    const button = screen.getByRole("button");

    button.click();

    expect(handleClick).toHaveBeenCalled();
  });

  it("supports ForwardRef in React", () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Button ref={ref}>OK</Button>);

    const button = screen.getByRole("button");

    expect(ref.current).toBe(button);
  });
});
