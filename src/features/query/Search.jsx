import { useDispatch } from "react-redux";
import { fetchMoviesByName } from "../movies/movieSlice";
import { useState } from "react";
import { useNavigate } from "react-router";

function Search() {
  const [query, setQuery] = useState("interstellar");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(query);
    console.log("Searching for:", query);
    setQuery("");
    dispatch(fetchMoviesByName(query));
    navigate(`/movieResult/${query}`);
  }

  return (
    <>
      <form>
        <span
          htmlFor="search"
          className="mb-2 cursor-default text-xl font-semibold text-purple-500"
        >
          Search any movie you want
        </span>
        <div className="flex max-w-3xl flex-col gap-2 sm:flex-row">
          <input
            id="search"
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleChange}
            className="flex-1 rounded-lg border-3 border-purple-500 bg-purple-100 px-4 py-2 text-purple-500 transition-all duration-300 focus:bg-purple-200 focus:ring-2 focus:ring-purple-600/50 focus:ring-offset-2 focus:outline-none"
          />

          <button
            className="cursor-pointer rounded-lg bg-purple-400 px-4 py-2 text-purple-50 transition-all duration-300 hover:bg-purple-500"
            onClick={handleClick}
          >
            Search now!
          </button>
        </div>
      </form>
    </>
  );
}

export default Search;
