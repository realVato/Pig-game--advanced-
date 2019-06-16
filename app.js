var activePlayer, roundScore, currentScore, dice, dice2, winningScore, gamePlaying, lastRoll, currentRoll;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
    //Roll Dice
    dice = Math.floor(Math.random() * 6 + 1);
    dice2 = Math.floor(Math.random() * 6 + 1);
    //Change dice icon
    diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    diceDOM2 = document.querySelector('.dice2');
    diceDOM2.style.display = 'block';
    diceDOM2.src = 'dice-' + dice2 + '.png';
    //Check if dice rolled a 6 two times in a row
    if(dice === 6 || dice2 === 6){
        currentRoll = 1;
        lastRoll += currentRoll;
    } else {
        currentRoll = 1;
        lastRoll = 0;
    }
    //Change activePlayer on dice value 1 && two 6's in a row
     if (dice !== 1 && dice2 !== 1 && lastRoll < 2) {
        //Add dice value to currentScore
        currentScore += dice + dice2;
        document.getElementById('current-' + activePlayer).textContent = currentScore;
    } else {
        nextPlayer();
    }
}
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    //Change customScore according to input field
    if(document.getElementById('customScore').value) {
        customScore();
    } else {
        winningScore;
    }

    if(gamePlaying) {
        //Remove currentScore by transferring it to roundScore
        document.getElementById('score-' + activePlayer).textContent = roundScore[activePlayer] += currentScore;
        //Check Winner
        if(roundScore[activePlayer] >= winningScore) {
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.getElementById('name-' + activePlayer).textContent = 'winner';
            gamePlaying = false;
        } else {
            nextPlayer();
    }
}    
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    currentRoll = 0;
    lastRoll = 0;
    currentScore = 0;
    document.getElementById('current-' + activePlayer).textContent = currentScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function customScore() {
    winningScore = document.getElementById('customScore').value;
}

function init() {
    activePlayer = 0;
    roundScore = [0, 0];
    currentScore = 0;
    winningScore = 10;
    gamePlaying = true;
    lastRoll = 0;
    currentRoll = 0;
    //Winner
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    //Active
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    //Player name
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
    //roundScore
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    //currentScore
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
};