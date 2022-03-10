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

function playRound(playerSelection, computerSelection){
    console.log("PLAYER: " + playerSelection);
    console.log("COM: " + computerSelection);

    let winner = "";

    if((playerSelection === "rock") && (computerSelection === "scissors")){
        console.log("You win! Rock beats scissors!");
        winner = "player";
    } else if ((playerSelection === "rock") && (computerSelection === "paper")){
        console.log("You lose! Paper beats rock!");
        winner = "computer";
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")){
        console.log("You lose! Rock beats scissors!")
        winner = "computer";
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")){
        console.log("You win! Scissors beats paper!");
        winner = "player";
    } else if ((playerSelection === "paper") && (computerSelection === "rock")){
        console.log("You win! Paper beats rocks!");
        winner = "player";
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")){
        console.log("You lose! Scissors beats paper!");
        winner = "computer";
    } else {
        console.log("Tie! Both players selected the same item!");
        winner = "none";
    }

    return winner;
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let winner = "";

    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Please enter your choice (rock,paper, or scissors)").toLowerCase();
        computerSelection = computerPlay();
        winner = playRound(playerSelection,computerSelection);
        if(winner === "player"){
            playerScore++;
        } else if (winner === "computer") {
            computerScore++;
        }
    }

    if(playerScore > computerScore){
        console.log(`The PLAYER wins! The final score is ${playerScore}-${computerScore}.`);
    } else if(computerScore > playerScore) {
        console.log(`The COMPUTER wins! The final score is ${computerScore}-${playerScore}.`);
    } else {
        console.log(`The game was a tie with a final score of ${computerScore}-${playerScore}.`);
    }
}

// console.log(playRound(playerSelection,computerSelection)); // To test first 2 funcs

game();