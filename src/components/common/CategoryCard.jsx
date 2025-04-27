/* eslint-disable react/prop-types */
function CategoryCard({ image_url, name }) {
  return (
    <article className="bg-white h-80 grid place-content-center gap-4 rounded-2xl shadow-lg ">
      <img src={image_url} alt={name} className="rounded-full w-56 h-56 object-cover" />
      <p className="text-night  text-center text-lg font-quciksand">{name}</p>
    </article>
  );
}

export default CategoryCard;
