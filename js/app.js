
// Pick a random word from the list
// - Create a function that selects words from the word list array randomly 

//  Create an empty guessed letter list
// - Define an empty array for the guessed letters  ( for each ) 

// Set the number of allowed wrong guesses
// - Create a function that allows the player to to guess with a max of number of attempts 

// Show the word from word list as blank spaces  ( "_ _ _ _")
// - Create a variable or function to the random word from the word list as blank spaces 

// Repeat players turn until the player wins or runs out of attempts
// - Create a function that repeats  the players turn until they win or run out of attempts 

//   Display progress
// - Display the number of wrong guesses left 
// - Display the letters guessed correctly 

// Ask player to guess a letter
// - Create a function that asks the player to guess a letter 

//  create a hint 

//  Check if the letter was already guessed
// - Create a function and if statement that checks if the letter was already guessed

//   Add letter to guessed list
// - Create a function that removes a letter from the guessed word list 


//  Check if the letter is in the secret word
// - Create a list a function that checks if the letter is a letter of the guessed word 
// - Create a if statement that display ‘ good guess ‘ if the guessed letter is correct , and display the correct letter in the guessed word
//     - And if its wrong display “try again’ and decrease the attempts by 1 

//  End the game
// - Create an end game function 
//     - If statement to create a displays “ you won’ if the player won 
// 	if the player loses display you lose and the correct answer 
// - Create a function to start the game over and a display button to restart the game 




/*-------------------------------- Constants --------------------------------*/
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const wordBank = ['SPACE', 'LAUNCH', 'ROCKET', 'COUNTDOWN', 'ASTRONAUT', 'NASA', 'EARTH', 'GALAXY']




/*---------------------------- Variables (state) ----------------------------*/
let remainingChances
let maxChances
let lettersGuessed = []
let secretWord
let secretWordDisplay = [];

/*------------------------ Cached Element References ------------------------*/
const letterEls = document.querySelectorAll('.letter-button');
const startBtnEl = document.querySelector('#start');

/*-------------------------------- Functions --------------------------------*/
const startGame = (event) => {
    getSecretWord(); // randomly select word from the wordBank array
    secretWordDisplay = [];
    remainingChances = 9
    document.getElementById('chances').textContent = remainingChances;
    document.getElementById('message').textContent = '';

const secretWordContainer = document.getElementById('secret-word-display');
secretWordContainer.innerHTML = '';

    for (let i = 0; i < secretWord.length; i++) {
        secretWordDisplay.push('_');

        let letterBox = document.createElement('div');
        letterBox.classList.add('letter-box');  //reference MDN > https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
        letterBox.textContent = '_';
        letterBox.setAttribute('id', `letter-${i}`); // reference MDN > https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
        secretWordContainer.appendChild(letterBox); // reference MDN > https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
    }
    //document.getElementById('secret-word-display').textContent = secretWordDisplay.join(' ');

    letterEls.forEach(button => {
        button.disabled = false;
    })
};


const getSecretWord = () => {
    const wordBankIndex = Math.floor(Math.random() * wordBank.length);
    secretWord = wordBank[wordBankIndex];
};

const disableAllButtons = () => {
    letterEls.forEach(button => {
        button.disabled = true;
    });
};

// const totalGuessAttempts = () => {
//     maxChances = wordBank.length + 4;
//     remainingChances = maxChances;

// };


const checkGuessedLetter = (event) => {

    let guessedLetter = event.target.innerText;
    lettersGuessed.push(guessedLetter);

    if ((secretWord.includes(lettersGuessed[lettersGuessed.length - 1]))) {
        console.log('Good Job')
        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === lettersGuessed[lettersGuessed.length - 1]) {
                secretWordDisplay[i] = lettersGuessed[lettersGuessed.length - 1]

                let letterBox = document.getElementById(`letter-${i}`);
                if (letterBox) {
                    letterBox.textContent = guessedLetter;
                }
            }
        }
        //document.getElementById('secret-word-display').textContent = secretWordDisplay.join(' ');
        if (!secretWordDisplay.includes('_')) {
            document.getElementById('message').textContent = 'You Won 🥳'
            disableAllButtons();
        }
    } else {
        console.log('Not quite, guess again')
        if (typeof remainingChances === 'number' && remainingChances > 0) {
            remainingChances = remainingChances - 1;
            document.getElementById('chances').textContent = remainingChances;
        }

        if (remainingChances === 0) {
            document.getElementById('message').textContent = `Game Over! The word was '${secretWord}'.`;
            disableAllButtons();
        }
    }
    event.target.disabled = true;

};

// the letter to display in the word to guess array 
// in the correct position 
// be removed from the lettersELs 






/*----------------------------- Event Listeners -----------------------------*/

letterEls.forEach(letter => {
    letter.addEventListener('click', checkGuessedLetter)
});

start.addEventListener('click', startGame);

startGame();