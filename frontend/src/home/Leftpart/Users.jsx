import React from "react";
import UserInfo from "./UserInfo";

const Users = () => {
  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
        Messages
      </h1>
      <div
        className="py-2 flex-1 overflow-y-auto"
        style={{ maxHeight: "calc(74vh)" }}
      >
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
      </div>
    </div>
  );
};

export default Users;
