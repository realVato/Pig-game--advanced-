/*
3 CHALLENGES:

1.A player loses his ENTIRE score when he rolls two 6's in a row.
After that, it's the next player's turn . (Save previous dice in a
    different variable, always.)
2. Add an input field to the HTML where players can set the winning
 score, so that they can change the predefined score of 100.
 (you can read that value with the .value property in JS).
3. Add another dice to the game so that there is 2.
The player loses his current score when one of them rolls 1 (CSS).  

*/

var score, roundScore, activePlayer, thisRoll, lastRoll, count;

init();

// **********************
// *    BUTTON ROLL     *
// **********************
document.querySelector('.btn-roll').addEventListener('click', function() {

//1. Random number
var dice = Math.floor(Math.random() * 6) + 1;

//2. Show result
var diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'block';
diceDOM.src = 'dice-' + dice + '.png';

//3. Add result to current score
if (dice > 1) {
    roundScore += dice;
    thisRoll = dice;
    if (thisRoll === 6) {
        lastRoll = 6;
        count += 1;
    }
    if (lastRoll === 6 && thisRoll === 6 && count === 2) {
        lastRoll = 0;
        count = 0;
        nextPlayer();
    }
} else {
    nextPlayer();
}

document.getElementById('current-' + activePlayer).textContent = roundScore;
});

// **********************
// *    BUTTON HOLD     *
// **********************

document.querySelector('.btn-hold').addEventListener('click', function() {

// 1. Transfer round score to the general score
score[activePlayer] += roundScore;
document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
if (score[activePlayer] >= 100) {
    document.getElementById('name-' + activePlayer).textContent = 'Winner!';
    diceDisplay();
    document.querySelector('.btn-roll').style.display = 'none';
    document.querySelector('.btn-hold').style.display = 'none';

} else {
    nextPlayer();
    count = 0;
    lastRoll = 0;
}
});

// **********************
// *  BUTTON NEW GAME   *
// **********************

document.querySelector('.btn-new').addEventListener('click', function() {

init();

});

function nextPlayer() {

    document.getElementById('current-' + activePlayer).textContent = roundScore = 0;
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');

}

function init() {

    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    thisRoll = 0 
    lastRoll = 0
    count = 0;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    diceDisplay();

}

function diceDisplay() {

    document.querySelector('.dice').style.display = 'none';

}