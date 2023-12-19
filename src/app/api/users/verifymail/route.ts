import { NextRequest, NextResponse } from "next/server";
import { dbconnection } from "@/app/Database/dbconfig";
import { User } from "@/models/user.model";

dbconnection();

export async function POST(req: NextRequest) {
  try {
    const request = await req.json();
    const { Token } = request;
    console.log("user token ", Token);


    const user = await User.findOne({
      VerifyToken:Token ,
      VerifyTokenExpity: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({ message: "user is not available" });
    }

    user.isverified = true;
    user.VerifyToken = undefined;
    user.VerifyTokenExpity = undefined;
    await user.save();

    return NextResponse.json({ message: "Email verified succesfully", user });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message, message: "SERER error" },
      { status: 500 }
    );
  }
}
