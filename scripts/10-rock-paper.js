let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScore();

/*if (!score){
score = {
  wins: 0,
  losses: 0,
  ties: 0
}
}

*/
function playGame(playerMove){
  const compMove = pickCompMove(); 
  let result = '';
  if (playerMove === 'Scissors'){
      if(compMove === 'rock'){
      result = 'You lose.';
      }else if(compMove === 'paper') {
      result = 'You win!';
      }else if (compMove === 'Scissors'){
      result ='Tie.';
      }
  }else if (playerMove === 'paper'){
    if(compMove === 'rock'){
      result = 'You win.';
    }else if(compMove === 'paper') {
      result = 'Tie';
    }else if (compMove === 'Scissors'){
      result ='You lose.';
    }
  }else if (playerMove === 'rock'){
    if(compMove === 'rock'){
      result = 'Tie.';
    }else if(compMove === 'paper') {
      result = 'You lose!';
    }else if (compMove === 'Scissors'){
      result ='You win.';
    }
  }
  
  if (result === 'You win.'){
    score.wins += 1;
  } else if (result === 'You lose.'){
    score.losses += 1;
  }else if (result === 'Tie.'){
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

 updateScore();

 document.querySelector('.js-result').innerHTML = result;

 // 
 document.querySelector('.js-moves').innerHTML = `You <img src="img/${playerMove}-emoji.png" class="move-icon"><img src="img/${compMove}-emoji.png" class="move-icon">Computer`;
}

function updateScore(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
}

function pickCompMove(){
  const  randomNumber = Math.random();

  let compMove = '';

    if(randomNumber >= 0 && randomNumber < 1 / 3){
    compMove = 'rock';
    }else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
    compMove = 'paper';
    }else if(randomNumber >= 2 / 3 && randomNumber < 1){
    compMove = 'Scissors';
    }

    return compMove;
}