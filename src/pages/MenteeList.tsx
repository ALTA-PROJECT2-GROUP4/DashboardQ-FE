import React from "react";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import { BiEdit } from "react-icons/bi";
import { TfiTrash } from "react-icons/tfi";
import { GoBook } from "react-icons/go";

const MenteeList = () => {
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
          <select className="select w-1/5 max-w-xs rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <option disabled selected>
              Class
            </option>
            <option>FE12</option>
            <option>BE10</option>
            <option>QE8</option>
          </select>
          <select className="select w-1/5 max-w-xs rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <option disabled selected>
              Status
            </option>
            <option>Placement</option>
            <option>Active</option>
            <option>Eliminated</option>
          </select>
          <select className="select w-1/5 max-w-xs rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <option disabled selected>
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
              {/* row 1 */}
              <tr className="font-semibold">
                <th>1</th>
                <td>Jhon Doe</td>
                <td>FE12</td>
                <td>Active</td>
                <td>Non-Infomatic</td>
                <td>male</td>
                <td >
                  <p className="gap-2 font-normal flex">
                    <GoBook size={25}/>
                    Log
                  </p>
                </td>
                <td>
                  <p className="gap-2 font-normal flex">
                    <BiEdit size={25} />
                    Edit
                  </p>
                </td>
                <td>
                  <p className="gap-2 font-normal flex text-red-500">
                    <TfiTrash color="red" size={25} />
                    Delete
                  </p>
                </td>
              </tr>
              {/* row 2 */}
              <tr className="font-semibold">
                <th>2</th>
                <td>Jhon Doe</td>
                <td>BE12</td>
                <td>Graduet</td>
                <td>Non-Infomatic</td>
                <td>male</td>
                <td >
                  <p className="gap-2 font-normal flex">
                    <GoBook size={25}/>
                    Log
                  </p>
                </td>
                <td>
                  <p className="gap-2 font-normal flex">
                    <BiEdit size={25} />
                    Edit
                  </p>
                </td>
                <td>
                  <p className="gap-2 font-normal flex text-red-500">
                    <TfiTrash color="red" size={25} />
                    Delete
                  </p>
                </td>
              </tr>
              {/* row 3 */}
              <tr className="font-semibold">
                <th>3</th>
                <td>Jhon Doe</td>
                <td>QE12</td>
                <td>Eliminated</td>
                <td>Infomatic</td>
                <td>Female</td>
                <td >
                  <p className="gap-2 font-normal flex">
                    <GoBook size={25}/>
                    Log
                  </p>
                </td>
                <td>
                  <p className="gap-2 font-normal flex">
                    <BiEdit size={25} />
                    Edit
                  </p>
                </td>
                <td>
                  <p className="gap-2 font-normal flex text-red-500">
                    <TfiTrash color="red" size={25} />
                    Delete
                  </p>
                </td>
              </tr>
              {/* row 4 */}
              <tr className="font-semibold">
                <th>4</th>
                <td>Jhon Doe</td>
                <td>FE12</td>
                <td>Placement</td>
                <td>Infomatic</td>
                <td>Female</td>
                <td >
                  <p className="gap-2 font-normal flex">
                    <GoBook size={25}/>
                    Log
                  </p>
                </td>
                <td>
                  <p className="gap-2 font-normal flex">
                    <BiEdit size={25} />
                    Edit
                  </p>
                </td>
                <td>
                  <p className="gap-2 font-normal flex text-red-500">
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

export default MenteeList;
