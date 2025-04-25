import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems } from "../../redux/cart/cartActions";
import { DEV_URL } from "../../constants";
import axios from "axios";
import Button from "../common/Button";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import WarningToast from "../common/WarningToast";

function ProductCard(product) {
  const { items } = useSelector((state) => state.shoppingCart);
  const { token } = useAuth();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get cart from the items object
  const cart = Array.isArray(items?.cart) ? items.cart : [];

  // Function to verify addition of a product to cart
  const verifyAdd = async (product) => {
    // check if there is a token
    if (token) {
      // check if product is already in cart
      const isProductInCart = cart.some(
        (item) => item.productID === product.productsID
      );

      if (isProductInCart) {
        // show message
        toast.custom(
          <WarningToast
            message={`${product.productName} is already in the cart`}
          />
        );
      } else {
        // add item to cart
        try {
          await axios.post(
            `${DEV_URL}/cart_add`,
            {
              quantity: 1,
              productID: product.productsID,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          // update cart store in redux
          dispatch(getCartItems(token));
          toast.success(`${product.productName} added to cart`);
        } catch (error) {
          console.error("Error adding item to cart", error);
          toast.error("Error adding item to cart, try again");
        }
      }
    } else {
      // navigate to login
      navigate("/login", {
        state: { message: "You must login first.", path: pathname },
      });
    }
  };

  return (
    <article className="max-w-sm  bg-[#f0f0f2] rounded-xl  shadow-md text-night">
      <img
        src={product?.image_url}
        alt={product?.productName}
        className="w-full h-2/3 object-cover aspect-square rounded-t-xl"
      />
      <div className="mt-5 w-11/12 mx-auto">
        <div className="flex justify-between">
          <div>
            <p className="text-2xl text-mint capitalize font-semibold">
              {product?.productName}
            </p>
            <p
              className={`${
                product?.quantity > 0 ? "text-mint" : "text-red-500"
              } mb-4 capitalize font-medium`}
            >
              {product?.quantity > 0
                ? `In stock: ${product.quantity}`
                : "Out of stock"}
            </p>
          </div>
          <p className=" font-nunito text-lg text-emerald font-bold ">
            Ksh. {product?.price}
          </p>
        </div>
        <div className="flex gap-3 ">
          <Link
            to={`/products/${product?.productsID}`}
            state={{ params: product?.params }}
            className="bg-mint active:scale-95 text-white text-center inline-block py-2 px-4 rounded-md flex-1"
          >
            View details
          </Link>
          <Button
            action={() => verifyAdd(product)}
            disabled={product.quantity === 0}
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
