console.log("JS file is connected to HTML! Woo!")

var cards = ['king', 'king', 'queen', 'queen', 'cookie', 'cookie', 'ace', 'ace', 'apple', 'apple', 'banana', 'banana'];

var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";
var cardFive = "cookie";
var cardSix = "cookie";
var cardSeven = "ace";
var cardEight = "ace";
var cardNine = "apple";
var cardTen = "apple";
var cardEleven = "banana";
var cardTwelve = "banana";

//adds cards to game
var board = document.getElementById('game-board');
function createBoard (){
for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	board.appendChild(cardElement);
	}
}

/*if (cardOne === cardTwo) {
 	alert("You found a match!");
}
 else {
 	alert("Sorry, try again");
}

if (cardThree === cardFour) {
 	alert("You found a match!");
}
 else {
 	alert("Sorry, try again");
}

if (cardFive === cardSix) {
 	alert("You found a match!");
}
 else {
 	alert("Sorry, try again");
}

if (cardSeven === cardEight) {
 	alert("You found a match!");
}
 else {
 	alert("Sorry, try again");
}

if (cardNine === cardTen) {
 	alert("You found a match!");
}
 else {
 	alert("Sorry, try again");
}

if (cardEleven === cardTwelve) {
 	alert("You found a match!");
}
 else {
 	alert("Sorry, try again");
}
*/

