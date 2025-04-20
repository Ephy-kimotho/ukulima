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
}) {
  return (
    <button
      onClick={action}
      type={type}
      className={`${className} ${styles[category]} text-white font-semibold px-6 py-2 rounded-md`}
    >
      {children}
    </button>
  );
}

export default Button;
