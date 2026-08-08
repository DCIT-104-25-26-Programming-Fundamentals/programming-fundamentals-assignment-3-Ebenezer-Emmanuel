// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readlineSync = require('readline-sync');

// PART A — Print the First N Terms

function generateFibonacci(n) {
  
  if (isNaN(n) || n <= 0) {
    console.log('Error: Please enter a positive integer.');
    return;
  }

  const sequence = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    sequence.push(a);
    let nextTerm = a + b;
    a = b;
    b = nextTerm;
  }

  console.log(`Fibonacci sequence: ${sequence.join(' ')}`);
}

function runPartA() {
  console.log('\n--- PART A: Print First N Terms ---');
  const input = readlineSync.question('How many terms? ');
  const n = parseInt(input, 10);
  generateFibonacci(n);
}


// PART B — Check if a Number Belongs to the Sequence

function isFibonacciNumber(num) {
  if (isNaN(num) || num < 0) {
    console.log(`${num} is NOT a Fibonacci number.`);
    return;
  }

  // 0 and 1 are valid Fibonacci numbers right away
  if (num === 0 || num === 1) {
    console.log(`${num} is a Fibonacci number.`);
    return;
  }

  let a = 0;
  let b = 1;
  let current = a + b;

  
  while (current < num) {
    a = b;
    b = current;
    current = a + b;
  }

  if (current === num) {
    console.log(`${num} is a Fibonacci number.`);
  } else {
    console.log(`${num} is NOT a Fibonacci number.`);
  }
}

function runPartB() {
  console.log('\n--- PART B: Check a Number ---');
  const input = readlineSync.question('Enter a number to check: ');
  const target = parseInt(input, 10);
  isFibonacciNumber(target);
}


// MAIN MENU LOOP

function main() {
  let running = true;

  while (running) {
    console.log('\n---------------------------------');
    console.log('      FIBONACCI PROGRAM MENU     ');
    console.log('---------------------------------');
    console.log('1. Print first N terms (Part A)');
    console.log('2. Check if a number is Fibonacci (Part B)');
    console.log('3. Exit');

    const choice = readlineSync.question('\nSelect an option (1-3): ');

    switch (choice.trim()) {
      case '1':
        runPartA();
        break;
      case '2':
        runPartB();
        break;
      case '3':
        console.log('\nGoodbye!');
        running = false;
        break;
      default:
        console.log('\nInvalid choice, pick 1, 2, or 3.');
    }
  }
}

// Start execution
main();