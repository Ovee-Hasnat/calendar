"use client";

import { deleteEvent, getEvents } from "@/Redux/apiCall";
import {
  PencilSquareIcon,
  TrashIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Loading from "./loading";
import UpdateEventForm from "./updateEventForm";

const EventDetails = ({ id, close }) => {
  const events = useSelector((state) => state.events);
  const singleEvent = events.eventList.filter((event) => event.id == id)[0];

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
        close();
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
      {events.deleteFetching && <Loading />}

      {openUpdateModal && (
        <UpdateEventForm close={closeUpdateModal} id={updateId} />
      )}

      <div className="h-screen w-screen flex justify-center items-center bg-black/80 fixed top-0 left-0 z-10">
        <div className="max-w-lg w-4/5 mx-auto bg-gradient-to-r from-purple-400 via-fuchsia-700 to-pink-600 p-1 rounded-md">
          <div className="relative h-full bg-slate-900 px-2 py-7 rounded-md">
            <XCircleIcon
              className="text-white w-8 absolute top-1 right-2 opacity-50 hover:opacity-100 cursor-pointer"
              onClick={close}
            />
            <h2 className="text-3xl text-center font-semibold my-4">
              Event Details
            </h2>

            {/* details */}
            <div className="space-y-6 px-2">
              <div>
                <p className="text-xl capitalize font-semibold">
                  {singleEvent.summary}
                </p>
                <p className="font-thin tracking-wider italic ml-4">
                  {singleEvent.description}
                </p>
              </div>
              <div className="font-thin font-mono">
                <p>
                  Start:{" "}
                  {new Date(
                    singleEvent.start.dateTime || singleEvent.start.date
                  ).toLocaleString()}
                </p>
                <p>
                  End:{" "}
                  {new Date(
                    singleEvent.end.dateTime || singleEvent.start.date
                  ).toLocaleString()}
                </p>
              </div>
              <div className="font-thin">
                <p>Created by - {singleEvent.creator.email}</p>
                <p>
                  Status -{" "}
                  <span className="text-pink-500 capitalize">
                    {singleEvent.status}
                  </span>
                </p>
              </div>
              <div className="flex gap-4 items-center justify-between">
                <Link
                  href={singleEvent.htmlLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="py-1 px-4 border rounded-lg hover:border-pink-500 transition-all ease-linear duration-300"
                >
                  Google Calendar
                </Link>
                <div className="flex gap-2">
                  <PencilSquareIcon
                    className="text-pink-600 w-7 cursor-pointer"
                    onClick={() => handleUpdate(singleEvent.id)}
                  />
                  <TrashIcon
                    className="text-pink-600 w-7 cursor-pointer"
                    onClick={() => handleDelete(singleEvent.id)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
