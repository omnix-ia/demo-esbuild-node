import * as esbuild from "esbuild"

await esbuild.buildSync({
  entryPoints: ["src/app.js"],
  bundle: true,
  outfile: "dist/app.js",
  target: ["node18.15"],
  packages: "external",

  sourcemap: true,

  minify: true,
})
