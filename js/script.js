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
function multiply(number5, number6) {
    return number5 * number6;
  }

 // user interface logic 
const number5 = parseInt(prompt("Enter a number:"));
const number6 = parseInt(prompt("Enter another number:")); 

window.alert("The multiplication of your numbers equals " +multiply(number5, number6));

////// business logic
function divide(number7, number8) {
    return number7 / number8;
  }
  
// user interface logic 
const number7 = parseInt(prompt("Enter a number:"));
const number8 = parseInt(prompt("Enter another number:"));

  window.alert("The division of your numbers equals " +divide(number7, number8));
