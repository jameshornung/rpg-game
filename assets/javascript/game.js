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


var opponentsDefeated = 0;
var playerChosen = false;
var opponentChosen = false;
var userPlayer;




//Functions
//_____________________________________________________________________________



//General Code
//______________________________________________________________________________

	$(".player-pic").click(function(event)
	{
		if (playerChosen === false && opponentChosen === false)
		{
			//move players to their designated positions 
			$(this).appendTo("#player-box").removeClass("opponents").addClass("player");
			$(".opponents").appendTo("#opponents-box");
			playerChosen = true;
			//assign selected player (object) to the userplayer variable
		// 	if ($(this).hasClass("watt"))
		// 	{
		// 		userPlayer = watt;
		// 	};
		// 	if ($(this).hasClass("rodgers"))
		// 	{
		// 		userPlayer = rodgers;
		// 	};
		// 	if ($(this).hasClass("bryant"))
		// 	{
		// 		userPlayer = bryant;
		// 	};
		// 	if ($(this).hasClass("charles"))
		// 	{
		// 		userPlayer = charles;
		// 	};
		// 	console.log(userPlayer);
		};

		if (playerChosen === true && opponentChosen === false)
		{
			$(this).appendTo("#adversary-box");
			opponentChosen = true;
		}
	});
	//this will be the actions taken when the attack button is pressed
	// $(".attack-button").click(function(e)
	






