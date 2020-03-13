let userScoreSpan = document.querySelector("#userScore");
let computerScoreSpan = document.querySelector("#computerScore");
let scoreLimitSpan = document.querySelector("#scoreLimit");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let userResult = document.querySelector(".userResult img");
let computerResult = document.querySelector(".computerResult img");
let userResultValue = "";
let computerResultValue = "";
let userScore = 0;
let computerScore = 0;
let scoreLimit = 10;
let winnerDiv = document.querySelector("#winnerDiv");
let announcement = document.querySelector("#winnerDiv h1");
let winner = 0;
let gameOver = false;
let yesBtn = document.querySelector("#yes");
let noBtn = document.querySelector("#no");

// images to populate selection area
let images = [
  {
    image: "./resources/rock.svg",
    value: "rock"
  },
  {
    image: "./resources/paper.svg",
    value: "paper"
  },
  {
    image: "./resources/scissors.svg",
    value: "scissors"
  }
];

// start the game
startGame();

// Events Listeners

// Click Event to set user selection
rock.addEventListener("click", () => {
  console.log("rock  clicked");
  userResult.src = images[0].image;
  userResultValue = images[0].value;
  showChoices();
  computerSelection();
  findWinner(userResultValue, computerResultValue);
});

paper.addEventListener("click", () => {
  console.log("paper clicked");
  userResult.src = images[1].image;
  userResultValue = images[1].value;
  showChoices();
  computerSelection();
  findWinner(userResultValue, computerResultValue);
});

scissors.addEventListener("click", () => {
  console.log("scissors clicked");
  userResult.src = images[2].image;
  userResultValue = images[2].value;
  showChoices();
  computerSelection();
  findWinner(userResultValue, computerResultValue);
});
yesBtn.addEventListener("click", () => {
  reset();
  winnerDiv.style.display = "none";
});
noBtn.addEventListener("click", () => {
  winnerDiv.style.display = "none";
});

// Functions

// start the game function
function startGame() {
  scoreLimit = prompt("What score limit do you want to go to?");
  scoreLimitSpan.innerHTML = scoreLimit;
}
// determine winner function
function findWinner(user, computer) {
  if (user == "rock" && computer == "paper") {
    winner = 2;
    console.log("you lost");
    handleWinner();
  } else if (user == "rock" && computer == "scissors") {
    winner = 1;
    console.log("you WON!!");
    handleWinner();
  } else if (user == "paper" && computer == "scissors") {
    winner = 2;
    console.log("you lost");
    handleWinner();
  } else if (user == "paper" && computer == "rock") {
    winner = 1;
    console.log("you WON!!");
    handleWinner();
  } else if (user == "scissors" && computer == "rock") {
    winner = 2;
    console.log("you lost");
    handleWinner();
  } else if (user == "scissors" && computer == "paper") {
    winner = 1;
    console.log("you WON!!");
    handleWinner();
  } else {
    winner = 0;
    console.log("Its a tie");
    handleWinner();
  }
}

function handleWinner() {
  if (winner === 2) {
    announcement.innerHTML = "You lose.";
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    keepGoing(computerScore);
  } else if (winner === 1) {
    announcement.innerHTML = "You WIN!";
    userScore++;
    userScoreSpan.innerHTML = userScore;
    keepGoing(userScore);
  } else {
    announcement.innerHTML = "Its a tie.";
  }
}

function computerSelection() {
  let index = Math.floor(Math.random() * 3);
  computerResult.src = images[index].image;
  computerResultValue = images[index].value;
  console.log(computerResultValue);
}
// show the results from user and computer
function showChoices() {
  userResult.style.visibility = "visible";
  computerResult.style.visibility = "visible";
}
function keepGoing(score) {
  score >= scoreLimit ? (gameOver = true) : (gameOver = false);
  if (gameOver) {
    winnerDiv.style.display = "flex";
  } else {
    console.log("keep it going");
  }
}
function reset() {
  winner = 0;
  userScore = 0;
  computerScore = 0;
  userResult.style.visibility = "hidden";
  computerResult.style.visibility = "hidden";
  startGame();
}
