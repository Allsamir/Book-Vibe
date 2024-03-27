import React, { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../../util/manageLocalStorage";

const ListedBooks: React.FC = () => {
  const [dataOfReadingList, setDataOfReadingList] = useState([]);
  const [dataOfWishList, setDataOfWishList] = useState([]);

  console.log(dataOfReadingList);
  console.log(dataOfWishList);

  useEffect(() => {
    setDataOfReadingList(getDataFromLocalStorage("readingList"));
    setDataOfWishList(getDataFromLocalStorage("wishList"));
  }, []);
  return <div>I am from listed books</div>;
};

export default ListedBooks;
