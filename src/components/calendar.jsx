"use-client";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useSelector } from "react-redux";

const localizer = momentLocalizer(moment);

const CalendarUI = () => {
  const events = useSelector((state) => state.events);
  return (
    <div>
      <div>
        {<Calendar
          localizer={localizer}
          events={events.eventList}
          style={{ height: 500 }}
          startAccessor="start"
          endAccessor="end"
        />}
      </div>
    </div>
  );
};

export default CalendarUI;
