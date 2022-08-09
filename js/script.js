////// business logic
function add(number1, number2) {
    return number1 + number2;
  }

// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
    
window.alert("The addition of your numbers equals " + add(number1, number2));

////// business logic
function subtract(number3, number4) {
    return number3 - number4;
  }

  // user interface logic 
const number3 = parseInt(prompt("Enter a number:"));
const number4 = parseInt(prompt("Enter another number:"));
    
window.alert("The subtraction of your numbers equals " + subtract(number3, number4));

////// business logic

/* function multiply(number1, number2) {
    return number1 * number2;
  }

function divide(number1, number2) {
    return number1 / number2;
  }
  


  window.alert(subtract(number2, number3));
  window.alert(multiply(number1, number2));
  window.alert(divide(number1, number2)); */