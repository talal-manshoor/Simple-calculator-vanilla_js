let firstOperand = null;
let expression = null;
let inputScreen = "";

const screen = document.getElementById("result");
const numbers = document.getElementsByClassName("numerals");
const operations = document.getElementsByClassName("operator")


document.getElementById("clear").addEventListener("click",() => {
    screen.value = 0;
    let firstOperand = null;
    let expression = null;
    let inputScreen = "";
 })

 document.getElementById("equal").addEventListener("click",() => {
    screen.value = calculate(firstOperand,expression,inputScreen);
    inputScreen = "";
    firstOperand = null;
    expression = null;
 })

 const theme = document.getElementById("theme");
 theme.addEventListener("click" , () => {
    if(theme.innerHTML == "🌞"){
    document.body.style.backgroundColor = "white";
    document.getElementById("calculator").style.border = "3px solid black"
    document.getElementById("container").style.border = "3px solid black"
    theme.innerHTML = "🌜";
    }
    else{
        document.body.style.backgroundColor = "black";
        document.getElementById("calculator").style.border = "3px solid white"
        document.getElementById("container").style.border = "3px solid white"
        theme.innerHTML = "🌞"; 
    }
 })

 let AC =  document.getElementById("onoff").addEventListener("click", () => {
    if (screen.value === ""){
        screen.value = "0";
        AC.value = "ON" 
    }
    else{
    screen.value = "";
    AC.value = "OFF"
    }
 })

function calculate (op,ex,inSc){
    switch(ex){
        case '+' :
            return parseFloat(op) + parseFloat(inSc);
        case '/' :
            return parseFloat(op) / parseFloat(inSc);
        case '-' :
            return parseFloat(op) - parseFloat(inSc);
        case '*' :
            return parseFloat(op) * parseFloat(inSc);

    }
}

for (let i=0; i<numbers.length; ++i){
    numbers[i].addEventListener("click" , () => {
        inputScreen += numbers[i].value;
        screen.value = inputScreen;
    },false )
}
for (let i=0; i<operations.length; ++i){
    operations[i].addEventListener("click" , () => {
      expression = operations[i].value;
        firstOperand = inputScreen;
        inputScreen = "";
        screen.value = 0;    
    } ,false)
}