import { Link } from "react-router";

function PageNotFount() {
  return (
    <div>
      Sorry! This PAGE is not found,{" "}
      <Link
        to="/"
        className="pb-1 text-blue-500 transition-all duration-75 hover:border-b-1"
      >
        Navigate to Home Page
      </Link>
    </div>
  );
}

export default PageNotFount;
