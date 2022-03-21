import { configureStore } from '@reduxjs/toolkit';

import modalSlice from './modal';
import gameSlice from './game';

//MIDDLEWARE
const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem('TicTacToeSettings', JSON.stringify(getState()));
    return result;
  };
};

// Rehydration function

const reHydrateStore = () => {
  if (localStorage.getItem('TicTacToeSettings') !== null) {
    return JSON.parse(localStorage.getItem('TicTacToeSettings')); // re-hydrate the store
  }
};

const store = configureStore({
  reducer: { modal: modalSlice.reducer, game: gameSlice.reducer },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
