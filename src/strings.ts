#!/usr/bin/env node

const blue = require('@f0c1s/color-blue');
const green = require('@f0c1s/color-green');
const red = require('@f0c1s/color-red');
const yellow = require('@f0c1s/color-yellow');
const {escape: escapeHTML} = require('@f0c1s/escape-html');
const {escape: escapeJS} = require('@f0c1s/escape-javascript');
const {rot47, rotations} = require('@f0c1s/security-rot');
const base64 = require('@m1yh3m/base.64.codec.node.lib');

const input = process.argv[2] || '<html>You did not provide any input. function(){ <svg/>}</html>';

console.log(green(`\n${yellow("secstr")} for input: "${blue(input)}".`));

const names: string[] = ['rot47', 'base64.encode', 'base64.decode', 'escapeJS', 'escapeHTML'];
const fns: { (input: string): string }[] = [rot47, base64.encode, base64.decode, escapeJS, escapeHTML];

const out: string[] = fns.map(fn => {
  let val: string;
  try {
    val = fn(input);
  } catch (e) {
    val = 'not applicable';
  }
  return val;
});

out.forEach((v: string, i: number) => {
  console.log(blue(input), green(names[i]), red(v));
});

console.log(`rot13 rotations on: ${blue(input)}`);
rotations(input).forEach(i => console.log(i));
