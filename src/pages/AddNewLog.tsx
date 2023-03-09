import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import Swal from "../utils/Swal";

import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const AddNewLog = () => {
  const { mentee_id } = useParams();
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const [loading, setLoading] = useState<boolean>(false);
  const [notes, setNotes] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      notes,
      status,
    };

    axios
      .post(
        `https://virtserver.swaggerhub.com/ALFIANADSAPUTRA_1/DashboardQ/1.0.0/feedback`,
        body,
        {
          headers: {
            Authorization: `Bearer ${checkToken}`,
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        MySwal.fire({
          icon: "success",
          title: message,
          text: "Sukses menambahkan log",
          showCancelButton: false,
        });
        navigate(`/mente`);
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          icon: "error",
          title: data.message,
          text: "Gagal menambahkan",
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <Navbar />
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="-mt-10 flex flex-col p-8 text-color1"
      >
        <div className="flex-none p-6">
          <p className="mt-20 text-5xl font-semibold">New Log</p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-row space-x-3 p-6">
            <p className="mt-3 text-xl font-semibold">Status :</p>
            <div className="flex-none gap-2">
              <div className="form-control">
                <input
                  type="text"
                  onChange={(e) => setStatus(e.target.value)}
                  placeholder="Contoh : Interview agree"
                  className="input-bordered input"
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-row justify-end space-x-7 p-6">
            <p className="mt-3 text-xl font-semibold">Content :</p>
            <select defaultValue={"DEFAULT"} className="select w-full max-w-xs">
              <option value={"DEFAULT"} disabled>
                Select-
              </option>
              <option value={"Interview"}>Interview</option>
              <option value={"Accepted"}>Accepted</option>
              <option value={"Section End Unit"}>Section End Unit</option>
              <option value={"Placement"}>Placement</option>
              <option value={"Active"}>Active</option>
              <option value={"Eliminated"}>Eliminated</option>
            </select>
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
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <div className="-mt-48 flex justify-end">
            <CustomButton id="btn-submit" label="Submit" loading={loading} />
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default AddNewLog;
