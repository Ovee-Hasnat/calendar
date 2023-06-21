import React, { useEffect, useState } from "react";
import EventList from "./eventList";

import { useDispatch, useSelector } from "react-redux";
import { getCalendarEvents, getEvents, logout } from "@/Redux/apiCall";
import CreateEventForm from "./createEventForm";
import Loading from "./loading";
import CalendarUI from "./calendar";

const UserMenu = () => {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const events = useSelector((state) => state.events);
  console.log(events);

  const handleLogout = () => {
    logout(dispatch);
  };

  const handleGetEvents = () => {
    //getCalendarEvents(dispatch);
    getEvents(dispatch);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      {openModal && (
        <div className="fixed top-0 z-10">
          <CreateEventForm close={closeModal} />
        </div>
      )}

      {events.createFetching && <Loading />}
      <div className="mx-auto p-4">
        <div className="text-center pb-10 text-lg font-semibold">
          <h3>Welcome</h3>
        </div>

        <div className="w-fit mx-auto space-y-1 pb-5">
          <div className="flex gap-1">
            <button
              className="py-2 px-6 border rounded-lg block hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              onClick={handleGetEvents}
            >
              See all upcoming events
            </button>
            <button
              className="py-2 px-6 border rounded-lg block hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              onClick={handleLogout}
            >
              Sign Out
            </button>
          </div>

          <button
            className="py-2 w-full border rounded-lg block hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            onClick={() => setOpenModal(true)}
          >
            Create new event
          </button>
        </div>

        <div>
          {events.isFetching && <Loading />}
          {events.error && alert("Error on the server side, Try again later!")}
          {events.eventList && (
            <div className="flex flex-col xl:flex-row gap-8 my-8 xl:w-5/6 mx-auto">
              <div className="flex-1">
                <CalendarUI />
              </div>
              <div>
                <EventList />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
