const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

require("dotenv").config();



const express= require('express');
const router=express.Router();
const path= require('path');

const multer =require('multer');
const Blog = require('../models/blog.model');
const Comment = require('../models/comment.model');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.resolve(`./public/uploads/`))
//     },
//     filename: function (req, file, cb) {
//       const fileName=`${Date.now()}-${file.originalname}`;
//       cb(null, fileName)
//     }
//   })
  
  // const upload = multer({ storage: storage })

  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "uploads", // Cloudinary folder name
      format: async (req, file) => "png", // Convert to PNG format
      public_id: (req, file) => `${Date.now()}-${file.originalname}`, // Use original file name (without extension)
    },
  });
  
  const upload = multer({ storage: storage });




  
  


router.get('/add-new',(req,res)=>{
    return res.render('addBlog');
})

router.get('/:id', async (req,res)=>{
    const blog = await Blog.findById(req.params.id).populate("createdBy");
    // const comments = await Comment.find({blogId:req.params.id}).populate("createdBy");
    // console.log(comments);
   return res.send({blog:blog})


   
})





router.post("/",upload.single("coverImage"),async (req,res)=>{
  console.log(req); // Should contain title & body
  console.log("Received Body:", req.body.title); // Should contain title & body
  console.log("Received File:", req.file);
  const {title,body}=req.body;

    const blog=await Blog.create({title:title,body:body,coverImageUrl:req.file?.path,createdBy:req.user._id})
    
    return res.send({status:true,blog:blog})
    })


    router.post("/comment/:blogId",async (req,res)=>{
      await Comment.create({
         content:req.body.content,
         blogId:req.params.blogId,
         createdBy:req.user._id
      })
      return res.redirect(`/blog/${req.params.blogId}`)
    });
    
    router.delete("/:id", async (req, res) => {
      try {
        const blogId = req.params.id;
    
        // Find and delete the blog
        const deletedBlog = await Blog.findByIdAndDelete(blogId);
    
        if (!deletedBlog) {
          return res.status(404).json({ message: "Blog not found" });
        }
    
        res.status(200).json({ message: "Blog deleted successfully" });
      } catch (error) {
        console.error("Error deleting blog:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });



module.exports=router;
