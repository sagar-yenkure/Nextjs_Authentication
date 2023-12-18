import { extractToken } from "@/helper/extractToken";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/user.model";
import { dbconnection } from "@/app/Database/dbconfig";

dbconnection();

export async function GET(request: NextRequest) {
  try {
    const user_id = await extractToken(request);
    const finduser = await User.findOne({ _id: user_id }).select("-password");
    return NextResponse.json({ message: "user found", User: finduser });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
