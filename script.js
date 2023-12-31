
//Choose a random selection for computer's choice
function getComputerChoice () {
    //Produce a random natural number between 0 and 2
    let randomChoice = Math.floor(Math.random() * 3);
    //Debug

    let selection;

    //Assign computer's selection based on `randomChoice` number
    switch (randomChoice) {
        case 0:
            selection = "rock";
            break;
        case 1:
            selection = "paper";
            break;
        case 2: 
            selection = "scissors";
            break;
    }
    return selection;
}

function resultOfRound (playerSelection, computerSelection ) {
    //Turn the selections to lower case. 
                    //Withdraw   //This lets user's choice be case in-sensitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    //Store the results is numbers: "0" means withdraw, "1" means user won, "2" means computer won the round.
    let result;

    //Exit the function if input strings are not valid ("rock","paper","scissors")
    if (playerSelection !== "rock" && playerSelection !=="paper" && playerSelection !== "scissors" &&
        computerSelection !== "rock" && computerSelection !=="paper" && computerSelection !== "scissors") {
            result = undefined;
            console.log("result equals undefined");
    }

    //Asses which one of the opponents have won the match and store the proper defined result in the variable
    //Paper and Rock
    if (playerSelection === "paper" &&
        computerSelection === "rock") {
        //User wins
        result = 1;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        //Computer wins
        result = 2;
    
    //Paper and Scissors
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = 2;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = 1;
    
    //Rock and Scissors
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = 1;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = 2;
    
    //Withdrawal 
    }else if (playerSelection === computerSelection) {
        result = 0;
    }

    //Return the round's stat by the result variable
    switch (result) {
        case 0:
            return ("Withdraw");
            break;
        case 1:
            return ("User wins");
            break;
        case 2:
            return ("Computer wins");
            break;
        case undefined:
            return ("Invalid inputs");
    };      
}

function playRound (event) {
    // let playerSelection = prompt("rock, paper, scissors?");
    let playerSelectionClassName = event.target.getAttribute("class");
    let playerSelection;
    
    if (playerSelectionClassName === "button rock") {
        playerSelection = "rock";
        console.log("Player Selection equals rock");
    } else if (playerSelectionClassName === "button paper") {
        playerSelection = "paper";
        console.log("Player Selection equals paper");
    } else if (playerSelectionClassName === "button scissors") {
        playerSelection = "scissors";
        console.log("Player Selection equals scissors");
    }
    playerChoiceNumber.textContent = playerSelection;

    let computerSelection = getComputerChoice();
    computerChoiceNumber.textContent = computerSelection;

    let result;
    //Debug
    console.log(`Computer's choice: ${computerSelection}`);
    //Return 0, 1, 2 based on the proper result of resultOfRound()
    result = resultOfRound(playerSelection, computerSelection);
    console.log(result);
    if (result === "Withdraw") {
        equalRounds += 1;
    } else if (result === "User wins") {
        userScore += 1;
    } else if (result === "Computer wins") {
        computerScore += 1;
    }
    roundNumber ++;
    console.log(`Round Number: ${roundNumber}`);
    resultNumber.textContent = `User Score: ${userScore}
                            , Computer Score: ${computerScore}
                            , Equal Rounds: ${equalRounds}` ; 
    if (userScore === 5) {
        resultOf5Rounds.textContent = "Congratulations, you won!";
        playerChoiceNumber.textContent = "";
        computerChoiceNumber.textContent = "";
        userScore = 0;
        computerScore = 0;
        equalRounds = 0;
        roundNumber = 0;
        return;
    } else if (computerScore === 5) {
        resultOf5Rounds.textContent = "Computer won!";
        playerChoiceNumber.textContent = "";
        computerChoiceNumber.textContent = "";
        userScore = 0;
        computerScore = 0;
        equalRounds = 0;
        roundNumber = 0;
        return;
    } else {
        resultOf5Rounds.textContent = "";
    }

}
//DOM sections
const bodyContainer = document.querySelector('body');
const buttons = [document.querySelector('.button.rock') , 
                 document.querySelector('.button.paper'), 
                 document.querySelector('.button.scissors')];

const playerChoiceText = document.createElement('div');
playerChoiceText.textContent = "You chose: ";
playerChoiceText.setAttribute('class', 'playerChoice text');

const playerChoiceNumber = document.createElement('span');
playerChoiceNumber.setAttribute('class', 'playerChoice number');

const computerChoiceText = document.createElement('div');
computerChoiceText.textContent = "Computer chose: ";
computerChoiceText.setAttribute('class', 'computreChoice text');

const computerChoiceNumber = document.createElement('span');
computerChoiceNumber.setAttribute('class', 'computerChoice number');

const resultTextNote = document.createElement('div');
resultTextNote.textContent = 'Result';
resultTextNote.setAttribute('class' , 'reusult textNote');

const resultNumber = document.createElement('div');
resultNumber.setAttribute('class' , 'result number');

const resultOf5Rounds = document.createElement('div');
resultOf5Rounds.setAttribute('class', 'totalResult');

bodyContainer.appendChild(resultTextNote);
bodyContainer.appendChild(resultNumber);
bodyContainer.appendChild(playerChoiceText);
playerChoiceText.appendChild(playerChoiceNumber);
bodyContainer.appendChild(computerChoiceText);
computerChoiceText.appendChild(computerChoiceNumber);
bodyContainer.appendChild(resultOf5Rounds);

//Store scores
let userScore = 0;
let computerScore = 0;
let equalRounds = 0;
let roundNumber = 0;
//One round
let round = 0;

//Play a round and change the scores
buttons.forEach((value) => {
    // console.log(value.getAttribute('class'));
    value.addEventListener('click' , function (event) {
        // console.log(event.target.getAttribute("class"));
        round = playRound(event);
    });
});


// //Compare the results and choose winner
// if (userScore > computerScore) {
//     console.warn("You have won!");
// } else if (userScore < computerScore) {
//     console.warn("You have lost to computer!");
// } else {
//     console.warn("Withdraw!");
// }
