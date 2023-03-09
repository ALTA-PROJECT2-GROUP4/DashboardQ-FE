import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import "../styles/index.css";

const MenteeLog = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Navbar />
      <div className="flex flex-col p-20">
        <p className="laila -mt-12 text-5xl font-bold text-color1">
          Mentee Log
        </p>
        <div className="-mt-3 flex flex-col p-4 text-color1">
          <p className="laila text-3xl font-semibold ">Jhon Doe</p>
          <p className="laila text-xl font-semibold opacity-60">FE Batch 12</p>
          <p className="laila text-xl font-semibold opacity-60">
            Non-Informatics
          </p>
        </div>
        <div className="-mt-28 flex justify-end">
          <div className="overflow-x-auto">
            <table className="table w-4">
              <tbody>
                <tr>
                  <th className="laila w-1/12 bg-transparent">Phone</th>
                  <td className="laila bg-transparent font-semibold">
                    : 081122334455
                  </td>
                </tr>

                <tr>
                  <th className="laila lead w-1/12 bg-transparent">Telegram</th>
                  <td className="laila bg-transparent font-semibold">
                    : @jhondoe
                  </td>
                </tr>

                <tr>
                  <th className="laila w-1/12 bg-transparent">Email</th>
                  <td className="laila bg-transparent font-semibold">
                    : jhonDoe@gmail.com
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-5 text-end">
              <CustomButton
                id="btn-addLog"
                label="Add new log"
                onClick={() => navigate("/addfeedback")}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col ">
          <div className="card w-full gap-3 bg-white">
            <div className="card-body grid grid-cols-3">
              <div className="font-semibold">
                <p>Interview</p>
                <p>Jhon Doe</p>
                <p className="opacity-90">13-Jan-2023</p>
                <div className="mt-11 mb-6">
                  <p>Status</p>
                  <p>interview agreed</p>
                </div>
              </div>
              <div className="col-span-2 font-semibold">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate neque dolorum excepturi, ab possimus necessitatibus
                  amet voluptas blanditiis illo quasi, eos optio minus sapiente
                  odit, nesciunt id odio alias! Deleniti. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Culpa totam omnis
                  molestiae, atque reprehenderit rem mollitia adipisci? Repellat
                  sapiente impedit aperiam omnis culpa voluptas totam autem
                  laudantium eveniet atque. Eius?Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Voluptatum vel praesentium,
                  perferendis similique natus, a autem animi ut eaque vero iusto
                  est corporis repellat sit hic necessitatibus labore error
                  accusamus. Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Modi aspernatur nihil consequuntur provident magni, sed
                  ipsum aliquam ullam exercitationem! Reprehenderit quae
                  praesentium corporis facere minima voluptatibus voluptatum,
                  vero porro placeat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col ">
          <div className="card w-full gap-3 bg-white">
            <div className="card-body grid grid-cols-3">
              <div className="font-semibold">
                <p>Accepted</p>
                <p>Jhon Doe</p>
                <p className="opacity-90">20-Jan-2023</p>
                <div className="mt-11 mb-6">
                  <p>Status</p>
                  <p>Join Class</p>
                </div>
              </div>
              <div className="col-span-2 font-semibold">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate neque dolorum excepturi, ab possimus necessitatibus
                  amet voluptas blanditiis illo quasi, eos optio minus sapiente
                  odit, nesciunt id odio alias! Deleniti. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Culpa totam omnis
                  molestiae, atque reprehenderit rem mollitia adipisci? Repellat
                  sapiente impedit aperiam omnis culpa voluptas totam autem
                  laudantium eveniet atque. Eius?Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Voluptatum vel praesentium,
                  perferendis similique natus, a autem animi ut eaque vero iusto
                  est corporis repellat sit hic necessitatibus labore error
                  accusamus. Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Modi aspernatur nihil consequuntur provident magni, sed
                  ipsum aliquam ullam exercitationem! Reprehenderit quae
                  praesentium corporis facere minima voluptatibus voluptatum,
                  vero porro placeat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col ">
          <div className="card w-full gap-3 bg-white">
            <div className="card-body grid grid-cols-3">
              <div className="font-semibold">
                <p>Section Ends Unit</p>
                <p>Jhon Doe</p>
                <p className="opacity-90">13-Feb-2023</p>
                <div className="mt-11 mb-6">
                  <p>Status</p>
                  <p>Continue to section 2</p>
                </div>
              </div>
              <div className="col-span-2 font-semibold">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate neque dolorum excepturi, ab possimus necessitatibus
                  amet voluptas blanditiis illo quasi, eos optio minus sapiente
                  odit, nesciunt id odio alias! Deleniti. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Culpa totam omnis
                  molestiae, atque reprehenderit rem mollitia adipisci? Repellat
                  sapiente impedit aperiam omnis culpa voluptas totam autem
                  laudantium eveniet atque. Eius?Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Voluptatum vel praesentium,
                  perferendis similique natus, a autem animi ut eaque vero iusto
                  est corporis repellat sit hic necessitatibus labore error
                  accusamus. Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Modi aspernatur nihil consequuntur provident magni, sed
                  ipsum aliquam ullam exercitationem! Reprehenderit quae
                  praesentium corporis facere minima voluptatibus voluptatum,
                  vero porro placeat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MenteeLog;
