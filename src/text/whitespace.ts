const ALL_WHITESPACE_PATTERN = /^\s*$/;
const TRIM_ALL_PATTERN = /^\s+|\s+$/g;

/**
 * @desc
 * Tells you whether the string you passed contains
 * only whitespace characters or not (from beginning
 * to end) using a `/^\s*$/` RegExp.
 * @example
 * isBlank(" \r\t\n "); //> true
 * isBlank(" Hey    "); //> false
 * isBlank("     "); //> true
 * @param {string} text - The string to test.
 * @return {boolean}    - The whitespace test result.
 */
export function isBlank(text: string): boolean {
  return ALL_WHITESPACE_PATTERN.test(text);
}

/**
 * @desc
 * Trims all whitespace from both ends of a string using
 * a RegExp (`/^\s+|\s+$/`) to replace it with nothing.
 * @example
 * trim("   born to be wild "); //> "born to be wild"
 * trim("\t\nNew line!"); //> "New line!"
 * trim("Untouchable"); //> "Untouchable"
 * @param {string} text - The string to trim.
 * @return {string}     - Trimmed string
 */
export function trim(text: string): string {
  return text.replace(TRIM_ALL_PATTERN, "");
}
