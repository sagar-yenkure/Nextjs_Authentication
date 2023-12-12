"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import axios from 'axios';
import { LOGIN_URL } from '../Constants/requests';
import toast, { Toaster } from 'react-hot-toast';


const loginpage = () => {
  
  const [cred, setcred] = useState({password: "", email: "", });

  const handleChange = (e:any) => {
    setcred({...cred, [e.target.name]:e.target.value});
  };

  const handlelogin =async()=>{
    try {
      const response = await axios.post(LOGIN_URL,cred)
      console.log(response.data)
      if (response) {
        toast.success(response.data.message,
          {
            duration: 6000,
          }
        );
      }
      
    } catch (error:any) {
      toast.error(error.response.data.message);
      
    }

  }
  return (
<>
<div className="body">
        <Toaster position="top-center" reverseOrder={false} />
        {/* logo section */}

        <div className=" flex justify-center  my-[8rem]">
          {/* signup section */}
          <div className="signup__bx flex flex-col p-[3rem]">
            <div className="w-[22rem]">
              <div className="head">
                <h1 className="font-bold flex justify-center text-3xl mb-5 ">
                  Login your account
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
                  <div className="absolute z-10 top-5 right-2">
                    <button className=" text-[#10a37f] font-semibold">
                      <Link href="/Signup">Edit</Link>
                    </button>
                  </div>
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
                <button onClick={handlelogin} className="bg-[#10a37f] md:px-[3rem] rounded-md text-bold text-white py-2 md:py-3 p-1">
                  Log in
                </button>
              </div>
            </div>
            <div className="alredyhasaccount flex flex-col space-y-3 py-4">
              <div className=" flex justify-center">
                <p>Dont have an Account ?</p>
                <button className="text-[#10a37f]">
                  {" "}
                  <Link href="/signup">Sign up</Link>
                </button>
              </div>
            </div>
          </div>

          {/* terms and policy section at bottom */}
        </div>
      </div>
</>
  )
}

export default loginpage