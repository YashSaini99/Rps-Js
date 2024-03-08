let usrScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const usrScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const msg = document.querySelector("#msg");

const choiceGen = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = () => {
    console.log("Game is Drawn");
    msg.innerText = "Game Drawn, Play Again!";
    msg.style.backgroundColor = "grey";
};

const showWinner = (usrWin , usrChoice , compChoice) => {
    if (usrWin){
        usrScore++;
        usrScorePara.innerText = usrScore;
        console.log("You Win");
        msg.innerText = `You won!, Your ${usrChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Loose");
        msg.innerText = `You Lost!, ${compChoice} beats your ${usrChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (usrChoice) => {
    console.log("user-choice", usrChoice);
    const compChoice = choiceGen();
    console.log("comp-choice", compChoice);

    if (usrChoice === compChoice) {
        //drawgame
        drawGame();
    } else {
        let usrWin = true;
        if (usrChoice === "rock") {
            usrWin = compChoice === "paper" ? false : true;
        } else if (usrChoice === "paper") {
            usrWin = compChoice === "scissors" ? false : true;
        } else {
            usrWin = compChoice === "rock" ? false : true;
        }
        showWinner(usrWin, usrChoice , compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const usrChoice = choice.getAttribute("id");
        playGame(usrChoice);
    });
});
