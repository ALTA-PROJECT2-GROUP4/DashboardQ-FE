import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const AddUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisale] = useState<boolean>(false);

  return (
    <Layout>
      <Navbar />
      <div className="pl-20">
        <p className="my-14 text-[32px] font-medium text-color1">
          Menambahkan User
        </p>

        <div className="flex  items-center gap-4 text-[16px] font-medium text-color1">
          <p className="w-24">Nama :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : Andre Taulani"
          />
        </div>

        <div className="mr-12 mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-24">Phone :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : 089678876654"
          />
        </div>

        <div className="mt-5 flex items-center text-[16px] font-medium text-color1 md:w-7/12 md:gap-0 lg:w-4/12 lg:gap-4">
          <p className="w-28">Password :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : @Andretaulani"
          />
        </div>

        <div className="mt-5 flex items-center gap-4 text-[16px] font-medium text-color1">
          <p className="w-24">E - mail :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : andretaulani11@gmail.com"
          />
        </div>

        <div className="mr-12 mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-24">Birthday :</p>
          <CustomInput
            id="date"
            type="date"
            placeholder={""}
            className="input-border input h-12 w-7/12 max-w-full rounded-lg border-2 border-zinc-400 bg-[#EFFFFD] px-4 py-0 font-normal text-color1 placeholder-slate-400 md:text-[14px] lg:text-[15px]"
          />
        </div>

        <div className="mt-5 flex items-center text-[16px] font-medium text-color1 md:w-7/12 md:gap-4 lg:w-4/12 lg:gap-9">
          <p className="w-24">Role :</p>
          <select
            defaultValue={"DEFAULT"}
            id="input-role"
            name="option"
            className="border-navy select-bordered select w-7/12 border-2 border-zinc-400  bg-[#EFFFFD] font-normal lg:w-7/12"
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
            id="input-role"
            name="option"
            className="border-navy select-bordered select w-7/12 border-2 border-zinc-400  bg-[#EFFFFD] font-normal lg:w-7/12"
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
              type="radio"
              name="radio-2"
              className="radio-primary radio"
              checked
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
          <p className="w-24">Address :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : Andre Taulani"
          />
        </div>

        <div className="mt-14 mb-20 flex gap-5">
          <CustomButton id="btn-cancel" label="Kembali" />
          <CustomButton id="btn-cancel" label="Menambah User" />
        </div>
      </div>
    </Layout>
  );
};

export default AddUser;
