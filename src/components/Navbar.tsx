import React, { FC, useState } from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

import Logo from "../assets/navbar.svg";

const Navbar = () => {
  const [cookie, , removeCookie] = useCookies([
    "token",
    "name",
    "email",
    "role",
  ]);
  const chechkToken = cookie.token;
  const checkEmail = cookie.email;
  const checkRole = cookie.role;
  const checkName = cookie.name;

  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);

  return (
    <div className="navbar sticky top-0 left-0 z-50 flex justify-between bg-[#395B64] py-4 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.3)]">
      <div className="ml-6 w-4/12 ">
        <img src={Logo} alt="navbar.svg" className="w-52" />
        {/* <a className="btn-ghost btn text-3xl normal-case text-[#232932]">
          Brain. <span className="text-white">Academy</span>
        </a> */}
      </div>

      <div className="">
        <ul className="menu menu-horizontal flex gap-8 px-1 text-xl font-semibold text-color2 ">
          <li className="laila textShadow hover:cursor-pointer hover:text-[#232932]">
            Dashboard
          </li>
          <li className="laila textShadow hover:cursor-pointer  hover:text-[#232932]">
            Mentee
          </li>
          <li className="laila textShadow hover:cursor-pointer hover:text-[#232932]">
            User
          </li>
          <li className="laila textShadow hover:cursor-pointer hover:text-[#232932]">
            Class
          </li>
        </ul>

        <ul className="ml-16 list-outside list-none text-end text-[15px] text-color2 hover:cursor-pointer hover:text-zinc-300">
          <li className="laila font-semibold">{checkName}</li>
          <li className="laila">{checkEmail}</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
