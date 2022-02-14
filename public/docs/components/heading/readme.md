---
name: Heading
menu: Components
---

<!-- @license CC0-1.0 -->

# Headings

This applies to multiple heading components:

-   `<h1>` and `role="heading" aria-level="1"`
-   `<h2>` and `role="heading" aria-level="2"`
-   `<h3>` and `role="heading" aria-level="3"`
-   `<h4>` and `role="heading" aria-level="4"`
-   `<h5>` and `role="heading" aria-level="5"`
-   `<h6>` and `role="heading" aria-level="6"`

## Goal: heading levels are available for search engines

### Solution: do not hide `<h1>` or `role="heading" aria-level="1"` in shadow DOM

<!-- id: ae82e69f-4655-4ee6-97b8-97886ac7d7b6 -->

## Goal: headings can be browsed using a screen reader

### Solutions: mark up headers using `<h1>`-`<h6>`.

Avoid using `<strong>`, `<b>` or other elements with only a visual presentation of the heading, replace these with semantic HTML.

<!-- id: 08c2d301-7b91-4a1a-b5ed-cc582ac2ab72 -->

### Alternative: `role="heading"` with `aria-level` is an alternative that works too.

`<h1>`-`<h6>` is the preferred method, although there is no clear benefit.

Replace `role="heading"` with `<h1>`-`<h6>`

<!-- id: 475dd71f-37e4-464f-bf0f-e6e963625199 -->

## Goal: all content the hierarchically falls under the heading must follow the heading element in document order, even when visually it comes before the heading

### Solution: `display: flex` and `order: 1` for the element that should visually precede the heading text

<!--
id: c53efa6e-8366-4bce-9d14-65300cee08df
-->
