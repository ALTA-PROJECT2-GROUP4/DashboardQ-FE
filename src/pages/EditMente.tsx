import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import { MenteeType } from "../types/Mentee";
import Swal from "../utils/Swal";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const EditMente = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [cookie, setCookie] = useCookies(["token", "role"]);
  const checkToken = cookie.token;
  const checkRole = cookie.role;

  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);

  const [submit, setSubmit] = useState<MenteeType>({});
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [team, setTeam] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [bod, setBod] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setLoading(true);
    axios
      .get("https://projectfebe.online/profile/4", {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((res) => {
        const { name, date_birth, role, email, gender, team, phone, address } =
          res.data.data;

        setName(name);
        setBod(date_birth);
        setRole(role);
        setEmail(email);
        setGender(gender);
        setTeam(team);
        setPhone(phone);
        setAddress(address);
      })
      .catch((err) => {
        alert(err.response.toString());
      })
      .finally(() => setLoading(false));
  }

  return (
    <Layout>
      <Navbar />
      <div className="pl-20">
        <p className="my-14 text-[32px] font-medium text-color1">Edit Mente</p>

        <div className="flex  items-center gap-4 text-[16px] font-medium text-color1">
          <p className="w-32">Nama :</p>
          <CustomInput
            id="input-nama"
            type="text"
            defaultValue={name}
            placeholder="Contoh : Andre Taulani"
          />
        </div>

        <div className="mr-12 mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-32">Phone :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : 089678876654"
            defaultValue={phone}
          />
        </div>

        <div className="mt-5 flex items-center text-[16px] font-medium text-color1 md:w-7/12 md:gap-8 lg:w-4/12 lg:gap-14">
          <p className="w-28">Telegram :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : 0888988876676"
            defaultValue={phone}
          />
        </div>

        <div className="mt-5 flex items-center gap-4 text-[16px] font-medium text-color1">
          <p className="w-32">E - mail :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : andretaulani11@gmail.com"
            defaultValue={email}
          />
        </div>

        <div className="mr-12 mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-32">Birthday :</p>
          <CustomInput
            id="date"
            type="date"
            placeholder={"test"}
            defaultValue={bod}
            className="input-border input h-12 w-7/12 max-w-full rounded-lg border-2 border-zinc-400 bg-[#EFFFFD] px-4 py-0 font-normal text-color1 placeholder-slate-400 md:text-[14px] lg:text-[15px]"
          />
        </div>

        <div className="mt-5 flex items-center text-[16px] font-medium text-color1 md:w-7/12 md:gap-4 lg:w-4/12 lg:gap-9">
          <p className="w-32">Status :</p>
          <select
            defaultValue={"DEFAULT"}
            id="input-role"
            name="option"
            className="select-bordered select w-7/12 border-2 border-zinc-400 bg-[#EFFFFD]  text-[16px] font-normal lg:w-7/12"
          >
            <option value="DEFAULT" disabled>
              Pilih Salah Satu
            </option>
            <option value="Active">Active</option>
            <option value="Graduate">Graduate</option>
            <option value="Eliminate">Eliminate</option>
          </select>
        </div>

        <div className="mr-12 mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-32">Class :</p>
          <select
            defaultValue={"DEFAULT"}
            id="input-role"
            name="option"
            className="select-bordered select w-7/12 border-2 border-zinc-400 bg-[#EFFFFD]  text-[16px] font-normal lg:w-7/12"
          >
            <option value="DEFAULT" disabled>
              Pilih Salah Satu
            </option>
            <option value="FE Batch 12">FE Batch 12</option>
          </select>
        </div>

        <div className="justify-center-center mt-8 flex items-center gap-4 text-[16px] font-medium text-color1 md:w-7/12 lg:w-4/12">
          <p className="w-32">Gender :</p>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="radio-2"
              className="radio-primary radio"
            />
            <p className="text-[15px]">Men</p>
          </div>

          <div className="ml-10 flex items-center gap-2">
            <input
              type="radio"
              name="radio-2"
              className="radio-primary radio"
            />
            <p className="text-[15px]">Women</p>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4 text-[16px] font-medium text-color1">
          <p className="w-32">Address :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : Jl. Hayam Wuruk no.12 Tingal, Garum, Blitar"
          />
        </div>

        <div className="mt-8 flex items-center gap-4 text-[16px] font-medium text-color1">
          <p className="w-32">Home Address :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : Jl. Nusantara no.03 Kendalrejo, Talun, Blitar"
          />
        </div>

        <p className="my-8 text-[28px] font-medium text-color1">
          Emergency Data
        </p>

        <div className="flex  items-center gap-4 text-[16px] font-medium text-color1">
          <p className="w-32">Nama :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : Joko Susilo"
          />
        </div>

        <div className="mr-12 mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-32">Phone :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : 089678876654"
          />
        </div>

        <div className="mt-5 flex items-center text-[16px] font-medium text-color1 md:w-7/12 md:gap-4 lg:w-4/12 lg:gap-9">
          <p className="w-32">Status :</p>
          <select
            defaultValue={"DEFAULT"}
            id="input-role"
            name="option"
            className="select-bordered select w-7/12 border-2 border-zinc-400 bg-[#EFFFFD]  text-[16px] font-normal lg:w-7/12"
          >
            <option value="DEFAULT" disabled>
              Pilih Salah Satu
            </option>
            <option value="Parent">Parent</option>
            <option value="Grand Parent">Grand Parent</option>
            <option value="Other Family">Other Family</option>
          </select>
        </div>

        <p className="my-8 text-[28px] font-medium text-color1">
          Education Data
        </p>

        <div className="justify-center-center mt-8 flex items-center gap-4 text-[16px] font-medium text-color1 md:w-7/12 lg:w-5/12">
          <p className="w-32">Category :</p>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="radio-1"
              className="radio-primary radio"
            />
            <p className="text-[15px]">Informatic</p>
          </div>

          <div className="ml-10 flex items-center gap-2">
            <input
              type="radio"
              name="radio-1"
              className="radio-primary radio"
            />
            <p className="text-[15px]">Non-Informatic</p>
          </div>
        </div>

        <div className="mr-12 mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-32">Major :</p>
          <CustomInput
            id="input-major"
            type="text"
            placeholder="Contoh : Magister"
          />
        </div>

        <div className="mt-5 flex items-center text-[16px] font-medium text-color1 md:w-7/12 md:gap-8 lg:w-4/12 lg:gap-14">
          <p className="w-28">Graduate :</p>
          <CustomInput
            id="input-graduate"
            type="text"
            placeholder="Contoh : Teknik Elektro"
          />
        </div>

        <div className="mt-14 mb-20 flex gap-5">
          <CustomButton id="btn-cancel" label="Kembali" />
          <CustomButton id="btn-cancel" label="Edit Mente" />
        </div>
      </div>
    </Layout>
  );
};

export default EditMente;
