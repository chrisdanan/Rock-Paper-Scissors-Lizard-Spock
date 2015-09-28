var playerChoice,		//Player's choice for the round.
	computerChoice;		//Computer's random choice for the round.

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
		console.log("Clicked rock");
		playerChoice = "rock";

		randomChoice();
	});

	$paper.on("click", function(){
		console.log("Clicked paper");
		playerChoice = "paper";

		randomChoice();
	});

	$scissors.on("click", function(){
		console.log("Clicked scissors");
		playerChoice = "scissors";

		randomChoice();
	});

	$lizard.on("click", function(){
		console.log("Clicked lizard");
		playerChoice = "lizard";

		randomChoice();
	});

	$spock.on("click", function(){
		console.log("Clicked spock");
		playerChoice = "spock";

		randomChoice();
	});
};

$(document).ready(main);

//t 
//fflvd