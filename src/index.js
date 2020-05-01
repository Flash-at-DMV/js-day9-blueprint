// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

let current_number = "";
let prev_number = 0;
let operator = "";

const monitor = document.querySelector("#monitor");

function calc() {
  if (current_number === "") {
    return;
  }

  if (operator === "+") {
    prev_number += current_number;
  } else if (operator === "-") {
    prev_number -= current_number;
  } else if (operator === "*") {
    prev_number *= current_number;
  } else if (operator === "/") {
    if (current_number === 0) {
      monitor.innerHTML = "Can't divide by Zero";
      return;
    }
    prev_number /= current_number;
  } else if (operator === "") {
    prev_number = current_number;
  }
  current_number = "";

  monitor.innerHTML = prev_number;
}

document.addEventListener(
  "click",
  function(e) {
    e.preventDefault();

    if (e.target.id === "monitor") {
      return;
    }

    const btn = e.target.innerHTML;

    if (
      btn === "+" ||
      btn === "-" ||
      btn === "*" ||
      btn === "/" ||
      btn === "="
    ) {
      calc();
      operator = btn === "=" ? "" : btn;
    } else if (btn === "C") {
      prev_number = 0;
      current_number = 0;
      operator = "";
      monitor.innerHTML = current_number;
    } else {
      const num = parseInt(btn);
      current_number = current_number === "" ? 0 : current_number;
      current_number = current_number * 10 + num;
      monitor.innerHTML = current_number;
    }
  },
  false
);
