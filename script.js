'use strict'
// import result from './output'

// const number = Math.trunc(Math.random() * 20);

document.querySelector('.guess').value

let secretNumber = Math.trunc(Math.random() * 20 + 1)
let score = 20
let highscore = 0

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

// console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess)

  if (!guess) {
    displayMessage('⛔ No Number!')
  } else if (guess < secretNumber) {
    result('📉 Too Low!')
  } else if (guess > secretNumber) {
    result('📈 Too High!')
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!')

    document.querySelector('.number').textContent = secretNumber
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
  }
})

const result = output => {
  if (score > 1) {
    displayMessage(output)
    score--
    document.querySelector('.score').textContent = score
  } else {
    displayMessage('💥 You lost the game!')
    document.querySelector('.score').textContent = 0
    document.querySelector('body').style.backgroundColor = 'red'
  }
}

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222'
  displayMessage('Start guessing...')
  score = 20
  document.querySelector('.score').textContent = score
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
  secretNumber = Math.trunc(Math.random() * 20 + 1)
})
