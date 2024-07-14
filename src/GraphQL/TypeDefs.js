export const typeDefs = `#graphql
type Users {
    fullName: String!
    email: String!
    userId: String!
    password: String!
    verified: Boolean!
},
type Authors {
    fullName: String!
    email:String!
    authorId: Int!
    verified: Boolean!
}
type Books {
    bookId: Int!
    bookName: String!
    authorName: String!
    publicationYear: Int!
}
type Reviews {
    bookName: String!
    bookId: Int!
    authorId: Int!
    review: String
    rating: Int!
}

type AuthpayLoad {
    token: String!
    user: Users!
}

type Query {
    users:[Users]
    userById(userId:ID!):Users
    authors: [Authors]
    authorById(id:ID!):Authors
    books:  [Books]
    bookById(id:ID!):Books
    reviews: [Reviews]
    reviewById(id:ID!):Reviews
}


#Mutation for Books
type Mutation{
    createUser(fullName:String, email:String, userId:String, password:String, verified:Boolean):Users
    updateUser(userId: ID, fullName: String, password: String):Users
    deletUser(userId: ID): Users

    createBooks(bookName: String, authorName: String, bookId:Int):Books
    updateBook(id: ID, bookName: String, authorName: String, bookId:Int):Books
    deletBook(id: ID): Books

    createReviews(bookName: String, bookId: Int, authorID: Int, review: String, rating: Int):Reviews
    updateReview(id: ID, bookName: String, bookId: Int, authorID: Int, review: String, rating: Int):Reviews
    deletReview(id: ID):Reviews

    createAuthors(fullName: String, authorId: Int, email: String, verified:Boolean, createdAt:String):Authors
    updateAuthor(id: ID, fullName: String, authorId: Int, email: String, verified:Boolean, createdAt:String):Authors
    deletAuthor(id: ID):Authors
}


`;
//  Int, Float, String, Boolean, ID  five types of are use in graphQL

//  type Query is the entry/Starting  points of the Graphs
