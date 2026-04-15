import React from "react";

const Chatuser = () => {
  return (
    <div className="flex space-x-3 items-center justify-center bg-gray-800 hover:bg-gray-600 duration-300 h-[8vh]">
      <div className="avatar online">
        <div className="w-10 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div>
        <h1 className="text-xl">John</h1>
        <span className="text-sm">Offline</span>
      </div>
    </div>
  );
};

export default Chatuser;
