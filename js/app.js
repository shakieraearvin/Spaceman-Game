
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

/*------------------------ Cached Element References ------------------------*/
const letterEls = document.querySelectorAll('.letter-button');
const startBtnEl = document.querySelector('#start');



/*-------------------------------- Functions --------------------------------*/
const startGame = (event) => {


    getSecretWord(); // randomly select word from the wordBank array
    
}; 

const getSecretWord = () => {
    const wordBankIndex = Math.floor(Math.random() * wordBank.length);
    wordToGuess = wordBank[wordBankIndex];
 
    console.log(wordToGuess);
};



// const totalGuessAttempts = () => {
//     maxChances = wordBank.length + 4;
//     remainingChances = maxChances;

// };


const checkGuessedLetter = (event) => {
    lettersGuessed.push (event.target.innerText)
    console.log(wordToGuess, lettersGuessed)
    
if ((wordToGuess.includes(lettersGuessed[lettersGuessed.length -1]))) {
    // the letter to display in the word to guess array 
    // in the correct position 
    // be removed from the lettersELs 
    console.log('Good Job')
} else {
    console.log("Try again")
}

};





/*----------------------------- Event Listeners -----------------------------*/
letterEls.forEach(letter => {
    letter.addEventListener('click', checkGuessedLetter)
}); 

start.addEventListener('click', startGame);

startGame();