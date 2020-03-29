/**
 * @desc
 * Returns a splitter function that separates text into
 * an array of substrings given a certain pattern which
 * can be either a string or a RegExp.
 * @example
 * split(/s+/)("A    quiet        place");
 * //> ["A", "quiet", "place"]
 *
 * split(" - ")("The - Best-Day - Ever");
 * //> ["The", "Best-Day", "Ever"]
 * @see {@link join}
 * @param {string|RegExp} separator - The pattern that splits the text.
 * @return {function(text:string):string[]}
 * A splitter function that receives the text.
 */
export function split(separator: string | RegExp) {
  return function split__(text: string): string[] {
    return text.split(separator);
  }
}

/**
 * @desc
 * Breaks down a block of text into an array of individual lines.
 * It uses a RegExp pattern `\r|\n` to split the text, and it has
 * an optional flag called `trim` that makes sure there are no
 * empty new-line characters at the start and end of the string.
 *
 * **Note**: This function doesn't condense adjacent new-line characters.
 * @example
 * const hickey: string = `
 * Simplicity is hard work.
 * But, there's a huge payoff.
 * `;
 *
 * lines(hickey);
 * //> [ "Simplicity is hard work.",
 * //> , "But, there's a huge payoff." ]
 *
 * // If specified, it won't trim the trailing
 * // new-line characters I left on purpose.
 * lines(hickey, false).length; //> 4
 * @see {@link unlines}
 * @param {string}  text        - The text that contains the lines to obtain.
 * @param {boolean} [trim=true] - Option to remove blank lines from both ends.
 * @return {string[]}           - A list of string representing the lines.
 */
export function lines(text: string, trim: boolean = true): string[] {
  if (text.length === 0) {
    return [];
  }

  const trimPattern: RegExp = /^(\n)+|(\n)+$/g;

  return split(/[\n\r]/)(trim
    ? text.replace(trimPattern, "")
    : text);
}

/**
 * @desc
 * Breaks down a string into an array of individual words.
 * It uses a single space as its separator, so you may
 * encounter some unexpected behaviour. In a future
 * release there may be an option to use a RegExp
 * (`\s+`) as its separator instead.
 * @example
 * words("At the mountains of madness.");
 * //> ["At", "the", "mountains", "of", "madness."]
 *
 * words("--Left  Right--");
 * //> ["--Left", "", "Right--"]
 *
 * words("  "); //> ["", "", ""]
 * words(""); //> []
 * @see {@link unwords}
 * @param {string} text - The text which will be separated into words.
 * @return {string[]}   - An array of words.
 */
export function words(text: string): string[] {
  if (text.length === 0) {
    return [];
  }

  return split(" ")(text);
}

/**
 * @desc
 * Breaks down a whole string into a list of strings
 * with just one character each. It uses an empty
 * string as its separator.
 * @example
 * chars("I'm"); //> ["I", "'", "m"]
 * chars("\n\t"); //> ["\n, "\t"]
 * chars(""); //> //> []
 * @see {@link unchars}
 * @param {string} text - A sentence to break down.
 * @return {string[]}   - The list of character strings.
 */
export function chars(text: string): string[] {
  return split("")(text);
}
