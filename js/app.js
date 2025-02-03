
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

const wordBank = ['space', 'launch', 'rocket', 'countdown', 'astronaut', 'nasa', 'earth', 'galaxy']
const playerOne = ['Player']


/*---------------------------- Variables (state) ----------------------------*/
 //let playerChoice
 let remainingGuesses 
 let wordToGuess
 let remainingChances 


/*------------------------ Cached Element References ------------------------*/
const letterEls = document.querySelectorAll('.letter-button')



/*-------------------------------- Functions --------------------------------*/
const startGame = () => {

}; 

const getRandomFromWordBank = () => {

};

const guessAttempts = () => {


};

const playerTurn = () => {


};

const checkGuessedLetter = () => {


};

const CheckWordIsGuessed = () => {


};

const endOfGame = () => {


};


/*----------------------------- Event Listeners -----------------------------*/



