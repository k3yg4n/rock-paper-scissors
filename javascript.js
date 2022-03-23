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

function playRound(e){
    let winner = "";
    let playerSelection  = "";
    let computerSelection = computerPlay();

    const container = document.querySelector('#container')
    const content1 = document.querySelector('.currentScore')
    const content2 = document.querySelector('.roundResults')
    
    if(e.target.id == "rock") playerSelection = "rock";
    else if (e.target.id == "paper") playerSelection = "paper";
    else if (e.target.id == "scissors") playerSelection = "scissors";

    content2.textContent =`PLAYER chose ${playerSelection.toUpperCase()}. COM chose ${computerSelection.toUpperCase()}. `;

    if((playerSelection === "rock") && (computerSelection === "scissors")){
        console.log("You win! Rock beats scissors!");
        content2.textContent += "You win! Rock beats scissors!";
        winner = "player";
    } else if ((playerSelection === "rock") && (computerSelection === "paper")){
        console.log("You lose! Paper beats rock!");
        content2.textContent += "You lose! Paper beats rock!";
        winner = "computer";
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")){
        console.log("You lose! Rock beats scissors!");
        content2.textContent += "You lose! Rock beats scissors!";
        winner = "computer";
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")){
        console.log("You win! Scissors beats paper!");
        content2.textContent += "You win! Scissors beats paper!";
        winner = "player";
    } else if ((playerSelection === "paper") && (computerSelection === "rock")){
        console.log("You win! Paper beats rocks!");
        content2.textContent += "You win! Paper beats rocks!";
        winner = "player";
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")){
        console.log("You lose! Scissors beats paper!");
        content2.textContent += "You lose! Scissors beats paper!";
        winner = "computer";
    } else {
        console.log("Tie! Both players selected the same item!");
        content2.textContent += "Tie! Both players selected the same item!";
        winner = "none";
    }

    return winner;
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let winner = "";

    //for(let i = 0; i < 5; i++){
        winner = playRound();
        if(winner === "player"){
            playerScore++;
        } else if (winner === "computer") {
            computerScore++;
        }
    //}

    if(playerScore > computerScore){
        console.log(`The PLAYER wins! The final score is ${playerScore}-${computerScore}.`);
    } else if(computerScore > playerScore) {
        console.log(`The COMPUTER wins! The final score is ${computerScore}-${playerScore}.`);
    } else {
        console.log(`The game was a tie with a final score of ${computerScore}-${playerScore}.`);
    }
}

const buttons = document.querySelectorAll('button');
// Iterate through each button and add a 'click' listener
buttons.forEach((button) => { 
    button.addEventListener('click', playRound);
});
