// Step 1: Create arrays and combine using spread operator
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const numbers = [...numbers1, ...numbers2];
console.log("Combined numbers array:", numbers);

// Step 2: Define square function
const square = (number) => number * number;

// Step 3: Map to create squares array
const squares = numbers.map(square);
console.log("Squares array:", squares);

// Step 4: Define isEven function
const isEven = (number) => number % 2 === 0;

// Step 5: Filter to create evenSquares array
const evenSquares = squares.filter(isEven);
console.log("Even squares array:", evenSquares);

// Step 6: Destructuring assignment to extract first and second elements
const [firstEvenSquare, secondEvenSquare] = evenSquares;

// Step 7: Logging using template literal
console.log(`
Original numbers array: ${numbers}
Squares array: ${squares}
Even squares array: ${evenSquares}
Extracted even squares: ${firstEvenSquare}, ${secondEvenSquare}
`);
