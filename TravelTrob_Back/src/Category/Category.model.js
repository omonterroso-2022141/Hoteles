import mongoose, { model } from "mongoose"

const categorySchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
})

export default model('Category', categorySchema)