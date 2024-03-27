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
    <div className="flex flex-col lg:flex-row gap-12 my-16">
      <div className="bg-[#f3f3f3f3] py-16 rounded-2xl w-1/2">
        <img
          src={book.image}
          alt={`Book-${book.bookName}`}
          className="max-w-96 mx-auto"
        />
      </div>

      <div className="text-black flex-1">
        <h1 className="text-4xl font-bold">{book.bookName}</h1>
        <p className="text-xl font-normal font-work py-6">By : {book.author}</p>
        <hr />
        <p className="text-xl font-normal font-work py-4">{book.category}</p>
        <hr />
        <p className="text-base text-[rgba(19, 19, 19, 0.70)] font-normal font-work py-6">
          <span className="font-bold">Review:</span> {book.review}
        </p>

        <div className="flex gap-4 items-center">
          <span className="text-base font-work font-bold">Tag</span>{" "}
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#f3f3f3] rounded-full py-[0.44rem] px-4 text-green-400 text-base font-work"
            >
              {tag}
            </span>
          ))}
        </div>

        <hr className="my-6 " />
        <div className="overflow-x-auto font-work mb-8">
          <table className="table">
            {/* head */}
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Number of Pages:</td>
                <td className="font-bold">{book.totalPages}</td>
              </tr>
              <tr>
                <td>Publisher:</td>
                <td className="font-bold">{book.publisher}</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>Year of Publishing:</td>
                <td className="font-bold">{book.yearOfPublishing}</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>Rating:</td>
                <td className="font-bold">{book.rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="btn btn-outline text-base-200 rounded-lg font-work mr-4 text-lg">
          Read
        </button>
        <button className="btn text-white bg-sky-400 rounded-lg border-none font-work mr-4 text-lg">
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
