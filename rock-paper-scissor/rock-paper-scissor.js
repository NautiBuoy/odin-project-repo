let playerScore = 0;
let computerScore = 0;


for (let i=1; i<6; i++) {
    console.log(`Round ${i} - Current Scores - Player: ${playerScore}, Computer: ${computerScore}`);

    let playerSelection = prompt(`Round ${i}: type your selection between rock, paper, scissor`);
    let computerSelection = Math.floor(Math.random()*3);

    if (computerSelection === 0) {
        computerSelection = "rock";
    } 
    else if (computerSelection === 1) {
        computerSelection = "paper";
    }
    else if (computerSelection === 2) {
        computerSelection = "scissor";
    }
    console.log(`Computer's choice: ${computerSelection}`);
    console.log(`Player's choice: ${playerSelection}`);



    function compareValues(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() == computerSelection) {
            console.log(`Result of round ${i}: You both picked ${computerSelection} and nobody wins`)
        }
        else if (
        (playerSelection == "rock" && computerSelection == "scissor") || 
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissor" && computerSelection == "paper")
        ) {
            console.log(`Result of round ${i}: Well done, you won!`);
            playerScore = playerScore +1;
        }
        else {
            console.log(`Result of round ${i}: GG you lost`);
            computerScore = computerScore +1;
        }
        }
        console.log(compareValues(playerSelection, computerSelection));

            }       


// THINGS I LEARNED HERE
// if needs () before opening the {}
// metodo per avere numberi casuali da 0 a X > Math.Random()*x > e poi Math.floor 
// ricordati che = siginifica assegnare, mentre == oppure === significa comparare
// xxx.toLowerCase per rendere un'espressione lower case
// chiamare una funzione > function (Var1, Var2) { }


// INITIAL PRESUDO-CODE DESIGN
// user inputs rock, paper or scissor
// computer generates a random value between rock, paper and scissor
// compare generated value with input value
// make sure the comparison is case insensitive
// if X vs X then start again
// if user input rock and computer input scissor then user wins, else computer wins
// if user inputs paper and computer inputs rock, then user wins, else computer wins
// if user inputs scissor and computer inputs paper, then user wins, else computer wins


// # header1; #### header 4; **this comes out as bold** 
// <bold> asda <asd> 