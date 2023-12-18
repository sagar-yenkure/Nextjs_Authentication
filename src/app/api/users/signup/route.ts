import { dbconnection } from "@/app/Database/dbconfig";
import { User } from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendMail } from "@/helper/mailer";

dbconnection();
//take the body
//cheack body is not empty
// chaeck the user exist or not
//hash the password
//save the user
//send responce

export async function POST(request: NextRequest) {
  try {
    const reqbody = await request.json();
    const { email, password } = reqbody;
    if (!email && password) {
      return NextResponse.json(
        {
          message: "Email and password must required !",
        },
        { status: 300 }
      );
    }
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: `user with ${email} already exists` },
        { status: 301 }
      );
    }
    // creating hash password
    const salt = await bcryptjs.genSalt(10);
    const hashpass = await bcryptjs.hash(password, salt);

    const newUser = await User.create({
      email: email,
      password: hashpass,
    });

    await sendMail({
      email:email,
      mailtype: "verify",
      userID: newUser._id,
    });

    return NextResponse.json({ message: "Signup succesfully ! please verify your email ", newUser });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: "SERVER error" }, { status: 500 });
  }
}
