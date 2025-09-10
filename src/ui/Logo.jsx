import { useNavigate } from "react-router";

function Logo() {
  const navigate = useNavigate();

  return (
    <h1
      className="cursor-pointer text-2xl font-bold"
      onClick={() => navigate("/")}
    >
      LOGO
    </h1>
  );
}

export default Logo;
