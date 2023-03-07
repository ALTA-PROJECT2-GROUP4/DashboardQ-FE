import React from "react";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import { BiEdit } from "react-icons/bi";
import { TfiTrash } from "react-icons/tfi";

const UserList = () => {
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
          <button className="btn rounded-2xl bg-[#1F4068]">Add New User</button>
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
              {/* row 1 */}
              <tr className="font-semibold">
                <th>1</th>
                <td>Jhon Doe</td>
                <td>JhonDoe1@gmail.com</td>
                <td>Academic</td>
                <td>Admin</td>
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
              {/* row 2 */}
              <tr className="font-semibold">
                <th>2</th>
                <td>Jhon Doe</td>
                <td>JhonDoe12@gmail.com</td>
                <td>People</td>
                <td>User</td>
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
              {/* row 3 */}
              <tr className="font-semibold">
                <th>3</th>
                <td>Jhon Doe</td>
                <td>JhonDoe123@gmail.com</td>
                <td>Placement</td>
                <td>User</td>
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
              {/* row 4 */}
              <tr className="font-semibold">
                <th>4</th>
                <td>Jhon Doe</td>
                <td>JhonDoe1234@gmail.com</td>
                <td>Admission</td>
                <td>Admin</td>
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
              {/* row 5 */}
              <tr className="font-semibold">
                <th>5</th>
                <td>Jhon Doe</td>
                <td>JhonDoe12345@gmail.com</td>
                <td>Academic</td>
                <td>User</td>
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
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default UserList;
