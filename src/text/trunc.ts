/**
 * @desc
 * Truncates a string, doesn't exceed the permitted length
 * and appends `...` at the end unless specified otherwise.
 * If the length of the terminator exceeds that of the
 * maximum length, or the limit is `<= 0`, then you
 * will get an empty string in return.
 *
 * When the length of the limit text is greater than or
 * equal to the text, you will get the original text.
 * @example
 * const dagon = "It shall not find me. God, that hand! The window! The window!";
 *
 * trunc(34)(dagon); //> "It shall not find me. God, that..."
 * trunc(11, "!!!")(dagon); //> "It shall!!!"
 * trunc(3)(dagon); //> "..."
 * trunc(2)(dagon); //> ""
 * @param {number} limit          - The maximum amount of characters.
 * @param {string} [ending="..."] - Custom string terminator.
 * @return {function(text: string): string}
 * A function that receives the string to truncate.
 */
export default function trunc(limit: number, ending: string = "...") {
  return function trunc__(text: string): string {
    const [textLen, endingLen] = [text.length, ending.length];

    if (limit >= textLen) {
      return text;
    } else if (limit === endingLen) {
      return ending;
    } else if (limit < endingLen) {
      return "";
    } else {
      return text.slice(0, limit - endingLen) + ending;
    }
  }
};
