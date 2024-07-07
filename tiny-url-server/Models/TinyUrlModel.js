import mongoose from "mongoose"

const TinyUrlSchema=mongoose.Schema({
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("tinyUrl",TinyUrlSchema)
