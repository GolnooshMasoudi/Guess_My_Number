'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'hello Nooshi';
// document.querySelector('.number').textContent = '11';
// document.querySelector('.score').textContent = '3';
// document.querySelector('.highscore').textContent = '66';
// document.querySelector('.guess').value = '311';
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number ⛔';
    console.log(guess);
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number🎉';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You LOST The Game';
      document.querySelector('.score').textContent = '0';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You LOST The Game';
      document.querySelector('.score').textContent = '0';
    }
  }
});
