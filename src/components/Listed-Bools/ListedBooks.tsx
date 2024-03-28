import React, { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../../util/manageLocalStorage";
import TabsOfRW from "./Tabs";

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

const ListedBooks: React.FC = () => {
  const [dataOfReadingList, setDataOfReadingList] = useState<Books[]>([]);
  const [dataOfWishList, setDataOfWishList] = useState<Books[]>([]);
  const [sort, setSort] = useState<string>("");

  useEffect(() => {
    setDataOfReadingList(getDataFromLocalStorage("readingList"));
    setDataOfWishList(getDataFromLocalStorage("wishList"));
  }, []);

  const handleSort = (option: string) => {
    setSort(option);
  };

  const sortedDataOfReadingList =
    sort === "rating"
      ? [...dataOfReadingList].sort((a, b) => b.rating - a.rating)
      : sort === "pages"
      ? [...dataOfReadingList].sort((a, b) => b.totalPages - a.totalPages)
      : sort === "year"
      ? [...dataOfReadingList].sort(
          (a, b) => b.yearOfPublishing - a.yearOfPublishing
        )
      : dataOfReadingList;
  const sortedDataOfWishList =
    sort === "rating"
      ? [...dataOfWishList].sort((a, b) => b.rating - a.rating)
      : sort === "pages"
      ? [...dataOfWishList].sort((a, b) => b.totalPages - a.totalPages)
      : sort === "year"
      ? [...dataOfWishList].sort(
          (a, b) => b.yearOfPublishing - a.yearOfPublishing
        )
      : dataOfWishList;

  return (
    <div>
      <div className="rounded-2xl bg-slate-200 text-center w-full py-10 my-10">
        <h2 className="text-3xl text-black font-work font-bold">Book</h2>
      </div>

      <div className="text-center font-work">
        <details className="dropdown">
          <summary className="m-1 btn bg-green-500 text-white border-none">
            Sort By
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-white text-green-500 rounded-box w-52">
            <li>
              <a onClick={() => handleSort("rating")}>Rating </a>
            </li>
            <li>
              <a onClick={() => handleSort("pages")}>Number of pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("year")}>Publishing Year</a>
            </li>
          </ul>
        </details>
      </div>

      <TabsOfRW
        readingList={sortedDataOfReadingList}
        wishList={sortedDataOfWishList}
      />
    </div>
  );
};

export default ListedBooks;
