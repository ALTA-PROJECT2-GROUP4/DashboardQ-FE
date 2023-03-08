import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

import withReactContent from "sweetalert2-react-content";
import { handleAuth } from "../utils/redux/reducer/reducer";
import Swal from "../utils/Swal";

import Logo from "../assets/navbar.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);
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

  // const [loading, setLoading] = useState<boolean>(false);
  // const [disable, setDisable] = useState<boolean>(true);

  const handleLogout = async () => {
    MySwal.fire({
      icon: "warning",
      title: " Ingin Logout ? ",
      text: " Pilih button Logout untuk lanjut ",
      cancelButtonText: "Kembali",
      confirmButtonText: "Logout",
    }).then((logout) => {
      if (logout.isConfirmed) {
        dispatch(handleAuth(false));
        removeCookie("token");
        removeCookie("name");
        removeCookie("email");
        removeCookie("role");

        navigate("/");
      } else if (logout.isDismissed) {
        navigate("/dashboard");
      }
    });
  };

  return (
    <div className="navbar sticky top-0 left-0 z-50 flex justify-between bg-[#395B64] py-4 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.3)]">
      <div className="ml-6 w-4/12 ">
        <img
          src={Logo}
          alt="navbar.svg"
          className="w-52 hover:cursor-pointer"
          onClick={() => navigate("/dashboard")}
        />
        {/* <a className="btn-ghost btn text-3xl normal-case text-[#232932]">
          Brain. <span className="text-white">Academy</span>
        </a> */}
      </div>

      <div className="pr-5">
        <ul className="menu menu-horizontal flex gap-8 px-1 text-xl font-semibold text-color2 ">
          <li
            onClick={() => navigate("/dashboard")}
            className="laila textShadow hover:cursor-pointer hover:text-[#232932]"
          >
            Dashboard
          </li>
          <li
            onClick={() => navigate("/mente")}
            className="laila textShadow hover:cursor-pointer  hover:text-[#232932]"
          >
            Mentee
          </li>
          <li
            onClick={() => navigate("/user")}
            className="laila textShadow hover:cursor-pointer hover:text-[#232932]"
          >
            User
          </li>
          <li
            onClick={() => navigate("/class")}
            className="laila textShadow hover:cursor-pointer hover:text-[#232932]"
          >
            Class
          </li>
        </ul>

        <div className="dropdown dropdown-end ml-16">
          <ul
            tabIndex={0}
            className="list-outside list-none text-end text-[15px] text-color2 hover:cursor-pointer hover:text-zinc-300"
          >
            <li className="laila font-semibold">{checkName}</li>
            <li className="laila">{checkEmail}</li>
          </ul>

          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box mt-3 w-44 bg-color2 p-2 text-[16px] font-medium text-color1 shadow"
          >
            <li className="p-0 leading-none">
              <button id="btn-logout" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
