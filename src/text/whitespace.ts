const ALL_WHITESPACE_PATTERN = /^\s*$/;
const TRIM_ALL_PATTERN = /^\s+|\s+$/g;

/**
 * Tells you whether the string you passed contains
 * only whitespace characters or not.
 * @param text
 */
export function isBlank(text: string): boolean {
  return ALL_WHITESPACE_PATTERN.test(text);
}

/**
 * Trims all whitespace from both ends of a string.
 * @param text
 */
export function trim(text: string): string {
  return text.replace(TRIM_ALL_PATTERN, "");
}
