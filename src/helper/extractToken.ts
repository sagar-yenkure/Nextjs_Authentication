import { NextRequest } from "next/server";
import Jwt from "jsonwebtoken";

export const extractToken = (request: NextRequest) => {
  try {
    const incodedToken = request.cookies.get("token")!.value || "";

    const decodedToken: any = Jwt.verify(incodedToken, process.env.JWT_TOKEN!);
    
    return decodedToken.id;
  } catch (error: any) {
    console.log(error.message);
  }
};
