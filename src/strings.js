#!/usr/bin/env node

var blue = require('@f0c1s/color-blue');
var green = require('@f0c1s/color-green');
var red = require('@f0c1s/color-red');
var yellow = require('@f0c1s/color-yellow');
var escapeHTML = require('@f0c1s/escape-html').escape;
var escapeJS = require('@f0c1s/escape-javascript').escape;
var _a = require('@f0c1s/security-rot'), rot47 = _a.rot47, rotations = _a.rotations, rot13 = _a.rot13;
var base64 = require('@m1yh3m/base.64.codec.node.lib');
var input = process.argv[2] || 'Please. {provide} @input!';
console.log(green("\n" + yellow("secstr") + " \"" + blue(input) + "\"\n"));
var names = ['rot13', 'rot47', 'base64.encode', 'base64.decode', 'escapeJS', 'escapeHTML'];
var fns = [rot13, rot47, base64.encode, base64.decode, escapeJS, escapeHTML];
if (process.argv.includes('--table')) {
    var out = fns.map(function (fn, index) {
        var _a;
        var val;
        try {
            val = fn(input);
        }
        catch (e) {
            val = 'not applicable';
        }
        return _a = {
                fn: names[index]
            },
            _a['fn(input)'] = val,
            _a;
    });
    console.table(out);
}
else {
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
        console.log(green(names[i].padEnd(20, ' ')), red(v));
    });
}
if (process.argv.includes('--rot13s')) {
    if (process.argv.includes('--table')) {
        console.table(rotations(input));
    }
    else {
        rotations(input).forEach(function (i) { return console.log(i); });
    }
}
console.log("END");
