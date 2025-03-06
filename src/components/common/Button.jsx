/* eslint-disable react/prop-types */
function Button({ children, action, moreStyles, type = "button" }) {
  return (
    <button
      type={type}
      onClick={() => action()}
      className={`${moreStyles} py-2`}
    >
      {children}
    </button>
  );
}

export default Button;
