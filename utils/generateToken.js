import jwt from 'jsonwebtoken';
import { userModel } from '../models/userModel.js';

export const jwtsecretKey = "jklhopbxydfhjxgfop";
export const generateToken =async(user) =>{

    try {
        const token = jwt.sign(user,jwtsecretKey);

        return token;
    } catch (error) {
        console.log(error);
        return error;
    }

};
 export const decodeJWT = async(token) =>{
    try {
        const decoded = await jwt.verify(token, jwtsecretKey);

        if(!decoded && !decoded._id){
            console.log('Invalid Token Detected!!!');
            return;
        }

const UserId = decoded._id;

const foundUser = await userModel.findById(UserId);

return foundUser;
    } catch (error) {
        console.log(error);
        return error;
    }
 }