"use-client";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";

import { useSelector } from "react-redux";
import CreateEventForm from "./createEventForm";
import { useState } from "react";
import EventDetails from "./eventDetails";

const CalendarUI = () => {
  const events = useSelector((state) => state.events);
  const calendarEvents = [];

  events.eventList.map((event) => {
    let ev = {
      title: event.summary,
      start: new Date(event.start.dateTime),
      id: event.id,
    };

    calendarEvents.push(ev);
  });

  const handleDateClick = (arg) => {
    // bind with an arrow function
    //alert((arg.dateStr));
    setCreateModalDate(arg.dateStr);
    setOpenModal(true);
  };

  function renderEventContent(eventInfo) {
    //console.log(eventInfo);
    return (
      <div
        onClick={() => handleEventDetails(eventInfo.event.id)}
        className="w-full"
      >
        <div className="w-2 h-2 rounded-full bg-pink-500 md:hidden" />
        <div className="hidden md:flex gap-1">
          <p className="font-semibold text-pink-600">{eventInfo.timeText}</p>
          <p className="italic text-sm truncate w-16 lg:w-20">
            {eventInfo.event.title}
          </p>
        </div>
      </div>
    );
  }

  // Create event modal
  const [openModal, setOpenModal] = useState(false);
  const [createModalDate, setCreateModalDate] = useState(null);

  const closeModal = () => {
    setOpenModal(false);
    setEventDetailsModal(false);
  };

  // Event Details Modal
  const [eventDetailsModal, setEventDetailsModal] = useState(false);
  const [eventDetailsID, setEventDetailsID] = useState("");

  const handleEventDetails = (id) => {
    setEventDetailsModal(true);
    setEventDetailsID(id);
  };

  console.log(eventDetailsID);

  return (
    <div>
      {openModal && (
        <div className="fixed top-0 left-0 z-10">
          <CreateEventForm close={closeModal} date={createModalDate} />
        </div>
      )}

      {eventDetailsModal && (
        <EventDetails id={eventDetailsID} close={closeModal} />
      )}
      <div className="my-8">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          dateClick={handleDateClick}
          initialView="dayGridMonth"
          eventContent={renderEventContent}
          nowIndicator={true}
          editable={true}
          selectable={true}
          selectMirror={true}
          initialEvents={calendarEvents}
          /*  
          [
            {
              title:
                "nice event with a long title to check the space it takes. letsss goooo",
              start: new Date("2023-06-20T20:50:00+06:00"),
            },
            {
              title: "bad event",
              start: new Date(),
            },
            {
              title: "bad event",
              start: new Date().setHours(18),
            },
          ]}
          */
        />
      </div>
    </div>
  );
};

export default CalendarUI;
