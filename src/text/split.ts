/**
 * Returns a splitter function that separates text into an array
 * of substrings given a pattern.
 * @param separator The pattern that splits the text.
 */
export function split(separator: string | RegExp) {
  return function split__(text: string): string[] {
    return text.split(separator);
  }
}

/**
 * Breaks down a block of text into an array of individual lines.
 * Serves as an alias for the `str.split('\n')` idiom.
 * @param text The text that contains the lines to obtain.
 * @param trim Option to remove blank lines from both ends of the array.
 * @return     A list of string representing the lines.
 */
export function lines(text: string, trim: boolean = true): string[] {
  const trimPattern: RegExp = /^(\n)+|(\n)+$/g;

  return split("\n")(trim
    ? text.replace(trimPattern, "")
    : text);
}

/**
 * Breaks down a string into an array of individual words.
 * Serves as an alias for the `str.split(' ')` idiom.
 * @param text The text which will be separated into words.
 * @return     An array of words.
 */
export function words(text: string): string[] {
  return split(" ")(text);
}

/**
 * Breaks down a whole string into a list of strings with just one character each.
 * Serves as an alias for the `str.split('')` idiom.
 * @param text A sentence to break down.
 * @return     The list of character strings.
 */
export function chars(text: string): string[] {
  return split("")(text);
}
