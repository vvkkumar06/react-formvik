import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { dts } from "rollup-plugin-dts";

import pkg from "./package.json" assert { type: "json" };

export default [
    {
        input: './src/index.ts',
        output: [
            {
                file: pkg.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: pkg.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            external(),
            resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
            commonjs(),
            typescript({ module: 'ESNext' }),
            babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
                presets: [
                    ['@babel/preset-env',
                        {
                            targets: {
                                node: 'current'
                            }
                        }],
                    ["@babel/preset-react", { runtime: "automatic" }],
                    "@babel/preset-typescript"
                ],
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }),
            terser()
        ],
        external: Object.keys(pkg.peerDependencies),
    },
    {
        input: 'dist/esm/index.d.ts',
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },
]