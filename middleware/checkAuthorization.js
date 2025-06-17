import jwt from 'jsonwebtoken';
import{ jwtsecretKey } from "../utils/generateToken.js";
import { userModel } from '../models/userModel.js';


export const checkAuthorization = async(req,res,next)=> {
    try {
        const token =req?.body?.token;
        const decoded = await jwt.verify(token,jwtsecretKey);

if(!decoded._id){
    return res.json({
      success: false,
      message: "You are Unauthorized!!!",
    });
}

const user =userModel.findById(decoded._id)

if(!user){
    return res.json({
      success: false,
      message: "Invalid User or user Not Found!",
    });
}

req.user = user;
next();

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message,
          });
      }
    };
