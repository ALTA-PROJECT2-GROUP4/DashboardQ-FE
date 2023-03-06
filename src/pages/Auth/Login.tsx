import Image from "../../assets/image.svg";
import Logo from "../../assets/logo.svg";

const Login = () => {
  return (
    <div className="h-10/12 -m-6 flex w-full">
      <div
        className="flex h-[30rem] w-6/12 justify-center bg-blue-300 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `URL(${Image})` }}
      ></div>

      <div className="w-7/12 pl-5 pt-5">
        <img src={Logo} alt="logo.svg" className="w-44" />
        <div className="mt-10 flex flex-col items-center text-[28px] font-semibold text-color1 lg:text-[32px]">
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
              type="text"
              placeholder="agungcahya122@gmail.com"
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
              className="input-border input h-8 w-9/12 max-w-full rounded-lg border-2 border-color4 bg-color2 px-4 py-4 font-normal text-color1 placeholder-slate-400 md:text-[14px] lg:text-[15px]"
            />
          </div>

          <button
            id="btn-login"
            className="mt-8 w-48 rounded-xl bg-color3 py-1 px-2 text-[15px] font-semibold text-white hover:bg-[rgba(31,64,104,0.8)] hover:text-color1 disabled:cursor-not-allowed disabled:bg-color2 md:text-[16px] lg:text-[18px]"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
