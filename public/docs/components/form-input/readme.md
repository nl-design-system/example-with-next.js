---
name: Form input
menu: Components
---

<!-- @license CC0-1.0 -->

# Form input

This is a page that applies to:

-   `<input type="radio">` or `role="radio"` radio buttons
-   `<input type="checkbox">` or `role="checkbox"` checkboxes
-   `<textarea>` multiline text inputs
-   `<textarea>` text areas

## Goal: screen readers say what the form input is about

### Solution: provide a `<label>` that associates with the labelable HTML elements using `for` and `id`

<!--
id: ea377882-b1ea-4062-ba7b-ffe8da490b3e
wcag: 1.3.1
-->

Alternative approaches using `aria-label` and `aria-labelledby` are acceptable too, but `<label>` is preferred.

TODO: Add link to HTML spec of "labelable" elements (https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#form-associated_content)

### Solution: provide a `aria-labelledby` that associates the custom form input

<!--
id: afff32a4-886e-48b9-8339-81e7898ed795
wcag: 1.3.1
-->

Since `<label>` doesn't work for custom form inputs, (TODO: double check this) you can use the. The association is reversed compared to the `label` element, in this case the `id` attribute is placed on the label.

## Goal: screen reader users can identify required form inputs

### Solution: use `required` attribute on HTML elements

<!-- id: 2e3a7170-7513-4cf4-9acf-49e8a0f43a0d -->

Note: `required="false"` does **not** work, the `required` attribute must be absent for optional form fields.

Alternatively `aria-required="true"` on HTML form elements is just as effective, but it might get you in trouble with "First rule of ARIA" folks.

### Solution: `aria-required="true"` on custom form inputs with `role="checkbox"` et cetera

<!-- id: bb7809cf-0ccc-44e1-b5dd-0bed68460f20 -->

## Goal: screen reader users get one (and not more than one) notification that a form field is required

### Solution

If you use the following, it might seem accessible.

```html
<label for="msg">Message <span aria-label="(required field)">*</span></label>
<input id="message" required />
```

The user experience with screen readers is not optimal however, because "required" is announced twice:

-   VoiceOver on macOS 12.1: "TODO"

If you need to remark "Fields with \* are required", hide the \* with `aria-hidden="true`.

<!-- id: 65385e08-0c77-46a0-bc2a-c4f113fc7b62 -->

```html
<label for="msg">Message <span aria-hidden="true">*</span></label>
<input id="message" required />
```
