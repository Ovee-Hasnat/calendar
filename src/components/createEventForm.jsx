import { createEvent, getEvents } from "@/Redux/apiCall";
import { XCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CreateEventForm = ({ close, date }) => {
  const [summary, setSummary] = useState(null);
  const [description, setDescription] = useState(null);
  const [start, setStart] = useState(date + "T00:00" || null);
  const [end, setEnd] = useState(null);
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
  const handleCreate = async () => {
    if ((summary, description, start, end)) {
      let res = await createEvent(dispatch, {
        summary,
        description,
        start: start + ":00+06:00",
        end: end + ":00+06:00",
      });

      await getEvents(dispatch);

      if (res === 200) {
        Toast.fire({
          icon: "success",
          title: "Event created successfully!!",
        });
        close();
      }
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <div className="h-screen w-screen flex justify-center items-center bg-black/80 ">
        <div className="max-w-lg w-4/5 mx-auto bg-gradient-to-r from-purple-400 via-fuchsia-700 to-pink-600 p-1 rounded-md">
          <div className="relative h-full bg-slate-900 p-2 rounded-md">
            <XCircleIcon
              className="text-white w-8 absolute top-1 right-2 opacity-50 hover:opacity-100 cursor-pointer"
              onClick={() => close()}
            />
            <h2 className="text-3xl text-center font-semibold my-4">
              Create Event
            </h2>

            <div className="my-7 px-8 font-extralight">
              <p>Summary</p>
              <input
                type="text"
                className="bg-transparent border-b w-full rounded-md border-slate-500 focus:outline-none p-2 mb-4"
                onChange={(e) => setSummary(e.target.value)}
              />

              <p>Description</p>
              <input
                type="text"
                className="bg-transparent border-b w-full rounded-md border-slate-500 focus:outline-none p-2 mb-4"
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
                onChange={(e) => setEnd(e.target.value)}
              />

              {error && (
                <p className="text-sm text-red-600">
                  Some input field is missing. Please check.
                </p>
              )}

              <button
                className="py-2 px-10 border rounded-lg mt-8 border-slate-500 hover:shadow-lg hover:shadow-slate-800 block mx-auto"
                onClick={handleCreate}
              >
                Create now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventForm;
