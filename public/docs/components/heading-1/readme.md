---
name: Heading 1
menu: Components
---

<!-- @license CC0-1.0 -->

# Heading 1

## Goal: there is only one heading at level 1 in the accessibility tree

### Solution: hide `<h1>` from the accessibility tree by placing `aria-hidden="true"` on a container element while a modal dialog is present

<!-- id: 86f4b3ec-ee19-4a28-bbd1-ed4b32af3cb0 -->

Having multiple `<h1>` elements present in your DOM is not an accessibility issue in itself, as long as only one is present in the accessibility tree.
