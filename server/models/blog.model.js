// const {Schema,model} =require("mongoose");


// const blogSchema = new Schema({
//     title:{
//         type : 'string',
//         required : true
//     },
//     body:{
//         type : 'string',
//         required : true,
        
//     },
//     coverImageUrl:{
//         type : 'string',
//         default:"/images/noPhoto.png"
        
//     },
    
    
    
//     createdBy:{
//         type:Schema.Types.ObjectId,
//         ref:"User"
//     }

// },{
//     timestamps:true
// });


// const Blog = model('Blog',blogSchema);

// module.exports=Blog;


import mongoose from "mongoose";

const { Schema, model } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    coverImageUrl: {
      type: String,
      default: "/images/noPhoto.png",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Blog = model("Blog", blogSchema);

export default Blog;
