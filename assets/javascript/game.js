//Global Variables
//___________________________________________________________________________
	
//available characters as individual objects
var watt = {
	name: "JJ Watt",
	health: 120,
	attack: 3,
	counter: 12
};

var rodgers = {
	name: "Aaron Rodgers",
	health: 90,
	attack: 10,
	counter: 5
};

var bryant = {
	name: "Dez Bryant",
	health: 100,
	attack: 6,
	counter: 8
};

var charles = {
	name: "Jamaal Charles",
	health: 110,
	attack: 4,
	counter: 10
};



var opponentsDefeated = 0;
var playerChosen = false;
var opponentChosen = false;
var userPlayer;
var currentOpponent;
var startingValue;
var userImage;
var opponentImage;




//Functions
//_____________________________________________________________________________
function reset(){
	opponentsDefeated = 0;
	playerChosen = false;
	opponentChosen = false;
	userPlayer;
	currentOpponent;
	startingValue;
	$("#adversary-box").empty();
	$("#player-box").empty();
	$(".info-box").empty();
	$("#opponents-box").empty();
}


//General Code
//______________________________________________________________________________

$(".player-pic").click(function(event)
{
	if (playerChosen === false && opponentChosen === false)
	{
		//move selected player to his position and move the group of opponents to their designated position.  The playerChosen variable should make this action happen only once  
		$(this).appendTo("#player-box").removeClass("opponents").addClass("player");
		$(".opponents").appendTo("#opponents-box");
		playerChosen = true;
		userImage = (this);

		//assign selected player (object) to the userPlayer variable
		if ($(this).hasClass("watt"))
		{
			userPlayer = watt;
		};
		if ($(this).hasClass("rodgers"))
		{
			userPlayer = rodgers;
		};
		if ($(this).hasClass("bryant"))
		{
			userPlayer = bryant;
		};
		if ($(this).hasClass("charles"))
		{
			userPlayer = charles;
		};
		
		$("#info-box").html(userPlayer.name + "<br />" + " vs ");
		$("#player-box").append("Health: " + userPlayer.health);
		$(".notifications").text("Select an opponent to attack");
		startingValue = userPlayer.attack;
	}

//once a player is selected, this will allow an opponent to be chosen from the remaining three characters
else if (playerChosen === true && opponentChosen === false)
{
	$(this).appendTo("#adversary-box");
	opponentChosen = true;
	opponentImage = (this);
	if ($(this).hasClass("watt"))
	{
		currentOpponent = watt;
	};
	if ($(this).hasClass("rodgers"))
	{
		currentOpponent = rodgers;
	};
	if ($(this).hasClass("bryant"))
	{
		currentOpponent = bryant;
	};
	if ($(this).hasClass("charles"))
	{
		currentOpponent = charles;
	};
	$("#info-box").html(userPlayer.name + "<br />" + " vs " + "<br />" + currentOpponent.name);
	$("#adversary-box").append("Health: " + currentOpponent.health);
	$(".notifications").text("");
}
});


//this will be the actions taken when the attack button is pressed
$(".attack-button").click(function(e)
{

if (currentOpponent.health > 0)
{
$(".notifications").text("You attacked " + currentOpponent.name + " for " + userPlayer.attack + " damage points.  He counterattacked for " + currentOpponent.counter + " damage points.");
currentOpponent.health = currentOpponent.health - userPlayer.attack;
userPlayer.health = userPlayer.health - currentOpponent.counter;
userPlayer.attack = userPlayer.attack + startingValue;
$("#player-box").html(userImage).append("Health: " + userPlayer.health);
$("#adversary-box").html(opponentImage).append("Health: " + currentOpponent.health);

//check to see if the opponent has been defeated
	if (currentOpponent.health <= 0)
	{
		$(".notifications").text("You have defeated " + currentOpponent.name + "! Pick another opponent to continue.");
		opponentsDefeated = opponentsDefeated + 1;
		opponentChosen = false;
		$("#adversary-box").empty();
	}

//check to see if all the opponents have been defeated - if so, reset the gamespace	
	if (opponentsDefeated === 3)
	{
		$(".notifications").text("Congratulations! You Win");
		$("#info-box").text("");
		$(".player").animate({height: '500px'});
	}

//check to see if the user player has been defeated
	if(userPlayer.health <= 0)
	{
		$(".notifications").text("You have been defeated, better luck next time.");
		reset();
	}		
		
}	

});

	





