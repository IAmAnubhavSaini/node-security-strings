#!/usr/bin/env node

const blue = require('@f0c1s/color-blue');
const green = require('@f0c1s/color-green');
const red = require('@f0c1s/color-red');
const {escape: escapeHTML} = require('@f0c1s/escape-html');
const {escape: escapeJS} = require('@f0c1s/escape-javascript');
const {rot47, rotations} = require('@f0c1s/security-rot');
const base64 = require('@m1yh3m/base.64.codec.node.lib');

const input = process.argv[2];
console.log(green(`for input: ${blue(input)}`));
let names = ['rot47', 'base64.encode', 'base64.decode', 'escapeJS', 'escapeHTML'];
let fns = [rot47, base64.encode, base64.decode, escapeJS, escapeHTML];
let out = fns.map(fn => {
    let val = '';
    try {
        val = fn(input);
    } catch (e) {
        val = 'not applicable';
    }
    return val;
});
out.forEach((v, i) => {
    console.log(blue(input), green(names[i]), red(v));
});

console.log(`rot13 rotations on: ${blue(input)}`);
rotations(input).forEach(i => console.log(i));
