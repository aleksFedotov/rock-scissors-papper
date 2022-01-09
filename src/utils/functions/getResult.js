const winCombinations = {
  scissors: ['paper', 'lizard'],
  paper: ['rock', 'spock'],
  rock: ['lizard', 'scissors'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock'],
};

const getResult = (userChoice, houseChoice) => {
  let result;

  if (userChoice === houseChoice) {
    result = 'Draw';
  } else if (winCombinations[userChoice].includes(houseChoice)) {
    result = 'You win';
  } else {
    result = 'You lost';
  }

  return result;
};

export default getResult;
