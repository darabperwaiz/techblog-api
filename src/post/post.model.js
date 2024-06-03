import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: [],
    thumbnail: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true        
    },
    status: {
        type: String,
        enum: ["Published", "Unpublished"]
    },
    views: {
        type: Number,
        default: 0  
    }
}, { timestamps: true })

export const Post = new mongoose.model("Post", postSchema)


