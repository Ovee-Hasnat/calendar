"use-client";

const Calendar = () => {
  return (
    <>
      <div className="flex gap-4 flex-wrap justify-center">
        <button className="px-4 py-1 border border-red-700 rounded-md">
          Authorize
        </button>
        <button className="px-4 py-1 border border-red-700 rounded-md">
          SignOut
        </button>
        <button className="px-4 py-1 border border-red-700 rounded-md">
          Get Events
        </button>
        <button className="px-4 py-1 border border-red-700 rounded-md">
          Add Event
        </button>
        <button className="px-4 py-1 border border-red-700 rounded-md">
          Get token
        </button>
      </div>
    </>
  );
};

export default Calendar;
