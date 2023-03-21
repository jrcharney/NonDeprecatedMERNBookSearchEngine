import bookController from "../book/controller.js";
import userController from "../user/controller.js";

const resolvers = {
  Query: {
    /*
    // List users
    async users() {
      return await userController.index();
    },
    */
    /*
    // Show a user
    async user(_, { id }) {
      return await userController.show(id);
    },
    */
    // List books
    async books() {
      return await bookController.index();
    },
    /*
    // Show Books
    async book(_, { bookId }) {
      return await userController.show(bookId);
    },
    */
  },
  Mutation: {
    // Returns a user token
    async createUser(_, { user }) {
      return await userController.create(user);
    },
    /*
    // Returns a book token
    async createBook(_, { book }) {
      const token = await bookController.create(book);
      return { token };
    },
    // Delete a book
    async deleteBook(_, { bookId }) {
      return await bookController.delete(bookId);
    },
    */
    async login(_, { username, password }) {
      const token = userController.login({ username, password });
      return { token };
    },
  },

  /*
  async saveBook(_, { book }, { user }) {
    return await bookController.create({ ...book, userId: user.id });
  },
  async removeBook(_, { book }, { user }) {
    const bookToDelete = await bookController.show(bookId);
    if (book.userId !== user.id) {
      return book.findByIdAndDelete(bookId);
    }
  },
  */
};

export default resolvers;
