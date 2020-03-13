let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let userResult = document.querySelector(".userResult img");
let computerResult = document.querySelector(".computerResult img");

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
  showChoices();
  computerSelection();
  winner();
});

paper.addEventListener("click", () => {
  console.log("paper clicked");
  userResult.src = images[1].image;
  showChoices();
  computerSelection();
});

scissors.addEventListener("click", () => {
  console.log("scissors clicked");
  userResult.src = images[2].image;
  showChoices();
  computerSelection();
});

// determine winner function
function winner(user, computer) {}

function computerSelection() {
  let index = Math.floor(Math.random() * 3);
  computerResult.src = images[index].image;
}
// show the results from user and computer
function showChoices() {
  userResult.style.visibility = "visible";
  computerResult.style.visibility = "visible";
}
