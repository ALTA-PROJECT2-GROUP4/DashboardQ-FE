import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import { MenteTypes } from "../types/UserType";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import { BiEdit } from "react-icons/bi";
import { TfiTrash } from "react-icons/tfi";
import { GoBook } from "react-icons/go";

const MenteeList = () => {
  const [cookie, setCookie] = useCookies(["token", "role"]);
  const checkToken = cookie.token;

  const [loading, setLoading] = useState<boolean>(false);
  const [mentees, setMentees] = useState<MenteTypes[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setLoading(true);
    axios
      .get(
        "https://virtserver.swaggerhub.com/ALFIANADSAPUTRA_1/DashboardQ/1.0.0/mentee",
        {
          headers: {
            Authorization: `Bearer ${checkToken}`,
          },
        }
      )
      .then((res) => {
        const { data } = res.data;
        setMentees(data);
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
        <h2 className="mt-20 text-5xl font-semibold text-[#000000]">Mentee</h2>
        <div className="-mt-11 flex flex-wrap justify-end space-x-4">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search..."
              className="input-bordered input rounded-xl text-black"
            />
          </div>
          <button className="btn rounded-2xl bg-[#1F4068]">
            Add New Mentee
          </button>
        </div>
        <div className="mt-10 flex flex-wrap justify-end space-x-3">
          <select
            defaultValue={"DEFAULT"}
            name="option"
            id="input-class"
            className="select w-1/5 max-w-xs rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <option value="DEFAULT" disabled>
              Class
            </option>
            <option>FE12</option>
            <option>BE10</option>
            <option>QE8</option>
          </select>

          <select
            defaultValue={"DEFAULT"}
            className="select w-1/5 max-w-xs rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <option value="DEFAULT" disabled>
              Status
            </option>
            <option>Placement</option>
            <option>Active</option>
            <option>Eliminated</option>
          </select>

          <select
            defaultValue={"DEFAULT"}
            className="select w-1/5 max-w-xs rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <option value="DEFAULT" disabled>
              Category
            </option>
            <option>Infomatics</option>
            <option>Non-Informatics</option>
          </select>
          <button className="btn rounded-2xl bg-[#1F4068]">Filter</button>
        </div>

        <div className="mt-24 overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="w-1/12 bg-[#232932] text-white">No</th>
                <th className="w-2/12 bg-[#232932] text-white">Full Name</th>
                <th className="w-1/12 bg-[#232932] text-white">Class</th>
                <th className="w-1/12 bg-[#232932] text-white">Status</th>
                <th className="w-2/12 bg-[#232932] text-white">Category</th>
                <th className="w-1/12 bg-[#232932] text-white">Gender</th>
                <th className="w-1/12 bg-[#232932] text-white"></th>
                <th className="w-1/12 bg-[#232932] text-white"></th>
                <th className="w-1/12 bg-[#232932] text-white"></th>
              </tr>
            </thead>
            <tbody>
              {mentees.map((mentee, index) => (
                <tr key={mentee.id} className="font-semibold">
                  <th>{index + 1}</th>
                  <td>{mentee.name}</td>
                  <td>{mentee.class}</td>
                  <td>{mentee.status}</td>
                  <td>{mentee.category}</td>
                  <td>{mentee.gender}</td>
                  <td>
                    <p className="flex gap-2 font-normal">
                      <GoBook size={25} />
                      Log
                    </p>
                  </td>
                  <td>
                    <p className="flex gap-2 font-normal">
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

export default MenteeList;
