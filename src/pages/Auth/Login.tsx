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
        <div className="mt-10 flex flex-col items-center text-[32px] font-semibold text-color1">
          <p>Login </p>
          <p className="mt-2 border-b-2 border-dashed border-color1 pb-3 text-[18px] font-normal">
            Let's login and enjoy together
          </p>

          <div className="mt-12 flex w-11/12 items-center gap-4 pl-5">
            <p className="text-[18px] font-normal">e - mail :</p>
            <input
              id="input-email"
              type="text"
              placeholder="agungcahya122@gmail.com"
              className="input-border input h-8 w-9/12 max-w-full rounded-lg border-2 border-color4 bg-color2 px-4 py-4 text-[15px] font-normal text-color1 placeholder-slate-400"
            />
          </div>

          <div className="mt-8 flex w-11/12 items-center pl-5">
            <p className="w-4/12 text-[18px] font-normal">password :</p>
            <input
              id="input-email"
              type="text"
              placeholder="***********"
              className="input-border input h-8 w-9/12 max-w-full rounded-lg border-2 border-color4 bg-color2 px-4 py-4 text-[15px] font-normal text-color1 placeholder-slate-400"
            />
          </div>

          <button
            id="btn-login"
            placeholder="Login"
            className="rounded-3xl bg-color1 py-3 px-6 text-[15px] font-semibold text-white hover:bg-[rgb(0,140,255)] disabled:cursor-not-allowed disabled:bg-color2 md:ml-[30vw] md:mt-10 md:text-[16px] lg:mt-14 lg:ml-[34vw] lg:text-[18px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
