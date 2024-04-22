import mongoose, { model } from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email'],
        required: true
    },
    password: {
        type: String,
        minLength: [8, 'Password must contain 8 or more characters'],
        required: true
    },
    phone: {
        type: String,
        minLength: 8,
        maxLength: 8,
        required: true
    },
    role: {
        type: String,
        uppercase: true,
        enum: ['CLIENT', 'ADMIN'],
        required: true,
        default: 'CLIENT'
    }
})

export default model('User', userSchema)
