const mongoose = require("mongoose")

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true, 
        trim: true,
        unique: true,
    }, 
    status: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
})


module.exports = mongoose.model("category", CategorySchema)