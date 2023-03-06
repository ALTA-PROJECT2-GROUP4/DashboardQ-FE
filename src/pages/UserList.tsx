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
              <tr>
                <th>1</th>
                <td>Jhon Doe</td>
                <td>JhonDoe1@gmail.com</td>
                <td>Academic</td>
                <td>Admin</td>
                <td>
                  <button className="btn-ghost btn gap-2">
                    <BiEdit size={25} />
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn-ghost btn text-red-500 gap-2">
                    <TfiTrash color="red" size={25} />
                    Delete
                  </button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Jhon Doe</td>
                <td>JhonDoe12@gmail.com</td>
                <td>People</td>
                <td>User</td>
                <td>
                  <button className="btn-ghost btn gap-2">
                    <BiEdit size={25} />
                    edit
                  </button>
                </td>
                <td>
                  <button className="btn-ghost btn text-red-500 gap-2">
                    <TfiTrash color="red" size={25} />
                    Delete
                  </button>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Jhon Doe</td>
                <td>JhonDoe123@gmail.com</td>
                <td>Placement</td>
                <td>User</td>
                <td>
                  <button className="btn-ghost btn gap-2">
                    <BiEdit size={25} />
                    edit
                  </button>
                </td>
                <td>
                  <button className="btn-ghost btn text-red-500 gap-2">
                    <TfiTrash color="red" size={25} />
                    Delete
                  </button>
                </td>
              </tr>
              {/* row 4 */}
              <tr>
                <th>4</th>
                <td>Jhon Doe</td>
                <td>JhonDoe1234@gmail.com</td>
                <td>Admission</td>
                <td>Admin</td>
                <td>
                  <button className="btn-ghost btn gap-2">
                    <BiEdit size={25} />
                    edit
                  </button>
                </td>
                <td>
                  <button className="btn-ghost btn text-red-500 gap-2">
                    <TfiTrash color="red" size={25} />
                    Delete
                  </button>
                </td>
              </tr>
              {/* row 5 */}
              <tr>
                <th>5</th>
                <td>Jhon Doe</td>
                <td>JhonDoe12345@gmail.com</td>
                <td>Academic</td>
                <td>User</td>
                <td>
                  <button className="btn-ghost btn gap-2">
                    <BiEdit size={25} />
                    edit
                  </button>
                </td>
                <td>
                  <button className="btn-ghost btn text-red-500 gap-2">
                    <TfiTrash color="red" size={25} />
                    Delete
                  </button>
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
