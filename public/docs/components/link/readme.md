# Edit button in data list

## Goal: edit button specifies which field is editable

<!--
id: bc916d24-fe42-4eee-9075-d95ac5b5589f
wcag: 1.3.1
-->

aria-label=""

```html
<dl>
	<dt id="first-name">First name</dt>
	<dd>Bobby <button aria-describedby="first-name">Edit</button></dd>
</dl>
```

Alternatively, label text is specifically provided for every button. This is more work for the content writer, but it has better user experience for screen reader users because it can have a proper sentence structure.

```html
<dl>
	<dt id="first-name">First name</dt>
	<dd>Bobby <button aria-label="Edit first name">Edit</button></dd>
</dl>
```

## Goal: focus of visible

### Solution: `outline` of system is maintained

<!--
id: 115be827-5575-45e5-b93b-7a9a255dff4e
wcag: 1.4.1
-->

### Solution: custom focus ring

<!--
id: 0c41882d-0369-4273-b9b8-d6929796d332
wcag: 1.4.1
-->
