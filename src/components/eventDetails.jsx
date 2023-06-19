"use client";

import { XCircleIcon } from "@heroicons/react/24/outline";

const EventDetails = ({ id, close }) => {
  return (
    <div>
      <div className="h-screen w-screen flex justify-center items-center bg-black/80 fixed top-0 left-0 z-10">
        <div className="max-w-lg w-4/5 mx-auto bg-gradient-to-r from-purple-400 via-fuchsia-700 to-pink-600 p-1 rounded-md">
          <div className="relative h-full bg-slate-900 p-2 rounded-md">
            <XCircleIcon
              className="text-white w-8 absolute top-1 right-2 opacity-50 hover:opacity-100 cursor-pointer"
              onClick={close}
            />
            <h2 className="text-3xl text-center font-semibold my-4">
              Event Details
            </h2>

            <p>{id}</p>

            <p className="text-center animate-pulse">Loading, Please wait!</p>

            {/* details */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
