import { useDispatch, useSelector } from "react-redux";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
import "./BookList.css";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDeleteBook = (bookId) => {
    dispatch(deleteBook(bookId));
  };

  const handleToggleFavorite = (bookId) => {
    dispatch(toggleFavorite(bookId));
  };

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, i) => {
            return (
              <li key={book.id}>
                <div className="book-info">
                  {++i}. {book.title} by <strong>{book.author}</strong>
                  {book.year ? `, ${book.year}` : ""}
                </div>
                <div className="book-actions">
                  <span onClick={() => handleToggleFavorite(book.id)}>
                    {book.isFavorite ? (
                      <BsBookmarkStarFill className="star-icon" />
                    ) : (
                      <BsBookmarkStar className="star-icon" />
                    )}
                  </span>
                  <button onClick={() => handleDeleteBook(book.id)}>X</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default BookList;
