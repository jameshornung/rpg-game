//Global Variables
//___________________________________________________________________________
	
//available characters as an array
// var players = [
// 	{
// 	name: "JJ Watt",
// 	health: 100,
// 	attack: 5,
// 	counter: 15
// 	userPlayer: false
// 	currentOpponent: false
// 	},

// 	{
// 	name: "Aaron Rodgers",
// 	health: 100,
// 	attack: 5,
// 	counter: 15,
// 	userPlayer: false,
// 	currentOpponent: false
// 	},

// 	{
// 	name: "Dez Bryant",
// 	health: 100,
// 	attack: 5,
// 	counter: 15,
// 	userPlayer: false,
// 	currentOpponent: false
// 	},

// 	{
// 	name: "Jamaal Charles",
// 	health: 100,
// 	attack: 5,
// 	counter: 15,
// 	userPlayer: false,
// 	currentOpponent: false
// 	}];

//available characters as individual objects
var watt = {
	name: "JJ Watt",
	health: 100,
	attack: 5,
	counter: 15
};

var rodgers = {
	name: "Aaron Rodgers",
	health: 100,
	attack: 5,
	counter: 15
};

var bryant = {
	name: "Dez Bryant",
	health: 100,
	attack: 5,
	counter: 15
};

var charles = {
	name: "Jamaal Charles",
	health: 100,
	attack: 5,
	counter: 15
};


var opponentsDefeated = 0;
var playerChosen = false;
var opponentChosen = false;
var userPlayer;
var currentOpponent;




//Functions
//_____________________________________________________________________________



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
			
			$("#info-box").text(userPlayer.name + " vs ");
			$("#player-box").append("Health: " + userPlayer.health);
		}

		//once a player is selected, this will allow an opponent to be chosen from the remaining three characters
		else if (playerChosen === true && opponentChosen === false)
		{
			$(this).appendTo("#adversary-box");
			opponentChosen = true;
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
			$("#info-box").text(userPlayer.name + " vs " + currentOpponent.name);
		}
	});


	//this will be the actions taken when the attack button is pressed
	// $(".attack-button").click(function(e)
	






