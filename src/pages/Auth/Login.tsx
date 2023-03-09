import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import { handleAuth } from "../../utils/redux/reducer/reducer";
import Swal from "../../utils/Swal";

import Image from "../../assets/image.svg";
import Logo from "../../assets/logo.svg";
import CustomButton from "../../components/CustomButton";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);
  const [cookie, setCookie] = useCookies([
    "id",
    "token",
    "role",
    "email",
    "name",
  ]);

  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (email && password) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };

    axios
      .post("https://projectfebe.online/login", body)
      .then((res) => {
        const { message, token } = res.data;
        const { id, name, email, role } = res.data.data;

        setCookie("token", token, { path: "/" });
        setCookie("role", role, { path: "/" });
        setCookie("email", email, { path: "/" });
        setCookie("name", name, { path: "/" });
        setCookie("id", id, { path: "/" });

        dispatch(handleAuth(true));
        MySwal.fire({
          icon: "success",
          title: message,
          text: "Terimakasih telah melakukan Login",
          showCancelButton: false,
          confirmButtonText: "Masuk Dashboard",
        }).then((lanjut) => {
          if (lanjut.isConfirmed) {
            navigate("/dashboard");
          }
        });
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          title: "Login Failed",
          text: data.message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="h-10/12 -m-6 flex w-full">
      <div
        className="flex h-[30rem] w-6/12 justify-center bg-blue-300 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `URL(${Image})` }}
      ></div>

      <div className="w-7/12 pl-5 pt-5">
        <img src={Logo} alt="logo.svg" className="w-44" />
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="mt-10 flex flex-col items-center text-[28px] font-semibold text-color1 lg:text-[32px]"
        >
          <p>Login </p>
          <p className="mt-2 border-b-2 border-dashed border-color1 pb-3 font-normal md:text-[16px] lg:text-[18px]">
            Let's login and enjoy together
          </p>

          <div className="mt-12 flex w-11/12 items-center pl-5 md:gap-0 lg:gap-4">
            <p className="font-normal md:w-4/12 md:text-[16px] lg:w-3/12 lg:text-[18px]">
              e - mail :
            </p>
            <input
              id="input-email"
              type="email"
              placeholder="agungcahya122@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              className="input-border input h-8 w-9/12 max-w-full rounded-lg border-2 border-color4 bg-color2 py-4 font-normal text-color1 placeholder-slate-400 md:px-2 md:text-[14px] lg:px-4 lg:text-[15px]"
            />
          </div>

          <div className="mt-8 flex w-11/12 items-center pl-5">
            <p className="w-4/12 font-normal md:text-[16px] lg:text-[18px]">
              password :
            </p>
            <input
              id="input-email"
              type="password"
              placeholder="***********"
              onChange={(e) => setPassword(e.target.value)}
              className="input-border input h-8 w-9/12 max-w-full rounded-lg border-2 border-color4 bg-color2 px-4 py-4 font-normal text-color1 placeholder-slate-400 md:text-[14px] lg:text-[15px]"
            />
          </div>

          <div className="mt-5">
            <CustomButton
              id="btn-login"
              label="Login"
              loading={loading || disable}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
