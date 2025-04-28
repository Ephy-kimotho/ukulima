/* eslint-disable react/prop-types */
function Button({ children, action, moreStyles, disabled, type = "button" }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={() => action()}
      className={`${moreStyles} py-2 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-50`}
    >
      {children}
    </button>
  );
}

export default Button;
