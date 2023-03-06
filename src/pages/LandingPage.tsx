import Layout from "../components/Layout";
import Logo from "../assets/logo.svg";
import Landing from "../assets/landing.svg";

import withReactContent from "sweetalert2-react-content";
import Swal from "../utils/Swal";
import { useState } from "react";
import Login from "./Auth/Login";

import { IoMdCloseCircleOutline } from "react-icons/io";

const LandingPage = () => {
  const MySwal = withReactContent(Swal);

  const [modal, setModal] = useState<string>("modal");

  const HandleLogin = async () => {
    setModal("modal-open");
  };

  const HandleRegis = () => {
    MySwal.fire({
      icon: "info",
      html: `
            <p class="text-color1 mb-5 text-[20px] capitalize">Ingin mendaftar Akun ?</p>
            <p class="text-color1 mb-5 text-[18px] capitalize">Hubungi kami di Whatsapp berikut :</p>
            <a class="text-color6 px-4 py-0 rounded-full" href="${"https://wa.me/6289523894186"}">Menuju Whatsapp</a>`,
      showConfirmButton: false,
      showCancelButton: false,
    });
  };

  return (
    <Layout>
      <div className="flex h-screen pt-5 md:flex-row md:pl-8 lg:flex-row lg:pl-12">
        <div className="text-color1 md:mt-16 md:w-11/12 md:text-[28px] lg:mt-6 lg:w-5/12 lg:text-[18px]">
          <img src={Logo} alt="logo.svg" className="w-64" />
          <p className="font-semibold tracking-wide md:mt-28 md:text-[64px] lg:mt-16 lg:text-[46px]">
            Let's Start
          </p>
          <p className="mt-2 font-medium tracking-widest md:text-[46px] lg:text-[32px]">
            Managing Your Study <br /> Team Management
          </p>
          <p className="mt-8">
            Control your team's activities in <br /> everywhere and anytime with
            easy.
          </p>
          <p className="mt-8">
            Make your account now and enjoy the <br /> convience.
          </p>

          <button
            onClick={() => HandleLogin()}
            className="rounded-2xl bg-color3 py-1 font-medium text-color2 shadow-[1px_2px_3px_0px_rgba(0,0,0,0.4)] md:mt-14 md:w-[18rem] md:text-[28px] lg:mt-8 lg:w-52 lg:text-[20px]"
          >
            Login
          </button>

          <p className="md:mt-4 md:text-[20px] lg:mt-2 lg:text-[14px]">
            don't have account ?
            <span
              onClick={() => HandleRegis()}
              className="font-semibold hover:cursor-pointer hover:text-[rgba(35,41,50,0.9)]"
            >
              {" "}
              Register now
            </span>
          </p>
        </div>

        <div className="hidden justify-center md:hidden md:w-6/12 lg:flex lg:w-7/12">
          <img src={Landing} alt="landing.svg" className="w-10/12" />
        </div>
      </div>

      <div id="modal-login" className={`modal ${modal}`}>
        <div className="modal-box max-w-full bg-color2 shadow-xl md:w-11/12 lg:w-8/12">
          <div
            onClick={() => setModal("modal")}
            className="rounded-ful absolute right-2 top-2 z-50 rounded-3xl bg-color3 px-2 py-0.5 text-[20px] font-bold text-color2 hover:cursor-pointer hover:bg-[rgba(31,64,104,0.8)]  hover:text-color1"
          >
            <p className="" onClick={() => setModal("modal")}>
              ✕
            </p>
          </div>
          <Login />
        </div>
      </div>
    </Layout>
  );
};
export default LandingPage;
