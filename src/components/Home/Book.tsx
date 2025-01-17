import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

interface ChildProps {
  book: {
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
  };
}

const Book: React.FC<ChildProps> = ({ book }) => {
  return (
    <div className="p-6 border border-solid border-[rgba(19, 19, 19, 0.15)] rounded-2xl">
      <Link to={`/books/${book.bookId}`}>
        <div className="bg-[#F3F3F3] py-12 rounded-2xl mb-6">
          <img
            src={book.image}
            className="w-32 mx-auto"
            alt={`Book-${book.bookName}`}
          />
        </div>

        <div className="flex gap-4">
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#f3f3f3] rounded-full py-[0.44rem] px-4 text-green-400 text-base font-work"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-black py-4">{book.bookName}</h2>
        <p className="text-base font-work font-normal text-black">
          By : {book.author}
        </p>

        <hr className="my-6 border-dashed border border-[rgba(19, 19, 19, 0.15)]" />

        <div className="flex justify-between items-center">
          <span className="text-base font-work font-normal text-black">
            {book.category}
          </span>
          <span className="flex items-center text-xl font-work font-normal text-black">
            <CiStar />
            {book.rating}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Book;
