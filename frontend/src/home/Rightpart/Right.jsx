import React from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import TypeSend from "./TypeSend";

const Right = () => {
  return (
    <div className="w-[70%] text-white bg-slate-900">
      <Chatuser />
      <div
        className="flex-1 overflow-y-auto"
        style={{ maxHeight: "calc(90vh - 8vh)" }}
      >
        <Messages />
      </div>
      <TypeSend />
    </div>
  );
};

export default Right;
