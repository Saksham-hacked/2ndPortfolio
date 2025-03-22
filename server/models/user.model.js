// const {Schema,model} =require("mongoose");
// const {createHmac,randomBytes}=require("node:crypto");
// const {createTokenForUser,verifyToken} = require("../services/authentication");
// const userSchema = new Schema({
//     fullName:{
//         type : 'string',
//         required : true
//     },
//     email:{
//         type : 'string',
//         required : true,
//         unique : true
//     },
//     salt:{
//         type : 'string',
        
//     },
//     password:{
//         type : 'string',
//         required : true
//     },
//     role:{
//         type : 'string',
//         enum : ['ADMIN', 'USER'],
//         default : 'USER'
//     },
//     profileImageUrl:{
//         type : 'string',
//         default:"/images/cat.png"
//     }

// },{
//     timestamps:true
// });

// userSchema.pre("save",function(next){
//     const user=this;
//     if(!user.isModified("password")){
//         return;
//     }

//     const salt=randomBytes(16).toString();
//     const hashedPassword=createHmac("sha256",salt).update(user.password).digest("hex");
//     this.password=hashedPassword;
//     this.salt=salt;
    


//     next();
// })

// userSchema.static("matchPasswordAndGenerateToken", async function (email, password) {
//     console.log("Finding user with email:", email);
  
//     const user = await this.findOne({ email });
//     if (!user) {
//     //   console.log("User not found");
//       throw new Error("User not found");
//     }
  
//     // console.log("User found:", user.email);
  
//     const salt = user.salt;
//     const hashedPassword = createHmac("sha256", salt).update(password).digest("hex");
  
//     // console.log("Generated hashed password:", hashedPassword);
//     // console.log("Stored hashed password:", user.password);
  
//     if (hashedPassword === user.password) {
//     //   console.log("Password matched! Generating token...");
  
//       const token = createTokenForUser(user);
//     //   console.log("Generated token:", token);
  
//       return token;
//     } else {
//     //   console.log("Incorrect password");
//       throw new Error("Incorrect password");
//     }
//   });
  


// const User = model("User",userSchema);


// module.exports = User;


import mongoose from "mongoose";
import { createHmac, randomBytes } from "node:crypto";
import { createTokenForUser } from "../services/authentication.js";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    profileImageUrl: {
      type: String,
      default: "/images/cat.png",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }

  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac("sha256", salt).update(user.password).digest("hex");

  user.password = hashedPassword;
  user.salt = salt;

  next();
});

userSchema.static("matchPasswordAndGenerateToken", async function (email, password) {
  console.log("Finding user with email:", email);

  const user = await this.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }

  const salt = user.salt;
  const hashedPassword = createHmac("sha256", salt).update(password).digest("hex");

  if (hashedPassword === user.password) {
    const token = createTokenForUser(user);
    return token;
  } else {
    throw new Error("Incorrect password");
  }
});

const User = model("User", userSchema);

export default User;
