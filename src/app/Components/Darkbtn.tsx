import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch,useSelector } from "react-redux";
import { darkmodeoff, darkmodeon } from "../Redux/Darkmode.slice";

export const Darkbtn = () => {
  const dispatch= useDispatch()
 const dark : boolean = useSelector((state: any) => state.dark_reducer.Darkmode);
//  const mode = !dark?"dark":"light"

  const handledark = () => {
    !dark?dispatch(darkmodeon(true)):dispatch(darkmodeoff(false))
  };

  useEffect(() => {
  if (dark) document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
  }, [dark])
  
  return (
    <>
      <div className="border-black w-10 h-10 flex items-center
       justify-center  dark:border-white transition-all ease-out rounded-full">
        <button
          onClick={handledark}
          className="flex justify-center items-center p-2 space-x-1 font-bold"
        >
          {/* <p>{ dark ?"Set Light":"Set Dark"}</p> */}
          {dark ? (
            <Image src={"/svg/sun.svg"} alt="me" width="22" height="22" />
          ) : (
            <Image src={"/svg/moon.svg"} alt="me" width="20" height="20" />
          )}
        </button>
      </div>
    </>
  );
};
