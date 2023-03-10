import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import Swal from "../utils/Swal";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { useCookies } from "react-cookie";
import { string } from "prop-types";

const AddUser = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [cookie, setCooie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisale] = useState<boolean>(true);

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [team, setTeam] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [bod, setBod] = useState<string>("");

  const [clear, setClear] = useState<string>("");

  // const [formData, setFormData] = useState({
  //   name: "",
  //   phone: "",
  //   password: "",
  //   email: "",
  //   team: "",
  //   gender: "",
  //   role: "",
  //   address: "",
  //   date_birth: "",
  // });

  useEffect(() => {
    if (name && password && email && role) {
      setDisale(false);
    } else {
      setDisale(true);
    }
  }, [name, password, email, role]);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const body = {
      name,
      phone,
      password,
      email,
      team,
      gender,
      role,
      address,
      date_birth: bod,
    };

    axios
      .post("https://projectfebe.online/register", body, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((res) => {
        const { message } = res.data;
        setClear(message);

        MySwal.fire({
          icon: "success",
          title: message,
          text: "berhasil menambahkan user baru",
          showCancelButton: false,
        });

        Array.from(document.querySelectorAll("input")).forEach(
          (input) => (input.value = "")
        );

        Array.from(document.querySelectorAll("select")).forEach(
          (input) => (input.value = "DEFAULT")
        );

        let role: any = document.getElementById("input-genderMen");
        role = { "": "" };
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          icon: "error",
          title: data.message,
          text: "gagal menambahkan user baru",
        });
      })
      .finally(() => setLoading(false));
  };

  // useEffect(() => {
  //   if (clear === "success create user account") {
  //     console.log("clear oke");
  //     Array.from(document.querySelectorAll("input")).forEach(
  //       (input) => (input.value = "")
  //     );
  //   }
  // }, []);

  return (
    <Layout>
      <Navbar />
      <form onSubmit={(e) => handleAdd(e)} className="pl-20">
        <p className="my-14 text-[32px] font-medium text-color1">
          Menambahkan User
        </p>

        <div className="flex  items-center gap-4 text-[16px] font-medium text-color1">
          <p className="w-24">
            <span className="text-red-500">*</span> Nama :
          </p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : Andre Taulani"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mr-12 mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-24">Phone :</p>
          <CustomInput
            id="input-phone"
            type="text"
            placeholder="Contoh : 089678876654"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mt-5 flex items-center text-[16px] font-medium text-color1 md:w-7/12 md:gap-0 lg:w-4/12 lg:gap-4">
          <p className="w-28">
            <span className="text-red-500">*</span> Password :
          </p>
          <CustomInput
            id="input-password"
            type="text"
            placeholder="Contoh : @Andretaulani"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mt-5 flex items-center gap-4 text-[16px] font-medium text-color1">
          <p className="w-24">
            <span className="text-red-500">*</span> E - mail :
          </p>
          <CustomInput
            id="input-email"
            type="text"
            placeholder="Contoh : andretaulani11@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mr-12 mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-24">Birthday :</p>
          <CustomInput
            id="input-date"
            type="date"
            placeholder={""}
            className="input-border input h-12 w-7/12 max-w-full rounded-lg border-2 border-zinc-400 bg-[#EFFFFD] px-4 py-0 font-normal text-color1 placeholder-slate-400 md:text-[14px] lg:text-[15px]"
            onChange={(e) => setBod(e.target.value)}
          />
        </div>

        <div className="mt-5 flex items-center text-[16px] font-medium text-color1 md:w-7/12 md:gap-4 lg:w-4/12 lg:gap-9">
          <p className="w-24">
            <span className="text-red-500">*</span> Role :
          </p>
          <select
            defaultValue={"DEFAULT"}
            id="input-role"
            name="option"
            className="select-bordered select w-7/12 border-2 border-zinc-400  bg-[#EFFFFD] font-normal lg:w-7/12"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              Pilih Salah Satu
            </option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>

        <div className="mr-12 mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-24">Team :</p>
          <select
            defaultValue={"DEFAULT"}
            id="input-team"
            name="option"
            className="border-navy select-bordered select w-7/12 border-2 border-zinc-400  bg-[#EFFFFD] font-normal lg:w-7/12"
            onChange={(e) => setTeam(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              Pilih Salah Satu
            </option>
            <option value="Academy">Academy</option>
            <option value="People Skill">People Skill</option>
            <option value="Admission">Admission</option>
            <option value="Placement">Placement</option>
          </select>
        </div>

        <div className="justify-center-center mt-8 flex items-center gap-4 text-[16px] font-medium text-color1 md:w-7/12 lg:w-4/12">
          <p className="w-24">Gender :</p>
          <div className="flex items-center gap-2">
            <input
              id="input-genderMen"
              type="radio"
              name="radio-2"
              className="radio-primary radio"
              value="men"
              onChange={(e) => setGender(e.target.value)}
            />
            <label className="text-[15px]">Men</label>
          </div>

          <div className="ml-10 flex items-center gap-2">
            <input
              id="input-genderWomen"
              type="radio"
              name="radio-2"
              className="radio-primary radio"
              value="women"
              onChange={(e) => setGender(e.target.value)}
            />
            <label className="text-[15px]">Women</label>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4 text-[16px] font-medium text-color1">
          <p className="w-24">Address :</p>
          <CustomInput
            id="input-address"
            type="text"
            placeholder="Contoh : Andre Taulani"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="mt-14 mb-20 flex gap-6">
          <CustomButton
            id="btn-cancel"
            onClick={() => navigate("/user")}
            label="Kembali"
          />
          <CustomButton
            id="btn-cancel"
            label="Menambah User"
            loading={loading || disable}
            // onClick={() => handleClear()}
          />
        </div>
      </form>
    </Layout>
  );
};

export default AddUser;
