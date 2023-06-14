import React from "react";
import EventList from "./eventList";

const UserMenu = () => {
  return (
    <div>
      <div className="h-[calc(100vh-182px)] max-w-5xl mx-auto p-4">
        <div className="text-center py-10 text-lg font-semibold">
          <h3>Hello, Ovee</h3>
        </div>

        <div className="flex gap-1 justify-center">
          <button className="py-2 px-6 border rounded-lg block hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            See all upcoming events
          </button>
          <button className="py-2 px-6 border rounded-lg block hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Sign Out
          </button>
        </div>

        <div>
          <EventList />
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
