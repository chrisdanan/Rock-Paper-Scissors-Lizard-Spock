var main = function(){
	"use strict";

	console.log("Hello Vane");

	//Create shorter names.
	var $rock = $("#rock-choice"),
		$paper = $("#paper-choice"),
		$scissors = $("#scissors-choice"),
		$lizard = $("#lizard-choice"),
		$spock = $("#spock-choice");

	//Player's choice.
	var playerChoice;

	$rock.on("click", function(){
		console.log("Clicked rock");
		playerChoice = "rock";
	});

	$paper.on("click", function(){
		console.log("Clicked paper");
		playerChoice = "paper";
	});

	$scissors.on("click", function(){
		console.log("Clicked scissors");
		playerChoice = "scissors";
	});

	$lizard.on("click", function(){
		console.log("Clicked lizard");
		playerChoice = "lizard";
	});

	$spock.on("click", function(){
		console.log("Clicked spock");
		playerChoice = "spock";
	});
};

$(document).ready(main);

//t 
//fflvd