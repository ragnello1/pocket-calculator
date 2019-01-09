var x = "";
var numbers = [];
var number = "";
function numberPress() {
  document.getElementById("result").innerHTML = x
  console.log(x,numbers);
}

function nine() {
  x+="9";
  numberPress();
}

function eight() {
  x+="8";
  numberPress();
}

function wipe() {
  x = "";
  numbers = [];
  console.log(x,numbers);
  document.getElementById("result").innerHTML = "0";
}

function plus() {
  document.getElementById("result").innerHTML = "+";
  x = Number(x);
  numbers.push(x);
  numbers.push("+")
  x = "";
}

function equals() {
  Number(x);
  numbers.push(x);
  for(i=0;i<numbers.length;i++) {
  let y = numbers[i];
  console.log(y);
  }
}
