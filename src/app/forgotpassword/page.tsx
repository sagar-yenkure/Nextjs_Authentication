"use client";
import axios from "axios";
import React, { useState } from "react";
import { FORGOT_PASSWORD_URL } from "../Constants/requests";

const page = () => {
  const [email, setemail] = useState("");
  const [Send, setSend] = useState(Boolean);

  const sendforgotmail = async () => {
    try {
      const res = await axios.post(FORGOT_PASSWORD_URL, { email });
      console.log(res.data);
        setSend(res.data.message);
     
    } catch (error) {
      console.log(error);
    }
  };
  const onchange = (e: any) => {
    setemail(e.target.value);
  };

  return (
    <>
      <section className="w-full h-screen flex justify-center items-center">
        <div className=" items-center flex flex-col justify-center py- p-3 border rounded-xl border-black ">
          <h1>Forgot password</h1>

          <p>
          {Send}
          </p>
          <div className="flex justify-center items-center border rounded-lg ">
            <input
              onChange={onchange}
              className="p-2 "
              type="text"
              placeholder="Email"
            />
          </div>
          <button
            onClick={sendforgotmail}
            disabled={email.length === 0}
            className=" border rounded-lg m-3 border-black p-2"
          >
            Send Email
          </button>
        </div>
      </section>
    </>
  );
};

export default page;
