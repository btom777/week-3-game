var options = ['rasp','par','spars'];

var wins = 0;

var computerGuess = options[Math.floor(Math.random()*options.length)];

var letterreplace = [];

var letterreplace = computerGuess.split('').toString().replace(/,/g," ").replace(/[a-z]/g, '_');
console.log(letterreplace);

var targetDiv = document.getElementById("wordtarget");

var newDiv = "<div>" + letterreplace + "</div>";
newDiv.innerHTML = letterreplace;
targetDiv.appendChild(newDiv);

var choseDiv = document.getElementById("userchose");

var guessDiv = document.getElementById("guesses");

var guesses = 12;

var guessesDiv = document.createElement("div");
guessesDiv.innerHTML = guesses;
guessDiv.appendChild(guessesDiv);

var userchose = [];
var chosenDiv = document.createElement("div");
chosenDiv.innerHTML = userchose;
choseDiv.appendChild(chosenDiv);

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if (guesses <= 0) {
		alert("You have no more guesses remaining!");
		return;
	};

	for (i = 0; i < userchose.length; i++) {
		if (userGuess === userchose[i]) {
			return;
		}
	};

	userchose.push(userGuess);

	var userDiv = "<div>" + userchose + "</div>";
	chosenDiv.innerHTML = userDiv;

	guesses--;
	var RemainGuess = "<div>" + guesses + "</div>";
	guessesDiv.innerHTML = RemainGuess;
		
	for (i = 0; i < letterreplace.length; i++) {
		if (userGuess === computerGuess[i]) {
			var RemainWord = letterreplace[i].replace('_', userGuess);
			newDiv.innerHTML = RemainWord;
		}
	};	

	if (guesses = 0) {
		alert("You have no more guesses remaining!");
		return;
	};
		
		
}