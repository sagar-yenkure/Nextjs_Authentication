"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CHANGE_PASSWORD_URL } from "../Constants/requests";

const page = () => {
  const [cred, setcred] = useState({
    password: "",
    confirmpassword: "",
    token: "",
  });
  useEffect(() => {
    const SearchToken = window.location.search.split("=")[1];
    setcred({ ...cred, token: SearchToken });
  }, []);
  const onchange = (e: any) => {
    setcred({ ...cred, [e.target.name]: e.target.value });
  };
  const resetbutton = async () => {
    console.log("reset button presed");
    console.log(cred);
    const res = await axios.post(CHANGE_PASSWORD_URL, cred);
    console.log(res.data);
  };
  return (
    <div className=" flex justify-center items-center">
      <div className="flex  flex-col w-[20rem] justify-center items-center p-2 space-y-2">
        <input
          className="border border-black p-2"
          type="text"
          onChange={onchange}
          name="password"
          value={cred.password}
        />
        <input
          className="border border-black p-2"
          type="text"
          onChange={onchange}
          name="confirmpassword"
          value={cred.confirmpassword}
        />
        <button onClick={resetbutton}>reset</button>
      </div>
    </div>
  );
};

export default page;
