"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LOGOUT_URL } from "../Constants/requests";
import { GET_USER_URL } from "../Constants/requests";
import Image from "next/image";

const profilepage = () => {
  const [user, setuser] = useState();
  const router = useRouter();

  const getinfo = async () => {
    try {
      const res = await axios(GET_USER_URL);
      const DATA = res.data.User;

      setuser({ ...DATA });

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getinfo();
  }, []);

  const handlelogout = async () => {
    try {
      const responce = await axios(LOGOUT_URL);
      console.log(responce.data.message);
      router.push("login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="h-12 flex justify-between space-x-3 p-2 bg-gray-300">
          <h1>logo</h1>
          <button
            onClick={handlelogout}
            className="bg-red-400  px-2 rounded-md"
          >
            logout
          </button>
        </div>

        <div className=" flex  flex-col items-center w-full h-screen mt-5 shadow-2xl ">
          <div className="LOGO__">
            <h1 className="">profilepage</h1>
          </div>
          <div className="profile_menu flex justify-center items-center mt-20 rounded-lg px-12 shadow-xl">
            {!user ? (
              "Please wait ......"
            ) : (
              <div>
                <div className="images w-[15rem] h-[15rem] absolute top-[3rem] items-center flex flex-col justify-center">
                  <Image
                    src={user["isAdmin"] ? "/svg/admin.svg" : "/svg/user.svg"}
                    alt="me"
                    width="100"
                    height="100"
                  />
                  <h1 className="">
                    {user["isAdmin"] ? "Admin" : "Not Admin"}
                  </h1>
                </div>
                <div className="infoo py-16">
                  <h1>{user["email"]}</h1>
                  {!user["isverfied"] ? (
                    <div className="flex items-center space-x-3 p-2 ">
                      <h1>Not verified</h1>
                      <button className="p-1 border border-blue-500">
                        verify
                      </button>
                    </div>
                  ) : (
                    <h1>verified</h1>
                  )}

                  <h1></h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default profilepage;
