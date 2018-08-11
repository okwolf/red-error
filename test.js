const spawnSync = require("child_process").spawnSync;
const assert = require("assert");
const formatRed = require("./formatRed.js");

const message = "fails with red output";
const results = spawnSync("node index.js ", message.split(" "), {
  shell: true
});

assert.strictEqual(results.status, 1, "wrong exit code");
assert.strictEqual(results.stdout.length, 0, "nothing printed to standard out");
const actualStdErr = results.stderr.toString();
const expectedStdErr = formatRed(message);
assert.strictEqual(
  actualStdErr,
  expectedStdErr,
  `wrong output to standard error: ${actualStdErr}`
);

process.stdout.write("\x1b[1;32mALL TESTS PASSED!\x1b[0m\n\n");
