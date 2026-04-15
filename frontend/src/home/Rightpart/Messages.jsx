import React from "react";
import MessageInfo from "./MessageInfo";

const Messages = () => {
  return (
    <div
      className="flex-1 overflow-y-auto"
      style={{ minHeight: "calc(90vh - 8vh)" }}
    >
      <MessageInfo />
      <MessageInfo />
    </div>
  );
};

export default Messages;
