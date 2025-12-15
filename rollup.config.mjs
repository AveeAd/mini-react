import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from '@rollup/plugin-terser';
import pkg from "./package.json" with { type: "json" };
import postcss from "rollup-plugin-postcss";

import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const isWatching = process.env.ROLLUP_WATCH;

const packageName = pkg.name.replace(/@.*\//,"")

const plugins = [
	resolve({
		browser: true
	}),
	commonjs(),
	typescript({
		tsconfig: "tsconfig.json"
	}),
	terser(),
	postcss({
      extract: false,
      modules: false,
      inject: true,
    }),
]

if (isWatching) {
    plugins.push(
        // 1. Live Reload Plugin: Injects a script to refresh the browser
        livereload({
            watch: 'dist', // Watch the output directory for changes
        }),
        // 2. Serve Plugin: Starts a local development server
        serve({
            open: true, // Automatically open the browser
            verbose: true,
            host: 'localhost',
            port: 8080,
        })
    );
}

export default defineConfig({
	input: 'src/index.tsx',
	plugins,
	output: [{
		file: `dist/${packageName}.esm.js`,
		format:"esm",
		"sourcemap": true
	},
{
	file: `dist/${packageName}.umd.js`,
	format:"umd",
	name: "MiniReact",
	"sourcemap": true,
	plugins: [
		terser()
	]
}
]
});