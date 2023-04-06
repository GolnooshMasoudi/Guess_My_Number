'use strict';
//Get a random number between 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displayMessage('No Number ⛔');
    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#88B04B';
    document.querySelector('.number').style.width = '40rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High📈' : 'Too Low📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You LOST The Game😕');
      document.querySelector('.score').textContent = '0';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
