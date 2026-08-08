// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');


// =============================================================================
// HELPER FUNCTIONS FOR INPUT & OUTPUT
// =============================================================================

/**
 * Reads a matrix of size M x N from user input line by line.
 * @param {number} rows - Number of rows (M)
 * @param {number} cols - Number of columns (N)
 * @param {string} label - Optional label for prompting (e.g., "A" or "B")
 * @returns {number[][]} The constructed 2D array representation of the matrix.
 */
function readMatrix(rows, cols, label = '') {
    const prefix = label ? `for Matrix ${label}` : '';
    console.log(`\nEnter values ${prefix} (${rows} rows x ${cols} columns):`);
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let isValid = false;
        let rowArray = [];

        while (!isValid) {
            const input = readlineSync.question(`Enter row ${i + 1}: `);
            // Split by space and convert to numbers
            rowArray = input.trim().split(/\s+/).map(Number);

            // Validate that user entered exactly `cols` numbers
            if (rowArray.length === cols && !rowArray.some(isNaN)) {
                isValid = true;
            } else {
                console.log(`Invalid input. Please enter exactly ${cols} space-separated numbers.`);
            }
        }

        matrix.push(rowArray);
    }

    return matrix;
}

/**
 * Displays a matrix in a neat, aligned grid format.
 * @param {number[][]} matrix - The 2D array to display.
 */
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const formattedRow = matrix[i]
            .map(val => String(val).padStart(6, ' '))
            .join(' ');
        console.log(formattedRow);
    }
}

// =============================================================================
// PART A — Transpose Matrix
// =============================================================================

/**
 * Computes the transpose of an M x N matrix (resulting in N x M).
 * @param {number[][]} matrix - Input M x N matrix.
 * @returns {number[][]} Transposed N x M matrix.
 */
function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let result = [];

    for (let j = 0; j < cols; j++) {
        let newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        result.push(newRow);
    }

    return result;
}

// =============================================================================
// PART B — Add Matrices
// =============================================================================

/**
 * Computes the element-wise sum of two M x N matrices.
 * @param {number[][]} matrixA - First M x N matrix.
 * @param {number[][]} matrixB - Second M x N matrix.
 * @returns {number[][]} Resulting M x N matrix sum.
 */
function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const cols = matrixA[0].length;
    let result = [];

    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }

    return result;
}

// =============================================================================
// PART C — Multiply Matrices
// =============================================================================

/**
 * Computes the matrix product A (M x N) * B (N x P), yielding an M x P matrix.
 * @param {number[][]} matrixA - M x N matrix.
 * @param {number[][]} matrixB - N x P matrix.
 * @returns {number[][]} Resulting M x P product matrix.
 */
function multiplyMatrices(matrixA, matrixB) {
    const m = matrixA.length;
    const n = matrixA[0].length;
    const p = matrixB[0].length;
    let result = [];

    for (let i = 0; i < m; i++) {
        let row = [];
        for (let j = 0; j < p; j++) {
            let dotProduct = 0;
            for (let k = 0; k < n; k++) {
                dotProduct += matrixA[i][k] * matrixB[k][j];
            }
            row.push(dotProduct);
        }
        result.push(row);
    }

    return result;
}

// =============================================================================
// MAIN FUNCTION
// =============================================================================

function main() {
    console.log("=========================================");
    console.log("       MATRIX OPERATIONS PROGRAM         ");
    console.log("=========================================");

    // -------------------------------------------------------------------------
    // Executing Part A: Transpose
    // -------------------------------------------------------------------------
    console.log("\n--- PART A: Transpose a Matrix ---");
    const rowsA = readlineSync.questionInt("Enter number of rows: ");
    const colsA = readlineSync.questionInt("Enter number of columns: ");

    const matrixA = readMatrix(rowsA, colsA);

    console.log("\nOriginal Matrix:");
    printMatrix(matrixA);

    const transposed = transposeMatrix(matrixA);
    console.log("\nTransposed Matrix:");
    printMatrix(transposed);

    // -------------------------------------------------------------------------
    // Executing Part B: Addition
    // -------------------------------------------------------------------------
    console.log("\n--- PART B: Add Two Matrices ---");
    console.log(`Note: Both matrices will be size ${rowsA} x ${colsA}`);

    const matrixB1 = readMatrix(rowsA, colsA, "1");
    const matrixB2 = readMatrix(rowsA, colsA, "2");

    console.log("\nMatrix 1:");
    printMatrix(matrixB1);
    console.log("\nMatrix 2:");
    printMatrix(matrixB2);

    const added = addMatrices(matrixB1, matrixB2);
    console.log("\nMatrix Sum (1 + 2):");
    printMatrix(added);

    // -------------------------------------------------------------------------
    // Executing Part C: Multiplication
    // -------------------------------------------------------------------------
    console.log("\n--- PART C: Multiply Two Matrices ---");
    console.log("Requirement: Matrix A (M x N) * Matrix B (N x P)");
    const m = readlineSync.questionInt("Enter M (rows of Matrix A): ");
    const n = readlineSync.questionInt("Enter N (cols of A / rows of B): ");
    const p = readlineSync.questionInt("Enter P (cols of Matrix B): ");

    const multA = readMatrix(m, n, "A");
    const multB = readMatrix(n, p, "B");

    console.log("\nMatrix A:");
    printMatrix(multA);
    console.log("\nMatrix B:");
    printMatrix(multB);

    const multiplied = multiplyMatrices(multA, multB);
    console.log("\nMatrix Product (A x B):");
    printMatrix(multiplied);
}

// Run the main program
main();