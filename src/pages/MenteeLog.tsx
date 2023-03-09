import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import { FeedbackTypes } from "../types/UserType";

import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

import "../styles/index.css";

const MenteeLog = () => {
  const navigate = useNavigate();
  const { mente_id } = useParams();
  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [user, setUser] = useState<FeedbackTypes[]>([]);
  const [category, setCategory] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [telegram, setTelegram] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  // const [user, setUser] = useState<>([])

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setLoading(true);
    axios
      .get(
        `https://virtserver.swaggerhub.com/ALFIANADSAPUTRA_1/DashboardQ/1.0.0/feedback/${mente_id}`,
        {
          headers: {
            Authorization: `Bearer ${checkToken}`,
          },
        }
      )
      .then((res) => {
        const { name, category, phone, telegram, email, user } =
          res.data.data.mentee;
        setName(name);
        setCategory(category);
        setPhone(phone);
        setTelegram(telegram);
        setEmail(email);
        setUser(user);
      })
      .catch((err) => {
        alert(err.response.toString());
      })
      .finally(() => setLoading(false));
  }

  return (
    <Layout>
      <Navbar />
      <div className="flex flex-col p-20">
        <p className="laila -mt-12 text-5xl font-bold text-color1">
          Mentee Log
        </p>
        <div className="-mt-3 flex flex-col p-4 text-color1">
          <p className="laila text-3xl font-semibold ">{name}</p>
          <p className="laila text-xl font-semibold opacity-60">FE Batch 12</p>
          <p className="laila text-xl font-semibold opacity-60">{category}</p>
        </div>
        <div className="-mt-28 flex justify-end">
          <div className="overflow-x-auto">
            <table className="table w-4">
              <tbody>
                <tr>
                  <th className="laila w-1/12 bg-transparent">Phone</th>
                  <td className="laila bg-transparent font-semibold">
                    : {phone}
                  </td>
                </tr>

                <tr>
                  <th className="laila lead w-1/12 bg-transparent">Telegram</th>
                  <td className="laila bg-transparent font-semibold">
                    : {telegram}
                  </td>
                </tr>

                <tr>
                  <th className="laila w-1/12 bg-transparent">Email</th>
                  <td className="laila bg-transparent font-semibold">
                    : {email}
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
            {user.map((data, index) => (
              <>
                <div key={data.user_id} className="card-body grid grid-cols-3">
                  <div className="font-semibold">
                    <p>Interview</p>
                    <p>{data.name}</p>
                    <p className="opacity-90">{data.created_at}</p>
                    <div className="mt-11 mb-6">
                      <p>Status</p>
                      <p>{data.status}</p>
                    </div>
                  </div>
                  <div className="col-span-2 font-semibold">
                    <p>{data.notes.notes}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MenteeLog;
