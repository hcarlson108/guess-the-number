let secret = Math.floor(100 * Math.random());
let guesses = 0;

//variables for all of the html elements in index.html
const input = document.getElementById('guessInput');
const button = document.getElementById('guessBtn');
const message = document.getElementById('message');
const log = document.getElementById('log');

//Add a function to handle the guesses
