/* eslint-disable react/prop-types */
const styles = {
  title: " h-12 rounded bg-slate-500",
  text: " h-5 rounded bg-slate-500",
  image: " h-2/3 rounded bg-slate-500",
};

function Skeleton({ type, className = "" }) {
  return <div className={`${className} ${styles[type]}`}></div>;
}

export default Skeleton;
