import { TrashIcon } from '@heroicons/react/24/outline'

import React from "react";

const EventList = () => {
  return (
    <div>
      {}
      <div className="mt-10 flex items-center gap-1">
        <div className="w-80 bg-gradient-to-r from-purple-400 via-fuchsia-700 to-pink-600 p-0.5 rounded-md">
          <div className="bg-slate-900 p-2 rounded-md">
            <div>Title</div>
            <div>Description</div>
            <div>Footer</div>
          </div>
        </div>
        <div>
            <TrashIcon className='text-pink-600 w-7 cursor-pointer'/>
        </div>
      </div>
    </div>
  );
};

export default EventList;
