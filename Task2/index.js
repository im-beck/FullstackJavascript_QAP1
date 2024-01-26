// Import lodash using CommonJS syntax
const _ = require('lodash');

try {
  // Use lodash to find the maximum value in an array
  const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const maxNumber = _.max(numbers);
  
  // Log the maximum number
  console.log(`The maximum number is: ${maxNumber}`);

  // Simulate an error for demonstration purposes
  throw new Error('Simulated error for robustness testing');
} catch (error) {
  // Handle any errors that occur during the execution
  console.error(`An error occurred: ${error.message}`);
} finally {
  // Ensure a message is logged even if there is an error
  console.log('Execution completed.');
}
