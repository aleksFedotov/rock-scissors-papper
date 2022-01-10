import { createSlice } from '@reduxjs/toolkit';

const gameSettings = localStorage.getItem('gameSettings');

if (!gameSettings) {
  const settings = {
    mode: 'default',
    score: 0,
  };
  localStorage.setItem('gameSettings', JSON.stringify(settings));
}

const { mode, score } = JSON.parse(gameSettings);

const initialState = {
  mode,
  score,
  userChoice: '',
  houseChoice: '',
  result: '',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeMode(state, action) {
      state.mode = action.payload;
      localStorage.setItem(
        'gameSettings',
        JSON.stringify({ mode: action.payload, score: state.score })
      );
    },
    resetScore(state) {
      state.score = 0;
      localStorage.setItem(
        'gameSettings',
        JSON.stringify({ mode: state.mode, score: 0 })
      );
    },
    setUserChoice(state, action) {
      state.userChoice = action.payload;
    },
    setHouseChoice(state, action) {
      state.houseChoice = action.payload;
    },
    setResult(state, action) {
      state.result = action.payload;
    },
    updateScore(state, action) {
      const newScore = state.score + action.payload;
      state.score = newScore;
      localStorage.setItem(
        'gameSettings',
        JSON.stringify({ mode: state.mode, score: newScore })
      );
    },
    resetGame(state) {
      state.userChoice = '';
      state.houseChoice = '';
      state.result = '';
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice;
