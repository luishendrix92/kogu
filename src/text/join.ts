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
 * Takes a list of strings and joins them using a new line character.
 * Serves as an alias for the `strs.join('\n')` idiom.
 * @param linesArray The array of lines to join.
 * @return           A string containing all the lines.
 */
export function unlines(linesArray: string[]): string {
  return join("\n")(linesArray);
}

/**
 * Takes a list of strings and joins them using a space character.
 * Serves as an alias for the `strs.join(' ')` idiom.
 * @param wordsArray The array of words to join.
 * @return           A string containing all the words.
 */
export function unwords(wordsArray: string[]): string {
  return join(" ")(wordsArray);
}

/**
 * Takes a list of characters and joins them into a string.
 * Serves as an alias for the `chars.join('')` idiom.
 * @param charsArray The array of characters to join.
 * @return           A string containing all the characters.
 */
export function unchars(charsArray: string[]): string {
  return join("")(charsArray);
}
