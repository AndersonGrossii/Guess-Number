'use strict';

let score = 20
let number = Math.round(Math.random() * 20);
let highscore = 0;
const displayMessage = function (message) {
     document.querySelector('.message').textContent = message
}

document.querySelector('.again').addEventListener('click', function () {
number = Math.round(Math.random() * 20);
        score = 20;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = 'black';
        displayMessage(' Start Guessing... 🥳');
        document.querySelector('.number').style.width = '10rem'; 
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value ='';
});

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
if (!guess) {
   
    displayMessage( 'Please insert only numbers 😤');

} else if (score === 0 ){

    displayMessage(' Please Restart the game');
    document.querySelector('.check').textContent = 'Try Again';
   

} else if (guess === number) {

    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = 'green';
    displayMessage(' Good Job! 🥳');
    document.querySelector('.number').style.width = '30rem'; 

    highscore = score > highscore ? score : highscore ;
    document.querySelector('.highscore').textContent = highscore; 
    

} else if ( guess !== number) {

    displayMessage(guess > number ? 'Too High 😅' : 'Too Low 😅')
    score--;
    document.querySelector('.score').textContent = score;


}
});


