import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 z-20">
      <div className="h-screen w-screen flex justify-center items-center bg-black/90">
        <div className="space-y-5">
          <h3 className="text-6xl font-bold text-center animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Loading <br />
            ...
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Loading;
