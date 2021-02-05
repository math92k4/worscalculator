"use strict";

let num1 = null;
let num2 = null;
let result = null;

startUp();

function startUp() {
  document.querySelector("#calculate").addEventListener("click", readNumbers);
  document.querySelector("#clear").addEventListener("click", clearResult);
}

function readNumbers() {
  const str1 = document.querySelector("#firstnumber").value;
  const str2 = document.querySelector("#secondnumber").value;
  num1 = Number(str1);
  num2 = Number(str2);

  calcNumbers();
}

function calcNumbers() {
  const option = document.querySelector("#operator").value;

  if (option === "add") {
    result = num1 + num2;
  } else if (option === "sub") {
    result = num1 - num2;
  } else if (option === "mul") {
    result = num1 * num2;
  } else {
    result = num1 / num2;
  }

  roundUp();
}

function roundUp() {
  const doRound = document.querySelector("#doround").checked;
  const decimals = document.querySelector("#decimals").value;

  if (doRound === true) {
    //https://www.w3schools.com/jsref/jsref_tofixed.asp
    result = result.toFixed(decimals);
  }
  showResult();
}

function showResult() {
  document.querySelector("#firstnumber").value = null;
  document.querySelector("#secondnumber").value = null;

  const container = document.querySelector("#results");
  const createLi = document.createElement("li");
  createLi.innerHTML = result;
  container.appendChild(createLi);
  container.scrollTo(1, 1000000000);
}

function clearResult() {
  document.querySelector("#results").innerHTML =
    "<li>0</li><li>0</li><li>0</li><li>0</li>";
}
