randomNum1 = Math.round(Math.random() * 5) + 1;
randomNum2 = Math.round(Math.random() * 5) + 1;
console.log(randomNum1);
console.log(randomNum2);

let DiceOne = document.querySelector(".img1");
let DiceTwo = document.querySelector(".img2");

console.log(DiceOne);
DiceOne.setAttribute('src', `images/dice${randomNum1}.png`);
DiceTwo.setAttribute('src', `images/dice${randomNum2}.png`);
console.log("Done");

text = document.querySelector(".container h1");
console.log(text);

if(randomNum1 > randomNum2){
    text.innerHTML = "Player 1 won";
}

if(randomNum2 > randomNum1){
    text.innerHTML = "Player 2 won";
}

else{ 
    text.innerHTML = "Draw";
}
