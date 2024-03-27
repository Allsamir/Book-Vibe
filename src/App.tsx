import { NavLink, Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
function App() {
  const navigation = useNavigation();
  return (
    <>
      <div className="navbar font-work">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="gap-y-12 items-center menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-black"
            >
              <NavLink to={`/`}>Home</NavLink>
              <NavLink to={`/listed-books`}>Listed Books</NavLink>
              <NavLink to={`/pages-to-read`}>Pages to Read</NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold text-black">
            Book Vibe
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 text-base text-black items-center">
            <NavLink to={`/`}>Home</NavLink>
            <NavLink to={`/listed-books`}>Listed Books</NavLink>
            <NavLink to={`/pages-to-read`}>Pages to Read</NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="btn text-lg bg-green-500 text-white border-none">
            Sign In
          </a>
          <a className="btn text-lg bg-sky-500 text-white border-none">
            Sign Up
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {navigation.state === "loading" ? (
          <div className="text-center">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </>
  );
}

export default App;
