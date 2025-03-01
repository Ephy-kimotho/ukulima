/* eslint-disable react/prop-types */
function Button({ children, action, moreStyles }) {
  return (
    <button onClick={() => action()} className={`${moreStyles} py-2`}>
      {children}
    </button>
  );
}

export default Button;
