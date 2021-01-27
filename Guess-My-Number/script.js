'use strict';

let gussedNumber,
  numberToGuess,
  messageToUser,
  score = 20,
  highscore;

function getNumberToGuess() {
  return Math.trunc(Math.random() * 20) + 1;
}

// Reset the numberToGuess when page load
numberToGuess = getNumberToGuess();

// Reset guess my number when click the buttom
document.querySelector('.again').addEventListener('click', () => {
  numberToGuess = getNumberToGuess();
  score = 20;
  document.querySelector('.message').textContent = 'Start Guessing ....';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
});

// Check the gussedNumber
document.querySelector('.check').addEventListener('click', () => {
  gussedNumber = document.querySelector('.guess').value;
  if (gussedNumber > numberToGuess) {
    messageToUser = 'Too high!';
    score--;
  } else if (gussedNumber < numberToGuess) {
    messageToUser = 'Too low!';
    score--;
  } else {
    messageToUser = '🎉 Correct Number!';
    highscore = highscore > score ? highscore : score;
    document.querySelector('.number').textContent = numberToGuess;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('body').style.backgroundColor = 'rgb(96 179 71)';
  }
  document.querySelector('.message').textContent = messageToUser;
  document.querySelector('.score').textContent = score;
});
