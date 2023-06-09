const mongoose = require("mongoose")

const CategorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },

    message: {
        type: String,
        required: true,
        trim: true,
    },

    post: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "post"
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


module.exports = mongoose.model("notification", CategorySchema)