let numbers = [];
let result = 0;
let tempString = "";

const screen = document.getElementById("screen");
const buttons = document.getElementsByClassName("actionBtn");
const backspace = document.getElementById("backspace");
const equals = document.getElementById("equals");

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
