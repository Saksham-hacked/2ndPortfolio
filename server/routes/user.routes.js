const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

require("dotenv").config();


const express= require('express');
const router=express.Router();
const User = require('../models/user.model');
const {createHmac,randomBytes}=require("node:crypto");
const multer =require('multer');
const path=require('path');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "uploads", // Cloudinary folder name
      format: async (req, file) => "png", // Convert to PNG format
      public_id: (req, file) => `${Date.now()}-${file.originalname}`, // Use original file name (without extension)
    },
  });
  
  const upload = multer({ storage: storage });

// router.get('/signin',(req,res)=>{
//   res.json({ message: "Some response data" });  // ✅ Correct way

// })

// router.get('/signup',(req,res)=>{
//    return res.render('signup');
// })

// router.post('/signup', upload.single("profileImage"),async (req,res)=>{
//     const {fullName,email,password}=req.body;
//     await User.create({
//         fullName:fullName,
//         email:email,
//         password:password,
//         profileImageUrl:req.file?.path
    
        

//     })
//     return res.redirect('/');
// })

router.post('/signin',async (req,res)=>{
    // console.log(req.body);
    const {email,password}=req.body;


   //using static function in mongoose
   try{

       const token =await User.matchPasswordAndGenerateToken(email,password);
        res.cookie('token',token);
        // console.log("sent through backend",token);
       return res.json({token:token});
   } catch (error) {
      
       return res.send({error:"Invalid email or password"});
   }
    
    
    












    //using normal function
    // const user=await User.findOne({email});
    // if(!user){
    //     return res.redirect('/user/signin');
    // }
   
    // const hashedPasswordNew=createHmac("sha256",user.salt).update(password).digest("hex");
    // if(user.password===hashedPasswordNew){

    //     return res.redirect('/');
    // }else{
    //     console.log("Invalid password");
    //     return res.redirect('/user/signin');
    // }

    
})


// router.get('/signout',(req,res)=>{
//     res.clearCookie('token');
//     return res.redirect('/');
// })




module.exports=router;
