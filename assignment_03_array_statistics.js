// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// const readlineSync = require('readline-sync');


const readlineSync = require('readline-sync');

/**
 * Calculates the sum of all numbers in an array.
 * @param {number[]} arr 
 * @returns {number}
 */
function findSum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

/**
 * Calculates the average of numbers in an array.
 * @param {number[]} arr 
 * @returns {number}
 */
function findAverage(arr) {
  const sum = findSum(arr);
  return sum / arr.length;
}

/**
 * Finds the maximum value in an array.
 * @param {number[]} arr 
 * @returns {number}
 */
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

/**
 * Finds the minimum value in an array.
 * @param {number[]} arr 
 * @returns {number}
 */
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function main() {
  const count = readlineSync.questionInt('How many numbers? ');

  // Validate positive integer requirement
  if (count <= 0) {
    console.log('Error: Please enter a positive number greater than 0.');
    return;
  }

  const numbers = [];
  for (let i = 0; i < count; i++) {
    const num = readlineSync.questionInt(`Enter number ${i + 1}: `);
    numbers.push(num);
  }

  const sum = findSum(numbers);
  const avg = findAverage(numbers);
  const max = findMax(numbers);
  const min = findMin(numbers);

  console.log('\nResults:');
  console.log(`Sum:     ${sum}`);
  console.log(`Average: ${avg}`);
  console.log(`Maximum: ${max}`);
  console.log(`Minimum: ${min}`);
}

// Execute program
main();