function game() {
    //Choose a random selection for computer's choice
    function getComputerChoice () {
        //Produce a random natural number between 0 and 2
        let randomChoice = Math.floor(Math.random() * 3);
        //Debug
        console.log(randomChoice);

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
        if (playerSelection !== "rock" || playerSelection !=="paper" || playerSelection !== "scissors" ||
            computerSelection !== "rock" || computerSelection !=="paper" || computerSelection !== "scissors") {
                result = undefined;
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
        } else if (playerSelection === "scissors" && computerSelection === "papers") {
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

    function playRound () {
        let playerSelection = prompt("rock, paper, scissors?");
        let computerSelection = getComputerChoice();
        let result;
        //Debug
        console.log(computerSelection);

        //Return 0, 1, 2 based on the proper result of resultOfRound()
        result = resultOfRound(playerSelection, computerSelection);
        console.log(result);
        if (result === "Withdraw") {
            return 0;
        } else if (result === "User wins") {
            return 1;
        } else if (result === "Computer wins") {
            return 2;
        }
    
    }
    //Store scores
    let userScore = 0;
    let computerScore = 0;
    let roundNumber = 0;
    //One round
    let round;

    //Play a round and change the scores
    round = playRound();
    roundNumber ++;
    console.log(`Round Number: ${roundNumber}`);
    if (round === 1 ) {
        userScore += 1;
    } else if (round === 2) {
        computerScore += 2;
    } else if (round === 0){
        
    } else {
        return undefined;
    }

    //Play a round and change the scores
    round = playRound();
    roundNumber ++;
    console.log(`Round Number: ${roundNumber}`);
    if (round === 1 ) {
        userScore += 1;
    } else if (round === 2) {
        computerScore += 2;
    } else if (round === 0){
        
    } else {
        return undefined;
    }
    
    //Play a round and change the scores
    round = playRound();
    roundNumber ++;
    console.log(`Round Number: ${roundNumber}`);
    if (round === 1 ) {
        userScore += 1;
    } else if (round === 2) {
        computerScore += 2;
    } else if (round === 0){
        
    } else {
        return undefined;
    }

    //Play a round and change the scores
    round = playRound();
    roundNumber ++;
    console.log(`Round Number: ${roundNumber}`);
    if (round === 1 ) {
    userScore += 1;
    } else if (round === 2) {
    computerScore += 2;
    } else if (round === 0){

    } else {
    return undefined;
    }

    //Play a round and change the scores
    round = playRound();
    roundNumber ++;
    console.log(`Round Number: ${roundNumber}`);
    if (round === 1 ) {
        userScore += 1;
    } else if (round === 2) {
        computerScore += 2;
    } else if (round === 0){
        
    } else {
        return undefined;
    }

    //Play a round and change the scores
    round = playRound();
    roundNumber ++;
    console.log(`Round Number: ${roundNumber}`);
    if (round === 1 ) {
        userScore += 1;
    } else if (round === 2) {
        computerScore += 2;
    } else if (round === 0){
        
    } else {
        return undefined;
    }

    //Compare the results and choose winner
    if (userScore > computerScore) {
        console.warn("You have won!");
    } else if (userScore < computerScore) {
        console.warn("You have lost to computer!");
    } else {
        console.warn("Withdraw!");
    }
}