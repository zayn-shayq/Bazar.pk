import ErrorHandler from "../utils/errorhandler.js";
import catchAsyncErrors  from "./catchAsyncErrors.js";

import jwt from "jsonwebtoken";
import { useResolvedPath } from "react-router-dom";
import user from "../model/userModel.js";
import { serialize } from  "cookie-parse";
import { getSingleUser }  from "../controllers/userController.js";

export const isAuthenticatedUser = catchAsyncErrors( async(req , res, next)=>
{
    const token = req.cookie;
    if(!token){
        return next(new ErrorHandler("Please login to acess these resources" , 401))
    }
      const decodedata = jwt.verify(token , process.env.JWT_SECRET);
      req.user = await user.findById(decodedata.id)
      next();
})
 export const authorizeRoles =(...roles)=>
{
    return (req , res , next)=>
    {
        if(!roles.includes(req.user.role))
        {
            return next(
            new ErrorHandler(
                `Role : ${req.user.role} is not allowd to access this resource`
            ));
        }
        next();
    }
}
