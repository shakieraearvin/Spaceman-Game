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
const startGame = () => {
    getSecretWord(); // randomly select word from the wordBank array
    secretWordDisplay = [];
    remainingChances = 8
    document.getElementById('chances').textContent = remainingChances;
    document.getElementById('message').textContent = '';
    document.getElementById('restart').classList.add('hidden');
    document.getElementById('start').classList.remove('hidden');

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


const checkGuessedLetter = (event) => {
    document.getElementById('start').classList.add('hidden');
    let guessedLetter = event.target.innerText;
    lettersGuessed.push(guessedLetter);
    let letterAccess = lettersGuessed[lettersGuessed.length - 1]
   
    if ((secretWord.includes(letterAccess))) {
        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === letterAccess) {
                secretWordDisplay[i] = letterAccess

                let letterBox = document.getElementById(`letter-${i}`);
                if (letterBox) {
                    letterBox.textContent = guessedLetter;
                }
            }
        }

        if (!secretWordDisplay.includes('_')) {
            document.getElementById('message').textContent = 'You Won 🥳'
            document.getElementById('restart').classList.remove('hidden')
            disableAllButtons();
        }
        
        else if (remainingChances === 0) {
         document.getElementById('message').textContent = `Game Over! The word was '${secretWord}'.`;
            document.getElementById('restart').classList.remove('hidden')
            disableAllButtons();
        }
    } else {
        if (remainingChances > 0) {
            remainingChances = remainingChances - 1;

            if (secretWordDisplay.includes('_')) {
             changeSpaceManImage();   
            }
            document.getElementById('chances').textContent = remainingChances;


        }
    }
    event.target.disabled = true;

};
const changeSpaceManImage = () => {
    let imageSelector = document.getElementById('spaceman-image');
    if (remainingChances === 7) {
        imageSelector.src = './images/spaceman-2.png';
    } else if (remainingChances === 6) {
        imageSelector.src = './images/spaceman-3.png';
    } else if (remainingChances === 5) {
        imageSelector.src = './images/spaceman-4.png';
    } else if (remainingChances === 4) {
        imageSelector.src = './images/spaceman-5.png';
    } else if (remainingChances === 3) {
        imageSelector.src = './images/spaceman-6.png';
    } else if (remainingChances === 2) {
        imageSelector.src = './images/spaceman-7.png';
    } else if (remainingChances === 1) {
        imageSelector.src = './images/spaceman-8.png';
    } else if (remainingChances === 0) {
        imageSelector.src = './images/spaceman-9.png';
    }
};
 
    // }
    // if (remainingChances === 7) {
    //     imageSelector.src = './images/spaceman-2.png';
    // } else if (remainingChances === 6) {
    //     imageSelector.src = './images/spaceman-3.png';
    // } else if (remainingChances === 5) {
    //     imageSelector.src = './images/spaceman-4.png';
    // } else if (remainingChances === 4) {
    //     imageSelector.src = './images/spaceman-5.png';
    // } else if (remainingChances === 3) {
    //     imageSelector.src = './images/spaceman-6.png';
    // } else if (remainingChances === 2) {
    //     imageSelector.src = './images/spaceman-7.png';
    // } else if (remainingChances === 1) {
    //     imageSelector.src = './images/spaceman-8.png';
    // } else if (remainingChances === 0) {
    //     imageSelector.src = './images/spaceman-9.png';}



/*----------------------------- Event Listeners -----------------------------*/


letterEls.forEach(letter => {
    letter.addEventListener('click', checkGuessedLetter)
});

letterEls.forEach(letter => {
    letter.addEventListener('click', changeSpaceManImage)
});

start.addEventListener('click', startGame);
document.getElementById('restart').addEventListener('click', startGame);

startGame();