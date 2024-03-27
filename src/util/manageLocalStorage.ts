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

export const saveDataToLocalStorage = (key: string, book: Books) => {

    const dataFromLocalStorage = localStorage.getItem(key)!
    const dataListData = JSON.parse(dataFromLocalStorage) || [];

    const isDataExists = dataListData.find((boi: Books) => boi.bookId === book.bookId)

    if (isDataExists) {
      alert("Data exists");
    } else {
      dataListData.push(book);
      localStorage.setItem(key, JSON.stringify(dataListData));
    }
}

export const getDataFromLocalStorage = (key: string) => {
          const data = JSON.parse(localStorage.getItem(key)!) || [];
          return data
}