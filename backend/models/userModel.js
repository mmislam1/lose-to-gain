import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    height: { type: Number, default: 0, required: true },
    weight: { type: Number, default: 0, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema)

export default User