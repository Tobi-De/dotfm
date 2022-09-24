#!/usr/bin/env node

const esbuild = require('esbuild');
const postcss = require('esbuild-postcss');

esbuild
    .build({
        entryPoints: ['assets/index.js'],
        minify: true,
        sourcemap: true,
        bundle: true,
        watch: true,
        logLevel: "info",
        outfile: 'dotfm/static/bundle.js',
        plugins: [postcss()],
    })
    .catch(() => process.exit(1));
