/**
 * @desc
 * Condensation of a list of strings into a single
 * string using a specific separator of type string.
 * This separator is not optional and has no default.
 *
 * If you use this function with a singleton array,
 * the result will be the only string it contains.
 * Whereas an empty array will produce an empty string.
 * @example
 * const listify = join(", ");
 *
 * listify(["Poe", "Lovecraft", "King"]);
 * //> "Poe, Lovecraft, King"
 *
 * join(" - ")(["Singleton"]); //> "Singleton"
 * join(" <> ")([]); //> ""
 * @todo Let the user specify the first and last separators.
 * @see {@link split}
 * @param {string} joiner - The string separator.
 * @return {function(strings: string[]): string}
 * The joiner function that receives a list of strings.
 */
export function join(joiner: string) {
  return function join__(strings: string[]): string {
    return strings.join(joiner);
  }
}

/**
 * @desc
 * Takes a list of strings and joins them using a new-line
 * character `\n`. If it finds **adjacent empty strings**,
 * the function **will not** condense them into a single
 * new-line character; this behaviour can't be changed.
 * @example
 * const haiku: string[] = [
 *   "The lamp once out"
 *   "Cool stars enter"
 *   "The window frame."
 * ];
 *
 * unlines(haiku);
 * //> "The lamp once out\n
 * //>  Cool stars enter\n
 * //>  The window frame."
 *
 * unlines(["One"]); //> "One"
 * unlines([]); //> ""
 * @see {@link lines}
 * @param {string[]} lines - The array of lines to join.
 * @return {string}        - A string containing all the lines.
 */
export function unlines(lines: string[]): string {
  return join("\n")(lines);
}

/**
 * @desc
 * Takes a list of strings and joins them using a space character.
 * If it finds **adjacent empty strings**, this function won't
 * condense them into a single space, but rather convert each
 * one into a space; this behaviour can't be changed.
 * @example
 * unwords(["The", "Quick", "Brown", "Fox"]);
 * //> "The Quick Brown Fox"
 *
 * unwords(["Alone"]); //> "Alone"
 *
 * unwords(["", "", "Trailing", "", "Space"]);
 * //> "  Trailing  Space"
 * @see {@link words}
 * @param {string[]} words - The array of words to join.
 * @return {string}        - A string containing all the words.
 */
export function unwords(words: string[]): string {
  return join(" ")(words);
}

/**
 * @desc
 * Takes a list of characters and joins them into a string.
 * @example
 * unchars(["A", "B", "C"]); //> "ABC"
 * unchars(["A"]); //> "A"
 * unchars([]); //> ""
 *
 * // However, it doesn't only work
 * // on single-character strings...
 * unchars(["The", "Beatles"]);
 * //> "TheBeatles"
 * @see {@link chars}
 * @param {string[]} chars - The array of characters to join.
 * @return {string}        - A string containing all the characters.
 */
export function unchars(chars: string[]): string {
  return join("")(chars);
}
