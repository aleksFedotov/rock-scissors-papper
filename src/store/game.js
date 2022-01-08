import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'default',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeMode(state, action) {
      state.mode = action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice;
