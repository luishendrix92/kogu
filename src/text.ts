/**
 * Returns a splitter function that separates text into an array
 * of substrings given a pattern.
 * @param separator The pattern that splits the text.
 */
import {map} from './list';

export function split(separator: string | RegExp) {
  return function split__(text: string): string[] {
    return text.split(separator);
  }
}

/**
 * Condensation of a list of strings into a single string using a specific separator.
 * @param joiner The separator.
 */
export function join(joiner: string) {
  return function join__(strings: string[]): string {
    return strings.join(joiner);
  }
}

/**
 * Breaks down a string into an array of individual words.
 * Serves as an alias for the `str.split(' ')` idiom.
 * @param text The text which will be separated into words.
 * @return     An array of words.
 */
export function words(text: string): string[] {
  return split(' ')(text);
}

/**
 * Takes a list of strings and joins them using a space character.
 * Serves as an alias for the `strs.join(' ')` idiom.
 * @param wordsArray The array of words to join.
 * @return           A string containing all the words.
 */
export function unwords(wordsArray: string[]): string {
  return join(' ')(wordsArray);
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

  return split('\n')(trim
    ? text.replace(trimPattern, '')
    : text);
}

/**
 * Takes a list of strings and joins them using a new line character.
 * Serves as an alias for the `strs.join('\n')` idiom.
 * @param linesArray The array of lines to join.
 * @return           A string containing all the lines.
 */
export function unlines(linesArray: string[]): string {
  return join('\n')(linesArray);
}

/**
 * Breaks down a whole string into a list of strings with just one character each.
 * Serves as an alias for the `str.split('')` idiom.
 * @param text A sentence to break down.
 * @return     The list of character strings.
 */
export function chars(text: string): string[] {
  return split('')(text);
}

/**
 * Takes a list of characters and joins them into a string.
 * Serves as an alias for the `chars.join('')` idiom.
 * @param charsArray The array of characters to join.
 * @return           A string containing all the characters.
 */
export function unchars(charsArray: string[]): string {
  return join('')(charsArray);
}

/**
 * Upper-case the first character and the rest get converted to lower-case.
 * @param sentence The string to capitalize.
 * @return         The sentence which was capitalized.
 */
export function capitalize(sentence: string): string {
  return sentence.length > 0
    ? sentence[0].toUpperCase() + sentence.slice(1).toLowerCase()
    : sentence.toUpperCase();
}

/**
 * Surrounds a string with the provided left and right substrings.
 * If the right substring wasn't provided, the left one will be used.
 * @param left  Element to place on the left.
 * @param right Substring to place on the right (optional).
 */
export function surround(left: string, right?: string) {
  return function surround__(text: string): string {
    if (right === void 0) { right = left }

    return left + text + right;
  }
}

/**
 * Tells you whether the string you passed contains
 * only whitespace characters or not.
 * @param text
 */
export function isBlank(text: string): boolean {
  return /^\s*$/.test(text);
}

/**
 * Capitalizes all the words in a sentence.
 * @param text The sentence to title-case.
 */
export function titleCase(text: string): string {
  return unwords(map(capitalize)(words(text)));
}
