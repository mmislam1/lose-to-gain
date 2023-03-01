import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import { isAdmin } from '../misc.js'
import Food from '../models/foodModel.js'


const foodRouter = express.Router()


foodRouter.get('/', expressAsyncHandler(async (req, res) => {
    try {
        const foods = await Food.find({})
        res.send(foods)
    }
    catch (error) {
        res.send(error)
    }


}))

foodRouter.post('/addfood', isAdmin, expressAsyncHandler(async (req, res) => {

    const food = new Food(req.body);
    const createdFood = await food.save();
    res.send({ message: 'food Created', food: createdFood });


}))



export default foodRouter