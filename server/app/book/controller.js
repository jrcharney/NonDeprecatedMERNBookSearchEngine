import Book from "./index.js";

const controller = {
  create(newBook) {
    return Book.create(newBook);
  },
  index(bookId) {
    return Book.find({ bookId });
  },
  show(bookId) {
    return Book.findById(bookId);
  },
  delete(bookId) {
    return Book.findByIdAndDelete(bookId);
  },
};

export default controller;
