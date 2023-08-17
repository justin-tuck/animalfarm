import React from "react";
import useBook from "../../hooks/useBook";
import BookGrid from "../BookGrid/BookGrid";
export default function BookStore() {
  const [books, useBooks] = useBook();
  return (
    <>
      <h1 className="header">Book Store!</h1>
      <BookGrid books={books} />
    </>
  );
}
