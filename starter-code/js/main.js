console.log("JS file is connected to HTML! Woo!")

var cards = ['king', 'king', 'queen', 'queen', 'cookie', 'cookie', 'ace', 'ace', 'apple', 'apple', 'banana', 'banana'];
var cardsInPlay = [];

//adds cards to game
var board = document.getElementById('game-board');
function createBoard() {
for (var i=0; i<cards.length; i++) {
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards);

	board.appendChild(cardElement);
	board.appendChild(cardElement);
	}
}
function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
		console.log(this.getAttribute('data-card'));
		if (this.getAttribute('data-card') === 'king') {
			this.innerHTML = "<img src='http://images.clipartpanda.com/king-clipart-king-result-itimes-polls.jpg'>"; // king
		}
		else if (this.getAttribute('data-card') === 'queen') {
			this.innerHTML = "<img src='https://s-media-cache-ak0.pinimg.com/564x/89/26/53/892653a6de4f1745096859c69e0d4066.jpg'>"; //queen
		}
		else if (this.getAttribute('data-card') === 'cookie') {
			this.innerHTML = "<img src='https://virulentwordofmouse.files.wordpress.com/2014/08/chocolate-chip-cookie.jpg'>"; //cookie
		}
		else if (this.getAttribute('data-card') === 'ace') {
			this.innerHTML = "<img src='http://mysteriouswritings.com/wp-content/uploads/2016/05/Ace_of_spades.svg_.png'>"; //ace
		}
		else if (this.getAttribute('data-card') === 'apple') {
			this.innerHTML = "<img src='http://blogmobility.pl/wp-content/uploads/2016/04/apple.png'>"; //apple
		}
		else {
			this.innerHTML = "<img src='http://cliparts.co/cliparts/Big/Kxy/BigKxyLbT.jpg'>"; //banana
		}

	if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
	}	
  }

function isMatch(cards) {
  // alert winning message
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();

