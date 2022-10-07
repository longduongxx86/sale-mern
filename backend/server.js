import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import productRouter from "./routes/product.route.js";
import userRouter from "./routes/user.route.js";
import billsRouter from "./routes/bill.route.js";
import path from "path";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Conneted to DB!");
  })
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api/products/", productRouter);
app.use("/api/users/", userRouter);
app.use("/api/bills/", billsRouter);

__dirname = path.resolve()
if(process.env.NODE_ENV ==='production'){

}else{
    
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Running in PORT ${PORT}`);
});
