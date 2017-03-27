
var wordsArray = [
	"milkyway", 
	"asteroid", 
	"galaxies",
	"wormhole",
	"universe",
];

var currentWord ;

var blanks = "";
var lettersGuessed  = [];
var blankAndSuccess = [];
var wrongLetters = " ";

var winCount = 0;
var	loseCount = 0;
var	numGuesses = 10;
 



pickRandomWord();
function pickRandomWord() {
	blanks = '';
	currentWord  = wordsArray[Math.floor(Math.random() * wordsArray.length)];
	for(var i = 0; i < currentWord.length; i++){
		blanks = blanks + "_ ";
		blankAndSuccess[i] = '_';
		document.getElementById('Letter').innerHTML = blanks;

	}
}

function displayFoundLetter() {
	blanks = '';
	console.log(blanks);
	for(var i = 0; i < blankAndSuccess.length; i++){
		blanks = blanks + " " + blankAndSuccess[i] ;
		document.getElementById('Letter').innerHTML = blanks;
	
			}
	
}
document.onkeyup = function () {
	numGuesses--;
		
	console.log(numGuesses);
	console.log(currentWord);
	var lean = false;
	for(var i = 0; i < currentWord.length;i++){
		if(event.key.toLowerCase() === currentWord.charAt(i)){
			blankAndSuccess[i] = event.key;
				lean = true;
			
			lettersGuessed.push(event.key);
			 displayFoundLetter();

		}

	}

	if(!lean) {
		blanks = '';
		document.getElementById('remaining').innerHTML = numGuesses;
		wrongLetters = wrongLetters + event.key;
		document.getElementById('wrongLettersGuessed').innerHTML = wrongLetters;
		 displayFoundLetter();
	}

	if( blankAndSuccess.join('') === currentWord ){
		wrongLetters = " ";
		winCount++;
		pickRandomWord();
		numGuesses = 10;
		document.getElementById('wrongLettersGuessed').innerHTML = '';
		document.getElementById('wins').innerHTML = winCount;
	    document.getElementById('Letter').innerHTML = '';
		alert('you win');
		displayFoundLetter();
	}
	else if (numGuesses <= 0){
		wrongLetters = " ";
		numGuesses = 10;
		pickRandomWord();
		loseCount++;
		document.getElementById('loss').innerHTML = loseCount;
		document.getElementById('wrongLettersGuessed').innerHTML = '';
		document.getElementById('Letter').innerHTML = '';
		alert('You Lose.');
		document.getElementById('remaining').innerHTML = numGuesses;
		 displayFoundLetter();
	
	}
		


	
}





