import expressAsyncHandler from "express-async-handler";
import Chart from "../models/chartModel";
import express from 'express';
import { isAuth } from "../misc";
import foodRouter from "./foodRouter";


const chartRouter = express.Router()

chartRouter.post('/createChart', isAuth, expressAsyncHandler(async (req, res) => {

    //diet chart to be created...


}))

export default chartRouter