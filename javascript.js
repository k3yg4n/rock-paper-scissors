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

    if((playerSelection === "rock") && (computerSelection === "scissors")){
        return "You win! Rock beats scissors!";
    } else if ((playerSelection === "rock") && (computerSelection === "paper")){
        return "You lose! Paper beats rock!";
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")){
        return "You lose! Rock beats scissors!";
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")){
        return "You win! Scissors beats paper!";
    } else if ((playerSelection === "paper") && (computerSelection === "rock")){
        return "You win! Paper beats rocks!";
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")){
        return "You lose! Scissors beats paper!";
    } else {
        return "Tie! Both players selected the same item!"
    }
    
}


function game(){
    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Please enter your choice (rock,paper, or scissors)").toLowerCase();
        computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
    }
}

// console.log(playRound(playerSelection,computerSelection)); // To test first 2 funcs
game();