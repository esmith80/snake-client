/**
 * the code below sets up user interface
 * so that we can handle user input via stdin
 */

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;
}

const handleUserInput = function() {
  process.stdin.on('data', (key) => {
    // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  });
}

module.exports = { setupInput }