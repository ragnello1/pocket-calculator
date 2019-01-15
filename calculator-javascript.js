var x = "";
var numbers = [];
var sign;
var number = "";
var sum = "";
var returnedValue;
var dec = false;

function numberPress() {
  document.getElementById("result").innerHTML = x
  console.log(Number(x),numbers);
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

function decimal() {
  if (dec === false) {
  x+=".";
  numberPress();
  dec = true;}
}

function wipe() {
  x = "";
  numbers = [];
  signs = [];
  dec = false;
  console.log(x, numbers);
  document.getElementById("result").innerHTML = "0";
}

function plus() {
  document.getElementById("result").innerHTML = "+";
  x = Number(x);
  numbers.push(x);
  sign = "+";
  dec=false;
  console.log(sign, numbers);
  x = "";
}

function minus() {
  document.getElementById("result").innerHTML = "−";
  x = Number(x);
  numbers.push(x);
  sign = "−";
  dec=false;
  console.log(sign);
  x = "";
}

function mult() {
  document.getElementById("result").innerHTML = "×";
  x = Number(x);
  numbers.push(x);
  sign = "×";
  dec=false;
  console.log(sign);
  x = "";
}

function equals() {
  x = Number(x);
  numbers.push(x);
  if (sign === "+") {
    returnedValue = numbers[0] + numbers[1];
  }
  if (sign === "−") {
    returnedValue = numbers[0] - numbers[1];
  }
  if (sign === "×") {
    returnedValue = numbers[0] * numbers[1];
  }
  if (returnedValue = isNaN(returnedValue)) {
    returnedValue = "ERROR"
    document.getElementById("result").innerHTML = returnedValue;
    x="";
    dec=false;
  } else {
    document.getElementById("result").innerHTML = returnedValue;
    numbers[0] = returnedValue;
    numbers.pop();
    x="";
    dec=false;
    console.log(numbers);
  }
}
