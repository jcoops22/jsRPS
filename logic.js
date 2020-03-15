
const player_score = document.getElementById('player');
const terminator_score = document.getElementById('terminator');
const count = document.getElementById('game-scores'); 
const winner = document.getElementById('win-msg');

let player = 0;
let terminator = 0; 

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function TerminatorAI() {
  const options = ['r', 'p', 's']; 
  const rando = Math.floor(Math.random() * 3);
  return options[rando];
}

function win(player_choice, TerminatorAI) {
  player++;
  player_score.innerHTML = player;
  winner.innerHTML = 'You beat Terminator'; 
}

function lose(player_choice, TerminatorAI) {
  terminator++; 
  terminator_score.innerHTML = terminator; 
  winner.innerHTML = 'Terminator destroys humanity';
}

function tie() {
  winner.innerHTML = "You're both sooo badass"
}

function input(player_choice) {
  switch (player_choice + TerminatorAI()) {
    case 'rs':
    case 'pr':
    case 'sp': 
    win(); 
    break;
    case 'rp': 
    case 'ps': 
    case 'sr': 
    lose();
    break;
    case 'rr':
    case 'pp':
    case 'ss': 
    tie();
    break;
  }
}

function start() {
  rock.addEventListener('click', () => { input('r'); }); 
  paper.addEventListener('click', () => { input('p'); }); 
  scissors.addEventListener('click', () => { input('s'); }); 
}

start();

