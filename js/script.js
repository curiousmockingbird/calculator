// business logic
function add(number1, number2) {
    return number1 + number2;
  }
  
  // user interface logic 
  const number1 = prompt("Enter a number:");
  const number2 = prompt("Enter another number:");
  
  window.alert(add(number1, number2));