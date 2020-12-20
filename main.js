let numbers = [];
let result = 0;
let tempString = "";
let strNumber = "";
let clicked = false;
let keys = 1;

const screen = document.getElementById("screen");
const buttons = document.getElementsByClassName("actionBtn");
const backspace = document.getElementById("backspace");
const equals = document.querySelector(".equals");
const clear = document.getElementById("clear");
const operatorButtons = document.getElementsByClassName("operator-btn");

// window.addEventListener("keydown", down, false);

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    if (keys <= 12) {
      if (clicked) {
        screen.textContent = "";
        numbers = [];
        clicked = false;
      }

      if (screen.textContent == "0") {
        screen.textContent = "";
      }
      screen.textContent = screen.textContent + button.value;
      numbers.push(button.value);
      keys++;
    }
  });
});

Array.from(operatorButtons).forEach((button) => {
  button.addEventListener("click", () => {
    if (keys <= 12 && !clicked) {
      strNumber = numbers.join("");
      if (
        strNumber.includes("+") ||
        strNumber.includes("-") ||
        strNumber.includes("*") ||
        strNumber.includes("/") ||
        strNumber.includes("^") ||
        strNumber.includes("%")
      ) {
        result = parseInput(numbers.join(""));

        screen.textContent = result;
        numbers = [];
        numbers.push(result);
      }

      if (screen.textContent == "0") {
        screen.textContent = "";
      }
      screen.textContent = screen.textContent + button.value;
      numbers.push(button.value);
      keys++;
    }
  });
});

backspace.addEventListener("click", () => {
  tempString = screen.textContent.substring(0, screen.textContent.length - 1);
  screen.textContent = tempString;
  numbers.pop();
  if (screen.textContent === "") {
    screen.textContent = "0";
  }
  keys--;
});

equals.addEventListener("click", () => {
  result = parseInput(numbers.join(""));

  screen.textContent = result;
  keys = Array.from(result).length;
  numbers = [];
  numbers.push(result);
  clicked = true;
});

clear.addEventListener("click", () => {
  screen.textContent = "0";
  numbers = [];
  keys = 1;
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
  } else if (str.includes("%")) {
    output = percent(str);
    return output;
  } else if (str.includes("^")) {
    output = power(str);
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
  return (
    Math.round((Number(substr[0]) / Number(substr[1]) + Number.EPSILON) * 100) /
    100
  );
}

function percent(str) {
  substr = str.split("%");
  return Number(substr[0]) / 100;
}

function power(str) {
  substr = str.split("^");
  return Math.pow(Number(substr[0]), Number(substr[1]));
}
