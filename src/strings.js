#!/usr/bin/env node

var blue = require('@f0c1s/color-blue');
var green = require('@f0c1s/color-green');
var red = require('@f0c1s/color-red');
var yellow = require('@f0c1s/color-yellow');
var escapeHTML = require('@f0c1s/escape-html').escape;
var escapeJS = require('@f0c1s/escape-javascript').escape;
var _a = require('@f0c1s/security-rot'), rot47 = _a.rot47, rotations = _a.rotations;
var base64 = require('@m1yh3m/base.64.codec.node.lib');
var input = process.argv[2] || '<html>You did not provide any input. function(){ <svg/>}</html>';
console.log(green("\n" + yellow("secstr") + " for input: \"" + blue(input) + "\"."));
var names = ['rot47', 'base64.encode', 'base64.decode', 'escapeJS', 'escapeHTML'];
var fns = [rot47, base64.encode, base64.decode, escapeJS, escapeHTML];
var out = fns.map(function (fn) {
    var val;
    try {
        val = fn(input);
    }
    catch (e) {
        val = 'not applicable';
    }
    return val;
});
out.forEach(function (v, i) {
    console.log(blue(input), green(names[i]), red(v));
});
console.log("rot13 rotations on: " + blue(input));
rotations(input).forEach(function (i) { return console.log(i); });
