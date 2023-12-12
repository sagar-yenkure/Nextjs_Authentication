"use client";
import React from "react";
import Authbox from "./Authbox";
import { Darkbtn } from "./Darkbtn";
import { Navbar } from "./Navbar";
// import { useSelector } from "react-redux";

export const Landingpage = () => {
  // const dark : boolean = useSelector((state: any) => state.dark_reducer.Darkmode);
  return (
    <>
      <Navbar/>
    <div className={`body w-full h-screen flex dark:bg-black bg-white` }>
      <div className="1st__ flex flex-col w-full justify-center items-center">
        <div className="p-5 realtive md:my-[5rem] px-10 mr-6">
          <h1 className=" dark:text-white text-black  text-4xl md:text-7xl tex w-fit  ">
            Next.js Authentication{" "}
          </h1>
          <div className=" flex w-fit flex-col py-1">
            <h1 className=" dark:text-white text-black  text-4xl md:text-7xl  ">Secure acess</h1>
            <p className="text-4xl md:text-7xl text-blue-500 ">for anyone</p>
          </div>
          <div className="flex space-x-3 w-fit py-1">
            <h1 className=" dark:text-white text-black  text-4xl md:text-7xl ">But not</h1>
            <p className="text-4xl md:text-7xl  text-red-500">just anyone</p>
          </div>
        </div>

        <div className="getstared  py-6 flex justify-center border-b border-gray-500">
          <button className="p-2 text-black font-bold bg-blue-400 rounded-md">
            read docs
          </button>
        </div>
        <div className=" md:absolute authbox w-full h-full md:w-[20rem] md:h-[25rem] right-[20rem] rounded-lg drop-shadow-[0_35px_35px_rgba(0,3,2,0.6)] bg-white">
          <Authbox/>
        </div>
      </div>

      <div className="2nd__ hero-pattern bg-purple-700 w-[45%] hidden md:block"></div>
    </div>
    </>
  );
};
