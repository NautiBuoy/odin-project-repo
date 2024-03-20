// Create three buttons, one for each selection. 
// Add an event listener to the buttons that call your playRound function with the correct 
// playerSelection every time a button is clicked. (you can keep the console.logs for this step)
// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.


let playerScore = 0;
let computerScore = 0;

const pScore = document.getElementById("pScore");
const cScore = document.getElementById("cScore");


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button);
    });
});


function playRound(playerSelection) {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        computerSelection = "rock";
    } 
    else if (computerSelection === 1) {
        computerSelection = "paper";
    }
    else if (computerSelection === 2) {
        computerSelection = "scissors";
    }

    const picks = document.createElement("p");
    picks.textContent = `Last round, you picked ${playerSelection.id} and the computer picked ${computerSelection}`;
    scores.appendChild(picks);

    function compareValues(playerSelection, computerSelection) {
        
        if (playerSelection.id == computerSelection) {
            console.log(`You both picked ${computerSelection} and nobody wins`)
        }
        else if (
        (playerSelection.id == "rock" && computerSelection == "scissors") || 
        (playerSelection.id == "paper" && computerSelection == "rock") ||
        (playerSelection.id == "scissors" && computerSelection == "paper")
        ) {
            console.log(`Well done, you won!`);
            playerScore = playerScore +1;
            const pScoreNew = document.createTextNode(`Your score: ${playerScore}`);
            pScore.replaceChild(pScoreNew, pScore.childNodes[0]);

        }
        else {
            console.log(`GG you lost`);
            computerScore = computerScore +1;
            const cScoreNew = document.createTextNode(`Computer score: ${computerScore}`);
            cScore.replaceChild(cScoreNew, cScore.childNodes[0]);

        };

        if (computerScore === 5 || playerScore === 5) {
            const list = document.getElementById("scores");
            while (list.lastChild.id != "cScore") {
                list.removeChild(list.lastChild);
            }

            const winner = document.createElement("p");

            if (computerScore === 5) {
            winner.textContent = `The computer won!`;
            scores.appendChild(winner);
            } else {
                winner.textContent = `You won!`;
                scores.appendChild(winner);
            };
        };

        }
        console.log(compareValues(playerSelection, computerSelection));

            }      

            
          




  // () => {     alert(rpsButton.id); }); });



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