let inputField = document.getElementById("input-value");
let inputValue = 0;

inputField.addEventListener("keydown", function (event) {
  let keyCode = event.keyCode;

  console.log(keyCode);
  if (
    !(
      (keyCode >= 48 && keyCode <= 57) ||
      (keyCode >= 96 && keyCode <= 105)
    )
  ) {
    event.preventDefault();
  }
});

function appendToInput(value) {
  inputField.value += value;

  inputValue += value;

  if (value === "+" || value === "-" || value === "*" || value === "/") {
    inputField.value = "";
    inputField.placeholder = "";
  }
}

function calculate() {
  let expression = inputValue;
  console.log(expression);

  try {
    let result = eval(expression);
    console.log(result);
    inputField.value = result;
    inputValue = result;
  } catch (error) {
    console.log("Error in expression");
    inputField.value = "Error";
  }
}

function clearField() {
  inputField.value = "";
  inputField.placeholder = 0;
  inputValue = 0;
  console.log("Cleared input");
}