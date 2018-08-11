#!/usr/bin/env node

var formatRed = require("./formatRed.js");
var message = process.argv.slice(2).join(" ");

process.stderr.write(formatRed(message));
process.exit(1);
