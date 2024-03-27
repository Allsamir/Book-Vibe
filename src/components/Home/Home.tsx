import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Book from "./Book";

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

const Home: React.FC = () => {
  const dataOfBooks = useLoaderData() as Books[];
  console.log(dataOfBooks);
  return (
    <>
      <div className="mt-14 mb-24">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse gap-24">
            <img
              src="../../img/pngwing 1.png"
              className="max-w-sm rounded-lg"
            />
            <div>
              <h1 className="text-6xl leading-[5.75rem] font-bold pb-12 text-black">
                Books to freshen up <br /> your bookshelf
              </h1>
              <Link to={`/listed-books`}>
                <button className="btn font-work text-xl font-bold btn-primary bg-green-500 text-white border-none">
                  View The List
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="books">
        <h1 className="text-center text-black text-4xl font-bold">Books</h1>
        <div className="mt-12 mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-flow-row">
          {dataOfBooks.map((book) => (
            <Book key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
