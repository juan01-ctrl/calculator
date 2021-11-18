const buttons = [...document.querySelectorAll(".calc-item")];
const display = document.querySelector(".calc-display");

buttons.forEach((el) => {
  el.addEventListener("click", (e) => {
    calculadora(el.innerHTML);
  });
});
let init = false;

const calculadora = (element) => {
  if (element == "=") {
    calculate();
  } else if (element == "DEL") {
    if (result === false) {
      let newDisplay = display.innerHTML.substring(
        0,
        display.innerHTML.length - 1
      );
      if (display.innerHTML !== "0" && display.innerHTML.length !== 1) {
        display.innerHTML = newDisplay;
      } else {
        display.innerHTML = "0";
      }
      init = false
    }
  } else if (element == "AC") {
    display.innerHTML = "0";
    result = false;
    init = false
  } else {
    update(element);
  }
};

let result = false;
const calculate = () => {
    let countCalc =  display.innerHTML 
  display.innerHTML = eval(countCalc.split("x").join("*"));
  result = true;
  init = false
};

const update = (element) => {
  let lastCharacter = display.innerHTML.substring(display.innerHTML.length - 1);
  console.log(parseInt(element));
  let resetSign = display.innerHTML.substring(0, display.innerHTML.length - 1);

  if (!result) {
    if (display.innerHTML === "0" && init == false) {
      display.innerHTML = "";
      display.innerHTML += element;
      init = true
    } else if (isNaN(parseInt(lastCharacter)) && isNaN(parseInt(element))) {
      display.innerHTML = resetSign + element;
    } else if(init == true && display.innerHTML == "0" && element == "0"){
      display.innerHTML = display.innerHTML;
    }else{
       init = false
      display.innerHTML += element;

    }
 
  } else {
    if (!isNaN(parseInt(element))) {
      display.innerHTML = element;
      result = false;
      init = true;
    } else {
      display.innerHTML += element;
      result = false;
    }
  }
};

window.addEventListener("keydown", (e) => {
  if (!isNaN(parseInt(e.key))) {
    calculadora(e.key);
  } else if (e.key == "Enter") {
    calculadora("=");
  } else if (e.key == "Backspace") {
    calculadora("DEL");
  } else if (e.key == "+") {
    calculadora("+");
  } else if (e.key == "-") {
    calculadora("-");
  } else if (e.key == "*") {
    calculadora("*");
  } else if (e.key == "/") {
    calculadora("/");
  } else if (e.key == ".") {
    calculadora(".");
  }
});
