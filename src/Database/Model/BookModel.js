import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        require: true,
        unique: true,
    },
    authorName: {
        type: String,
        require: true,
        unique: true,
    },
    bookId: {
        type: Number,
        require: true,
        unique: true
    },
    publicationYear: {
        type: Number,
        require: true,
    }
});


const BookModel = mongoose.model("Books", bookSchema);

export default BookModel;
