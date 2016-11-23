console.log("JS file is connected to HTML! Woo!")

var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

//check for equality between two cards

/*alert to inform user if they picked matching cards
if (cardOne === cardTwo || cardThree === cardFour){

	alert("You found a match!");
	
} else if (cardOne === cardThree || cardTwo === cardFour) {

	alert("Sorry, try again.");
}
*/


var gameBoard = document.getElementById("game-board");

var createCards = function (numOfCards){
		
		for (var i = 0; i < numOfCards; i+=1) {
		var card = document.createElement('div')
		card.className = "card";
		gameBoard.appendChild(card);
		}
}

createCards(4);

