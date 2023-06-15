import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventList: null,
  isFetching: false,
  error: false,

  createFetching: false,

  deleteFetching: false,
};

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    eventFetchingStart: (state) => {
      state.isFetching = true;
    },
    eventFetchingSuccess: (state, action) => {
      state.isFetching = false;
      state.eventList = action.payload;
    },
    eventFetchingFailure: (state) => {
      state.error = true;
    },
    clearEventList: (state) => {
      state.eventList = null;
    },

    createEventStart: (state) => {
      state.createFetching = true;
    },
    createEventSuccess: (state) => {
      state.createFetching = false;
    },

    deleteStart: (state) => {
      state.deleteFetching = true;
    },
    deleteSuccess: (state) => {
      state.deleteFetching = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  eventFetchingStart,
  eventFetchingSuccess,
  eventFetchingFailure,
  clearEventList,
  createEventStart,
  createEventSuccess,
  deleteStart,
  deleteSuccess,
} = eventSlice.actions;

export default eventSlice.reducer;
