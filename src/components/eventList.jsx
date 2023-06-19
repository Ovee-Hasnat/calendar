"use client";
import { deleteEvent, getEvents } from "@/Redux/apiCall";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./loading";
import UpdateEventForm from "./updateEventForm";

const EventList = () => {
  const events = useSelector((state) => state.events);

  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  const closeUpdateModal = () => {
    setOpenUpdateModal(false);
  };

  const handleUpdate = (id) => {
    setOpenUpdateModal(true);
    setUpdateId(id);
  };

  // Sweet Alert
  const MySwal = withReactContent(Swal);

  const dispatch = useDispatch();
  const handleDelete = async (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#b406b8",
      cancelButtonColor: "#636363",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteEvent(dispatch, id);
        await getEvents(dispatch);
        if (res === 200) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        } else {
          Swal.fire(
            "Couldn't delete!",
            "There was a problem at server side.",
            "error"
          );
        }
      }
    });
  };
  return (
    <div>
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 w-fit">
        Upcoming Events -
      </h2>
      <div className="my-10 flex flex-wrap gap-6 items-center justify-around">
        {events.deleteFetching && <Loading />}

        {openUpdateModal && (
          <div className="fixed top-0 left-0 z-10">
            <UpdateEventForm close={closeUpdateModal} id={updateId} />
          </div>
        )}

        {events.eventList.map((event) => (
          <div key={event.id} className="h-[90px]">
            <div className=" flex h-full items-center gap-1">
              <div className="w-80 h-full bg-gradient-to-r from-purple-400 via-fuchsia-700 to-pink-600 p-0.5 rounded-md">
                <div className="h-full bg-slate-900 p-2 rounded-md flex flex-col justify-evenly">
                  <div>
                    <h4 className="capitalize">{event.summary}</h4>
                  </div>
                  <div>
                    <p className="italic text-sm opacity-50">
                      {event.description}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm opacity-60 w-fit ml-auto font-thin">
                      {new Date(event.start.dateTime).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <PencilSquareIcon
                  className="text-pink-600 w-7 cursor-pointer"
                  onClick={() => handleUpdate(event.id)}
                />
                <TrashIcon
                  className="text-pink-600 w-7 cursor-pointer"
                  onClick={() => handleDelete(event.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
