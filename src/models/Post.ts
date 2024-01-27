import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "Please provide userId"]
    },
    username: {
        type: String,
        required: [true, "Please provide username"]
    },
    userImg: {
        type: String,
    },
    title: {
        type: String,
        required: [true, "Please provide title"]
    },
    imgUrl: {
        type: String
    },
    desc: {
        type: String
    },
    tags: {
        type: Array
    }
}, { timestamps: true })

const Post = mongoose.models.posts || mongoose.model("posts", postSchema);

export default Post;