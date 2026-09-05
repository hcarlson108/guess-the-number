let secret = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

//variables for all of the html elements in index.html
const input = document.getElementById('guessInput');
const button = document.getElementById('guessBtn');
const message = document.getElementById('message');
const log = document.getElementById('log');

//Add a function to handle the guesses
function handleGuess() {
  const guess = Number(input.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = 'wtf is that ? Enter a number between 1 and 100....';
    return;
  }

  guesses++;

  if (guess > secret) {
    message.textContent = 'too high';
  } else if (guess < secret) {
    message.textContent = 'too low';
  } else {
    message.textContent = `correct! you got it in ${guesses} guesses`;
  }
}

button.addEventListener('click', handleGuess);

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleGuess();
    input.select();
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 20%)`;
  }
});
