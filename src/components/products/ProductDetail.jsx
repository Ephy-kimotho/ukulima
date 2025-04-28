import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
import { ArrowLeft } from "lucide-react";
import { getCartItems } from "../../redux/cart/cartActions";
import { DEV_URL } from "../../constants";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Button from "../common/Button";
import toast from "react-hot-toast";
import WarningToast from "../common/WarningToast";

function ProductDetail() {
  const { id } = useParams();
  const { token } = useAuth();
  const { pathname, state } = useLocation();
  const { items } = useSelector((state) => state.products);
  const { items: cartItems } = useSelector((state) => state.shoppingCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get cart from the cartItems object
  const cart = Array.isArray(cartItems?.cart) ? cartItems.cart : [];

  const selectedItem = useMemo(
    () => items.find((item) => item.productsID === Number(id)),
    [items, id]
  );

  // Function to verify addition of a product to cart and adding it to the cart
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

  // Get the  search parameters if they exists
  const searchParams = state?.params || "";

  return (
    <section className="bg-[#fdfbf0] min-h-screen py-10 px-5 text-night font-nunito">
      <>
        {/* Go back link */}
        <Link
          to={`..?${searchParams}`}
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
                src={selectedItem.image_url}
                alt={selectedItem.productName}
                className="sm:w-1/3 self-stretch rounded"
              />
            )}
            <ul className="bg-[#D9D9D9] self-stretch text-night p-8 gap-4 lg:gap-12 rounded-md text-xl flex flex-1 flex-col md:justify-center list-none">
              <li>
                <span className="font-bold">Name: </span>
                <span>{selectedItem?.productName}</span>
              </li>
              <li>
                <span className="font-bold">Category: </span>
                <span>{selectedItem?.categoryName}</span>
              </li>
              <li>
                <span className="font-bold">Stock: </span>
                <span>{selectedItem?.quantity}</span>
              </li>
              <li>
                <span className="font-bold">Price: </span>
                <span> Ksh. {selectedItem?.price}</span>
              </li>
              <li>
                <span className="font-bold">Description: </span>
                <span>{selectedItem?.productDescription}</span>
              </li>
            </ul>
          </div>
        </>

        {/* Add to cart button */}
        <div className="text-center mt-20">
          <Button
            action={() => verifyAdd(selectedItem)}
            disabled={selectedItem.quantity === 0}
            moreStyles="font-bold text-white px-20 py-4 hover:bg-emerald rounded-xl bg-mint text-xl active:scale-95 cursor-pointer tracking-wider shadow-md"
          >
            Add to cart
          </Button>
        </div>
      </>
    </section>
  );
}

export default ProductDetail;
