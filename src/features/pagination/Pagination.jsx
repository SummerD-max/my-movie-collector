import { useSelector } from "react-redux";
import { getIsLoading, getMoviesCount } from "../movies/movieSlice";
import { useSearchParams } from "react-router";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const itemsPerPage = 6;

function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = +searchParams.get("page") || 1;
  const pageCount = useSelector(getMoviesCount);
  const pages = Array.from(
    { length: Math.ceil(pageCount / itemsPerPage) },
    (_, i) => i + 1,
  );
  const isLoading = useSelector(getIsLoading);

  function handleChangePage(page) {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  }

  if (!isLoading && pages.length === 0) return null;

  return (
    <ul className="flex items-center justify-center gap-3">
      {isLoading ? null : (
        <>
          <PaginationArrow
            pages={pages}
            currentPage={currentPage}
            onClick={handleChangePage}
            direction="left"
          />
          <PaginationNumbers
            pages={pages}
            currentPage={currentPage}
            handleChangePage={handleChangePage}
          />
          <PaginationArrow
            pages={pages}
            currentPage={currentPage}
            onClick={handleChangePage}
            direction="right"
          />
        </>
      )}
    </ul>
  );
}

function PaginationArrow({ direction, onClick, currentPage, pages }) {
  const arrowIcons = {
    left: <FaAngleLeft />,
    right: <FaAngleRight />,
  };

  function handleClick() {
    if (direction === "left" && currentPage > 1) {
      onClick(currentPage - 1);
    }
    if (direction === "right" && currentPage < pages.length) {
      onClick(currentPage + 1);
    }
  }

  return (
    <>
      <button
        className="cursor-pointer text-2xl transition-colors hover:text-purple-500"
        onClick={handleClick}
      >
        {arrowIcons[direction]}
      </button>
    </>
  );
}

function PaginationNumbers({ pages, currentPage, handleChangePage }) {
  return (
    <>
      {pages.map((page) => (
        <button
          key={page}
          className={`rounded ${currentPage === page ? "pointer-events-none bg-purple-700" : "bg-gray-500 hover:bg-purple-700"} cursor-pointer px-3 py-1 text-white transition-all`}
          onClick={() => handleChangePage(page)}
        >
          {page}
        </button>
      ))}
    </>
  );
}

export default Pagination;
