// Compared to JavaScript regular expressions, the [ and ] character need extra
// escaping in HTML `pattern` attributes.
export const teletexMultiline =
  '[\n\r -\\[\\]_a-z|\xA1-\xA5\xA7\xAA\xAB\xB0-\xB3\xB5-\xB7\xBA-\xCF\xD1-\xF7\xF9-\u0113\u0116-\u012B\u012E-\u0131\u0134-\u014D\u0150-\u017E\u2126]+';

export const teletex =
  '[ -\\[\\]_a-z|\xA1-\xA5\xA7\xAA\xAB\xB0-\xB3\xB5-\xB7\xBA-\xCF\xD1-\xF7\xF9-\u0113\u0116-\u012B\u012E-\u0131\u0134-\u014D\u0150-\u017E\u2126]+';
