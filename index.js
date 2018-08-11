#!/usr/bin/env node

const formatRed = require("./formatRed.js");
const message = process.argv.slice(2).join(" ");

process.stderr.write(formatRed(message));
process.exit(1);
