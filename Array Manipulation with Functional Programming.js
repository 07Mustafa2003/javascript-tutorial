// Initial array
const numbers = [1, 2, 3, 4, 5];

// Function to square each number in the array
const squareNumbers = (arr) => arr.map((num) => num ** 2);

// Function to filter even numbers from the array
const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

// Function to calculate the sum of the array
const calculateSum = (arr) => arr.reduce((acc, num) => acc + num, 0);

// Display the original and modified arrays
function displayArrays() {
  const originalArrayElement = document.getElementById("originalArray");
  const modifiedArrayElement = document.getElementById("modifiedArray");

  originalArrayElement.textContent = numbers.join(", ");
  
  const squaredArray = squareNumbers(numbers);
  const evenNumbers = filterEvenNumbers(squaredArray);
  const sum = calculateSum(evenNumbers);

  modifiedArrayElement.textContent = evenNumbers.join(", ");
  console.log("Sum of even squared numbers:", sum);
}

// Call the displayArrays function when the page loads
displayArrays();
