console.log("JS file is connected to HTML! Woo!")

var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

//check for equality between two cards

if (cardOne === cardTwo || cardThree === cardFour){

	alert("You found a match!");
	
} else if (cardOne === cardThree || cardTwo === cardFour) {

	alert("Sorry, try again.");
}
