---
name: Radio button group
menu: Components
---

<!-- @license CC0-1.0 -->

# Radio button group

## Goal: the screen reader not announce a radio button label without the necessary context

### Solution: place `<input type="radio">` in `<fieldset>` with `<legend>` that contains the label for the radio group.

<!--
id: 4898676e-4850-4cb1-ba16-d7f229244d0f
wcag: 1.3.5
-->

## Goal: use can switch between options using arrow keys on keyboard

## Solution: use the `<input type="radio">` with the same `name` attribute for every radio button in the group

<!-- id: 6cd3b23b-1522-4dda-a2fa-d9efb9d85319 -->

## Solution: implement `keypress` listeners for custom radio button with `role="radio"`

<!-- id: d19abede-cccb-44a4-881e-b509eb8daac1 -->

Support key repeat to quickly move through a large group of options, using `keypress` instead of `keydown`. <!-- id: d1645e83-adb8-45c0-96d9-5db746810d5c -->

https://www.w3.org/TR/wai-aria-practices-1.1/#radiobutton

Support the following keys:

- Arrow Up
- Arrow Down
- Arrow Left
- Arrow Right
- Home
- End

Pressing `Arrow Up` and `Arrow Left` should select the previous item. <!-- id: 527fe431-74f9-4ccb-9fd6-f2dc5570efda -->

Pressing `Arrow Up` and `Arrow Left` should move to the last item when the current item is the first item. <!-- id: 9f67be09-46a7-43ee-8340-95540c5416e1 -->

Pressing `Arrow Down` and `Arrow Right` should select the next item. <!-- id: dc59a406-d9f1-4dd6-89d8-ae5c8f8ba06c -->

Pressing `Arrow Down` and `Arrow Right` should move to the first item when the current item is the last item. <!-- id: 56ad5ca7-85f2-4c38-be15-55c932569b02 -->

Pressing `Home` should select the first item. <!-- id: 5cb81416-39c6-4d02-8119-07130acf50a0 -->

Pressing `End` should select the first item. <!-- id: 0257f3c3-f742-4220-a90c-b9f52b8080f8 -->

When the radio group receives focus, the checked option should be focussed. <!-- id: 0eca2494-47f3-4fad-b014-8b547cfc12e6 -->
