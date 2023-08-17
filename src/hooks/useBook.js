import { useEffect, useState } from "react";

function useBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const response = await fetch("http://localhost:5185/api/books/");
    const data = await response.json();
    setBooks(data);
  };

  return [books, setBooks];
}

export default useBook;
