import { User } from "@/models/user.model";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const request = await req.json();

    const { token, password, confirmpassword } = request;

    const user = await User.findOne({
      forgotPasswordToken: token,
      // forgotPasswordTokenExpiry: { $gt: Date.now() },
    });

    if (!(password && confirmpassword)) {
      return NextResponse.json({ message: "both fields must fill" });
    }
    if (!(password === confirmpassword)) {
      return NextResponse.json({ message: "both field must same" });
    }
    if (!user) {
      return NextResponse.json({ message: "unauthorized entry not allowed" });
    }
    // if (user) {
    //   return NextResponse.json({ message: "user founded", user });
    // }

    const salt = await bcryptjs.genSalt(10);
    const hashpass = await bcryptjs.hash(password, salt);
    user.password = hashpass;
    user.forgotPasswordToken = "";
    user.forgotPasswordTokenExpiry = "";
    await user.save();

    return NextResponse.json({ message: "password has been reset", user });
  } catch (error) {
    return NextResponse.json(
      { errorr: "SERVER errro", error },
      { status: 500 }
    );
  }
}
