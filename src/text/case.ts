import {map} from "../list";
import {chars, unchars, unwords, words} from "./index";

const ALPHA_PATTERN = /\W/g;

/**
 * @desc
 * Upper-case the first character and the rest get converted to lower-case.
 *
 * **NOTE**: For now, this function only upper-cases the first character
 * of the string regardless of if it's a letter or not.
 * @example
 * capitalize("cthULhu"); //> "Cthulhu"
 * capitalize("nyarlathotep!"); //> "Nyarlathotep!"
 * @todo Ensure that something like capitalize("__aBC") returns "__Abc"
 * @todo Provide an optional "locale" argument for using .toLocaleUppercase()
 * @see {@link titleCase}
 * @param {string} sentence - The string to capitalize.
 * @return {string}         - The sentence which was capitalized.
 */
export function capitalize(sentence: string): string {
  return sentence.length > 0
  ? sentence[0].toUpperCase() + sentence.slice(1).toLowerCase()
  : sentence.toUpperCase();
}

/**
 * @desc
 * Capitalizes all the words in a sentence. It does so by
 * calling {@link capitalize} on each word (separated by
 * spaces) and then joining them again with a space.
 * @example
 * titleCase("mediocrity knows nothing higher than itself");
 * //> "Mediocrity Knows Nothing Higher Than Itself"
 *
 * titleCase("THE  SHADOW OVER -innsmouth.");
 * //> "The Shadow Over -innsmouth."
 * @todo Performance analysis vs using RegExp replace.
 * @see {@link capitalize}
 * @param {string} text - The sentence to title-case.
 * @return {string}      - The title-cased sentence.
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
 * @desc
 * Converts lowercase characters into uppercase and viceversa.
 * Works for single-character strings as well for multi-character.
 * @example
 * flipCase("SHOUT"); //> "shout"
 * flipCase("cRaZy"); //> "CrAzy"
 * flipCase("a"); //> "A"
 * flipCase(""); //> ""
 * @todo Performance analysis vs using RegExp replace.
 * @param {string} text - The string to flip-case.
 * @return {string}     - The flip-cased string.
 */
export function flipCase(text: string): string {
  return unchars(map(_flipCase)(chars(text)));
}

/**
 * @desc
 * Case-insensitive **equality test** for two strings. If the option
 * for ignoring non-alphanumeric characters is enabled, then
 * RegExp will remove them from both strings in order to
 * perform a more lenient case-insensitive comparison,
 * but this will also ignore characters like ä, á, etc.
 * @example
 * caselessEq("_a_B_c", "AbC", false); //> false
 * caselessEq("_a_B_c", "AbC", true); //> true
 * caselessEq("dog!", "DOG!"); //> true
 * caselessEq("", ""); //> true
 * @param {string} a - Left-side string for comparison.
 * @param {string} b - Right-side string for comparison.
 * @param {boolean} [alpha=false]
 * Ignore non-alphanumerics.
 * @return {boolean} - Result of case-insensitive comparison between two strings.
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
