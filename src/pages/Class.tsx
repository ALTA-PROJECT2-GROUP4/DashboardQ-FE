import React from "react";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import { BiEdit } from "react-icons/bi";
import { TfiTrash } from "react-icons/tfi";

const Class = () => {
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
          <button className="btn rounded-2xl bg-[#1F4068]">
            Add New Class
          </button>
        </div>
        <div className="mt-24 overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="w-1/12 bg-[#232932] text-white">No</th>
                <th className="w-2/12 bg-[#232932] text-white">Name Class</th>
                <th className="w-2/12 bg-[#232932] text-white">Mentor Name</th>
                <th className="w-2/12 bg-[#232932] text-white">Start Class</th>
                <th className="w-2/12 bg-[#232932] text-white">End Class</th>
                <th className="w-1/12 bg-[#232932] text-white"></th>
                <th className="w-1/12 bg-[#232932] text-white"></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="font-semibold">
                <th>1</th>
                <td>Front End Enginner Batch 12</td>
                <td>Jhon Doe</td>
                <td>13-Jan-2023</td>
                <td>14-Mar-2023</td>
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
                <td>Back End Enginner Batch 12</td>
                <td>Jhon Doe</td>
                <td>25-Jan-2023</td>
                <td>26-Mar-2023</td>
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
                <td>Quality Assurance Batch 8</td>
                <td>Jhon Doe</td>
                <td>18-Jan-2023</td>
                <td>19-Mar-2023</td>
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

export default Class;
