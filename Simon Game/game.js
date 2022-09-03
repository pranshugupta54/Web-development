// alert("test");
buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;


function nextSequence(){
    level ++;
    randomNumber = Math.round(Math.random() * 3);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log("Game Pattern: " + gamePattern);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
    // console.log("Sound:")
    $("#level-title").text("Level " + level);
    // console.log("Level is " + level);
    // checkAnswer(level);   
}

currentLevel = 0;
function checkAnswer(userInput){
    if(userInput == gamePattern){
        console.log("YES");
        userClickedPattern = [];
        setTimeout(nextSequence(),1000);
        // nextSequence();
    }
    else console.log("NO");


    // console.log("Game pattern :" + JSON.stringify(gamePattern));
    // console.log("User Pattern :" + userClickedPattern);
    // if(JSON.stringify(gamePattern) == JSON.stringify(userClickedPattern)){
    //     console.log("Same");
        // userClickedPattern = [];
        // setTimeout(nextSequence(),1000);
        // nextSequence();
    // }
    // else console.log("NO");
}

$(".btn").click(function(){
    // alert("Button clicked");
    userChosenColour = $(this).attr("id");
    console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    $("#" + userChosenColour).fadeOut(100).fadeIn(100);
    playSound(userChosenColour);
    console.log(userClickedPattern);
    console.log("User chosen color: " + userChosenColour);
    animatePress(userChosenColour);
    // setTimeout(nextSequence(),1000);
    checkAnswer(userChosenColour);
});

function animatePress(currentColour){
    $("." + currentColour).addClass("pressed");
    setTimeout(function(){
        $("." + currentColour).removeClass("pressed");
    }, 100);
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

$(document).on("keydown", function(event){
    console.log("OK");
    if (started == false)
    {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
  });