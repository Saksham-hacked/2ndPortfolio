import * as dotenv from "dotenv";
dotenv.config();
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import cors from "cors";
const path=require('path');
const express = require('express');
var cookieParser = require('cookie-parser')
const app = express();
const PORT =  process.env.PORT || 3000;
const userRoute=require("./routes/user.routes.js")
const blogRoute=require("./routes/blog.routes.js")
const mongoose = require('mongoose');
const {checkForAuthenticationCookie}=require('./middleware/auth.middleware.js');
const User = require('./models/user.model.js');
const Blog = require('./models/blog.model.js');


app.use(
    cors({
      origin: (origin, callback) => {
        const allowedOrigins = ["https://reachsaksham.vercel.app", "http://localhost:5173"];
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true,
    })
  );

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to database");
}).catch(err => console.log(err));
 


app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(cookieParser());
app.use(express.static(path.resolve("./public")));
app.use(checkForAuthenticationCookie('token'));
app.use((req, res, next) => {
    res.locals.user = req.user; 
    // console.log(res.locals.user);
    next();
});



app.get("/", async function(req, res){
    const allblogs=await Blog.find({});

    return res.send(JSON.stringify(allblogs));

})
app.use("/user",userRoute);

app.use("/blog",blogRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
})


// import * as dotenv from "dotenv";
// dotenv.config();

// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import mongoose from "mongoose";
// import path from "path";
// import { fileURLToPath } from "url";
// import { checkForAuthenticationCookie } from "./middleware/auth.middleware.js";
// import userRoute from "./routes/user.routes.js";
// import blogRoute from "./routes/blog.routes.js";
// import Blog from "./models/blog.model.js";

// // Convert __dirname for ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// const PORT = process.env.PORT || 3000;

// // ✅ Allow all origins (temporary for development)
// app.use(
//   cors({
//     origin:"https://reachsaksham.vercel.app", // 🚨 Change to specific origins in production!
//     credentials: true,
//   })
// );

// // ✅ Database connection
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("Connected to database"))
//   .catch((err) => console.log("Database connection error:", err));

// // ✅ Middleware setup
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.resolve(__dirname, "./public")));
// app.use(checkForAuthenticationCookie("token"));

// app.use((req, res, next) => {
//   res.locals.user = req.user;
//   next();
// });

// // ✅ Routes
// app.get("/", async (req, res) => {
//   const allBlogs = await Blog.find({});
//   return res.json(allBlogs);
// });

// app.use("/user", userRoute);
// app.use("/blog", blogRoute);

// // ✅ Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
