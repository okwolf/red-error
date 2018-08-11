const { spawnSync } = require("child_process");
const assert = require("assert");
const formatRed = require("./formatRed.js");

const message = "fails with red output";
const results = spawnSync("node index.js ", message.split(" "), {
  shell: true
});

const actualStdOut = results.stdout.toString();
const actualStdErr = results.stderr.toString();
const expectedStdErr = formatRed(message);
assert.strictEqual(results.status, 1, "wrong exit code");
assert.strictEqual(
  actualStdOut,
  "",
  `nothing should be printed to standard out but found: ${actualStdOut}`
);
assert.strictEqual(
  actualStdErr,
  expectedStdErr,
  `wrong output to standard error: ${actualStdErr}`
);

process.stdout.write("\x1b[1;32mALL TESTS PASSED!\x1b[0m\n\n");
