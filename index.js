#!/usr/bin/env node

var message = process.argv.slice(2).join(" ");

process.stderr.write("\x1b[1;31m" + message + "\x1b[0m\n\n");
process.exit(1);
