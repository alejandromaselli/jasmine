function calculate(inputValue) {
  const expression = "/+|-|*|//";
  const numbers = inputValue.split(/\+|\-|\*|\//);

  const numberA = parseInt(numbers[0]);
  const numberB = parseInt(numbers[1]);

  const operation = inputValue.match(/\+|\-|\*|\//);

  const calculator = new Calculator();
  calculator.add(numberA);

  let result;
  switch (operation[0]) {
    case "+":
      result = calculator.add(numberB);
      break;
    case "-":
      result = calculator.substract(numberB);
      break;
    case "*":
      result = calculator.multiply(numberB);
      break;
    case "/":
      result = calculator.divide(numberB);
      break;
    default:
  }

  updateResult(result);
}
function updateResult(result) {
  const element = document.getElementById("result");
  if (element) element.innerHTML = result;
}
