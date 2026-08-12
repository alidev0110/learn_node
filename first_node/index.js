// setup internal node 
// console.log('This message is displayed immediately');
// setTimeout(() => {
//     console.log('This message is displayed after 2 seconds');
// }, 2000);
// console.log('This message is displayed immediately after the first message');

// require('./Module.js');
// require('./Module.js');
// require('./Module.js');

// import {x} from './ESmodule.js';

// import data from './Fs.js';
// import data1 from './Path.js';
// console.log(data);
// console.log(data1);

import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
}); 

