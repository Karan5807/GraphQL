import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true,
        unique: true,
    },
    authorId: {
        type: Number,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },

    verified: {
        type: Boolean,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        require: true
    }
});

const AuthorModel = mongoose.model("Author", authorSchema);

export default AuthorModel;