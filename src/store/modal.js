import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rulesIsShowm: false,
  settingsIsShowm: false,
  modalIsShown: false,
};

const modalSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    openRules(state) {
      state.modalIsShown = true;
      state.rulesIsShowm = true;
      state.settingsIsShowm = false;
    },

    openSettings(state) {
      state.modalIsShown = true;
      state.settingsIsShowm = true;
      state.rulesIsShowm = false;
    },

    closeModal(state) {
      state.modalIsShown = false;
      state.rulesIsShowm = false;
      state.settingsIsShowm = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
