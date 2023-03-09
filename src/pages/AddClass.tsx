import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import { UserType } from "../types/UserType";
import Swal from "../utils/Swal";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const AddClass = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);
  const [className, setClassName] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [mentorName, setMenteName] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    if (className && startDate && mentorName && endDate) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [className && startDate && mentorName && endDate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      class_name: className,
      start_date: startDate,
      end_date: endDate,
      mentor_name: mentorName,
    };

    axios
      .post(
        `https://projectfebe.online/class`,
        body,
        {
          headers: {
            Authorization: `Bearer ${checkToken}`,
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        MySwal.fire({
          icon: "success",
          title: message,
          text: "Sukses menambahkan kelas",
          showCancelButton: false,
          confirmButtonText: "Ke list class",
        }).then((oke) => {
          if (oke.isConfirmed) {
            navigate("/class");
          }
        });
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          icon: "error",
          title: data.message,
          text: "Gagal menambah kelas",
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setLoading(true);
    axios
      .get("https://projectfebe.online/users", {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((res) => {
        const { data } = res.data;
        setUsers(data);
      })
      .catch((err) => {
        alert(err.response.toString());
      })
      .finally(() => setLoading(false));
  }

  return (
    <Layout>
      <Navbar />
      <form onSubmit={(e) => handleSubmit(e)} className="pl-20">
        <p className="my-14 text-[32px] font-medium text-color1">
          Menambahkan Kelas
        </p>

        <div className="flex  items-center gap-4 text-[16px] font-medium text-color1">
          <p className="w-32">Class Name :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : FE Batch 12"
            onChange={(e) => setClassName(e.target.value)}
          />
        </div>

        <div className="mt-5 flex items-center text-[16px] font-medium text-color1 md:w-7/12 md:gap-4 lg:w-7/12 lg:gap-8">
          <p className="md:w-32 lg:w-28">User Name :</p>
          <select
            defaultValue={"DEFAULT"}
            id="input-role"
            name="option"
            className="select h-10 w-7/12 border-2 border-zinc-400  bg-[#EFFFFD] font-normal lg:w-7/12"
            onChange={(e) => setMenteName(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              Pilih Salah Satu
            </option>
            {users.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mr-16 mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-32">Start Class :</p>
          <CustomInput
            id="input-startClass"
            type="date"
            placeholder=""
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-32">End Class :</p>
          <CustomInput
            id="input-endClass"
            type="date"
            placeholder=""
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="mb-20 flex gap-5 md:mt-14 lg:mt-32">
          <CustomButton
            id="btn-cancel"
            label="Kembali"
            onClick={() => navigate("/class")}
          />
          <CustomButton
            id="btn-cancel"
            label="Menambah Kelas"
            loading={disable || loading}
          />
        </div>
      </form>
    </Layout>
  );
};

export default AddClass;
