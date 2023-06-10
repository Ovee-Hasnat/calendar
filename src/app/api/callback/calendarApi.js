// import { useState, useEffect } from "react";
// const { google } = require("googleapis");
// import { useSession } from "next-auth/react";

// const CalendarApi = () => {
//   const [accessToken, setAccessToken] = useState(null);

//   const session = useSession();
  

//   useEffect(() => {
//     setAccessToken(session.data.access_token);
//   }, [session.data.access_token]);

//   useEffect(() => {
//     const loadGoogleCalendarApi = async () => {
//       try {
//         const calendar = google.calendar({
//           version: "v3",
//           auth: accessToken,
//         });

//         // Use the calendar variable to make API requests
//         const response = await calendar.events.list({
//           calendarId: "primary",
//           timeMin: new Date().toISOString(),
//           maxResults: 10,
//           singleEvents: true,
//           orderBy: "startTime",
//         });

//         console.log("Upcoming events:", response.data.items);
//       } catch (error) {
//         console.error("Error loading Google Calendar API:", error);
//       }
//     };

//     if (accessToken) {
//       loadGoogleCalendarApi();
//     }
//   }, [accessToken]);
// };

// export default CalendarApi;
