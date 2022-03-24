const choices = document.querySelectorAll('button')
const score= document.getElementById('score')

choices.forEach(choice => choice.addEventListener('click' , playGame))


// Game Choice
function computerPlay() {
    const rand = Math.random();
    if (rand < 0.34) {
        return 'rock';
    }   else if (rand <= 0.67){
        return 'paper';
    }   else {
        return 'scissors';
    }
}

// Play Game
function playGame(e) {
    const playerChoice = e.target.id;
    const computerChoice = computerPlay();
    const winner = getWinner(playerChoice, computerChoice)
    console.log(winner)
}

//Winner Choice
function getWinner(p, c) {
    if (p === c) {
      return 'draw';
    } else if (p === 'rock') {
      if (c === 'paper') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (p === 'paper') {
      if (c === 'scissors') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (p === 'scissors') {
      if (c === 'rock') {
        return 'computer';
      } else {
        return 'player';
      }
    }
  }

  // Score
  