import React, { useState, useEffect } from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "../utils/Swal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import { MenteeType } from "../types/Mentee";
import { useCookies } from "react-cookie";

import { BiEdit } from "react-icons/bi";
import { TfiTrash } from "react-icons/tfi";
import { GoBook } from "react-icons/go";

const MenteeList = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [mentee, setMentee] = useState<MenteeType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filterClass, setFilterClass] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [cookie, setCookie] = useCookies(["token", "role"]);
  const checkRole = cookie.role;
  const [loading, setLoading] = useState<boolean>(false);

  const handleUser = () => {
    MySwal.fire({
      icon: "error",
      title: "Akses Ditolak",
      text: "Tidak Bisa Menambah User Baru",
      showCancelButton: false,
    });
  };

  useEffect(() => {
    listMentee();
  }, []);

  function listMentee() {
    setLoading(true);
    axios
      .get(`https://projectfebe.online/mentee`, {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((response) => {
        setMentee(response.data.data);
        console.log("datas :", response.data.data);
      })
      .catch((error) => {
        alert(error.response.toString());
      });
  }

  const handleFilterClassChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterClass(event.target.value);
  };

  const handleFilterCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterCategory(event.target.value);
  };

  const handleFilterStatusChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterStatus(event.target.value);
  };

  const filterMentee = mentee.filter(
    (item) =>
      item.name?.toLowerCase().includes(search.toLowerCase()) &&
      (filterClass === "" || item.class === filterClass) &&
      (filterCategory === "" || item.category === filterCategory) &&
      (filterStatus === "" || item.status === filterStatus)
  );

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
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="input-bordered input rounded-xl text-black"
            />
          </div>
          <button
            onClick={() =>
              checkRole === "admin" && "user"
                ? navigate("/addmente")
                : handleUser()
            }
            className="btn rounded-2xl bg-[#1F4068]"
          >
            Add New Mentee
          </button>
        </div>
        <div className="mt-10 flex flex-wrap justify-end space-x-3">
          <select
            className="select w-1/5 max-w-xs rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            value={filterClass}
            onChange={handleFilterClassChange}
          >
            <option value="">Class</option>
            <option value="FE Batch 12">FE Batch 12</option>
            <option value="FE Batch 13">FE Batch 13</option>
            <option value="BE Batch 10">BE Batch 10</option>
            <option value="QE Batch 09">QE Batch 09</option>
            <option value="QE Batch 10">QE Batch 10</option>
          </select>
          <select
            className="select w-1/5 max-w-xs rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            value={filterStatus}
            onChange={handleFilterStatusChange}
          >
            <option value="">Status</option>
            <option value="Placement">Placement</option>
            <option value="Gradueted">Graduet</option>
            <option value="Active">Active</option>
            <option value="Eliminated">Eliminated</option>
          </select>
          <select
            className="select w-1/5 max-w-xs rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            value={filterCategory}
            onChange={handleFilterCategoryChange}
          >
            <option value="">Category</option>
            <option value="IT">Infomatics</option>
            <option value="Non-IT">Non-Informatics</option>
          </select>
          <button className="btn rounded-2xl bg-[#1F4068]">Filter</button>
        </div>

        <div className="mt-24 overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="w-1/12 bg-[#232932] text-color2">No</th>
                <th className="w-2/12 bg-[#232932] text-color2">Full Name</th>
                <th className="w-1/12 bg-[#232932] text-color2">Class</th>
                <th className="w-1/12 bg-[#232932] text-color2">Status</th>
                <th className="w-1/12 bg-[#232932] text-color2">Category</th>
                <th className="w-1/12 bg-[#232932] text-color2">Gender</th>
                <th className="w-1/12 bg-[#232932] text-color2"></th>
                <th className="w-1/12 bg-[#232932] text-color2"></th>
                <th className="w-1/12 bg-[#232932] text-color2"></th>
              </tr>
            </thead>
            <tbody>
              {filterMentee.map((mentee) => (
                <tr key={mentee.id} className="font-normal">
                  <th className="font-normal">{mentee.id}</th>
                  <td>{mentee.name}</td>
                  <td>{mentee.class}</td>
                  <td>{mentee.status}</td>
                  <td>{mentee.category}</td>
                  <td>{mentee.gender}</td>
                  <td>
                    <p
                      onClick={() => navigate(`/menteelog/${mentee.id}`)}
                      className="flex gap-2 font-normal hover:cursor-pointer hover:text-[rgba(35,41,50,0.6)]"
                    >
                      <GoBook size={25} />
                      Log
                    </p>
                  </td>
                  <td onClick={() => navigate(`/editmente/${mentee.id}`)}>
                    <p className="flex gap-2 font-normal hover:cursor-pointer hover:text-[rgba(35,41,50,0.6)]">
                      <BiEdit size={25} />
                      Edit
                    </p>
                  </td>
                  <td>
                    <p className="flex gap-2 font-normal text-red-500 hover:cursor-pointer hover:text-red-300">
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
