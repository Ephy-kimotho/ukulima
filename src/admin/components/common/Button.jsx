/* eslint-disable react/prop-types */

const styles = {
  add: "bg-blue-500  hover:bg-blue-600",
  delete: "bg-red-500  hover:bg-red-600",
  save: "bg-green-600 hover:bg-green-700",
};

function Button({
  children,
  action,
  category,
  className = "",
  type = "button",
  disabled = false,
}) {
  return (
    <button
      onClick={disabled ? null : action}
      type={type}
      disabled={disabled}
      className={`${className} ${styles[category]} text-white font-semibold px-6 py-2 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed active:scale-95`}
    >
      {children}
    </button>
  );
}

export default Button;
