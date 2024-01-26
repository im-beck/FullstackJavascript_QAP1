// Import lodash using CommonJS syntax
const _ = require('lodash');

try {
  // Use lodash to find the maximum value in an array
  const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const maxNumber = _.max(numbers);
  
  // Use lodash to calculate the sum of an array
  const sum = _.sum(numbers);

  // Use lodash to remove duplicates from an array
  const uniqueNumbers = _.uniq(numbers);

  // Log the results
  console.log(`Numbers: ${numbers}`);
  console.log(`The maximum number is: ${maxNumber}`);
  console.log(`The sum of numbers is: ${sum}`);
  console.log(`Unique numbers: ${uniqueNumbers}`);

  // Simulate an error for demonstration purposes
  throw new Error('Simulated error for robustness testing');
} catch (error) {
  // Handle any errors that occur during the execution
  console.error(`An error occurred: ${error.message}`);
} finally {
  // Ensure a message is logged even if there is an error
  console.log('Execution completed.');
}

