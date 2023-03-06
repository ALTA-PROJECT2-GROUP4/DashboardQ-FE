import React from "react";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import "../styles/index.css";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsMortarboard } from "react-icons/bs";
import { IoIosRepeat } from "react-icons/io";

const Dashboard = () => {
  return (
    <Layout>
      <Navbar />
      <div className="flex flex-col">
        <div className="flex-none p-6">
          <p className="mt-20 text-5xl font-semibold text-[#000000]">
            Dashboard
          </p>
        </div>
        <div className="mt-12">
          <p className="text-start text-5xl font-semibold p-6">Mentee</p>
          <div className="flex flex-row justify-center space-x-32 p-5">
            <div className="card h-60 w-2/6 gap-3 bg-white p-3 shadow-md shadow-black">
              <div className="card-body items-center justify-center">
                <div className="flex flex-col">
                  <figure className="px-10 pt-10">
                    <AiOutlineLineChart size={50} />
                  </figure>
                  <h2 className="card-title mt-10">Mentee active</h2>
                </div>
              </div>
            </div>
            <div className="card h-60 w-2/6 gap-3 bg-white p-3 shadow-md shadow-black">
              <div className="card-body items-center justify-center">
                <div className="flex flex-col">
                  <figure className="px-10 pt-10">
                    <BsMortarboard size={50} />
                  </figure>
                  <h2 className="card-title mt-10">Mentee Placement</h2>
                </div>
              </div>
            </div>
            <div className="card h-60 w-2/6 gap-3 bg-white p-3 shadow-md shadow-black">
              <div className="card-body items-center justify-center">
                <div className="flex flex-col">
                  <figure className="px-10 pt-10">
                    <IoIosRepeat size={50} style = {{transform: 'rotate(90deg)'}} />
                  </figure>
                  <h2 className="card-title mt-10">Mentee Feedback</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
