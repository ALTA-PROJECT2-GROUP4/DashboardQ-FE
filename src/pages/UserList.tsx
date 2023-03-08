import React, { useState, useEffect } from "react";
import axios from "axios";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import withReactContent from "sweetalert2-react-content";
import Swal from "../utils/Swal";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import { UserType } from "../types/UserType";

import { BiEdit } from "react-icons/bi";
import { TfiTrash } from "react-icons/tfi";

const UserList = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [cookie, setCookie] = useCookies(["role"]);
  const checkRole = cookie.role;

  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleAdmin = () => {
    MySwal.fire({
      icon: "error",
      title: "Akses Ditolak",
      text: "Tidak Bisa Menambah User Baru",
      showCancelButton: false,
    });
  };

  useEffect(() => {
    listUser();
  }, []);

  function listUser() {
    axios
      .get("http://54.179.232.197/users", {
        headers: {
          Authorization: `Bearer ${`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJ1c2VySUQiOjF9.YcjIOxo2EXg_aUFM-6RUZ5VJIYODTTYy25wlVlQFbho`}`,
        },
      })
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Layout>
      <Navbar />
      <div className="-mt-16 flex flex-col p-20">
        <h2 className="mt-20 text-5xl font-semibold text-[#000000]">User</h2>
        <div className="-mt-11 flex flex-wrap justify-end space-x-4">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search..."
              className="input-bordered input rounded-xl text-black"
            />
          </div>
          <button
            onClick={() =>
              checkRole === "admin" ? navigate("/adduser") : handleAdmin()
            }
            className="btn rounded-2xl bg-[#1F4068]"
          >
            Add New User
          </button>
        </div>
        <div className="mt-24 overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="w-1/12 bg-[#232932] text-white">No</th>
                <th className="w-2/12 bg-[#232932] text-white">Full Name</th>
                <th className="w-2/12 bg-[#232932] text-white">Email</th>
                <th className="w-2/12 bg-[#232932] text-white">Team</th>
                <th className="w-2/12 bg-[#232932] text-white">Role</th>
                <th className="w-1/12 bg-[#232932] text-white"></th>
                <th className="w-1/12 bg-[#232932] text-white"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="font-semibold">
                  <th>{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.team}</td>
                  <td>{user.role}</td>
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

export default UserList;
