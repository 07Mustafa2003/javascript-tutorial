// Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Function to check the user's guess
function checkGuess() {
  const userGuessInput = document.getElementById("userGuess");
  const resultMessage = document.getElementById("resultMessage");

  // Get the user's guess from the input field
  const userGuess = parseInt(userGuessInput.value);

  // Check if the guess is correct
  if (userGuess === secretNumber) {
    resultMessage.textContent = "Congratulations! You guessed the correct number!";
    resultMessage.style.backgroundColor = "green";
    
  } else {
    resultMessage.textContent = `Sorry, the correct number was ${secretNumber}. Try again!`;
    resultMessage.style.backgroundColor = "red";
  }

  // Clear the input field for the next guess
  userGuessInput.value = "";

  // Generate a new random number for the next round
  generateNewSecretNumber();
}

// Function to generate a new random number
function generateNewSecretNumber() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
}
