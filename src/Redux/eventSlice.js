import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventList: null,
  calendarEvents: null,
  isFetching: false,
  error: false,

  createFetching: false,

  deleteFetching: false,
};

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    //EVENT FETCHING
    eventFetchingStart: (state) => {
      state.isFetching = true;
    },
    eventFetchingSuccess: (state, action) => {
      state.isFetching = false;
      state.eventList = action.payload;
    },
    eventFetchingFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //CLEAR EVENTS
    clearEventList: (state) => {
      state.eventList = null;
    },

    //CREATE EVENT
    createEventStart: (state) => {
      state.createFetching = true;
    },
    createEventSuccess: (state) => {
      state.createFetching = false;
    },

    //DELETE EVENT
    deleteStart: (state) => {
      state.deleteFetching = true;
    },
    deleteSuccess: (state) => {
      state.deleteFetching = false;
    },

    //CLAENDAR EVENTS
    calendarEventStart: (state) => {
      state.isFetching = true;
    },
    calendarEventSuccess: (state, action) => {
      state.isFetching = false;
      state.calendarEvents = action.payload;
    },
    calendarEventFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //UPDATE EVENTS
    updateStart: (state) => {
      state.createFetching = true;
    },
    updateSuccess: (state) => {
      state.createFetching = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateStart,
  updateSuccess,
  eventFetchingStart,
  eventFetchingSuccess,
  eventFetchingFailure,
  clearEventList,
  createEventStart,
  createEventSuccess,
  deleteStart,
  deleteSuccess,
  calendarEventStart,
  calendarEventSuccess,
  calendarEventFailure,
} = eventSlice.actions;

export default eventSlice.reducer;
