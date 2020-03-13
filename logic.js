let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let userResult = document.querySelector(".userResult img");
let computerResult = document.querySelector(".computerResult img");
let userResultValue = "";
let computerResultValue = "";
let userScore = 0;
let computerScore = 0;
let winner = 0;

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

// determine winner function
function findWinner(user, computer) {
  if (user == "rock" && computer == "paper") {
    winner = 2;
    console.log("you lost");
  } else if (user == "rock" && computer == "scissors") {
    winner = 1;
    console.log("you WON!!");
  } else if (user == "paper" && computer == "scissors") {
    winner = 2;
    console.log("you lost");
  } else if (user == "paper" && computer == "rock") {
    winner = 1;
    console.log("you WON!!");
  } else if (user == "scissors" && computer == "rock") {
    winner = 2;
    console.log("you lost");
  } else if (user == "scissors" && computer == "paper") {
    winner = 1;
    console.log("you WON!!");
  } else {
    winner = 0;
    console.log("Its a tie");
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
