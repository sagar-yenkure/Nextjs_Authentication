// import { dbconnection } from "@/app/Database/dbconfig";
import { dbconnection } from "@/app/Database/dbconfig";
import { User } from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dbconnection();
//take the body
//cheack body is not empty
// chaeck the user exist or not
//compare password
//send responce

export async function POST(request: NextRequest) {
  try {
    const requestbody = await request.json();
    const { email, password } = requestbody;

    if (!email && password) {
      return NextResponse.json(
        {
          message: "Email and password must required !",
        },
        { status: 300 }
      );
    }

    const existuser = await User.findOne({ email });
    if (!existuser) {
      return NextResponse.json(
        { message: "User do not exist , please rejister" },
        { status: 300 }
      );
    }
    const ispassword = await bcrypt.compare(password, existuser.password);
    if (!ispassword) {
      return NextResponse.json(
        { message: "Password invalid" },
        { status: 300 }
      );
    }
    const data = {
      id: existuser._id,
      email:existuser.email
    };
    const Token = jwt.sign(data,process.env.JWT_TOKEN!,{expiresIn:"1d"});

    const response= NextResponse.json({ message: "User logged succesfully", Token });
// setting the Cookie
    response.cookies.set("token",Token,{
      httpOnly:true
    })
    return response

  } catch (error) {
    return NextResponse.json({ error: "SERVER error" }, { status: 500 });
  }
}
