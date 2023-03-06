import Layout from "../components/Layout";
import Logo from "../assets/logo.svg";
import Landing from "../assets/landing.svg";

const LandingPage = () => {
  return (
    <Layout>
      <div className="flex h-screen pl-12 pt-8">
        <div className="w-5/12 text-[18px] text-color1">
          <img src={Logo} alt="logo.svg" className="w-64" />
          <p className="mt-14 text-[46px] font-semibold tracking-wide">
            Let's Start
          </p>
          <p className="mt-2 text-[32px] font-medium tracking-widest">
            Managing Your Study <br /> Team Management
          </p>
          <p className="mt-8">
            Control your team's activities in <br /> everywhere and anytime with
            easy.
          </p>
          <p className="mt-8">
            Make your account now and enjoy the <br /> convience.
          </p>

          <button className="mt-8 w-52 rounded-2xl bg-color3 py-1 text-[20px] font-medium text-color2 shadow-[1px_2px_3px_0px_rgba(0,0,0,0.4)]">
            Login
          </button>

          <p className="mt-2 text-[14px]">
            don't have account ?
            <span className="font-semibold hover:cursor-pointer hover:text-[rgba(35,41,50,0.9)]">
              {" "}
              Register now
            </span>
          </p>
        </div>

        <div className="flex w-7/12 justify-center">
          <img src={Landing} alt="landing.svg" className="w-10/12" />
        </div>
      </div>
    </Layout>
  );
};
export default LandingPage;
