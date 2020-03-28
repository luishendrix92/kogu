import {Producer} from "./types";

/**
 * Runs a function a certain amount of times and returns an array
 * containing the return values of each invocation.
 * @param effect Callback with potential side effects and optional return value.
 * @param times  Amount of times the callback will be run.
 */
export default function repeatedly<T>(effect: Producer<T>, times: number): T[] {
  if (times < 0) {
    throw new Error('[repeatedly]: Argument "times" must not be negative');
  }

  const collectedResults: T[] = Array(times);

  for (let i = 0; i < times; i++) {
    collectedResults[i] = effect();
  }

  return collectedResults
}
