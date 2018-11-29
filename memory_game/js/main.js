console.log("User flipped " + "king");
console.log("User flipped " + "queen");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function();
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}

var flipCard = function (cardId) ;{
	console.log("User flipped" + cards[cardId]);

cardsInPlay.push(cards[cardId]);

var flipCard;
flipCard(0);
flipCard(2);

var checkForMatch;

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a match!");
} else if (cardsInPlay.length === 2 && cardsInPlay[0] != cardsInPlay[1]){
	alert("Sorry, try again.");
}
};