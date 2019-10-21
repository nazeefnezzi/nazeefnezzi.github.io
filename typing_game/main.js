//initilize window
window.addEventListener('load', init);

let time = 5;
let score = 0;
let isPlaying ;

const wordInpit = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const messege = document.querySelector('#messege');
const seconds = document.querySelector('#seconds');

//words of array 

const words = [
    'beautiful',
    'cat',
    'twentey',
    'jquerry',
    'calculatar',
    'brain',
    'bat',
    'most',
    'mirracle',
    'cristanio',
    'juventus',
    'paris',
    'vecabulory',
    'nahrungsmittel',
    'reply',
    'geschwindischkeit',
    'river',
    'barriors',
    'beetle',
    'worst',
    'fantastic',
    'view',
    'pie',
    'pepsi',
    'frenchfreid',
    'embaraced',
    'settlement',
    'source',
    'fulfill',
    'crazy',
    'defnition',
    'secretory'

];

//init dunction

function init() {
 //load word from array calling
    showWord(words);
  // checking inputword
  wordInpit.addEventListener('input', startMatch);  
 //call countdown.
    setInterval(countdown, 1000);
 //gameover call
    setInterval(gameOver, 50)
    
}

//checkmatch

function startMatch() {
    if(matchWords()) {
        isPlaying = true;
        time = 6;
        showWord(words);
        wordInpit.value = '';
        score++;

    }
    //get reid off -1 score
    if(score === -1){
        scoreDisplay.innerHTML = 0;

    }else{
        scoreDisplay.innerHTML = score;
    }
    
 
}

//match current word to word input
function matchWords () {
    
    if(wordInpit.value === currentWord.innerHTML) {
        messege.innerHTML = 'Correct!!!';
        return true;
    }else {
       messege.innerHTML = '';
       return false;
    }

}

//select random word from array function.

function showWord(words) {
    //create random intex from array
    const randIndex = Math.floor(Math.random() * words.length);
    //output random word
    currentWord.innerHTML = words[randIndex];

}


//timer count down

function countdown() {
    if(time > 0) {
        //countdown return
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }

    timeDisplay.innerHTML = time;
}

//GAMEOVER status

function gameOver() {
    if(!isPlaying && time === 0) {
        messege.innerHTML = 'Game Over!!!';
        //reset score and dnt count reset score.
        score = -1;

    }
}