/**
 * @desc
 * Converts plain degrees to radians by using a `PI / 180` factor.
 * @example
 * degToRad(360); //> 6.28319~
 * degToRad(15); //> 0.261799~
 * @see {@link radToDeg}
 * @param {number} deg - Amount of degrees to convert.
 * @return {number}    - Converted radians.
 */
export function degToRad(deg: number): number {
  return deg * (Math.PI / 180);
}

/**
 * @desc
 * Converts radians to plain degrees by using a `180 / PI` factor.
 * @example
 * radToDeg(2 * Math.PI); //> 360
 * radToDeg(Math.PI / 12); //> 14.99~
 * @see {@link degToRad}
 * @param {number} rad - Amount of radians to convert.
 * @return {number}    - Converted degrees.
 */
export function radToDeg(rad: number): number {
  return rad * (180 / Math.PI);
}
