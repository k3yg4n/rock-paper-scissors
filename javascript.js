function computerPlay(){
    randomVal = Math.floor(Math.random() * 3)+ 1;

    if(randomVal === 1){
        return "rock";
    } else if(randomVal === 2){
        return "paper";
    } else {
        return "scissors";
    } 
} 

function playGame(e){

    let playerSelection  = "";
    let computerSelection = computerPlay();
    
    if(e.target.id == "rock") playerSelection = "rock";
    else if (e.target.id == "paper") playerSelection = "paper";
    else if (e.target.id == "scissors") playerSelection = "scissors";

    roundDisplay.textContent = `ROUND ${currentRound}`
    playerChoice.textContent =`PLAYER chose ${playerSelection.toUpperCase()}.`
    computerChoice.textContent = `COMPUTER chose ${computerSelection.toUpperCase()}.`;

    if((playerSelection === "rock") && (computerSelection === "scissors")){
        roundResult.textContent = "You win! Rock beats scissors!";
        playerScore++;
    } else if ((playerSelection === "rock") && (computerSelection === "paper")){
        roundResult.textContent = "You lose! Paper beats rock!";
        computerScore++;
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")){
        roundResult.textContent = "You lose! Rock beats scissors!";
        computerScore++;
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")){
        roundResult.textContent = "You win! Scissors beats paper!";
        playerScore++;
    } else if ((playerSelection === "paper") && (computerSelection === "rock")){
        roundResult.textContent = "You win! Paper beats rock!";
        playerScore++;
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")){
        roundResult.textContent = "You lose! Scissors beats paper!";
        computerScore++;
    } else {
        roundResult.textContent = "Tie! Both players selected the same item!";
    }

    currentScore.textContent = `PLAYER: ${playerScore} \t COMPUTER: ${computerScore}`;

    if(currentRound == 5) {
        let image = document.createElement('img');
        if(playerScore > computerScore){
            finalResult.textContent = `The PLAYER wins! The final score is ${playerScore}-${computerScore}.`;
            image.src = './images/winner.png';
        } else if(computerScore > playerScore) {
            finalResult.textContent = `The COMPUTER wins! The final score is ${computerScore}-${playerScore}.`;
            image.src = './images/loser.jpg';
        } else {
            finalResult.textContent = `The game was a tie with a final score of ${computerScore}-${playerScore}.`;
            image.src = './images/tie.gif';
        }

        image.setAttribute('height', '250');
        container.appendChild(image);
        
        buttons.forEach((button) => { 
            button.removeEventListener('click', playGame); // Iterate through each button and add a 'click' listener
        });
    }

    currentRound++;
}

///////////////////////////////  MAIN  /////////////////////////////////////
let playerScore = 0;
let computerScore = 0;
let currentRound = 1;

const container = document.querySelector('#container')
const roundDisplay = document.querySelector('.roundDisplay')
const playerChoice = document.querySelector('.playerChoice')
const computerChoice = document.querySelector('.computerChoice')
const roundResult = document.querySelector('.roundResult')
const currentScore = document.querySelector('.currentScore')
const finalResult = document.querySelector('.finalResult');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => { 
    button.addEventListener('click', playGame); // Iterate through each button and add a 'click' listener
});

