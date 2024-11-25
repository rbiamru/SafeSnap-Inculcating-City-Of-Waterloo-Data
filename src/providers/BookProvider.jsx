import { createContext, useContext, useEffect, useState } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, onSnapshot, query, where, orderBy, serverTimestamp, updateDoc } from 'firebase/firestore';
import { useFirebaseContext } from './FirebaseProvider';

export const BookContext = createContext({});

const BookProvider = (props) => {
  const { children } = props;
  const { myFS } = useFirebaseContext();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBooks = async () => {
    try {
      const booksCollection = collection(myFS, 'books');
      const q = query(booksCollection, where("author", "==", "patrick rothfuss"), orderBy('author'));
      const booksSnapshot = await getDocs(q);
      const booksList = booksSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setBooks(booksList);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching books: ', error);
      setError(error);
      setLoading(false);
    }
  };
  // Add a new book
  const addBook = async (title, author) => {
    try {
      const newBook = { title, author, createdAt: serverTimestamp() };
      await addDoc(collection(myFS, 'books'), newBook);
      fetchBooks(); // Refresh the book list or No need to call fetchBooks because onSnapshot will handle updates
    } catch (error) {
      console.error('Error adding book: ', error);
      setError(error);
    }
  };

  // Delete a book by id
  const deleteBook = async (id) => {
    try {
      const bookDoc = doc(myFS, 'books', id);
      await deleteDoc(bookDoc);
      fetchBooks(); // Refresh the book list
    } catch (error) {
      console.error('Error deleting book: ', error);
      setError(error);
    }
  };
  // Update a book by id
  const updateBook = async (id, updatedFields) => {
    try {
      const bookDoc = doc(myFS, 'books', id);
      await updateDoc(bookDoc, updatedFields);
      // No need to call fetchBooks because onSnapshot will handle updates
    } catch (error) {
      console.error('Error updating book: ', error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [myFS]);

  const theValues = {
    books,
    loading,
    error,
    addBook,
    deleteBook,
    updateBook,
  };

  return (
    <BookContext.Provider value={theValues}>
      {children}
    </BookContext.Provider>
  );
};

const useBookContext = () => {
  const context = useContext(BookContext);

  if (context === undefined) {
    throw new Error('useBookContext was used outside of its Provider');
  }

  return context;
};

export { BookProvider, useBookContext };
