let secret = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

//variables for all of the html elements in index.html
const input = document.getElementById('guessInput');
const button = document.getElementById('guessBtn');
const message = document.getElementById('message');
const log = document.getElementById('log');
const playAgainBtn = document.getElementById('playAgainBtn');

const failureMessage = [
  'what is that ?!#?',
  'really.',
  'dude',
  "don't make me come over there",
  'omg',
  'my dog could do better',
  'my cat could do better',
];

//Add a function to handle the guesses
function handleGuess() {
  const guess = Number(input.value);
  let i = 1;
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = failureMessage[i * Math.floor(Math.random() * 4)];
    return;
  }

  guesses++;

  if (guess > secret) {
    message.textContent = 'too high';
  } else if (guess < secret) {
    message.textContent = 'too low';
  } else {
    message.textContent = `YESSSSS YOU GOT IT - only took you ${guesses} guesses`;
    document.body.classList.add('party');
    button.hidden = true;
    playAgainBtn.hidden = false;
  }
}

//function to reset the game
function resetGame() {
  secret = Math.floor(Math.random() * 100) + 1;
  guesses = 0;
  message.textContent = '';
  input.value = '';
  input.focus();
  document.body.classList.remove('party');
  button.hidden = false;
  playAgainBtn.hidden = true;
}

button.addEventListener('click', handleGuess);

playAgainBtn.addEventListener('click', resetGame);

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleGuess();
    input.select();
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 20%)`;
  }
});
