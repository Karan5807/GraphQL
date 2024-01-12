import AuthorModel from "../Database/Model/AuthorModel.js";
import BookModel from "../Database/Model/BookModel.js";
import ReviewModel from "../Database/Model/ReviewModel.js";
import UserModel from "../Database/Model/UserModel.js";

const resolvers = {
    // Query Function
    Query: {
        users: async () => await UserModel.find({}),
        userById: async (parent,args) => await UserModel.findById(args.id),
        books: async () => await BookModel.find({}),
        bookById: async (parent, args) => await BookModel.findById(args.id),
        reviews: async () => await ReviewModel.find({}),
        reviewById: async (parent, args) => await ReviewModel.findById(args.id),
        authors: async () => await AuthorModel.find({}),
        authorById: async (parent, args) => await AuthorModel.findById(args.id)
    },

    // Function for Mutation
    Mutation: {

        // Section for Users
        createUser: async (parent,args) => {
            const {fullName,email,userId,password,verified,createdAt} = args;
            const newUser = new UserModel({
                fullName,
                email,
                userId,
                password,
                verified,
                createdAt
            });
            await newUser.save();
            return newUser;
        },

        // Update User
        updateUser: async (parent, args) => {
            const { userId } = args;
            const updateUser = await BookModel.findByIdAndUpdate(userId, args);
            if (!updateUser) {
                console.error(`No Data is found with ${userId}`);
            }
            return updateUser;
        },
        // Delet User

        deletUser: async (parent,args) =>{
            const {userId} =args;
            const deletUser = await UserModel.findByIdAndDelete(userId);
            if(!deletUser){
                console.error(`No Error found with this ${userId}`);
            }
            return deletUser;
        }, 


        // Section for Books
        createBooks: async (parent, args) => {
            const { bookName, authorName, bookId, publicationYear } = args;
            const newBook = new BookModel({
                bookName,
                authorName,
                bookId,
                publicationYear
            });

            await newBook.save();
            return newBook;
        },

        updateBook: async (parent, args) => {
            const { id } = args;
            const updateBook = await BookModel.findByIdAndUpdate(id, args);
            if (!updateBook) {
                console.error(`No Data is found with ${id}`);
            }
            return updateBook;
        },

        deletBook: async (parent, args) => {
            const { id } = args;
            const deleteBook = await BookModel.findByIdAndDelete(id);
            if (!deleteBook) {
                console.error(`No data is found with ${id}`);
            }
            return deleteBook;
        },

        // Section for Reviews
        createReviews: async (parent, args) => {
            const { bookName, authorId, bookId, review, rating } = args;
            const newReview = new ReviewModel({
                bookName,
                authorId,
                bookId,
                review,
                rating,
            });

            await newReview.save();
            return newReview;
        },

        updateReview: async (parent, args) => {
            const { id } = args;
            const updateReview = await ReviewModel.findByIdAndUpdate(id, args);
            if (!updateReview) {
                console.error(`Data with ${id} not found`);
            }
            return updateReview;
        },

        deletReview: async (parent, args) => {
            const { id } = args;
            const deletReview = await ReviewModel.findByIdAndDelete(id);
            if (!deletReview) {
                console.error(`No data is found ${id}`);
            }
            return deletReview;
        },


        // Section for Authors
        createAuthors: async (parent, args) => {
            const { fullName, authorId, email, verified } = args;
            const newAuthor = new AuthorModel({
                fullName,
                authorId,
                email,
                verified,
            });

            await newAuthor.save();
            return newAuthor;
        },

        updateAuthor: async (parent, args) => {
            const { id } = args;
            const updateAuthor = await AuthorModel.findByIdAndUpdate(id, args);
            if (!updateAuthor) {
                console.error(`Data with ${id} not found`)
            }
            return updateAuthor;
        },

        deletAuthor: async (parent, args) => {
            const { id } = args;
            const deletAuthor = await AuthorModel.findByIdAndDelete(id);
            if (!deletAuthor) {
                console.error(`No data is found with ${id}`);
            }
            return deletAuthor;
        }
    }
}

export default resolvers;
