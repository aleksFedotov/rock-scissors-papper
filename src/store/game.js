import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'default',
  score: 0,
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
    },
    resetScore(state) {
      state.score = 0;
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
    },
    resetGame(state) {
      state.userChoice = '';
      state.houseChoice = '';
      state.result = '';
    },
  },
});

export const selectMode = (state) => state.game.mode;

export const gameActions = gameSlice.actions;

export default gameSlice;
