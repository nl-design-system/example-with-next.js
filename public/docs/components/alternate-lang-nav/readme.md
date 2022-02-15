---
name: Alternate language navigation
menu: Components
---

<!-- @license CC0-1.0 -->

# Alternate language navigation

Note: code examples are stripped to the essence, and the examples of "Good" are not complete. Read the component page for a comprehensive example of best practices.

## Goal: indicate which link is unhelpful and will essentially reload the page

### Solution: Use `aria-current="page"` or `aria-current="true"` on the `<a>` element

<!-- id: 88c3cc90-5447-4b56-ade6-75e5a5cf013a -->

Bad:

```html
<h1>Government website</h1>
<a href="/en/">English</a><br />
<a href="/nl/">Nederlands</a>
```

Good:

```html
<h1>Government website</h1>
<a href="/en/" aria-current="true">English</a><br />
<a href="/nl/">Nederlands</a>
```

The result is that screen readers say things like:

- VoiceOver on macOS 12.1: TODO: echt checken met voiceover "Current page, link, English" ... "Link, Nederlands"

## Goal: Users that don't understand the language of the current page, can identify the link that brings them to an alternate page in a language they know.

### Solution: use the `lang` attribute to provide the link text in another language than the language of the current page.

<!-- id: 68afb3b8-1b38-44b1-8cfe-54e3723f8372 -->

Bad:

```html
<a href="/en/">EN</a> | <a href="/en/">NL</a>
```

The result is that screen readers will pronounce the name with a voice that can pronounce the target language, instead of an incomprehensible attempt to pronounce a foreign word in the current language.

## Goal: the screen readers pronunciation of the language is not affected by using an abbreviation of the language visually

Abbreviations in the accessibility tree don't offer a great user experience, try to make the full language name available in the language itself.

### Solution: provide an alternative a language code via the `aria-label` attribute on the `<a>` element

<!-- id: bbb0b884-4697-43bd-bf86-0c42bf6d417f -->

The label can be the text content of the `<a >` element, or in the `aria-label`. The `title` attribute doesn't seem to be
used first by VoiceOver on macOS, but `aria-label` is announced immediately,
even when there is an abbreviation in the text content.

Good:

```html
<a href="/en/" lang="en">English</a><br />
<a href="/nl/" lang="nl">Nederlands</a>
```

```html
<a href="/en/" lang="en" aria-label="English">EN</a><br />
<a href="/nl/" lang="nl" aria-label="Nederlands">NL</a>
```
