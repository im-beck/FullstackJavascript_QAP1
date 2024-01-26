// The stream module in Node.js provides an interface for reading from 
// and writing to streams of data. Streams are a way to handle 
// reading/writing files, network communication, or any kind of 
// end-to-end information exchange in a memory-efficient way.

// Import the fs module for file system operations
const fs = require('fs');

// Define the source file and destination file
const sourceFile = 'sample.txt';
const destinationFile = 'output.txt';

// Create a readable stream for the source file
const readableStream = fs.createReadStream(sourceFile, 'utf-8');

// Check if the source file exists before proceeding
fs.access(sourceFile, fs.constants.F_OK, (err) => {
  if (err) {
    console.error(`Error: ${sourceFile} does not exist.`);
    return;
  }

  // Create a writable stream for the destination file
  const writableStream = fs.createWriteStream(destinationFile);

  // Handle errors on the writable stream
  writableStream.on('error', (writeError) => {
    console.error(`Error writing to ${destinationFile}: ${writeError.message}`);
  });

  // Handle the 'finish' event when the data has been written successfully
  writableStream.on('finish', () => {
    console.log(`Data has been successfully written to ${destinationFile}`);
  });

  // Pipe data from the readable to writable stream
  readableStream.pipe(writableStream);
});
