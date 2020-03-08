const mongoose=require("mongoose");

const post_schema=new mongoose.Schema(
    {
    title:{
        type:String,
        required:"Title is Required"
    },
    content:{
        type:String,
        required:"Content is Required"
        }
    }
);

module.exports=mongoose.model("Post",post_schema);