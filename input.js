// stores the active TCP connection object
let connection;
const UP = 'w';
const DOWN = 's';
const LEFT = 'a';
const RIGHT = 'd';
const QUIT = '\u0003';
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
    switch(key) {
      case UP:
        connection.write("Move: up");
        break;
      case LEFT:
        connection.write("Move: left");
        break;
      case RIGHT:
        connection.write("Move: right");
        break;
      case DOWN:
          connection.write("Move: down");
          break;
      case QUIT:
        process.exit();
      default:
        
    }
}
)};

module.exports = { setupInput }