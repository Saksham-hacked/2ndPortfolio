const {Schema,model} =require("mongoose");


const commentSchema = new Schema({
    content:{
        type : 'string',
        required : true
    },

    blogId:{
        type:Schema.Types.ObjectId,
        ref:"Blog"
    }
    ,
    
    
    
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }

},{
    timestamps:true
});


const Comment = model('Comment',commentSchema);

module.exports=Comment;

// import mongoose from "mongoose";

// const { Schema, model } = mongoose;

// const commentSchema = new Schema(
//   {
//     content: {
//       type: String,
//       required: true,
//     },
//     blogId: {
//       type: Schema.Types.ObjectId,
//       ref: "Blog",
//     },
//     createdBy: {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Comment = model("Comment", commentSchema);

// export default Comment;
