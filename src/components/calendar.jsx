import React, { useState } from "react";
import ApiCalendar from "react-google-calendar-api";

const Calendar = () => {
  const [sign, setSign] = useState();
  console.log(sign);

  const config = {
    clientId:
      "30076709390-kugsbm5f9ei1aenlal1nc0i0v6cnat9c.apps.googleusercontent.com",
    apiKey: "AIzaSyDhinLYnJDBfKlCSYc7G564eIKcsOYj-w0",
    scope: "https://www.googleapis.com/auth/calendar",
    discoveryDocs: [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
    ],
  };

  var apiCalendar = new ApiCalendar(config);

  const handleAuth = async () => {
    await apiCalendar.handleAuthClick();
    setSign(apiCalendar.sign);
  };

  const handleSignOut = async () => {
    await apiCalendar.handleSignoutClick();
    setSign(apiCalendar.sign);
  };

  const handleGetEvents = () => {
    // The user need to signIn with Handle AuthClick before
    try {
      apiCalendar.listUpcomingEvents(10, "primary").then(({ result, err }) => {
        if (!err) {
          console.log(result.items);
        } else {
          console.log(err);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddEvents = () => {
    const eventFromNow = {
      summary: "Poc Dev From Now",
      time: 480,
    };

    apiCalendar
      .createEventFromNow(eventFromNow)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex gap-4">
        <button
          className="px-4 py-1 border border-red-700 rounded-md"
          onClick={handleAuth}
        >
          Authorize
        </button>
        <button
          className="px-4 py-1 border border-red-700 rounded-md"
          onClick={handleSignOut}
        >
          SignOut
        </button>
        <button
          className="px-4 py-1 border border-red-700 rounded-md"
          onClick={handleGetEvents}
        >
          Get Events
        </button>
        <button
          className="px-4 py-1 border border-red-700 rounded-md"
          onClick={handleAddEvents}
        >
          Add Event
        </button>
      </div>
    </>
  );
};

export default Calendar;
