let numbers = [];
let result = 0;
let tempString = "";

const screen = document.getElementById("screen");
const buttons = document.getElementsByClassName("actionBtn");
const backspace = document.getElementById("backspace");
const equals = document.querySelector(".equals");
const clear = document.getElementById("clear");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    if (screen.textContent == "0") {
      screen.textContent = "";
    }
    screen.textContent = screen.textContent + button.value;
    numbers.push(button.value);
  });
});

backspace.addEventListener("click", () => {
  tempString = screen.textContent.substring(0, screen.textContent.length - 1);
  screen.textContent = tempString;
  numbers.pop();
});

equals.addEventListener("click", () => {
  result = parseInput(numbers.join(""));

  screen.textContent = result;
  numbers = [];
  numbers.push(result);
});

function parseInput(str) {
  if (str.includes("+")) {
    output = add(str);
    return output;
  } else if (str.includes("-")) {
    output = sub(str);
    return output;
  } else if (str.includes("*")) {
    output = mult(str);
    return output;
  } else if (str.includes("/")) {
    output = div(str);
    return output;
  }
}

function add(str) {
  substr = str.split("+");
  return Number(substr[0]) + Number(substr[1]);
}

function sub(str) {
  substr = str.split("-");
  return Number(substr[0]) - Number(substr[1]);
}

function mult(str) {
  substr = str.split("*");
  return Number(substr[0]) * Number(substr[1]);
}

function div(str) {
  substr = str.split("/");
  if (substr[1] == "0") {
    return "Invalid";
  }
  return Number(substr[0]) / Number(substr[1]);
}
