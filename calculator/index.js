value1 = 0;
value2 = 0;

// decimal = '.';
// multiply = '*';
// addition = '+';
// subtraction = '-';

let buttons = document.querySelectorAll("button");
let resultShown = document.querySelector("#outputResult");
let finalResult = document.querySelector("#finalResult");
// console.log(resultShown.innerHTML);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", clicked);
    
}
num1 = 0;
function clicked(btnClicked){

    btnContent = btnClicked.target.value
    console.log(btnContent);
    if(btnContent === 'equal'){
        finalResult.innerHTML = num1;
        resultShown.innerHTML = num1;
        console.log(`Num1: ${num1}.`)
        console.log(`Value1: ${value1}.`)
    }
    if(btnContent === 'multiply' || btnContent === 'addition' || btnContent === 'subtraction'){
        operator = btnContent;
        // num1 += value1;
        console.log(`num1 = ${num1}, value1 = ${value1}, btnContent = ${btnContent}.`);
        num1 = calc(value1,num1,btnContent);
        console.log("---------");
        console.log("button " + btnContent);
        console.log("---------");
        console.log("num1 =" + num1);
        console.log("value1 =" + value1);

        console.log("---------");
        // resultShown.innerHTML = btnContent;
        finalResult.innerHTML = num1;
        finalResult.innerHTML = num1;

        console.log("---------");
        value1 = 0;
       // btnContent(num1,num2);
    }
    else if(btnContent == "Clear All"){
        console.log("Clear");
        value1 = 0;
    }
    else{
        value1 = value1*10 + Number(btnContent);
    }
    console.log(value1);
    resultShown.innerHTML = value1;
    finalResult.innerHTML = num1;
}

function multiply(num1,num2){
    return num1*num2;
}

function addition(num1,num2){
    return num1+num2;
}

function subtraction(num1,num2){
    return num1-num2;
}

function divide(num1,num2){
    return num1/num2;
}


function calc(x,y,o){
    if(o == "addition"){
        resultShown.innerHTML = '+';
        return addition(x,y);
    }
    if(o == "multiply"){
        resultShown.innerHTML = '*';
        return multiply(x,y);
    }
    if(o == "subtraction"){
        resultShown.innerHTML = '-';
        return subtraction(x,y);
    }
    if(o == "divide"){
        resultShown.innerHTML = '/';
        return divide(x,y);
    }
    
}