// script.js
// Paste the following into a file named script.js
let playerScore = 0;
let computerScore = 0;


const clickSound = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_6c19faf2b1.mp3?filename=button-124476.mp3');
const winSound = new Audio('https://cdn.pixabay.com/download/audio/2021/08/04/audio_4c9070a7bf.mp3?filename=success-fanfare-trumpets-6185.mp3');
const loseSound = new Audio('https://cdn.pixabay.com/download/audio/2021/08/04/audio_1b2d9e7c37.mp3?filename=negative_beep-6009.mp3');


const choicesBtns = document.querySelectorAll('.choice');
choicesBtns.forEach(btn => {
btn.addEventListener('click', () => {
clickSound.currentTime = 0;
clickSound.play();
play(btn.dataset.choice);
});
});


function play(playerChoice) {
const choices = ['rock', 'paper', 'scissors'];
const computerChoice = choices[Math.floor(Math.random() * 3)];


let result = '';
if (playerChoice === computerChoice) {
result = `Tie! Both chose ${playerChoice}`;
} else if (
(playerChoice === 'rock' && computerChoice === 'scissors') ||
(playerChoice === 'paper' && computerChoice === 'rock') ||
(playerChoice === 'scissors' && computerChoice === 'paper')
) {
result = `You Win! ${playerChoice} beats ${computerChoice}`;
playerScore++;
winSound.play();
} else {
result = `You Lose! ${computerChoice} beats ${playerChoice}`;
computerScore++;
loseSound.play();
}


document.getElementById('result').innerText = result;
document.getElementById('score').innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
}
