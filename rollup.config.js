import typescript from "@rollup/plugin-typescript";
// import typescript from "rollup-plugin-typescript2";

/**
 * @type {import('rollup').RollupOptions[]}
 */
const config = [
  {
    input: "src/index.ts",
    output: {
      dir: "dist/cjs",
      format: "cjs",
      sourcemap: true,
    },
    plugins: [
      typescript({
        declarationDir: "dist/cjs",
        outputToFilesystem: true,
      }),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      dir: "dist/esm",
      format: "esm",
      sourcemap: true,
    },
    plugins: [
      typescript({
        declarationDir: "dist/esm",
        outputToFilesystem: true,
      }),
    ],
  },
];

export default config;
