import React from "react";

const UserInfo = ({ user }) => {
  return (
    <div>
      <div className="flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
              alt=""
            />
          </div>
        </div>
        <div>
          <h1 className="font-semibold">{user.fullname}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
