const defaultMode = ['rock', 'paper', 'scissors'];
const bonusMode = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const getHouseChoice = (mode) => {
  let gameMode;

  if (mode === 'default') {
    gameMode = defaultMode;
  } else {
    gameMode = bonusMode;
  }

  const randomNum = Math.floor(Math.random() * gameMode.length);

  return gameMode[randomNum];
};

export default getHouseChoice;
