// The unordered list where the player’s guessed letters will appear.
var guessList = document.querySelector('guessed-letters');

// The button with the text “Guess!” in it.\
var guessButton = document.querySelector('.guess');

// The text input where the player will guess a letter.
var guessLetter = document.querySelector('.letter');

// The empty paragraph where the word in progress will appear.
var wordIP = document.querySelector('.word-in-progress');

// The paragraph where the remaining guesses will display.
var guessRemainingPara = document.querySelector('.remaining');

// The span inside the paragraph where the remaining guesses will display.
var guessRemainingSpan = document.querySelector('.remaining span');

// The empty paragraph where messages will appear when the player guesses a letter.
var message = document.querySelector('.message');

// The hidden button that will appear prompting the player to play again.
var playAgain= document.querySelector('.play-again');

// Magnolia is your starting word to test out the game 
var word = 'magnolia';

wordIPSymbol = function () {
    const placeholderLetters = [];
    for (const letter of word) {
      console.log(letter);
      placeholderLetters.push('●');
    }
    wordIP.innerText = placeholderLetters.join('');
}

wordIPSymbol (word);

guessButton.addEventListener ('click', function (e) {
    e.preventDefault() 
    const inputVal = guessLetter.value;
    console.log(inputVal);
    guessLetter.value = '';
});