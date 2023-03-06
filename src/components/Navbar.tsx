import React from "react";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 bg-[#395B64]">
      <div className="flex-1">
        <a className="btn btn-ghost text-3xl normal-case text-[#232932]">Brain. <span className="text-white">Academy</span></a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
            <li className="p-2 text-xl text-white hover:text-[#232932]">
                Dashboard
            </li>
            <li className="p-2 text-xl text-white hover:text-[#232932]">
                Mentee
            </li>
            <li className="p-2 text-xl text-white hover:text-[#232932]">
                User
            </li>
            <li className="p-2 text-xl text-white hover:text-[#232932]">
                Class
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
