import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Home from "../components/Home/Home.tsx";
import ListedBooks from "../components/Listed-Bools/ListedBooks.tsx";
import PagesToRead from "../components/Pages-To-Read/PagesToRead.tsx";
import ErrorElement from "../components/ErrorElement.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://allsamir.github.io/books.json.host/books.json"),
      },
      { path: "/listed-books", element: <ListedBooks /> },
      { path: "/pages-to-read", element: <PagesToRead /> },
    ],
    errorElement: <ErrorElement />,
  },
]);
