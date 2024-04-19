function saveToLocalStorage() {
    const inputValue = document.getElementById("inputValue").value;
    localStorage.setItem("userInput", inputValue);
    console.log("Value saved to Local Storage:", inputValue);
  }
  
  function retrieveFromLocalStorage() {
    const savedValue = localStorage.getItem("userInput");
    const displayResult = document.getElementById("displayResult");
  
    if (savedValue) {
      displayResult.textContent = "Value retrieved from Local Storage: " + savedValue;
    } else {
      displayResult.textContent = "No value found in Local Storage.";
    }
  }
  