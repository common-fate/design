import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import multiEntry from "@rollup/plugin-multi-entry";
import { getFiles } from "./scripts/buildUtils";

const packageJson = require("./package.json");
const extensions = [".js", ".ts", ".jsx", ".tsx"];

export default [
  {
    input: "src/index.ts",
    // inlineDynamicImports: true,
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    // resolve: {
    //     syntheticNamedExports: true
    // },
    plugins: [
      // multiEntry(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  // May want to reenable this, currently throwing error
  // [!] Error: Could not resolve entry module (dist/esm/types/index.d.ts).
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    // external: [/\.(css|less|scss)$/],
  },
];
