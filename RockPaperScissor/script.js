


let humanScore = 0
let computerScore = 0

function getComputerChoice() {

    const random = Math.random();

    if (random < 1 / 3) {
        return "Rock";
    } else if (random < 2 / 3) {
        return "Paper";
    } else {
        return "Scissors";
    }

}

function getHumanChoice() {

    return prompt("Choose: Rock, Paper, Scissor").toLowerCase()
}

function playRound(humanChoice, computerChoice) {


    // console.log(humanChoice);

    if (humanChoice === 'rock' || computerChoice === 'paper') {
        console.log("You Lose");
        computerScore += 1

    } else if (humanChoice === 'rock' || computerChoice === 'scissor') {
        console.log("You Win");
        humanScore += 1

    } else if (humanChoice === 'rock' || computerChoice === 'rock') {
        console.log("Tie");

    } else if (humanChoice === 'paper' || computerChoice === 'paper') {
        console.log("Tie");

    } else if (humanChoice === 'paper' || computerChoice === 'scissor') {
        console.log("You Win");
        humanScore += 1

    } else if (humanChoice === 'paper' || computerChoice === 'rock') {
        console.log("You Lose");
        computerScore += 1

    } else if (humanChoice === 'scissor' || computerChoice === 'paper') {
        console.log("You Win");
        humanScore += 1
    } else if (humanChoice === 'scissor' || computerChoice === 'rock') {
        console.log("You Lose");
        computerScore += 1

    } else if (humanChoice === 'scissor' || computerChoice === 'scissor') {
        console.log("Tie");

    }
    else {
        console.log("Invalide Choice");
    }
}

let i = 0

function playGame() {
    while (i <= 5) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        console.log("You:", humanChoice);
        console.log("Computer:", computerChoice);

        // console.log(i);
        playRound(humanChoice, computerChoice)
        i++
        console.log(humanScore, computerScore);
    }

    console.log("FINAL SCORE\n");
    console.log("Score:", humanScore, "-", computerScore);
    console.log("----------------");

    if (humanScore > computerScore) {
        console.log("You Win");
    }
    else if (humanScore < computerScore) {
        console.log("Computer Win");
    }
    else {
        console.log("TIE");
    }
}


playGame()
// console.log(humanScore, computerScore);




