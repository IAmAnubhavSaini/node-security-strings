#!/usr/bin/env node

const blue = require('@f0c1s/color-blue');
const green = require('@f0c1s/color-green');
const red = require('@f0c1s/color-red');
const yellow = require('@f0c1s/color-yellow');
const {escape: escapeHTML} = require('@f0c1s/escape-html');
const {escape: escapeJS} = require('@f0c1s/escape-javascript');
const {rot47, rotations, rot13} = require('@f0c1s/security-rot');
const base64 = require('@m1yh3m/base.64.codec.node.lib');

const input = process.argv[2] || 'Please. {provide} @input!';

console.log(green(`\n${yellow("secstr")} "${blue(input)}"\n`));

const names: string[] = ['rot13', 'rot47', 'base64.encode', 'base64.decode', 'escapeJS', 'escapeHTML'];
const fns: { (input: string): string }[] = [rot13, rot47, base64.encode, base64.decode, escapeJS, escapeHTML];

if (process.argv.includes('--table')) {

    const out: any[] = fns.map((fn: any, index) => {
        let val: string;
        try {
            val = fn(input);
        } catch (e) {
            val = 'not applicable';
        }
        return {
            fn: names[index], ['fn(input)']: val
        };
    });

    console.table(out);

} else {

    const out: string[] = fns.map((fn: { (input: string): string }) => {
        let val: string;
        try {
            val = fn(input);
        } catch (e) {
            val = 'not applicable';
        }
        return val;
    });

    out.forEach((v: string, i: number) => {
        console.log(green(names[i].padEnd(20, ' ')), red(v));
    });

}

if (process.argv.includes('--rot13s')) {
    if (process.argv.includes('--table')) {
        console.table(rotations(input));
    } else {
        rotations(input).forEach(i => console.log(i));
    }
}

console.log("END");
