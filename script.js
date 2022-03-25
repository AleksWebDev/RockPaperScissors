const choices = document.querySelectorAll('button')
const score= document.getElementById('score')
const result = document.getElementById('result');

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
    showWinner(winner, computerChoice);
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
  function showWinner(winner, computerChoice) {
    if (winner === 'player') {
      result.innerHTML = `
      You Won!`;
    } else if (winner === 'computer') {
      result.innerHTML = `
      You Lost!`;
    } else {
      result.innerHTML = `
        It's a Draw!`;
    } }   
  