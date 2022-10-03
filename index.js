const body = document.querySelector('body');
let playerHand, compHand;
let games = 0;
let compWins = 0;
let playerWins = 0;

var title = document.createElement('h1');
title.textContent = "Rock, Paper, Scissors";
title.classList.add("title")
body.appendChild(title);

var gameStatus = document.createElement('p');
gameStatus.classList.add("info");
gameStatus.textContent = "Waiting for player input..."
var winStatus = document.createElement('p');
winStatus.classList.add("info");

//add buttons and functionallity
var moveBox = document.createElement('div');
moveBox.id = "moveBox";
body.appendChild(moveBox)

var moves = [];

var rock = document.createElement('button');
rock.textContent = "rock";
rock.classList.add('inactive');
moves.push(rock);

var paper = document.createElement('button');
paper.textContent = "paper";
paper.classList.add('inactive');
moves.push(paper);

var scissors = document.createElement('button');
scissors.textContent = "scissors";
scissors.classList.add('inactive');
moves.push(scissors);

moves.forEach(move => {
    moveBox.appendChild(move);
    move.addEventListener('click', () => {
        playerHand = move.textContent.toUpperCase();
        playGame();
    });
});

//statuses
body.appendChild(gameStatus);
body.appendChild(winStatus);


body.appendChild(document.querySelector("#scoreboard"));

let pWinHtml = document.querySelector("#playerScore");
pWinHtml.textContent = playerWins;

let cWinHtml = document.querySelector("#compScore");
cWinHtml.textContent = compWins;


function computerPlay() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            compHand = "ROCK";
            break;
        case 1:
            compHand = "PAPER";
            break;
        case 2:
            compHand = "SCISSORS";
            break;
        default:
            alert("Strange error");
            break;
    }
    return compHand;
}

function playGame() {
    computerPlay();
    if (playerHand === compHand) {
        gameStatus.textContent = ("tied! Waiting for player input...");
        winStatus.textContent = ("");
    } else {
        // no tie; now compare results
        ++games;
        gameStatus.textContent = ("Player threw " + playerHand + "! Computer threw " + compHand + "!");
        switch (playerHand) {
            case "ROCK": //player rock
                switch (compHand) {
                    case "PAPER":
                        winStatus.textContent = ("Computer wins!");
                        ++compWins;
                        break;
                    case "SCISSORS":
                        winStatus.textContent = ("Player wins!");
                        ++playerWins;
                        break;
                }
                break;
            case "PAPER": //player paper
                switch (compHand) {
                    case "ROCK":
                        winStatus.textContent = ("Player wins!");
                        ++playerWins;
                        break;
                    case "SCISSORS":
                        winStatus.textContent = ("Computer wins!");
                        ++compWins;
                        break;
                }
                //
                break;
            case "SCISSORS": //player scissors
                switch (compHand) {
                    case "ROCK":
                        winStatus.textContent = ("Computer wins!");
                        ++compWins;
                        break;
                    case "PAPER":
                        winStatus.textContent = ("Player wins!");
                        ++playerWins;
                        break;
                }
                //
                break;
        }

    }
    pWinHtml.textContent = playerWins;
    cWinHtml.textContent = compWins;

    if (playerWins == 5) {
        winStatus.textContent = ("Player won five games! Resetting scoreboard...");
        playerWins = 0;
        compWins = 0;
        pWinHtml.textContent = playerWins;
        cWinHtml.textContent = compWins;
    } else if (compWins == 5) {
        winStatus.textContent = ("Computer won five games! Resetting scoreboard...");
        playerWins = 0;
        compWins = 0;
        pWinHtml.textContent = playerWins;
        cWinHtml.textContent = compWins;
    }

}