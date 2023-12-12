import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:[true,"please provide the email"],
        unique:true,
        trim:true
    },
    password:{
        type:String,
        require:[true,"please provide the password"],
        unique:true,
    },
    isverified:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },

    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    VerifyToken:String,
    VerifyTokenExpity:Date,
})

// export const User = mongoose.model("User", userSchema)
export const User = mongoose.models.User || mongoose.model('User', userSchema);