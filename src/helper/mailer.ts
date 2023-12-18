import nodemailer from "nodemailer";
import { User } from "@/models/user.model";
import bcypt from "bcryptjs";

export const sendMail = async ({ email, mailtype, userID }: any) => {
  try {
    // hashed Token
    const hashedToken = await bcypt.hash(userID.toString(), 10);
    // finding and updating the verify token
    if (mailtype === "verify") {
      await User.findByIdAndUpdate(userID, {
        VerifyToken: hashedToken,
        VerifyTokenExpity: Date.now() + 43200,
      });
      // finding and updating the forgot password token
    } else if (mailtype === "reset") {
      await User.findByIdAndUpdate(userID, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600,
      });
    }

    let transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: "yenkuresagar2104@gmail.com",
      to: email,
      subject:
        mailtype === "verify" ? "Verify Your Email" : "Reset Your Password",
      html: `<P>Click <a href="${
        process.env.HOST
      }/verifyemail?token=${hashedToken}">| here |</a> to ${
        mailtype === "verify" ? "Verify Your Email" : "Reset Your Passwors"
      } <br>
      or copy paste the below url in browser
      ${process.env.HOST}/verifyemail?token=${hashedToken}


      <P/>`

    };

    const mailResponce = await transport.sendMail(mailOptions);
    console.log("the mail is sended" ,mailResponce)
    // return mailResponce;

  } catch (error: any) {
    console.log("ERROR in mailsending",error)
  }
};
