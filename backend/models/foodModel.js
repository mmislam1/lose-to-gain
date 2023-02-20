import mongoose from "mongoose"


const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    unit: {
        type: Number,
        required: true,

    },
    fat: {
        type: Number,
        required: true,
    },
    protein: {
        type: Number,
        required: true,
    },
    carb: {
        type: Number,
        required: true,
    },
    fibre: {
        type: Number,
        required: true,
    },
    b1: {
        type: Number,
        required: true,
    },
    b2: {
        type: Number,
        required: true,
    },
    b3: {
        type: Number,
        required: true,
    },
    b5: {
        type: Number,
        required: true,
    },
    b6: {
        type: Number,
        required: true,
    },
    b12: {
        type: Number,
        required: true,
    },
    b7: {
        type: Number,
        required: true,
    },
    b8: {
        type: Number,
        required: true,
    },
    b9: {
        type: Number,
        required: true,
    },

    a: {
        type: Number,
        required: true,
    },

    c: {
        type: Number,
        required: true,
    },
    d: {
        type: Number,
        required: true,
    },
    e: {
        type: Number,
        required: true,
    },
    k: {
        type: Number,
        required: true,
    },
    calcium: {
        type: Number,
        required: true,
    },
    copper: {
        type: Number,
        required: true,
    },
    iron: {
        type: Number,
        required: true,
    },
    magnesium: {
        type: Number,
        required: true,
    },
    manganese: {
        type: Number,
        required: true,
    },
    phosphorus: {
        type: Number,
        required: true,
    },
    potassium: {
        type: Number,
        required: true,
    },
    selenium: {
        type: Number,
        required: true,
    },
    sodium: {
        type: Number,
        required: true,
    },
    zinc: {
        type: Number,
        required: true,
    },
    selected: {
        type: Number,
        required: true,
    },


})

const Food = mongoose.Model('Food', foodSchema)

export default Food