import Button from "../common/Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import WarningToast from "../common/WarningToast";

function ProductCard(product) {
  const { cart } = useSelector((state) => state.shoppingCart);
  const { token } = useAuth();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // TODO: write add to cart function.
  const addItemToCart = () => {
    //Check if user is authenticated
    if (token) {
      // check if product is already in cart
      const productIsInCart = cart.some((item) => item.id === product.id);
      // if it's show toast message
      if (productIsInCart) {
        toast.custom(
          <WarningToast message={`${product.name} is already in the cart.`} />
        );
      }
      // if it's not the dispatch product
      else {
        dispatch(addToCart({ ...product, quantity: 1 }));
        toast.success(`${product.name} added to cart`);
      }
    }
    // if not redirect to login
    else {
      navigate("/login", {
        state: { message: "You must login first.", path: pathname },
      });
    }
  };

  return (
    <article className="max-w-sm  bg-[#f0f0f2] rounded-xl  shadow-md text-night">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-2/3 object-cover aspect-square rounded-t-xl"
      />
      <div className="mt-5 w-11/12 mx-auto">
        <div className="flex justify-between">
          <div>
            <p className="text-2xl text-mint capitalize font-semibold">
              {product.name}
            </p>
            <p
              className={`${
                product.stock > 0 ? "text-mint" : "text-red-500"
              } mb-4 capitalize font-medium`}
            >
              {product.stock > 0
                ? `In stock: ${product.stock}`
                : "Out of stock"}
            </p>
          </div>
          <p className=" font-nunito text-lg text-emerald font-bold ">
            Ksh. {product.price}
          </p>
        </div>
        <div className="flex gap-3 ">
          <Link
            to={`/products/${product.id}`}
            className="bg-mint active:scale-95 text-white text-center inline-block py-2 px-4 rounded-md flex-1"
          >
            View details
          </Link>
          <Button
            action={addItemToCart}
            disabled={product.stock === 0}
            moreStyles="bg-emerald text-white active:scale-95 px-4 rounded-md flex-1"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
