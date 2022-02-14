# Text input

## Goal: fields with regular expression validation checks, the format must be described in a human-readable way

Adding the `pattern` attribute in HTML should always be accompanied with a description of the format, and custom validation messages. The default browser behavior "Fill out the field according to the specified format" is in itself not sufficient information to correct an invalid field.

### Solution: provide a description along with the form label, connected using `aria-describedby`

<!--
id: 5db04b76-6b1a-4456-8f06-71ebdb73862a
-->

## Goal: fields with regular expression validation checks, the validation messages should specify how to achieve the correct format

### Solution: provide an error message for the regular expression pattern violation, and connect the error message using `aria-describedby`

<!--
id: 740008a8-339a-4756-8695-8339ad35ae4a
-->
