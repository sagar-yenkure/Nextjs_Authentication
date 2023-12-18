import mongoose from "mongoose";

const dbconnection = async () => {
  try {
    await mongoose.connect(process.env.COMPASS_URL!)
    .then(()=>console.log("----mongo connected at host-----"))
  } catch (error) {
    console.log("MONGO Connection ERROR :", error);
  }
};
 
export {dbconnection}
