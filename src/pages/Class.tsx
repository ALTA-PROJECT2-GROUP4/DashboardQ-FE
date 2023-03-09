import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import moment from "moment";

import { ClassType } from "../types/Mentee";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import { BiEdit } from "react-icons/bi";
import { TfiTrash } from "react-icons/tfi";

const Class = () => {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["token", "role"]);
  const checkToken = cookie.token;

  const [loading, setLoading] = useState<boolean>(false);

  const [datas, setDatas] = useState<ClassType[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setLoading(true);
    axios
      .get(
        "https://virtserver.swaggerhub.com/ALFIANADSAPUTRA_1/DashboardQ/1.0.0/class",
        {
          headers: {
            Authorization: `Bearer ${checkToken}`,
          },
        }
      )
      .then((res) => {
        const { data } = res.data;
        setDatas(data);
      })
      .catch((err) => {
        alert(err.response.toString());
      })
      .finally(() => setLoading(false));
  }

  return (
    <Layout>
      <Navbar />
      <div className="-mt-16 flex flex-col p-20">
        <h2 className="mt-20 text-5xl font-semibold text-[#000000]">Class</h2>
        <div className="-mt-11 flex flex-wrap justify-end space-x-4">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search..."
              className="input-bordered input rounded-xl text-black"
            />
          </div>
          <button
            onClick={() => navigate("/addclass")}
            className="btn rounded-2xl bg-[#1F4068]"
          >
            Add New Class
          </button>
        </div>
        <div className="mt-24 overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="w-1/12 bg-[#232932] text-white">No</th>
                <th className="w-2/12 bg-[#232932] text-white">Name Class</th>
                <th className="w-2/12 bg-[#232932] text-white">Mentor Name</th>
                <th className="w-2/12 bg-[#232932] text-white">Start Class</th>
                <th className="w-2/12 bg-[#232932] text-white">End Class</th>
                <th className="w-1/12 bg-[#232932] text-white"></th>
                <th className="w-1/12 bg-[rgb(35,41,50)] text-white"></th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr key={data.id} className="font-normal">
                  <th className="font-normal">{index + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.mentor}</td>
                  <td>{moment(data.start_class).format("DD-MMM-YY")}</td>
                  <td>{moment(data.end_class).format("DD-MMM-YY")}</td>
                  <td onClick={() => navigate(`/editclass/${data.id}`)}>
                    <p className="flex gap-2 font-normal hover:cursor-pointer hover:text-[rgba(35,41,50,0.6)]">
                      <BiEdit size={25} />
                      Edit
                    </p>
                  </td>
                  <td>
                    <p className="flex gap-2 font-normal text-red-500">
                      <TfiTrash color="red" size={25} />
                      Delete
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Class;
