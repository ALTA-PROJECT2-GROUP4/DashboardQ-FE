import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

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
  const [cookie, setCookie] = useCookies(["token", "role"]);
  const checkRole = cookie.role;

  const [users, setUsers] = useState<UserType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

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
      .get("https://projectfebe.online/users", {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const filteredUser = users.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  const deleteUser = (id: number) => {
    axios
      .delete(`https://projectfebe.online/users/${id}`)
      .then(() => {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
      })
      .catch((error) => console.log(error));
  };

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
              value={search}
              onChange={(event) => setSearch(event.target.value)}
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
              {filteredUser.map((user) => (
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
