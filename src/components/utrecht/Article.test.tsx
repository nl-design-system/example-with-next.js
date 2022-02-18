import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { Article } from "./Article";
import "@testing-library/jest-dom";

describe("Article", () => {
  it("renders an article role element", () => {
    render(<Article>Breaking news</Article>);

    const article = screen.getByRole("article");

    expect(article).toBeInTheDocument();
    expect(article).toBeVisible();
  });

  it("renders an article HTML element", () => {
    const { container } = render(<Article>Secrets</Article>);

    const article = container.querySelector("article");

    expect(article).toBeInTheDocument();
  });

  it("renders rich text content", () => {
    render(
      <Article>
        <strong>Breaking</strong> news
      </Article>
    );

    const article = screen.getByRole("article");

    const richText = article.querySelector("strong");

    expect(richText).toBeInTheDocument();
  });

  it("can be hidden", () => {
    const { container } = render(<Article hidden>Secrets</Article>);

    const article = container.querySelector("article");

    expect(article).not.toBeVisible();
  });

  it("can have a custom class name", () => {
    render(<Article className="breaking-news">Breaking news</Article>);

    const article = screen.getByRole("article");

    expect(article).toHaveClass("breaking-news");
  });

  it("supports ForwardRef in React", () => {
    const ref = createRef<HTMLElement>();

    render(<Article ref={ref}>Breaking news</Article>);

    const article = screen.getByRole("article");

    expect(ref.current).toBe(article);
  });
});
