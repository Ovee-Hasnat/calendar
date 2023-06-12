"use-client";

import React, { useState } from "react";
import ApiCalendar from "react-google-calendar-api";

const Calendar = () => {
  const config = {
    clientId:
      "452401131066-fl9gos11pauaklk2286slgepb1c6u932.apps.googleusercontent.com",
    // clientId:
    //   "30076709390-kugsbm5f9ei1aenlal1nc0i0v6cnat9c.apps.googleusercontent.com",
    apiKey: "AIzaSyDbJqpsxSxbpDU_5C6BuDzE0cwzgERlPCQ",
    //apiKey: "AIzaSyDhinLYnJDBfKlCSYc7G564eIKcsOYj-w0",
    scope: "https://www.googleapis.com/auth/calendar",
    discoveryDocs: [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
    ],
  };

  var apiCalendar = new ApiCalendar(config);

  const handleAuth = async () => {
    await apiCalendar.handleAuthClick();
  };

  const handleSignOut = async () => {
    await apiCalendar.handleSignoutClick();
  };

  const handleGetToken = () => {
    console.log(apiCalendar.sign);
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
    try {
      apiCalendar
        .createEventFromNow(eventFromNow)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("You're not authenticated!");
    }
  };

  return (
    <>
      <div className="flex gap-4 flex-wrap justify-center">
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
        <button
          className="px-4 py-1 border border-red-700 rounded-md"
          onClick={handleGetToken}
        >
          Get token
        </button>
      </div>
    </>
  );
};

export default Calendar;
