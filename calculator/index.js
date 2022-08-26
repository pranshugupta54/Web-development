// Setting values to Null
value1 = 0; // Shows partial result 
num1 = 0; // Shows final result 
operator = 'none'; // Setting it to none for first time and to store the first operation in first operation

// Fetching from HTML file which needs an edit on result

let buttons = document.querySelectorAll("button"); // Getting all buttons
let resultShown = document.querySelector("#outputResult"); // 1st line of output window
let finalResult = document.querySelector("#finalResult"); // 2nd line which shows actual result


// Adding event listener for triggering function
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", clicked);
}

// Defining Function
function clicked(btnClicked){
    btnContent = btnClicked.target.value // Putting value of the button. Eg: 1,2,3,+,- etc.
    // console.log(btnContent);
    if(btnContent === 'equal'){ //To evaluate the result when "=" button is pressed.
        num1 = calc(value1,num1,operator); // Sends request to Calc function
        finalResult.innerHTML = ""; // Removing the 2nd line result
        resultShown.innerHTML = num1; // Adding final answer to the result 
        resultShown.classList.add("fs-1"); // Increasing the size of result
        value1 = num1; // Putting num1 in value1 so that calculator works even after evaluating result from the answer instead of 0.
        num1 = 0; // Final result is null now
        operator = 'none'; // Restting operator to start
        return;
    }

    // Operation button clicked
    else if(btnContent === '*' || btnContent === '+' || btnContent === '-' || btnContent === '/'){
        num1 = calc(value1,num1,operator); // Sends request to Calc function
        resultShown.innerHTML = btnContent; // Shows +,-,/,* on 1st line 
        finalResult.innerHTML = num1; // Shows partial result till now
        value1 = 0; // To input new value
        operator = btnContent; // So that first operator works after 2nd input
        return;
    }
    else if(btnContent == "Clear All"){ // Clearing and starting as fresh
        value1 = 0;
        num1 = 0;
    }
    else{ // Normal input from 0 to 9
        value1 = value1*10 + Number(btnContent);
    }
    resultShown.innerHTML = value1; 
    finalResult.innerHTML = num1;
}


// Functions ---->

function multiply(num1,num2){
    console.log("Multiplication result = " + num1*num2);
    return num1*num2;
}

function addition(num1,num2){
    return num1+num2;
}

function subtraction(num1,num2){
    return num2-num1;
}

function divide(num1,num2){
    return num2/num1;
}


function calc(x,y,o){
    if(o == "+"){
        resultShown.innerHTML = '+';
        return addition(x,y);
    }
    if(o == "*"){
        resultShown.innerHTML = '*';
        return multiply(x,y);
    }
    if(o == "-"){
        resultShown.innerHTML = '-';
        return subtraction(x,y);
    }
    if(o == "/"){
        resultShown.innerHTML = '/';
        return divide(x,y);
    }
    if(o == "none"){
        return x;
    }
}