import { configureStore } from '@reduxjs/toolkit';

import modalSlice from './modal';
import gameSlice from './game';

const store = configureStore({
  reducer: { modal: modalSlice.reducer, game: gameSlice.reducer },
});

export default store;
