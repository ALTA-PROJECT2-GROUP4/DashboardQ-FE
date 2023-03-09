import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import { ClassType, ClasType } from "../types/Mentee";
import { UserType } from "../types/UserType";
import Swal from "../utils/Swal";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const EditClass = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const { class_id } = useParams();

  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const [loading, setLoading] = useState<boolean>(false);

  const [change, setChange] = useState<ClasType>({});
  const [getUset, setGetUser] = useState<UserType[]>([]);
  const [className, setClassName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [startClass, setStartClass] = useState<string>("");
  const [endClass, setEndClass] = useState<string>("");

  useEffect(() => {
    dataUser();
  }, []);

  function dataUser() {
    setLoading(true);
    axios
      .get(`https://projectfebe.online/users`, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((res) => {
        const { data } = res.data;
        setGetUser(data);
      })
      .catch((err) => {
        alert(err.response.toString());
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setLoading(true);
    axios
      .get(
        `https://projectfebe.online/class/${class_id}`,
        {
          headers: {
            Authorization: `Bearer ${checkToken}`,
          },
        }
      )
      .then((res) => {
        const { name, batch, start_class, end_class, mentor } = res.data.data;
        setClassName(name);
        setUserName(mentor);
        setStartClass(start_class);
        setEndClass(end_class);
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
    let key: keyof typeof change;
    for (key in change) {
      formData.append(key, change[key]);
    }

    axios
      .put(
        `https://projectfebe.online/class/${class_id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${checkToken}`,
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        setChange(message);
        MySwal.fire({
          icon: "success",
          title: message,
          text: "Berhasil melakukan update",
          showCancelButton: false,
        });
        navigate("/class");
      })
      .catch((err) => {
        // const { data } = err.response;
        MySwal.fire({
          icon: "error",
          title: err.message,
          text: "Gagal update kelas",
          showCancelButton: false,
        });
        setChange({});
      })
      .finally(() => fetchData())
      .finally(() => setLoading(false));
  };

  const handleChange = (value: string, key: keyof typeof change) => {
    let temp = { ...change };
    temp[key] = value;
    setChange(temp);
  };

  return (
    <Layout>
      <Navbar />
      <form onSubmit={(e) => handleSubmit(e)} className="pl-20">
        <p className="my-14 text-[32px] font-medium text-color1">Edit Kelas</p>

        <div className="flex  items-center gap-4 text-[16px] font-medium text-color1">
          <p className="w-32">Class Name :</p>
          <CustomInput
            id="input-nama"
            type="text"
            defaultValue={className}
            placeholder="Contoh : Andre Taulani"
            onChange={(e) => handleChange(e.target.value, "name")}
          />
        </div>

        <div className="mt-5 flex items-center text-[16px] font-medium text-color1 md:w-7/12 md:gap-4 lg:w-7/12 lg:gap-8">
          <p className="md:w-32 lg:w-28">User Name :</p>
          <select
            defaultValue={"DEFAULT"}
            id="input-role"
            name="option"
            className="select h-10 w-7/12 border-2 border-zinc-400  bg-[#EFFFFD] font-normal lg:w-7/12"
            onChange={(e) => handleChange(e.target.value, "mentor")}
          >
            <option value="DEFAULT" disabled>
              {userName === "" ? "Pilih salah satu" : userName}
            </option>
            {getUset.map((item) => (
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
            defaultValue={startClass}
            onChange={(e) => handleChange(e.target.value, "start_class")}
          />
        </div>

        <div className="mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-32">End Class :</p>
          <CustomInput
            id="input-endClass"
            type="date"
            placeholder=""
            defaultValue={endClass}
            onChange={(e) => handleChange(e.target.value, "end_class")}
          />
        </div>

        <div className="mb-20 flex gap-5 md:mt-14 lg:mt-32">
          <CustomButton
            id="btn-cancel"
            label="Kembali"
            onClick={() => navigate("/class")}
          />
          <CustomButton id="btn-cancel" label="Edit Kelas" loading={loading} />
        </div>
      </form>
    </Layout>
  );
};

export default EditClass;
