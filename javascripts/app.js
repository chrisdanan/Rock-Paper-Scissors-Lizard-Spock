var playerChoice,		//Player's choice for the round.
	computerChoice;		//Computer's random choice for the round.

var wins = 0,			//Number of times player has won.
	losses = 0,			//Number of times player has lost.
	ties = 0;			//Number of times player has tied.

//Keep track of the number of times a choice was made by player and computer.
var player_rock_count = 0,
	player_paper_count = 0,
	player_scissors_count = 0,
	player_lizard_count = 0,
	player_spock_count = 0,
	computer_rock_count = 0,
	computer_paper_count = 0,
	computer_scissors_count = 0,
	computer_lizard_count = 0,
	computer_spock_count = 0;

/*************
 * Purpose: Select a random choice of rock, paper, scissors, lizard, or spock for the computer.
 * Input:
 			-none
 * Output:
 			-Return a random choice for the computer.
*************/
var randomChoice = function(){
	"use strict";

	//Used to randomly select a choice for the computer.
	var choices = ["rock", "paper", "scissors", "lizard", "spock"];

	//Randomly choose a choice for the computer.
	computerChoice = choices[Math.floor(Math.random() * 5)];

	switch(computerChoice){
		case "rock":
			computer_rock_count++;
			$(".computer-rock").text("Rock: " + computer_rock_count);
			break;
		case "paper":
			computer_paper_count++;
			$(".computer-paper").text("Paper: " + computer_paper_count);
			break;
		case "scissors":
			computer_scissors_count++;
			$(".computer-scissors").text("Scissors: " + computer_scissors_count);
			break;
		case "lizard":
			computer_lizard_count++;
			$(".computer-lizard").text("Lizard: " + computer_lizard_count);
			break;
		case "spock":
			computer_spock_count++;
			$(".computer-spock").text("Spock: " + computer_spock_count);
			break;
		default:
			console.log("ERROR");
	}

	console.log("Computer Choice: " + computerChoice);
};

var battle = function(){
	"use strict";

	var outcome = "";

	var timeout = window.setTimeout(function(){
		$("#battle-player-" + playerChoice).toggleClass("hidden");
		$("#battle-player-" + playerChoice).addClass("show-image");

		var timeout2 = window.setTimeout(function(){
			$("#battle-computer-" + computerChoice).toggleClass("hidden");
			$("#battle-computer-" + computerChoice).addClass("show-image");

			var timeout3 = window.setTimeout(function(){
				outcome = winner();
				showOutcome(outcome);
			}, 750);
		}, 500);
	}, 0);

	//$("#battle-player-" + playerChoice).toggleClass("hidden");
	//$("#battle-computer-" + computerChoice).toggleClass("hidden");

	//$("#battle-player-" + playerChoice).addClass("show-image");
	//$("#battle-computer-" + computerChoice).addClass("show-image");
};

/*************
 * Purpose: Handle win logic.
 * Input:
 			-none
 * Output:
 			-Increase number of wins and update text.
*************/
var win = function(){
	"use strict";

	wins++;
	$("p.wins").text("Wins: " + wins);
};

/*************
 * Purpose: Handle loss logic.
 * Input:
 			-none
 * Output:
 			-Increase number of losses and update text.
*************/
var loss = function(){
	"use strict";

	losses++;
	$("p.losses").text("Losses: " + losses);
};

/*************
 * Purpose: Determine the outcome of the round.
 * Input:
 			-none
 * Output:
 			-return outcome of game: "win", "lose", or "tie".
*************/
var winner = function(){
	"use strict";

	if(playerChoice === computerChoice){
    	ties++;
    	$("p.ties").text("Ties: " + ties);
    	return "tie";
    } else if(playerChoice === "rock"){
   		if(computerChoice === "scissors" || computerChoice === "lizard") {
    		win();
    		return "win";
    	}
    	else if(computerChoice === "paper" || computerChoice === "spock"){
    		loss();
    		return "lose";
    	}
    } else if(playerChoice === "paper") {
    	if(computerChoice === "rock" || computerChoice === "spock") {
    		win();
    		return "win";
    	}
    	else if(computerChoice === "scissors" || computerChoice === "lizard"){
    		loss();
    		return "lose";
    	}
    } else if(playerChoice === "scissors") {
    	if(computerChoice === "paper" || computerChoice === "lizard") {
    		win();
    		return "win";
    	}
    	else if(computerChoice === "rock" || computerChoice === "spock"){
    		loss();
    		return "lose";
    	}
    } else if(playerChoice === "lizard") {
    	if(computerChoice === "paper" || computerChoice === "spock") {
    		win();
    		return "win";
    	}
    	else if(computerChoice === "rock" || computerChoice === "scissors"){
    		loss();
    		return "lose";
		}
    } else if(playerChoice === "spock") {
    	if(computerChoice === "rock" || computerChoice === "scissors") {
 			win();
    		return "win";
    	}
    	else if(computerChoice === "paper" || computerChoice === "lizard"){
    		loss();
    		return "lose";
    	}
    }
};

var showOutcome = function(outcome){
	if(outcome === "win"){
		$("#outcome-player").append($("<p>").text("WINNER").addClass("outcome-paragraph"));
	} else if(outcome === "lose"){
		$("#outcome-computer").append($("<p>").text("WINNER").addClass("outcome-paragraph"));
	} else if(outcome === "tie"){
		$("#outcome-tie").append($("<p>").text("TIE").addClass("outcome-paragraph"));
	}
};

var cleanUp = function(){
	"use strict";

	//Make all images hidden.
	$("#player-side img").addClass("hidden");
	$("#computer-side img").addClass("hidden");

	//Remove any images which are shown.
	$("#player-side img").removeClass("show-image");
	$("#computer-side img").removeClass("show-image");

	//Clear outcome paragraphs.
	$("#outcome-player, #outcome-tie, #outcome-computer").empty();
};

var main = function(){
	"use strict";

	console.log("Hello Vane");

	//Create shorter names.
	var $rock = $("#rock-choice"),
		$paper = $("#paper-choice"),
		$scissors = $("#scissors-choice"),
		$lizard = $("#lizard-choice"),
		$spock = $("#spock-choice");

	$rock.on("click", function(){
		console.log("Player Choice: rock");

		cleanUp();

		playerChoice = "rock";
		player_rock_count++;
		$(".player-rock").text("Rock: " + player_rock_count);

		randomChoice();
		$("#versus-statement p").text(playerChoice + " vs " + computerChoice);
		battle();
		
	});

	$paper.on("click", function(){
		console.log("Player Choice: paper");

		cleanUp();

		playerChoice = "paper";
		player_paper_count++;
		$(".player-paper").text("Paper: " + player_paper_count);

		randomChoice();
		$("#versus-statement p").text(playerChoice + " vs " + computerChoice);
		battle();
	});

	$scissors.on("click", function(){
		console.log("Player Choice: scissors");

		cleanUp();

		playerChoice = "scissors";
		player_scissors_count++;
		$(".player-scissors").text("Scissors: " + player_scissors_count);

		randomChoice();
		$("#versus-statement p").text(playerChoice + " vs " + computerChoice);
		battle();
	});

	$lizard.on("click", function(){
		console.log("Player Choice: lizard");

		cleanUp();

		playerChoice = "lizard";
		player_lizard_count++;
		$(".player-lizard").text("Lizard: " + player_lizard_count);

		randomChoice();
		$("#versus-statement p").text(playerChoice + " vs " + computerChoice);
		battle();
	});

	$spock.on("click", function(){
		console.log("Player Choice: spock");

		cleanUp();

		playerChoice = "spock";
		player_spock_count++;
		$(".player-spock").text("Spock: " + player_spock_count);

		randomChoice();
		$("#versus-statement p").text(playerChoice + " vs " + computerChoice);
		battle();
	});
};

$(document).ready(main);

//t 
//fflvd