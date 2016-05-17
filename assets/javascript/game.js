var players = {
	
	watt: {
		name: "JJ Watt",
		hp: 100,
		attack: 5,
		counter: 15,
	},

	rodgers: {
	name: "Aaron Rodgers",
	hp: 100,
	attack: 5,
	counter: 15,
	},

	bryant: {
	name: "Dez Bryant",
	hp: 100,
	attack: 5,
	counter: 15,
	},

	charles: {
	name: "Jamaal Charles",
	hp: 100,
	attack: 5,
	counter: 15,
	}
};

var myPlayer;

// $(".player-pic").click(function(e){
// 	if (this){
// 		$(".player-box").append(this);
// 		$(this).addClass("player");
// 		}
// 	else{
// 		$(".player-pic").appendTo(".opponents-box").addClass("opponent");
// 	}
// });

$(".player-pic").click(function(event){
		$("#player-box").append(this).removeClass("player-pic").addClass("player");
		// $(".player-pic").addClass("opponent").appendTo("#opponents-box");
		// myPlayer = (this);
		// console.log(myPlayer);
});

// $(".opponent").click(function(e){
// 	$(".adversary-box").append(this).addClass("currentAdversary");
// 	console.log("test");
// });

