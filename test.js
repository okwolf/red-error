var spawnSync = require("child_process").spawnSync;
var assert = require("assert");
var formatRed = require("./formatRed.js");

var message = "fails with red output";
var results = spawnSync("node index.js ", message.split(" "), {
  shell: true
});

assert.strictEqual(results.status, 1, "wrong exit code");
assert.strictEqual(results.stdout.length, 0, "nothing printed to standard out");
var actualStdErr = results.stderr.toString();
var expectedStdErr = formatRed(message);
assert.strictEqual(
  actualStdErr,
  expectedStdErr,
  "wrong output to standard error: " + actualStdErr
);
