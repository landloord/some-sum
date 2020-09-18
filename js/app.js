const resetBtn = document.querySelector(".reset");
const submitBtn = document.querySelector(".submit");
const initial = document.querySelector(".initial");
const final = document.querySelector(".final");
const gap = document.querySelector(".interval");
const reverse = document.querySelector(".downwards");
const checkBox = document.querySelector(".checkbox");
const display = document.getElementsByClassName("results")[0];
let sum = 0;
let individual;
let start;
let interval;
let num;
let store = [];

//
// import logic from "./logic";
import nav from "./nav";

nav();
// setValue();

// function setValue() {
final.addEventListener("change", (e) => {
  if (e.target.value <= 0 || e.target.value == isNaN) {
    e.target.value = 100;
    num = parseFloat(e.target.value);
  } else {
    num = parseFloat(e.target.value);
  }
});
initial.addEventListener("change", (e) => {
  if (e.target.value <= 0 || e.target.value == isNaN) {
    e.target.value = 0;
    start = parseFloat(e.target.value);
  } else {
    start = parseFloat(e.target.value);
  }
});
gap.addEventListener("change", (e) => {
  if (e.target.value <= 0 || e.target.value == isNaN) {
    e.target.value = 1;
    interval = parseFloat(e.target.value);
  } else {
    interval = parseFloat(e.target.value);
  }
});
checkBox.addEventListener("click", () => {
  checkBox.children[0].checked = !checkBox.children[0].checked;
});
// }

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  function sumDown(i) {
    if (i <= start) {
      return "done";
    } else {
      sum += i;
      store.push(sum);
      return sumDown(i - interval);
    }
  }
  var sumUp = (i) => {
    if (start < i) {
      start += interval;
      sum += start;
      store.push(sum);
      return sumUp(i);
    } else {
      return "done";
    }
  };
  if (!checkBox.children[0].checked) {
    sumUp(num);
    console.log(store);
    store.forEach((item) => {
      individual += `<p>${item}</p>`;
    });
    display.innerHTML = individual;
    start = parseFloat(initial.value);
    interval = parseFloat(gap.value);
    num = parseFloat(final.value);
    sum = 0;
    store = [];
  } else {
    sumDown(num);
    store.forEach((item) => {
      individual += `<p>${item}</p>`;
    });
    display.innerHTML = individual;
    start = parseFloat(initial.value);
    interval = parseFloat(gap.value);
    num = parseFloat(final.value);
    sum = 0;
    store = [];
  }
});

resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  display.innerHTML = "";
  checkBox.children[0].checked = false;
  store = [];
});
