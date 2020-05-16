// node tiene un único thread, pero algunas librerías internas de Node son multithread.
// https://medium.com/better-programming/is-node-js-really-single-threaded-7ea59bcc8d64

const crypto = require('crypto');

const start = Date.now();

function logHashTime() {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('Hash: ', Date.now() - start);
  });
}

// mi máquina tiene 4 procesadores entonces puede realizar 4 operaciones "a la vez" con "threads" 
// creados con livub (interno de node)
logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
