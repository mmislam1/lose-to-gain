import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import Food from '../models/foodModel.js'


const foodRouter = express.Router()


foodRouter.get('/', expressAsyncHandler(async (req, res) => {
    try {
        const foods = await Food.find({})
        res.send(foods)
    }
    catch (error) {
        res.status(400).send(error)
    }


}))





export default foodRouter