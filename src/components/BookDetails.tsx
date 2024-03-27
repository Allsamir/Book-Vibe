import React from "react";
import { useParams, useLoaderData } from "react-router-dom";

interface Books {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  totalPages: number;
  rating: number;
  category: number;
  tags: string[];
  publisher: string;
  yearOfPublishing: number;
}

const BookDetails: React.FC = () => {
  const { bookID } = useParams();
  const books = useLoaderData() as Books[];
  const book = bookID
    ? books.find((book) => book.bookId === parseInt(bookID))
    : undefined;

  if (!book)
    return (
      <div>
        <h1 className="text-center font-3xl text-black font-work">
          Book not found
        </h1>
      </div>
    );
  return (
    <div className="flex flex-col md:flex-row gap-12 mt-16">
      <div className="bg-[#f3f3f3f3] py-16 rounded-2xl">
        <img
          src={book.image}
          alt={`Book-${book.bookName}`}
          className="max-w-96 mx-auto"
        />
      </div>

      <div></div>
    </div>
  );
};

export default BookDetails;
