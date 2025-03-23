import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import Button from "../common/Button";

function ProductDetail() {
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);

  const selectedItem = useMemo(() => {
    if (products.length === 0) return null;
    return products?.find((product) => product.id.toString() === id);
  }, [products, id]);

  // TODO: write add to cart function.
  const addItemToCart = () => {
    console.log("Item added to cart");
  };

  return (
    <section className="bg-[#fdfbf0] min-h-screen py-10 px-5 text-night font-nunito">
      <>
        {/* Go back link */}
        <Link
          to=".."
          relative="path"
          className="ml-5 hover:border-b hover:border-[#2d3134] space-x-1 inline-flex items-center "
        >
          <ArrowLeft size={26} color="#2d3134" />
          <span className="text-lg text-[#2d3134] font-semibold">Back</span>
        </Link>

        <>
          <div className="flex flex-col gap-6 mt-6 md:flex-row items-center md:justify-around ">
            {selectedItem && (
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="sm:w-1/3 self-stretch rounded"
              />
            )}
            <ul className="bg-[#D9D9D9] self-stretch text-night p-8 gap-4 lg:gap-12 rounded-md text-xl flex flex-1 flex-col md:justify-center list-none">
              <li>
                <span className="font-bold">Name: </span>
                <span>{selectedItem?.name}</span>
              </li>
              <li>
                <span className="font-bold">Category: </span>
                <span>{selectedItem?.category}</span>
              </li>
              <li>
                <span className="font-bold">Stock: </span>
                <span>{selectedItem?.stock}</span>
              </li>
              <li>
                <span className="font-bold">Price: </span>
                <span> Ksh. {selectedItem?.price}</span>
              </li>
              <li>
                <span className="font-bold">Description: </span>
                <span>{selectedItem?.description}</span>
              </li>
            </ul>
          </div>
        </>

        {/* Add to cart button */}
        <div className="text-center mt-20">
          <Button
            action={addItemToCart}
            moreStyles="font-bold text-white px-20 py-4 hover:bg-emerald rounded-xl bg-mint text-xl active:scale-95 cursor-pointer tracking-wider"
          >
            Add to cart
          </Button>
        </div>
      </>
    </section>
  );
}

export default ProductDetail;
