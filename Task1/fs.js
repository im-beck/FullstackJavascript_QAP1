// The fs module in Node.js provides functions to interact with the 
// file system. It allows you to read/write files, create directories, 
// and perform other file-related operations.

// Import the fs module
const fs = require('fs');

// Write to a file
fs.writeFileSync('sample.txt', 'Hello, FileSystem!');

// Read from a file
const content = fs.readFileSync('sample.txt', 'utf-8');
console.log(`File content: ${content}`);
