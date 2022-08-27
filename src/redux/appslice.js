import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppData(state,action) {
      state.data = action.payload;
    },
    clearAppData(state) {
      state.data = {};
    },
  },
});

export const { openEventModal, closesEventModal } = appSlice.actions;
export default appSlice.reducer