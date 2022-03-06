//import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import { eslint } from 'rollup-plugin-eslint';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { nodeResolve } from '@rollup/plugin-node-resolve'
//import typescript from '@rollup/plugin-typescript';
import nodePolyfills from 'rollup-plugin-polyfill-node';

const commonConfig = {
    input: 'src/index.js',
    output: {
        name: 'simple-peer-wrapper',
        sourcemap: true
    },
    //external: ['SimplePeerWrapper'],
    //external: [ 'fs' ],
    plugins: [
        /*
        typescript(),
        */

        nodeResolve({
            browser: true, 
            preferBuiltins: false,
            //customResolveOptions: {
            //    moduleDirectory: 'node_modules'
            //}
        }),
        commonjs({
            include: [
                //'node_modules/**',
                //'../../web/node_modules/eventemitter3/**',
                //'node_modules/socket.io-client/**',
                '../../web/dependencies/vite-compatible-simple-peer-wrapper/**',
                //'../../web/node_modules/**'
            ],
            transformMixedEsModules: true,
            extensions: ['.js'] //, '.ts']
        }),
        nodePolyfills({
            sourceMap: true
        }),
        babel({
            exclude: 'node_modules/**',
            presets: [
                ['@babel/preset-env', {useBuiltIns: 'entry', corejs: 3}],
                '@babel/preset-typescript',
            ],
            extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts'],
            //babelHelpers: 'runtime'
        })
        //nodent(),
        //regenerator()
    ],
    /*
    define: {
        "global": "window"
    }
    */
};

// ESM config
const esmConfig = Object.assign({}, commonConfig);
esmConfig.output = Object.assign({}, commonConfig.output, {
    file: 'dist/mjs/simple-peer-wrapper.mjs',
    format: 'esm'
});

// ESM prod config
const esmProdConfig = Object.assign({}, esmConfig);
esmProdConfig.output = Object.assign({}, esmConfig.output, {
    file: 'dist/mjs/simple-peer-wrapper.min.mjs',
    sourcemap: false
});
esmProdConfig.plugins = [
    ...esmConfig.plugins,
    terser()
];

// UMD config
const umdConfig = Object.assign({}, commonConfig);
umdConfig.output = Object.assign({}, commonConfig.output, {
    file: 'dist/umd/simple-peer-wrapper.js',
    format: 'umd'
});
umdConfig.plugins = [
    ...commonConfig.plugins
];

// Production config
const umdProdConfig = Object.assign({}, umdConfig);
umdProdConfig.output = Object.assign({}, umdConfig.output, {
    file: 'dist/umd/simple-peer-wrapper.min.js',
    sourcemap: false
});
umdProdConfig.plugins = [
    ...umdConfig.plugins,
    terser()
];

let configurations = [];
if (process.env.SERVE) {
    const serveConfig = Object.assign({}, commonConfig);
    serveConfig.input = 'render/index.ts';
    serveConfig.output = Object.assign({}, commonConfig.output, {
        file: 'dist/render/simple-peer-wrapper.iife.js',
        format: 'iife'
    });
    serveConfig.plugins = [
        eslint({
            exclude: [
                'node_modules/**',
                'json/**'
            ],
            throwOnError: true
        }),
        ...umdConfig.plugins
    ];
    serveConfig.plugins.push(
        serve({
            open: true,
            contentBase: ['dist'],
            host: 'localhost',
            port: '3030'
        }),
        livereload({
            watch: 'dist',
            verbose: false
        })
    );
    configurations.push(serveConfig);
} else {
    configurations.push(
        esmConfig,
        esmProdConfig,
        umdConfig,
        umdProdConfig
    )
}

export default configurations;