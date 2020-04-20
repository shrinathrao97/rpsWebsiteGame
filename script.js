
//Script for Rock paper scissors funtionality
// 0 = rock
// 1 = paper
// 2 = scissors

var computerChoice = 0;
var playerChoice = 0;
var rockRef = "rock.png";
var scissorsRef = "scissors.png";
var paperRef = "paper.png";


function update(){

	computerStart();
	console.log("Computer Choice: " + computerChoice);	
	if (computerChoice == 0){
		document.getElementById("computerChoice").src = rockRef;	
	}

	if (computerChoice == 1){
		document.getElementById("computerChoice").src = paperRef;
	}

	if (computerChoice == 2){
		document.getElementById("computerChoice").src = scissorsRef;
	}
}



function computerStart() {
	computerChoice = Math.floor(Math.random() * 3);
	return(computerChoice);
}



function rockChoice() {
	playerChoice = 0;
	update();
}


function paperChoice(){
	playerChoice = 1;
	update();
}

function scissorsChoice(){
	playerChoice = 2;
	update();
}
