import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import { MenteeType } from "../types/Mentee";
import Swal from "../utils/Swal";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const EditUser = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const { user_id } = useParams();

  const [cookie, setCookie] = useCookies(["token", "role"]);
  const checkToken = cookie.token;
  const checkRole = cookie.role;

  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);

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
      .get(`https://projectfebe.online/profile/${user_id}`, {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    let key: keyof typeof submit;
    for (key in submit) {
      formData.append(key, submit[key]);
    }

    axios
      .put(
        checkRole === "admin"
          ? `https://projectfebe.online/users/${user_id}`
          : `https://projectfebe.online/profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${checkToken}`,
            "Content-Type": "multipart/json",
          },
        }
      )
      .then((res) => {
        const { message } = res.data;

        MySwal.fire({
          icon: "success",
          title: message,
          text: "Data Berhasil Diupdate",
          showCancelButton: false,
        });
        setSubmit({});
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          icon: "error",
          title: data.message,
          text: "Data Gagal Diupdate",
          showCancelButton: false,
        });
      })
      .finally(() => fetchData())
      .finally(() => setLoading(false));
  };

  const handleChange = (value: string, key: keyof typeof submit) => {
    let temp = { ...submit };
    temp[key] = value;
    setSubmit(temp);
  };

  return (
    <Layout>
      <Navbar />
      <form onSubmit={(e) => handleSubmit(e)} className="pl-20">
        <p className="my-14 text-[32px] font-medium text-color1">Edit User</p>

        <div className="flex  items-center gap-4 text-[16px] font-medium text-color1">
          <p className="w-24">Nama :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : Andre Taulani"
            defaultValue={name}
            onChange={(e) => handleChange(e.target.value, "name")}
          />
        </div>

        <div className="mr-12 mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-24">Phone :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : 089678876654"
            defaultValue={phone}
            onChange={(e) => handleChange(e.target.value, "phone")}
          />
        </div>

        <div className="mt-5 flex items-center text-[16px] font-medium text-color1 md:w-7/12 md:gap-0 lg:w-4/12 lg:gap-4">
          <p className="w-28">Password :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="**************"
            defaultValue={"**************"}
            disabled
          />
        </div>

        <div className="mt-5 flex items-center gap-4 text-[16px] font-medium text-color1">
          <p className="w-24">E - mail :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : andretaulani11@gmail.com"
            defaultValue={email}
            onChange={(e) => handleChange(e.target.value, "email")}
          />
        </div>

        <div className="mr-12 mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-24">Birthday :</p>
          <CustomInput
            id="date"
            type="date"
            placeholder={"test"}
            defaultValue={bod}
            onChange={(e) => handleChange(e.target.value, "date_birth")}
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
            disabled
          >
            <option value="DEFAULT" disabled>
              {role === "" ? "Pilih salah satu" : role}
            </option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <div className="mr-12 mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-24">Team :</p>
          <select
            defaultValue={"DEFAULT"}
            onChange={(e) => handleChange(e.target.value, "team")}
            id="input-role"
            name="option"
            className="border-navy select-bordered select w-7/12 border-2 border-zinc-400  bg-[#EFFFFD] font-normal lg:w-7/12"
          >
            <option value="DEFAULT" disabled>
              {team === "" ? "Pilih salah satu" : team}
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
              value="men"
              onChange={(e) => handleChange(e.target.value, "gender")}
            />
            <p className="text-[15px]">Men</p>
          </div>

          <div className="ml-10 flex items-center gap-2">
            <input
              type="radio"
              name="radio-2"
              className="radio-primary radio"
              value="women"
              onChange={(e) => handleChange(e.target.value, "gender")}
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
            defaultValue={address}
            onChange={(e) => handleChange(e.target.value, "address")}
          />
        </div>

        <div className="mt-14 mb-20 flex gap-5">
          <CustomButton
            id="btn-cancel"
            label="Kembali"
            onClick={() => navigate("/user")}
          />
          <CustomButton
            id="btn-cancel"
            label="Edit User"
            loading={loading || disable}
          />
        </div>
      </form>
    </Layout>
  );
};

export default EditUser;
