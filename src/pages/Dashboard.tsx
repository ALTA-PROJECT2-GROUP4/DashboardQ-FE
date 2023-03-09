import React from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import "../styles/index.css";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsMortarboard } from "react-icons/bs";
import { IoIosRepeat } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsListNested } from "react-icons/bs";

const Dashboard = () => {
  const navigate = useNavigate();
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
          <p className="p-6 text-start text-5xl font-semibold">Mentee</p>
          <div className="flex flex-row justify-center space-x-32 p-5">
            <div className="card w-3/12 gap-3 bg-white p-3 shadow-md shadow-black">
              <div className="card-body items-center justify-center">
                <div className="flex flex-col">
                  <h2 className="card-title mx-auto text-3xl">
                    Mentee Graduate
                  </h2>
                  <ul className="mx-auto list-disc text-2xl font-black leading-[3rem]">
                    <li>Adelio Aileen</li>
                    <li>Arsenio August</li>
                    <li>Brady Candra</li>
                    <li>Buana Cakra</li>
                    <li>Brandon Cavan</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card w-3/12 gap-3 bg-white p-3 shadow-md shadow-black">
              <div className="card-body items-center justify-center">
                <div className="flex flex-col">
                  <h2 className="card-title mx-auto text-3xl">Mentee Active</h2>
                  <ul className="mx-auto list-disc text-2xl font-black leading-[3rem]">
                    <li>Carya Danish</li>
                    <li>Cullen Damar</li>
                    <li>Deon Evans</li>
                    <li>Dary Emery</li>
                    <li>Edwin Farel</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card w-3/12 gap-3 bg-white p-3 shadow-md shadow-black">
              <div className="card-body items-center justify-center">
                <div className="flex flex-col">
                  <h2 className="card-title mx-auto text-3xl">
                    Mentee Eliminated
                  </h2>
                  <ul className="mx-auto list-disc text-2xl font-black leading-[3rem]">
                    <li>Fahman Ghafi</li>
                    <li>Fannan Galih</li>
                    <li>Harry Gavin</li>
                    <li>Iravan Harun</li>
                    <li>Julian Keenan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <p className="p-5 text-start text-5xl font-semibold">User</p>
          <div className="flex flex-row justify-center space-x-32 p-5">
            <div className="card w-3/12 gap-3 bg-white p-3 shadow-md shadow-black">
              <div className="card-body items-center justify-center">
                <div className="flex flex-col">
                  <h2 className="card-title mx-auto text-3xl">User Active</h2>
                  <ul className="mx-auto list-disc text-2xl font-black leading-[3rem]">
                    <li>Indra Marva</li>
                    <li>Nadeem Pramadana</li>
                    <li>Paramayoga Reiji</li>
                    <li>Calista Erina</li>
                    <li>Ermina Gayatri</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card w-3/12 gap-3 bg-white p-3 shadow-md shadow-black">
              <div className="card-body items-center justify-center">
                <div className="flex flex-col">
                  <h2 className="card-title mx-auto text-3xl">User List</h2>
                  <ul className="mx-auto list-disc text-2xl font-black leading-[3rem]">
                    <li>Syandana Vaden</li>
                    <li>Wyman Yardan</li>
                    <li>Yasser Adelia</li>
                    <li>Aqilla Belinda</li>
                    <li>Balerina Carissa</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
            <div className="mt-12">
              <p className="p-5 text-start text-5xl font-semibold">Class</p>
              <div className="flex flex-row justify-center space-x-32 p-5">
                <div className="card w-3/12 gap-3 bg-white p-3 shadow-md shadow-black">
                  <div className="card-body items-center justify-center">
                    <div className="flex flex-col">
                      <h2 className="card-title mx-auto text-3xl">
                        Class List
                      </h2>
                      <ul className="mx-auto list-disc text-2xl font-black leading-[3rem]">
                        <li>UI/UX</li>
                        <li>Front-End Dev</li>
                        <li>Back-End Dev</li>
                        <li>Quality Assurance</li>
                        <li>Quality Control</li>
                        <li>Flutter</li>
                      </ul>
                    </div>
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
