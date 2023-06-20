"use client";

import { createEvent, getEvents, updateEvent } from "@/Redux/apiCall";
import { XCircleIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Loading from "./loading";

const UpdateEventForm = ({ close, id }) => {
  const events = useSelector((state) => state.events);

  //Get single event
  let singleEvent = events.eventList.filter((event) => event.id == id);

  const [summary, setSummary] = useState(singleEvent[0].summary);
  const [description, setDescription] = useState(singleEvent[0].description);
  const [start, setStart] = useState(
    singleEvent[0].start.dateTime.slice(0, 16)
  );
  const [end, setEnd] = useState(singleEvent[0].end.dateTime.slice(0, 16));
  const [error, setError] = useState(false);

  const MySwal = withReactContent(Swal);

  const Toast = MySwal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const dispatch = useDispatch();
  const handleUpdate = async (id) => {
    console.log(start, end);
    if ((summary, description, start, end)) {
      let rawData = {
        summary,
        description,
        start: start + ":00+06:00",
        end: end + ":00+06:00",
      };
      let res = await updateEvent(dispatch, id, rawData);
      await getEvents(dispatch);
      if (res === 200) {
        Toast.fire({
          icon: "success",
          title: "Updated successfully!!",
        });
        close();
      }
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <div className="h-screen w-screen flex justify-center items-center bg-black/80 fixed top-0 left-0 z-20">
        <div className="max-w-lg w-4/5 mx-auto bg-gradient-to-r from-purple-400 via-fuchsia-700 to-pink-600 p-1 rounded-md">
          <div className="relative h-full bg-slate-900 p-2 rounded-md">
            <XCircleIcon
              className="text-white w-8 absolute top-1 right-2 opacity-50 hover:opacity-100 cursor-pointer"
              onClick={() => close()}
            />
            <h2 className="text-3xl text-center font-semibold my-4">
              Update Event
            </h2>

            <div className="my-7 px-8 font-extralight">
              <p>Summary</p>
              <input
                type="text"
                className="bg-transparent border-b w-full rounded-md border-slate-500 focus:outline-none p-2 mb-4"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />

              <p>Description</p>
              <input
                type="text"
                className="bg-transparent border-b w-full rounded-md border-slate-500 focus:outline-none p-2 mb-4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <p>Start</p>
              <input
                type="datetime-local"
                className="bg-transparent border-b w-full rounded-md border-slate-500 focus:outline-none p-2 mb-4 "
                value={start}
                onChange={(e) => setStart(e.target.value)}
              />

              <p>End</p>
              <input
                type="datetime-local"
                className="bg-transparent border-b w-full rounded-md border-slate-500 focus:outline-none p-2 mb-4 "
                value={end}
                onChange={(e) => setEnd(e.target.value)}
              />

              {error && (
                <p className="text-sm text-red-600">
                  Some input field is missing. Please check.
                </p>
              )}

              <button
                className="py-2 px-10 border rounded-lg mt-8 border-slate-500 hover:shadow-lg hover:shadow-slate-800 block mx-auto"
                onClick={() => handleUpdate(id)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEventForm;
