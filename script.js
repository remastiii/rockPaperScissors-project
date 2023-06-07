let backgroundMusic = document.getElementById('backgroundMusic');
backgroundMusic.play();


const getUserChoiceDisplay = document.getElementById('user-choice');
const getComputerChoiceDisplay = document.getElementById('computer-choice');
const getResultDisplay = document.getElementById('result');
const posibleChoices = document.querySelectorAll('button');

let userChoice 
let computerChoice
let result
let scorePlayer = 0
let scoreComputer = 0
let winner;

let initialTextColor = "#333";





posibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    
    if(scoreComputer < 10 && scorePlayer < 10) {
        userChoice = e.target.id;
        getUserChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        getResult()
        updateScore()
    }
    
    if(scoreComputer === 10 || scorePlayer === 10) {
        endGame();
    }
    
}))



function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }

    getComputerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice) {
        result = 'Its a draw'
    } 
    if (computerChoice ==='rock' && userChoice === 'paper') {
        result = 'You Win!'   
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lost!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You win!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lost!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lost!'
    }
    getWinner();

    getResultDisplay.innerHTML = result;
    
}

function getWinner() {
    if (computerChoice === userChoice) {
        winner = 'draw';
    } else if (
        (computerChoice === 'rock' && userChoice === 'paper') ||
        (computerChoice === 'paper' && userChoice === 'scissors') ||
        (computerChoice === 'scissors' && userChoice === 'rock')
    ) {
        winner = 'player';
    } else {
        winner = 'computer';
    }

    return winner;
}



function updateScore(){
    getWinner();
    if( winner=== 'player') {
        scorePlayer += 1;
    }
    else if(winner === 'computer') {
        scoreComputer += 1;
    }

    document.getElementById('scorePlayer').textContent = scorePlayer;
    document.getElementById('scoreComputer').textContent = scoreComputer;
    

}

function resetScore(){
    scorePlayer = 0;
    scoreComputer = 0;
    document.getElementById('scorePlayer').textContent = scorePlayer;
    document.getElementById('scoreComputer').textContent = scoreComputer;
    posibleChoices.forEach(possibleChoice => possibleChoice.disabled = false);
    getResultDisplay.innerHTML = '0';
    scoreComputer.innerHTML = '0';
    scorePlayer.innerHTML = '0';
    getUserChoiceDisplay.innerHTML = 'Click on your lucky button for start';
    getComputerChoiceDisplay.textContent = '';
    getResultDisplay.style.color = initialTextColor;
   
}


 let getResetBtn = document.querySelector('.reset-button');

 getResetBtn.addEventListener('click', resetScore);


function endGame(){
    posibleChoices.forEach(possibleChoice => possibleChoice.disabled = true);
    if (scorePlayer === 10) {
        getResultDisplay.innerHTML = 'Congratulations, you have won the game!';
        getResultDisplay.style.color = 'green';
    }
    else if (scoreComputer === 10) {
        getResultDisplay.innerHTML = 'Computer won the game';
        getResultDisplay.style.color = 'red';

    }

    
    
    
} 