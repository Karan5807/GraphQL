import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    bookName: {
        type: String,
        require: true,
    },
    bookId: {
        type: Number,
        require: true,
    },
    authorId: {
        type: Number,
        require: true,
    },
    review: {
        type: String
    },
    rating: {
        type: Number,
        require: true,
    }
});

const ReviewModel = mongoose.model("Review", reviewSchema);

export default ReviewModel;