console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var createBoard = function (){
		
		for (var i = 0; i < cards.length; i+=1) {
		var card = document.createElement('div')
		card.className = "card";
		gameBoard.appendChild(card);
		card.setAttribute('data-card', cards[i]); //'data-card' is the name of the attribute, and cards[i] provides the value to that attribute
		card.addEventListener('click', isTwoCards);
		}
}



var gameBoard = document.getElementById("game-board");

var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src = king.png>';
	} else {
		this.innerHTML = '<img src = queen.png>';
	}

	if (cardsInPlay.length ===2){
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}	

}

var isMatch = function(cards){
	if (cards[0] === cards[1]) {
		alert ("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}


createBoard(cards);








