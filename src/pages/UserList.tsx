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
  const [cookie, setCookie] = useCookies(["id", "token", "role"]);
  const checkToken = cookie.token;
  const checkRole = cookie.role;
  const checkId = cookie.id;

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
          Authorization: `Bearer ${checkToken}`,
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

  const handleDelete = async (id: any) => {
    MySwal.fire({
      icon: "warning",
      title: "Delete User ?",
      text: "pilih kembali untuk membatalkan",
      confirmButtonText: "Delete user",
    }).then((confirm) => {
      if (confirm.isConfirmed) {
        setLoading(true);
        axios
          .delete(`https://projectfebe.online/users/${id}`, {
            headers: {
              Authorization: `Bearer ${checkToken}`,
            },
          })
          .then((res) => {
            const { message } = res.data;

            const update = users.filter((item) => item.id !== id);
            setUsers(update);
            MySwal.fire({
              icon: "success",
              title: message,
              text: "Berhasil delete user",
              showCancelButton: false,
            });
          })
          .catch((err) => {
            const { data } = err.response;
            MySwal.fire({
              icon: "error",
              title: data.message,
              text: "Gagal delete user",
              showCancelButton: false,
            });
          })
          .finally(() => setLoading(false));
      }
    });
  };

  const handleNavigate = (id: any) => {
    if (checkRole === "admin") {
      navigate(`/edituser/${id}`);
    } else {
      navigate(`/edituser/${checkId}`);
    }
  };

  return (
    <Layout>
      <Navbar />
      <div className="-mt-16 flex flex-col p-20">
        <h2 className="mt-20 text-5xl font-semibold text-color1">User</h2>
        <div className="-mt-11 flex flex-wrap justify-end space-x-4">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="input-bordered input rounded-xl text-color1"
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
              {filteredUser.map((user, index) => (
                <tr key={user.id} className="font-normal">
                  <th className="font-normal">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.team}</td>
                  <td>{user.role}</td>
                  <td className="hover:cursor-pointer">
                    <p
                      onClick={() => handleNavigate(user.id)}
                      className="flex gap-2 font-normal"
                    >
                      <BiEdit size={25} />
                      Edit
                    </p>
                  </td>
                  <td>
                    <p
                      className="flex gap-2 font-normal text-red-500 hover:cursor-pointer hover:text-red-300"
                      onClick={() => handleDelete(user.id)}
                    >
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
