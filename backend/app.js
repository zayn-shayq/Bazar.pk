import express, { json} from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import {} from 'dotenv/config';

const app = express();

import error from "./middleware/error.js";

app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
//Route imports
import product from "./routes/productRoute.js";
import user from "./routes/userRoute.js";

app.use("/api/v1",product);
app.use("/api/v1",user);

//Middleware for errors
app.use(error);

export default app;
