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


app.use(cors({
    origin: "https://reachsaksham.vercel.app",
    credentials: true, // Required for cookies
  }));

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to database");
}).catch(err => console.log(err));
 


app.use(express.json());

app.use(express.urlencoded({extended:false}));

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