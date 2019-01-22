var x = "";
var number = "";
var dec = false;
var y = "";
var z = "";
var numbers = [];
var sign;
function numberPress() {
  document.getElementById("result").innerHTML = y;
  console.log(y, x);
}

function nine() {
  x+="9";
  y+="9";
  numberPress();
}

function eight() {
  x+="8";
  y+="8";
  numberPress();
}

function seven() {
  x+="7";
  y+="7";
  numberPress();
}

function six() {
  x+="6";
  y+="6";
  numberPress();
}

function five() {
  x+="5";
  y+="5";
  numberPress();
}

function four() {
  x+="4";
  y+="4";
  numberPress();
}

function three() {
  x+="3";
  y+="3";
  numberPress();
}

function two() {
  x+="2";
  y+="2";
  numberPress();
}

function one() {
  x+="1";
  y+="1";
  numberPress();
}

function zero() {
  x+="0";
  y+="0";
  numberPress();
}

function decimal() {
  if (dec === false) {
  x+=".";
  y+=".";
  numberPress();
  dec = true;}
}

function wipe() {
  x = "";
  y = "";
  dec = false;
  console.log(y,x);
  document.getElementById("result").innerHTML = "0";
}

function plus() {
  document.getElementById("result").innerHTML = "+";
  numbers.push(y);
  x += "+";
  sign = "plus";
  dec=false;
  y = "";
}

function minus() {
  document.getElementById("result").innerHTML = "−";
  numbers.push(y);
  x += "-";
  dec=false;
  sign = "minus";
  y = "";
}

function mult() {
  document.getElementById("result").innerHTML = "×";
  numbers.push(y);
  x += "*";
  dec=false;
  sign = "multiply";
  y = "";
}

function divide() {
  document.getElementById("result").innerHTML = "÷";
  numbers.push(y);
  x += "/";
  dec=false;
  sign = "divide";
  y = "";
}

function neg() {
  if (y !== "0") {
    y = y * -1;
    x = x * -1;
    document.getElementById("result").innerHTML = y;
  }
}

function perc() {

}

function equals() {
  numbers.push(y);
  var numb = eval(x);
  x = numb;
  if (x > 999999999 || x < 0.999999999 && x > 0) {
    x = numb;
    z = x.toExponential();
  } else {
    z = x;
  }
  console.log(numb, z, x, y);
  document.getElementById("result").innerHTML = z;
  if (sign === "plus") {
    x += Number(y);
  }
  if (sign === "minus") {
    x -= Number(y);
  }
  if (sign === "multiply") {
    x *= Number(y);
  }
  if (sign === "divide") {
    x /= Number(y);
  }
  z="";
}
