/* eslint-disable react/prop-types */
function CategoryCard({ categoryImage, categoryName }) {
  return (
    <article className="bg-white h-80 grid place-content-center gap-4 rounded-2xl shadow-lg ">
      <img src={categoryImage} alt={categoryName} />
      <p className="text-night  text-center text-lg font-quciksand">
        {categoryName}
      </p>
    </article>
  );
}

export default CategoryCard;
