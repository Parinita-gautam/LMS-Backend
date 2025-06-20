import mongoose from "mongoose";

const bookSchema =new mongoose.Schema({

    title:String,
    author:String,
    isbn:String,
    publicationDate:Date,
    genre:String,
    noOfPage:Number,
    availability:Boolean,


});
// 
// datbase constraints
// jai validation on create route

export const BookModel =mongoose.model("books",bookSchema);