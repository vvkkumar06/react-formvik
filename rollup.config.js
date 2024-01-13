import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default [
    {
        input: './src/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
                sourcemap: true
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                sourcemap: true
            }
        ],
        plugins: [
            external(),
            resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
            commonjs(),
            typescript({ module: "ESNext"}),
            babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
                presets: ['@babel/preset-env', ['@babel/preset-react', { "runtime": "automatic" }]],
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }),
            terser()
        ]
    }
]