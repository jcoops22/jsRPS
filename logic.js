let userScoreSpan = document.querySelector("#userScore");
let computerScoreSpan = document.querySelector("#computerScore");
let scoreLimitSpan = document.querySelector("#scoreLimit");
let modal = document.querySelector(".modal");
let start = document.querySelector("#start");
let startDiv = document.querySelector("#gameStartDiv");
let startDivInput = document.querySelector("#gameStartDiv input");
let btnDivImages = document.querySelectorAll(".btnDiv div img");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let userResult = document.querySelector(".userResult img");
let computerResult = document.querySelector(".computerResult img");
let previewDiv = document.querySelector("#preview");
let preview = document.querySelector("#preview img");
let userResultValue = "";
let computerResultValue = "";
let userScore = 0;
let computerScore = 0;
let scoreLimit = startDivInput.value || 0;
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

// Events Listeners
window.addEventListener("load", () => {
  setTimeout(() => {
    startDivInput.focus();
  }, 600);
});
// start the game
start.addEventListener("click", () => {
  startGame();
});

// add background image on hover
btnDivImages.forEach(img => {
  img.addEventListener("mouseover", e => {
    preview.src = e.target.src;
  });
  img.addEventListener("mouseout", e => {
    preview.src = "";
  });
});

// Click Event to set user selection
rock.addEventListener("click", () => {
  // console.log("rock  clicked");
  userResult.src = images[0].image;
  userResultValue = images[0].value;
  showChoices();
  computerSelection();
  findWinner(userResultValue, computerResultValue);
});
paper.addEventListener("click", () => {
  // console.log("paper clicked");
  userResult.src = images[1].image;
  userResultValue = images[1].value;
  showChoices();
  computerSelection();
  findWinner(userResultValue, computerResultValue);
});

scissors.addEventListener("click", () => {
  // console.log("scissors clicked");
  userResult.src = images[2].image;
  userResultValue = images[2].value;
  showChoices();
  computerSelection();
  findWinner(userResultValue, computerResultValue);
});
yesBtn.addEventListener("click", () => {
  reset();
});
noBtn.addEventListener("click", () => {
  winnerDiv.style.top = "-53vh";
});

// Functions

// start the game function
function startGame() {
  startDiv.style.display = "none";
  // modal.style.display = "none";
  modal.style.opacity = "0";
  modal.style.zIndex = "0";
  scoreLimit = startDivInput.value;
  scoreLimitSpan.innerHTML = scoreLimit;
}
// determine winner function
function findWinner(user, computer) {
  if (user == "rock" && computer == "paper") {
    winner = 2;
    // console.log("you lost");
    handleWinner();
  } else if (user == "rock" && computer == "scissors") {
    winner = 1;
    // console.log("you WON!!");
    handleWinner();
  } else if (user == "paper" && computer == "scissors") {
    winner = 2;
    // console.log("you lost");
    handleWinner();
  } else if (user == "paper" && computer == "rock") {
    winner = 1;
    // console.log("you WON!!");
    handleWinner();
  } else if (user == "scissors" && computer == "rock") {
    winner = 2;
    // console.log("you lost");
    handleWinner();
  } else if (user == "scissors" && computer == "paper") {
    winner = 1;
    // console.log("you WON!!");
    handleWinner();
  } else {
    winner = 0;
    // console.log("Its a Draw.");
    handleWinner();
  }
}

function handleWinner() {
  if (winner === 2) {
    announcement.innerHTML = "You lose.";
    computerScoreSpan.classList.add("shineClass");
    setTimeout(() => {
      computerScore++;
      computerScoreSpan.innerHTML = computerScore;
      keepGoing(computerScore);
      setTimeout(() => {
        computerScoreSpan.classList.remove("shineClass");
      }, 1000);
    }, 1000);
    keepGoing(computerScore);
  } else if (winner === 1) {
    announcement.innerHTML = "You WIN!";
    userScoreSpan.classList.add("shineClass");
    setTimeout(() => {
      userScore++;
      userScoreSpan.innerHTML = userScore;
      keepGoing(userScore);
      setTimeout(() => {
        userScoreSpan.classList.remove("shineClass");
      }, 1000);
    }, 1000);
    keepGoing(userScore);
  } else {
    announcement.innerHTML = "Its a DRAW.";
    keepGoing(userScore);
  }
}

function computerSelection() {
  let index = Math.floor(Math.random() * 3);
  computerResult.src = images[index].image;
  computerResultValue = images[index].value;
  // console.log(computerResultValue);
}
// show the results from user and computer
function showChoices() {
  userResult.style.visibility = "visible";
  userResult.style.opacity = "1";
  computerResult.style.visibility = "visible";
  computerResult.style.opacity = "1";
}
function keepGoing(score) {
  score >= scoreLimit ? (gameOver = true) : (gameOver = false);
  if (gameOver) {
    winnerDiv.style.top = "25vh";
    modal.style.opacity = ".7";
    modal.style.zIndex = "3";
  } else {
    // preview.src = "./resources/shoot.svg";
    if (winner == 1) {
      preview.src = "./resources/shoot.svg";
    } else if (winner == 2) {
      preview.src = "./resources/shoot1.svg";
    } else {
      preview.src = "./resources/draw.svg";
    }
    announcement.classList.add("pop");
    // flash results
    setTimeout(() => {
      preview.src = "";
      announcement.classList.remove("pop");
    }, 1000);
  }
}
function reset() {
  winner = 0;
  scoreLimit = 0;
  startDivInput.value = "";
  userScore = 0;
  userScoreSpan.innerHTML = userScore;
  computerScore = 0;
  computerScoreSpan.innerHTML = computerScore;
  userResult.style.visibility = "hidden";
  userResult.style.opacity = "0";
  computerResult.style.visibility = "hidden";
  computerResult.style.opacity = "0";
  startDiv.style.display = "flex";
  modal.style.display = "block";
  winnerDiv.style.top = "-53vh";
  modal.style.opacity = ".7";
  setTimeout(() => {
    startDivInput.focus();
  }, 600);
}
