var x = "";
var numbers = [];
var signs = [];
var number = "";
var sum = "";


function numberPress() {
  document.getElementById("result").innerHTML = x
  console.log(Number(x),numbers,signs);
}

function nine() {
  x+="9";
  numberPress();
}

function eight() {
  x+="8";
  numberPress();
}

function seven() {
  x+="7";
  numberPress();
}

function six() {
  x+="6";
  numberPress();
}

function five() {
  x+="5";
  numberPress();
}

function four() {
  x+="4";
  numberPress();
}

function three() {
  x+="3";
  numberPress();
}

function two() {
  x+="2";
  numberPress();
}

function one() {
  x+="1";
  numberPress();
}

function zero() {
  x+="0";
  numberPress();
}

function wipe() {
  x = "";
  numbers = [];
  signs = [];
  console.log(x, numbers, signs);
  document.getElementById("result").innerHTML = "0";
}

function plus() {
  document.getElementById("result").innerHTML = "+";
  x = Number(x);
  numbers.push(x);
  signs.push("+");
  x = "";
}

function equals() {
  x = Number(x);
  numbers.push(x);
  for(i=0;i<numbers.length;i++) {
    let y = numbers[i];
    let z = signs[i];
    console.log(y,z);
  }
}
