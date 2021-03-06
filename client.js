const net = require('net');
const { IP, PORT } = require('./constants');
// this establishes connection with the game server

const connect = function() {
  const conn = net.createConnection({
    host: IP, // am i supposed to use this or localhost
    port: PORT
  });

  // this lets us interpret incomeing data from the server as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to the game server");
    conn.write("Name: EMS");
    conn.write("Move: up");    
  });

    
  // conn will now use the built-in 'on' method to handle incoming data
  // 
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
}

module.exports = { connect }
