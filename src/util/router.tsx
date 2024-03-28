import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Home from "../components/Home/Home.tsx";
import ListedBooks from "../components/Listed-Bools/ListedBooks.tsx";
import PagesToRead from "../components/Pages-To-Read/PagesToRead.tsx";
import ErrorElement from "../components/ErrorElement.tsx";
import BookDetails from "../components/BookDetails.tsx";
import About from "../components/About/About.tsx";
import Contact from "../components/Contact/Contact.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          try {
            const response = await fetch(
              "https://allsamir.github.io/books.json.host/books.json"
            );
            if (!response.ok) {
              throw new Error("Failed to Fetch Data");
            }
            const data = await response.json();
            return data;
          } catch (err) {
            console.error(err);
            return null;
          }
        },
      },
      { path: "/listed-books", element: <ListedBooks /> },
      { path: "/pages-to-read", element: <PagesToRead /> },
      {
        path: "/books/:bookID",
        element: <BookDetails />,
        loader: async () => {
          try {
            const response = await fetch(
              "https://allsamir.github.io/books.json.host/books.json"
            );
            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            return data; // Return the fetched data
          } catch (error) {
            console.error(error);
            return null; // Return null in case of error
          }
        },
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);
