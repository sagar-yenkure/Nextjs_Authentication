"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SIGNUP_URL } from "../Constants/requests";
import toast, { Toaster } from "react-hot-toast";

const signuppage = () => {
  const router = useRouter();
  const [cred, setcred] = useState({ password: "", email: "" });

  const handleChange = (e: any) => {
    setcred({ ...cred, [e.target.name]: e.target.value });
  };

  const handlesignup = async () => {
    try {
      const response = await axios.post(SIGNUP_URL, cred);
      if (response) {
        toast.success(
          "User registerd ! redirecting to login page in 3 seconds",
          {
            duration: 6000,
          }
        );
      }
      setTimeout(() => {
        router.push("login");
      }, 4000);
    } catch (error: any) {
      toast.error(error.response.data.message);
      // console.log(error.response.data.message);
    }
  };

  return (
    <>
      <div className="body">
        {/* logo section */}
        <Toaster />
        <div className=" flex justify-center  my-[8rem]">
          {/* signup section */}
          <div className="signup__bx flex flex-col p-[3rem]">
            <div className="w-[22rem]">
              <div className="head">
                <h1 className="font-bold flex justify-center text-3xl mb-5 ">
                  Create your account
                </h1>
              </div>
              {/* {/emial and btn  */}
              <div className="email--btn flex flex-col ">
                <div className=" relative mb-4">
                  <input
                    type="email"
                    value={cred.email}
                    name="email"
                    placeholder="email"
                    onChange={handleChange}
                    className="mt-2  p-3 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-200"
                  />

                  <input
                    name="password"
                    type="password"
                    value={cred.password}
                    required
                    onChange={handleChange}
                    placeholder="password"
                    className="mt-2 p-3 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-200"
                  />
                </div>
                <button
                  disabled={(cred.email.length & cred.password.length) == 0}
                  onClick={handlesignup}
                  className="bg-[#10a37f] md:px-[3rem] rounded-md text-bold text-white py-2 md:py-3 p-1"
                >
                  Sign up
                </button>
              </div>
            </div>
            <div className="alredyhasaccount flex flex-col space-y-3 py-4">
              <div className=" flex justify-center">
                <p>Already have an Account ?</p>
                <button className="text-[#10a37f]">
                  {" "}
                  <Link href="/login">log in</Link>
                </button>
              </div>
            </div>
          </div>

          {/* terms and policy section at bottom */}
        </div>
      </div>
    </>
  );
};

export default signuppage;
