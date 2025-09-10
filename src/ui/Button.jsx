function Button({ onClick, children, type = "button" }) {
  let buttonClass = "";

  if (type === "primary") {
    buttonClass = "bg-purple-300 text-purple-700 hover:bg-purple-400";
  } else if (type === "secondary") {
    buttonClass = "bg-gray-300 text-gray-700 hover:bg-gray-400";
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`cursor-pointer rounded-full px-8 py-4 text-base transition-all duration-300 ${buttonClass}`}
    >
      {children}
    </button>
  );
}

export default Button;
