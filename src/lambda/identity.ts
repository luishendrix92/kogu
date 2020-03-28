/**
 * Utility function that returns the first argument
 * passed to it. Useful for functional programming.
 * @param value The value to return.
 */
export default function identity<T>(value: T): T {
  return value;
}
