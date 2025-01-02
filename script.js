const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const attack = document.getElementById('choice');
const showResults = document.getElementById('results');
const cpuChoice = document.getElementById('cpuChoice');
const result = document.createElement('p');

let compValue = '';

function getComputerChoice() { 
    let compChoice = Math.floor(Math.random() * 3);

    switch (compChoice) {
        case 0:
            return 'rock';
            break; 
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;    
    }   
}
compValue = getComputerChoice();
console.log(compValue); 

attack.textContent = '';
let human;
let leButtons = document.querySelectorAll('button');

leButtons.forEach((button) => {
    button.addEventListener('click', () => {
        showResults.style.display = 'block';
        showResults.appendChild(result);
        cpuChoice.textContent = compValue;
        attack.textContent = button.textContent;
        human = button.textContent;

        if (human == compValue) {
            result.textContent = 'TIE!';
        }
        else if (human == 'paper' && compValue == 'scissors' || human == 'rock' && compValue == 'paper' || human == 'scissors' && compValue == 'rock') {
            result.textContent = 'You Lose!';
        }
        else if (human == 'paper' && compValue == 'rock' || human == 'rock' && compValue == 'scissors' || human == 'scissors' && compValue == 'paper') {
            result.textContent = 'You Win!';
        } 
    })
})
