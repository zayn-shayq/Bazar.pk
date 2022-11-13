import catchAsyncErrors from "./catchAsyncErrors.js";
import ErrorHandler from "../utils/errorhandler.js";
import jwt from "jsonwebtoken";
import User from "../model/userModel.js"

export const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) =>{
    const {token} = req.cookies;
    console.log(token);

    if(!token) {
        return next(new ErrorHandler("Please login to access this resource", 401));
    }

    const decodedData = jwt.verify(token, "DAFTDJGHJIWEF5678FWVVFJK7WF6EFVWGY33FGWHs");

    req.user = await User.findById(decodedData.id);
    next();
     
});

export const authorizeRoles = (...roles) =>{

    return (req, res, next) => {

        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(
                `Role: ${req.user.role} is not allowed to access this resource`, 403
            ));
        }
    }
};  
