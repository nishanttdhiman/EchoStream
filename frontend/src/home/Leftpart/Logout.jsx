import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
const Logout = () => {
  return (
    <div className="bg-transparent">
      <div className="text-2xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full ml-2 mt-1">
        <BiLogOutCircle />
      </div>
    </div>
  );
};

export default Logout;
