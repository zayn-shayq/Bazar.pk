import express, { json } from "express";
const app = express();
import bodyParser from 'body-parser'
import cookie from "cookie-parser"
app.use(express.json());
app.use(cookie());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
import product from "./routes/productRoute.js";
import error from "./middleware/error.js";
import user from "./routes/userRoute.js";
app.use("/api/v1",product);
app.use("/api/v1",user);

app.use(error)


export default app;
