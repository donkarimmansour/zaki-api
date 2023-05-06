const mongoose = require("mongoose")

const LikeSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : "user"
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : "post"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model("like", LikeSchema)