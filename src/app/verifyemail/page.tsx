"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { VERIFY_EMAIL_URL } from "../Constants/requests";

export default function verifyEmail() {
  const [Token, setToken] = useState("");
  const [verified, setverified] = useState(Boolean);

  const verifyUser = async () => {
    try {
      await axios.post(VERIFY_EMAIL_URL, { Token });
      setverified(true);
    } catch (error: any) {
      setverified(false);
      console.log({ Error: "error in Verify user function" }, error);
    }
  };

  useEffect(() => {
    const SearchToken = window.location.search.split("=")[1];
    setToken(SearchToken);
    // console.log("the token is",SearchToken)
    // console.log("the token are",Token)
  }, []);

  

  useEffect(() => {
    if (Token.length > 0) {
      verifyUser();
    }
  }, [Token]);

  return (
    <>
      <div className="flex justify-center items-center">
        {verified ? (
          <h1 className=" text-black text-xl">
            User verified Succesfully <Link href="/login">here</Link> to naviage
            login page
          </h1>
        ) : (
          <h1 className=" text-black text-xl">
            Error in Verification <Link href="/login">here</Link> to naviage
            login page
          </h1>
        )}
      </div>
    </>
  );
}
