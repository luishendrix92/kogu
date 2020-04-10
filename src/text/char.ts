/**
 * @desc
 * Returns the character code of the first character in a string.
 * If the length of the string is 0, an error will be thrown
 * (this behaviour can potentially change in a future release).
 *
 * **Note**: There are some characters that take up 2 codes, thus
 * making the string have a length of 2. In this case, the function
 * will only return the first code.
 * @example
 * ord("A"); //> 65
 * ord("10"); // 49
 * ord("");
 * //! Uncaught Error: [ord]: char
 * string must not be of length 0.
 *
 * pipe(chars, map(ord))("😈");
 * //> [55357, 56840]
 * @see {@link chr}
 * @throws {Error}      - When the string is empty.
 * @param {string} char - The string that has the character.
 * @return {number}     - Character code as a number.
 */
export function ord(char: string): number {
  if (char.length === 0) {
    throw new Error("[ord]: char string must not be of length 0.");
  }

  return char.charCodeAt(0);
}

/**
 * @desc
 * Takes a number and returns the character it represents as a
 * single-character string. It serves as an alias to the native
 * function `String.fromCharCode`, except it only accepts one
 * argument, thus making it **incompatible** with characters
 * that take up 2 codes, for example, emojis.
 * @example
 * chr(230); //> æ
 * chr(65); //> A
 *
 * const joy = [
 *   108, 105, 116, 32,
 *   55357, 56834 // emoji
 * ];
 *
 * pipe(map(chr), unchars)(joy);
 * //> "lit 😂"
 * @see {@link ord}
 * @param {number} code - The code to convert to string
 * @return {string}     - The character it represents.
 */
export function chr(code: number): string {
  return String.fromCharCode(code);
}
