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
 document.getElementById("decimal").addEventListener("click",() => {
    inputScreen = ".";
    screen.value = inputScreen;
 })
 document.getElementById("equal").addEventListener("click",() => {
    screen.value = calculate(firstOperand,expression,inputScreen);
    inputScreen = "";
    firstOperand = null;
    expression = null;
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
        inputScreen += this.value;
        screen.value = inputScreen;
    },false )
}
for (let i=0; i<operations.length; ++i){
    operations[i].addEventListener("click" , () => {
        expression = this.value;
        firstOperand = inputScreen;
        inputScreen = "";
        screen.value = 0;    
    } ,false)
}