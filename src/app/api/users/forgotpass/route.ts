import { dbconnection } from "@/app/Database/dbconfig";
import { sendMail } from "@/helper/mailer";
import { User } from "@/models/user.model";
import { NextResponse, NextRequest } from "next/server";

dbconnection()
export async function POST(req: NextRequest) {
    try {
    const request = await req.json();
    const { email } = request;
    
    const user = await User.findOne({email})
   if (!user){
    return NextResponse.json({message:`user with ${email} not found`,success:false})
    }
 await sendMail({
        email:email,
        mailtype: "reset",
        userID: user._id,
      });


        return NextResponse.json({message:`mail sended to ${email}`,success:true})


  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
