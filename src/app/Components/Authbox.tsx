import React from "react";
import Link from "next/link";
import Image from "next/image";

const Authbox = () => {
  const links = [
    { id: "1", logo: "/svg/google.svg", msg: "Connect with Google" },
    { id: "2", logo: "/svg/microsoft.svg", msg: "Connect with Microsoft" },
    { id: "3", logo: "/svg/apple.svg", msg: "Connect with Apple" },
  ];

  return (
    <div className=" flex justify-center flex-col p-2">
      <div className=" flex justify-center p-2">

      <h1 className="text-black font-bold">Next-Auth</h1>
      </div>
      {links.map((link) => {
        return (
          <button id={link.id} className="p-1">
            <div className="flex p-3 border space-x-3 border-gray-400 rounded-md ">
              <Image src={link.logo} alt="me" width="20" height="20" />
              <h1>{link.msg}</h1>
            </div>
          </button>
        );
      })}
      <div className="flex justify-center flex-col mt-6">
      <button className="p-1 ">
      <Link href="/login">
            <div className="flex p-3 bg-blue-300 justify-center border space-x-3 border-gray-400 rounded-md ">
      Log In
            </div>
          </Link>
          </button>
          <button className="p-1 ">
      <Link href="/signup">
            <div className="flex p-3 bg-blue-300 justify-center border space-x-3 border-gray-400 rounded-md ">
      Sign Up
            </div>
          </Link>
          </button>
      </div>
    
    </div>
  );
};

export default Authbox;
