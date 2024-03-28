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

  useEffect(() => {
    setDataOfReadingList(getDataFromLocalStorage("readingList"));
    setDataOfWishList(getDataFromLocalStorage("wishList"));
  }, []);

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
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-green-500 text-white rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>

      <TabsOfRW readingList={dataOfReadingList} wishList={dataOfWishList} />
    </div>
  );
};

export default ListedBooks;
