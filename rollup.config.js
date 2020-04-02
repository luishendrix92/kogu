import {terser} from "rollup-plugin-terser";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from "@rollup/plugin-typescript";

const LIB_NAME = "kogu";

/**
 * Transforms a module name to a rollup
 * configuration object.
 * @param {string} moduleName - The module name
 */
function toConfig(moduleName) {
  const moduleDir = moduleName
    ? moduleName + "/" : "";
  const bundleSuffix = moduleName
    ? "-" + moduleName : "";

  return {
    input: `./dist/index.js`,
    treeshake: false,
    output: {
      file: "./output/bundle.js",
      format: "umd",
      name: "kogu",
    }
  };
}

export default [
  "lambda"
].map(toConfig);
