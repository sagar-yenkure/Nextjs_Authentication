import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "logout succesfully",
      succes: "true",
    });
    response.cookies.set("token", "", { httpOnly: true });
    
    return response

  } catch (error) {
    return NextResponse.json(
      { error: "error in Logout", succes: "false" },
      { status: 500 }
    );
  }
}
