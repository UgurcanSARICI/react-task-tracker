import React from "react";

const Header = ({ active, setActive }) => {
  return (
    <div className="flex flex-col text-center py-5">
      <div className="text-4xl font-bold text-yellow-500">Task Tracker</div>
      <div
        onClick={() => setActive(!active)}
        className={`w-[10rem] py-[.6rem] mx-auto mt-5 cursor-pointer ${
          active ? "bg-yellow-700" : "bg-yellow-500"
        }`}
      >
        <button>{active ? "close add task bar" : "show add task bar"}</button>
      </div>
    </div>
  );
};

export default Header;
