

var buttonColours=["red","blue","green","yellow"];
 $("h1").css("color","yellow");
 var gamePattern=[];
 var userClickedPattern=[];
var level=0;
var started=false;

$(document).keypress(function()
	{
		if(!started){
		level=0;
		newgame();
		started=true;
	}
	});



function newgame(){
	userClickedPattern=[];
	level++;
$("h1").text("Level "+level);
 var randomnumber=Math.random();
randomnumber=Math.floor(randomnumber*4);
var randomChosenColour=buttonColours[randomnumber];
gamePattern.push(randomChosenColour);
$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(randomChosenColour);
}



$(".btn").on("click",function()
{
userChosenColour=$(this).attr("id");
playsound(userChosenColour);
userClickedPattern.push(userChosenColour);
animatePress(userChosenColour);
//console.log(userClickedPattern);
//if(userClickedPattern.length===gamePattern.length)
checkAnswer((userClickedPattern.length)-1);
});


function playsound(randomChosenColour)
{
	var audio = new Audio("sounds/"+randomChosenColour+".mp3");
audio.play();
}


function animatePress(currentColour)
{
$("."+currentColour).addClass("pressed");
var delayInMilliseconds = 100; 
setTimeout(function() {
  $("."+currentColour).removeClass("pressed");
}, delayInMilliseconds);

}



function checkAnswer(currentLevel)
{
	// console.log("this is what user clicked");
	// console.log(userClickedPattern);
	// console.log("this is what the pattern is");
	// console.log(gamePattern);
if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
	{
		if(userClickedPattern.length === gamePattern.length){
		console.log("succcesss");
		setTimeout(newgame, 1000);
		// userClickedPattern=[];
	}
	}
else
	{
		console.log("wrongggg");
    var au = new Audio("sounds/wrong"+".mp3");
    au.play();
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over")},200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startover();
}
}


function startover()
{
	level=0;
	gamePattern=[];
	started=false;
}