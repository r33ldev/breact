import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  eventModalIsOpen: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    openEventModal(state) {
      state.eventModalIsOpen = true;
    },
    closesEventModal(state) {
      state.eventModalIsOpen = false;
    },
  },
});

export const { openEventModal, closesEventModal } = appSlice.actions;
export default appSlice.reducer