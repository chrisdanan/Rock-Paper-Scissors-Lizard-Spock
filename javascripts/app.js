var playerChoice,		//Player's choice for the round.
	computerChoice;		//Computer's random choice for the round.

var wins = 0,
	losses = 0,
	ties = 0;
/*************
 * Purpose: Select a random choice of rock, paper, scissors, lizard, or spock for the computer.
 * Input:
 			-none
 * Output:
 			-Return a random choice for the computer.
*************/
var randomChoice = function(){
	//Used to randomly select a choice for the computer.
	var choices = ["rock", "paper", "scissors", "lizard", "spock"];

	//Randomly choose a choice for the computer.
	computerChoice = choices[Math.floor(Math.random() * 5)];

	console.log("Computer Choice: " + computerChoice);
};

var win = function(){
	wins++;
	$("p.wins").text("Wins: " + wins);
};

var loss = function(){
	losses++;
	$("p.losses").text("Losses: " + losses);
};

var winner = function(){
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
		playerChoice = "rock";

		randomChoice();
		winner();
	});

	$paper.on("click", function(){
		console.log("Player Choice: paper");
		playerChoice = "paper";

		randomChoice();
		winner();
	});

	$scissors.on("click", function(){
		console.log("Player Choice: scissors");
		playerChoice = "scissors";

		randomChoice();
		winner();
	});

	$lizard.on("click", function(){
		console.log("Player Choice: lizard");
		playerChoice = "lizard";

		randomChoice();
		winner();
	});

	$spock.on("click", function(){
		console.log("Player Choice: spock");
		playerChoice = "spock";

		randomChoice();
		winner();
	});
};

$(document).ready(main);

//t 
//fflvd