import React from "react";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import CustomButton from "../components/CustomButton";

const AddNewLog = () => {
  return (
    <Layout>
      <Navbar />
      <div className="-mt-10 flex flex-col p-8">
        <div className="flex-none p-6">
          <p className="mt-20 text-5xl font-semibold text-[#000000]">New Log</p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-row space-x-3 p-6">
            <p className="mt-3 text-xl font-semibold">Status</p>
            <div className="flex-none gap-2">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Say Something..."
                  className="input-bordered input"
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-row justify-end space-x-7 p-6">
            <select className="select w-full max-w-xs">
              <option disabled selected>
                Select-
              </option>
              <option>Interview</option>
              <option>Accepted</option>
              <option>Section End Unit</option>
              <option>Placement</option>
              <option>Active</option>
              <option>Eliminated</option>
            </select>
            <button className="btn rounded-2xl bg-[#1F4068]">
              Add New Log
            </button>
          </div>
        </div>
        <div className="mt-5 p-6">
          <p className="text-xl font-semibold">Feedback</p>
          <div className="mt-2 p-6">
            <textarea
              id="textarea"
              name="textarea"
              rows={3}
              className="h-64 w-10/12 rounded-lg p-3 shadow-sm shadow-black"
              placeholder="Say something...."
              defaultValue={""}
            />
          </div>
          <div className="flex justify-end -mt-48">
          <button className="btn w-28 rounded-2xl bg-[#1F4068]">
              submit
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddNewLog;
