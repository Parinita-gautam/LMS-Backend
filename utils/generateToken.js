import jwt from 'jsonwebtoken';

const jwtsecretKey = "jklhopbxydfhjxgfop";
export const generateToken =async(user) =>{

    try {
        const token = jwt.sign(user,jwtsecretKey);

        return token;
    } catch (error) {
        console.log(error);
        return error;
    }

}