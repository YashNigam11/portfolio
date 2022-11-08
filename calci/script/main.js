var str = "",c,a,b;

let screen = document.querySelector("#screen");
let values = document.querySelectorAll(".value");
values.forEach((value) => {
  value.addEventListener("click", () => {
    let val = value.value;
    screen.value += val;
    str += val;
    // console.log(val);
  });
});

function operator(val) {
  c = val;
  a = str;
  screen.value += val;
}
let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  screen.value = "";
});
function bracket1() {
  screen.value += "(";
}
function bracket2() {
  screen.value += ")";
}

function result() {
  let ans = 0;
  b = str.slice(a.length);
  switch (c) {
    case "+":
      ans = +a + +b ;
      break;
    case "-":
      ans = a - b;
      break;
    case "*":
      ans = a * b;
      break;
    case "/":
      ans = a / b;
      break;
  }
  screen.value = ans;
  str = "";
}
