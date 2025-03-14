/* eslint-disable react/prop-types */

function ProductCard({ image, name, price, stock }) {
  return (
    <article className="max-w-sm  hover:scale-105 bg-[#f0f0f0] rounded-xl pb-3 shadow-md text-night">
      <img
        src={image}
        alt={name}
        className="w-full object-cover h-1/3 aspect-square rounded-t-xl"
      />
      <div className="m-4">
        <p className="text-2xl text-mint capitalize font-semibold">
          {name}
        </p>
        <p
          className={`${
            stock > 0 ? "text-mint" : "text-red-500"
          } mb-4 capitalize font-medium`}
        >
          {stock > 0 ? `In stock: ${stock}` : "Out of stock"}
        </p>
        <p className=" font-nunito text-lg text-emerald font-bold ">
          Ksh. {price}
        </p>
      </div>
    </article>
  );
}

export default ProductCard;
