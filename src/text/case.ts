import {map} from "../list";
import {chars, unchars, unwords, words} from "./index";

const ALPHA_PATTERN = /\W/g;

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
 * Capitalizes all the words in a sentence.
 * @param text The sentence to title-case.
 */
export function titleCase(text: string): string {
  return unwords(map(capitalize)(words(text)));
}

function _flipCase(char: string): string {
  return char === char.toLowerCase()
    ? char.toUpperCase()
    : char.toLowerCase();
}

/**
 * Converts lowercase characters into uppercase and viceversa.
 * Works for single-character strings as well for multi-character.
 * @param text
 */
export function flipCase(text: string): string {
  return unchars(map(_flipCase)(chars(text)));
}

/**
 * Case-insensitive equality test for two strings.
 * @param a
 * @param b
 * @param alpha
 */
export function caselessEq(a: string, b: string, alpha: boolean = false): boolean {
  if (a === "" && b === "") {
    return true;
  } else if (alpha) {
    a = a.replace(ALPHA_PATTERN, "");
    b = b.replace(ALPHA_PATTERN, "");
  }

  return a.toLowerCase() === b.toLowerCase();
}
