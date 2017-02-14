var wordsArray = [
"SPACE", 
"nebula", 
"galaxy",
],

	currentWord = "",
	lettersInWord = [],
	blanks = [],
	lettersGuessed = [],
	blankandsuccess = [],

	winCount = 0,
	loseCount = 0,
	numGuesses = 10;
/* 1. select a word at random x
2. want to break up that random word into letters and replace them with
underscores x
3. we want to add those underscores to the HTML 
4. numguesses always equals 9, and blankandsuccess is an empty array, 
and wronggueses is empty as well x */

function start() {
 currentWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
 blanks = currentWord.split("");
 blanks = "_";
 document.getElementById("currentWord").innerHTML = blanks.join ("");
 numGuesses = 10;
 lettersGuessed = [];
 blankandsuccess = [];

console.log(blanks);

}

start();


