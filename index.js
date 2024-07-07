const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// Introduction to reduce()

console.log("Introduction to reduce()\n");

// Example 1: Summing Numbers
console.log("Example 1: Summing Numbers");

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log("Sum of numbers:", sum); // Output: 15
console.log("\n");

// Example 2: Counting Letter Occurrences
console.log("Example 2: Counting Letter Occurrences");

const letters = ['a', 'b', 'c', 'b', 'a', 'a'];

const letterCount = letters.reduce(function (countObj, currentLetter) {
  if (countObj[currentLetter]) {
    countObj[currentLetter]++;
  } else {
    countObj[currentLetter] = 1;
  }
  return countObj;
}, {});

console.log("Letter count:", letterCount); // Output: { a: 3, b: 2, c: 1 }
console.log("\n");

// Lab Exercise: Using reduce() to Aggregate Battery Batches
console.log("Lab Exercise: Using reduce() to Aggregate Battery Batches");

// Ensure batteryBatches is declared only once

const totalBatteries = batteryBatches.reduce(function (total, batch) {
  return total + batch;
}, 0);

console.log("Total batteries:", totalBatteries); // Output: 26
console.log("\n");

// Export totalBatteries for testing purposes
module.exports = {
  totalBatteries
};
