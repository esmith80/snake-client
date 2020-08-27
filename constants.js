
let funMessage = 's-i-i-ck dude';
let tauntMessage = 'Come at me bro';
let greetingMessage = 'wazzup!?';

const inputKeys = {
  w:        "Move: up",
  a:        "Move: left",
  d:        "Move: right",
  s:        "Move: down",
  g:        `Say: ${greetingMessage}`,
  f:        `Say: ${funMessage}`,
  t:        `Say: ${tauntMessage}`,
}

module.exports = {
  IP: '10.0.2.15',
  PORT: 50541,
  inputKeys,    
};