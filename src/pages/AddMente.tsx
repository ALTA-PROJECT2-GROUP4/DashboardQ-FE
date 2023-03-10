import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import { useCookies } from "react-cookie";
import Swal from "../utils/Swal";
import { string } from "prop-types";
import withReactContent from "sweetalert2-react-content";

const AddMente = () => {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;
  const MySwal = withReactContent(Swal);

  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  const [name, setName] = useState<string>("");
  const [nameEdata, setNameEdata] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bod, setBod] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [homeAddress, setHomeAddress] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [telegram, setTelegram] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [phoneEdata, setPhoneEdata] = useState<string>("");
  const [cls, setCls] = useState<string>(""); //class
  const [status, setStatus] = useState<string>("");
  const [statusEdata, setStatusEdata] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [major, setMajor] = useState<string>("");
  const [graduate, setGraduate] = useState<string>("");

  const [clear, setClear] = useState<string>("");

  useEffect(() => {
    if (name  && cls && status && category && gender) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, cls, status, category, gender])

  const handleAddMentee = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const body = {
      class: cls,
      name,
      nameEdata,
      email,
      major,
      phone,
      phoneEdata,
      status,
      statusEdata,
      gender,
      address,
      graduate,
      telegram,
      category,
      homeAddress,
      date_birth: bod,
    };

    axios
      .post(
        `https://projectfebe.online/mentee`,
        body,
        {
          headers: {
            Authorization: `Bearer ${checkToken}`,
          },
        }
      )
      .then((response) => {
        const { message } = response.data;
        setClear(message);
        MySwal.fire({
          icon: "success",
          title: message,
          text: "success add new mentee",
          showCancelButton: false,
        });
        Array.from(document.querySelectorAll("input")).forEach(
          (input) => (input.value = "")
        );

        Array.from(document.querySelectorAll("select")).forEach(
          (input) => (input.value = "DEFAULT")
        );
      })
      .catch((error) => {
        const { data } = error.response;
        MySwal.fire({
          icon: "error",
          title: data.message,
          text: "failed add new mentee",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <Navbar />
      <form onSubmit={(e) => handleAddMentee(e)} className="pl-20">
        <p className="my-14 text-[32px] font-medium text-color1">
          Menambahkan Mente
        </p>

        <div className="flex  items-center gap-4 text-[16px] font-medium text-color1">
          <p className="w-32">Nama :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : Andre Taulani"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mr-12 mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-32">Phone :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : 089678876654"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mt-5 flex items-center text-[16px] font-medium text-color1 md:w-7/12 md:gap-8 lg:w-4/12 lg:gap-14">
          <p className="w-28">Telegram :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : 0888988876676"
            onChange={(e) => setTelegram(e.target.value)}
          />
        </div>

        <div className="mt-5 flex items-center gap-4 text-[16px] font-medium text-color1">
          <p className="w-32">E - mail :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : andretaulani11@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mr-12 mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-32">Birthday :</p>
          <CustomInput
            id="date"
            type="date"
            placeholder={"test"}
            className="input-border input h-12 w-7/12 max-w-full rounded-lg border-2 border-zinc-400 bg-[#EFFFFD] px-4 py-0 font-normal text-color1 placeholder-slate-400 md:text-[14px] lg:text-[15px]"
            onChange={(e) => setBod(e.target.value)}
          />
        </div>

        <div className="mt-5 flex items-center text-[16px] font-medium text-color1 md:w-7/12 md:gap-4 lg:w-4/12 lg:gap-9">
          <p className="w-32">Status :</p>
          <select
            defaultValue={"DEFAULT"}
            id="input-role"
            name="option"
            className="select-bordered select w-7/12 border-2 border-zinc-400 bg-[#EFFFFD]  text-[16px] font-normal lg:w-7/12"
            onChange={(e) => setStatus(e.target.value)}
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
            onChange={(e) => setCls(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              Pilih Salah Satu
            </option>
            <option value="FE Batch 12">FE Batch 12</option>
            <option value="FE Batch 13">FE Batch 13</option>
            <option value="BE Batch 10">BE Batch 10</option>
            <option value="QE Batch 9">BE Batch 9</option>
            <option value="QE Batch 10">QE Batch 10</option>
          </select>
        </div>

        <div className="justify-center-center mt-8 flex items-center gap-4 text-[16px] font-medium text-color1 md:w-7/12 lg:w-4/12">
          <p className="w-32">Gender :</p>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="radio-2"
              className="radio-primary radio"
              value="men"
              onChange={(e) => setGender(e.target.value)}
            />
            <p className="text-[15px]">Men</p>
          </div>

          <div className="ml-10 flex items-center gap-2">
            <input
              type="radio"
              name="radio-2"
              className="radio-primary radio"
              value="women"
              onChange={(e) => setGender(e.target.value)}
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
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="mt-8 flex items-center gap-4 text-[16px] font-medium text-color1">
          <p className="w-32">Home Address :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : Jl. Nusantara no.03 Kendalrejo, Talun, Blitar"
            onChange={(e) => setHomeAddress(e.target.value)}
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
            defaultValue={nameEdata}
            onChange={(e) => setNameEdata(e.target.value)}
          />
        </div>

        <div className="mr-12 mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-32">Phone :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : 089678876654"
            onChange={(e) => setPhoneEdata(e.target.value)}
          />
        </div>

        <div className="mt-5 flex items-center text-[16px] font-medium text-color1 md:w-7/12 md:gap-4 lg:w-4/12 lg:gap-9">
          <p className="w-32">Status :</p>
          <select
            defaultValue={"DEFAULT"}
            id="input-role"
            name="option"
            className="select-bordered select w-7/12 border-2 border-zinc-400 bg-[#EFFFFD]  text-[16px] font-normal lg:w-7/12"
            onChange={(e) => setStatusEdata(e.target.value)}
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
              value="Informatic"
              onChange={(e) => setCategory(e.target.value)}
            />
            <p className="text-[15px]">Informatic</p>
          </div>

          <div className="ml-10 flex items-center gap-2">
            <input
              type="radio"
              name="radio-1"
              className="radio-primary radio"
              value="Non-Informatic"
              onChange={(e) => setCategory(e.target.value)}
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
            onChange={(e) => setMajor(e.target.value)}
          />
        </div>

        <div className="mt-5 flex items-center text-[16px] font-medium text-color1 md:w-7/12 md:gap-8 lg:w-4/12 lg:gap-14">
          <p className="w-28">Graduate :</p>
          <CustomInput
            id="input-graduate"
            type="text"
            placeholder="Contoh : Teknik Elektro"
            onChange={(e) => setGraduate(e.target.value)}
          />
        </div>

        <div className="mt-14 mb-20 flex gap-5">
          <CustomButton
            id="btn-cancel"
            label="Kembali"
            onClick={() => navigate("/mente")}
          />
          <CustomButton
            id="btn-cancel"
            label="Menambah Mente"
            type="submit"
            loading={loading || disabled}
          />
        </div>
      </form>
    </Layout>
  );
};

export default AddMente;
