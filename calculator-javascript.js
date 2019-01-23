var x = "";
var numb1;
var numb2;
var sign;
var extra = "0";
var z;
var w;
var dec = false;
var pressagain = false;
function equals() {
  numb2 = x
  if (sign === "-" && numb2 < 0) {
    sign = "+";
    numb2 = -1 * numb2;
  }
  let result = eval(numb1 + sign + numb2);
  w = Number(result);
  w = parseFloat((w).toFixed(2));
  if (result > 999999999 || result < 0.00001 && result > 0) {
      z = w.toExponential();
    } else {
      z = w;
    }
  document.getElementById("result").innerHTML = z;
  x = result;
  console.log(result, x, numb1, numb2);
}

function wipe() {
  x = "";
  numb1 = "";
  dec = false;
  w = "";
  z = "";
  result = "";
  sign = "";
  document.getElementById("result").innerHTML = 0;
}

function numberPress() {
  document.getElementById("result").innerHTML = x;
}

function decimal() {
  if (dec === false) {
    x+=".";
    numberPress();
    dec = true;}
}

function plus() {
  numb1 = x;
  x = "";
  sign = "+";
  document.getElementById("result").innerHTML = sign;
  console.log(numb1);
  dec = false;
}

function minus() {
  numb1 = x;
  x = "";
  sign = "-";
  document.getElementById("result").innerHTML = sign;
  console.log(numb1);
  dec = false;
}

function mult() {
  numb1 = x;
  x = "";
  sign = "*";
  document.getElementById("result").innerHTML = sign;
  console.log(numb1);
  dec = false;
}

function divide() {
  numb1 = x;
  x = "";
  sign = "/";
  document.getElementById("result").innerHTML = sign;
  console.log(numb1);
  dec = false;
}

function neg() {
  x = Number(x * -1);
  x = String(x);
  console.log(x)
  numberPress();
}

function perc() {
  x = (x / 100);
  x = String(x);
  console.log(x);
  numberPress();
}



//Numbers


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
