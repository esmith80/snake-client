// stores the active TCP connection object
const { inputKeys } = require('./constants');
let connection;

/**
 * the code below sets up user interface
 * so that we can handle user input via stdin
 */

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;
}

const handleUserInput = function() {
  process.stdin.on('data', (key) => {    
    if (key === '\u0003') {
      process.exit();
      } else { 
        connection.write(inputKeys[key] ? inputKeys[key] : "");
      }   
  });
};

module.exports = { setupInput }