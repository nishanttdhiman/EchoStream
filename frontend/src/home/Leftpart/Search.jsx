import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="">
      <div className="py-4 px-6">
        <form action="">
          <div className="flex space-x-3">
            <label className="border border-gray-800 bg-slate-900 rounded-lg flex items-center input w-[80%] ">
              <input
                className="grow-outline-none"
                type="text"
                placeholder="Search"
              />
            </label>
            <button>
              <FaSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
