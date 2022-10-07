import express from "express";
import {
  addBillsController,
  getBillsController,
} from "../controllers/bill.controller.js";

const billsRouter = express.Router();

billsRouter.post("/addbills", addBillsController);

billsRouter.get("/getbills", getBillsController);

export default billsRouter;
