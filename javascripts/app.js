var playerChoice,		//Player's choice for the round.
	computerChoice;		//Computer's random choice for the round.

var wins = 0,			//Number of times player has won.
	losses = 0,			//Number of times player has lost.
	ties = 0;			//Number of times player has tied.

//Sound effects.
var explosion1 = new Audio("assets/explosion.wav");
explosion1.volume = 0.3;
var explosion2 = new Audio("assets/explosion.wav");
explosion2.volume = 0.3;
var beep = new Audio("assets/beep.wav");
var cheer = new Audio("assets/cheer.mp3");
var boocrap = new Audio("assets/boocrap.mp3");
var dullClap = new Audio("assets/dull_clap.mp3");

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

var makeInactive = function(){
	if($(".selection").hasClass("active")){
		$(".selection").removeClass("active");
		$(".selection").addClass("inactive");
	}
};

var makeActive = function(){
	if($(".selection").hasClass("inactive")){
		$(".selection").removeClass("inactive");
		$(".selection").addClass("active");
	}
};

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
		explosion1.play();

		var timeout2 = window.setTimeout(function(){
			$("#battle-computer-" + computerChoice).toggleClass("hidden");
			$("#battle-computer-" + computerChoice).addClass("show-image");
			explosion2.play();

			var timeout3 = window.setTimeout(function(){
				outcome = winner();
				showOutcome(outcome);

				makeActive();
			}, 750);
		}, 600);
	}, 0);
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

	cheer.play();
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

	boocrap.play();
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
		dullClap.play();
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
		$("#player-side").addClass("winner");
	} else if(outcome === "lose"){
		$("#outcome-computer").append($("<p>").text("WINNER").addClass("outcome-paragraph"));
		$("#computer-side").addClass("winner");
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

	//Remove "winner" class.
	$("#player-side").removeClass("winner");
	$("#computer-side").removeClass("winner");

	//Stop outcome sound effects.
	cheer.pause();
	cheer.currentTime = 0;
	boocrap.pause();
	boocrap.currentTime = 0;
	dullClap.pause();
	dullClap.currentTime = 0;
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

	//Play sound effect when mouse hovers over choice.
	//Reference: http://stackoverflow.com/questions/1933969/sound-effects-in-javascript-html5
	$(".choice").mouseenter(function(){
		beep.currentTime = 0;
		beep.play();
	});

	$rock.on("click", function(){
		console.log("Player Choice: rock");

		if($(".selection").hasClass("active")){
			makeInactive();

			cleanUp();

			makeInactive();

			playerChoice = "rock";
			player_rock_count++;
			$(".player-rock").text("Rock: " + player_rock_count);

			randomChoice();
			$("#versus-statement p").text(playerChoice + " vs " + computerChoice);
			battle();
		}
	});

	$paper.on("click", function(){
		console.log("Player Choice: paper");

		if($(".selection").hasClass("active")){
			makeInactive();

			cleanUp();

			playerChoice = "paper";
			player_paper_count++;
			$(".player-paper").text("Paper: " + player_paper_count);

			randomChoice();
			$("#versus-statement p").text(playerChoice + " vs " + computerChoice);
			battle();
		}
	});

	$scissors.on("click", function(){
		console.log("Player Choice: scissors");

		if($(".selection").hasClass("active")){
			makeInactive();

			cleanUp();

			playerChoice = "scissors";
			player_scissors_count++;
			$(".player-scissors").text("Scissors: " + player_scissors_count);

			randomChoice();
			$("#versus-statement p").text(playerChoice + " vs " + computerChoice);
			battle();
		}
	});

	$lizard.on("click", function(){
		console.log("Player Choice: lizard");

		if($(".selection").hasClass("active")){
			makeInactive();

			cleanUp();

			playerChoice = "lizard";
			player_lizard_count++;
			$(".player-lizard").text("Lizard: " + player_lizard_count);

			randomChoice();
			$("#versus-statement p").text(playerChoice + " vs " + computerChoice);
			battle();
		}
	});

	$spock.on("click", function(){
		console.log("Player Choice: spock");

		if($(".selection").hasClass("active")){
			makeInactive();

			cleanUp();

			playerChoice = "spock";
			player_spock_count++;
			$(".player-spock").text("Spock: " + player_spock_count);

			randomChoice();
			$("#versus-statement p").text(playerChoice + " vs " + computerChoice);
			battle();
		}
	});
};

$(document).ready(main);

//t 
//fflvd