// The unordered list where the player’s guessed letters will appear.
var guessList = document.querySelector('.guessed-letters');

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

// Holds user's guessed letters
var guessedLetters = [];

// Display our symbols as placeholders for the chosen word's letters
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
    e.preventDefault(); 
    message.innerText = '';
    const guess = guessLetter.value;
    const goodGuess = validateInput(guess);
    if (goodGuess) {
        makeGuess(guess);
    }
    guessLetter.value = '';

});

//  check users input
 const validateInput= function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input === '') {
        message.innerText = "Hey! You forgot your letter!"
    } else if (input.length > 1) {
        message.innerText ='Oops! One letter at a time please!'
    } else if (!input.match(acceptedLetter)) {
       message.innerText = "That doesn't look like an Enligsh letter to me!"
    } else {
        return input;
    }
 }

 const makeGuess = function (guess) {
    //  transform input to uppercase
    guess = guess.toUpperCase();
     
    if (guessedLetters.includes(guess)) {
        message.innerText = 'Uh oh! You already guessed that letter! Try again.'
    } else {
        guessedLetters.push(guess);
        showGuessedLetters();
        updateWIP(guessedLetters);
    }
    console.log(guessedLetters);
 }

//  function updates the page with users' guesses
 const showGuessedLetters = function () {
    // clears list first
    guessList.innerHTML = '';
    for (const letter of guessedLetters) {
        const li = document.createElement('li');
        li.innerText = letter;
        guessList.append(li);
    }

 };

 // function replaces circle symbols
 const updateWIP = function (guessedLetters) {
    let wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split('');
    console.log(wordArray);
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
        revealWord.push(letter.toUpperCase());
        } else {
        revealWord.push("●");
        }
    }
    wordIP.innerText = revealWord.join("");
    winningGuess();
};

// verifies if player won
const winningGuess = function () {
    if (word.toUpperCase() === wordIP.innerText) {
        message.classList.add = 'win';
        message.innerHTML = '<p class="highlight">Yay! You found the right word! Congrats!</p>';
        
    }
}