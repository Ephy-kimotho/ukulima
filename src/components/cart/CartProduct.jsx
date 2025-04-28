import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { DEV_URL } from "../../constants";
import { getCartItems } from "../../redux/cart/cartActions";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

function CartProduct(product) {
  const { token } = useAuth();
  const dispatch = useDispatch();

  /* Function to update the quantity of a product */
  async function verifyUpdate(type) {
    // if type is increase then add 1 to quantity
    if (type === "increase") {
      try {
        const { data } = await axios.patch(
          `${DEV_URL}/cart_update/${product.productID}`,
          {
            quantity: product.quantity + 1,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Increase: ", data);
        dispatch(getCartItems(token));
      } catch (error) {
        console.error("Error updating quantity (increase):", error);
      }
    }

    // if type is decrease and the quantity is greater than 1, decrease quantity
    else if (type === "decrease" && product.quantity > 1) {
      try {
        const { data } = await axios.patch(
          `${DEV_URL}/cart_update/${product.productID}`,
          {
            quantity: product.quantity - 1,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Decrease: ", data);
        dispatch(getCartItems(token));
      } catch (error) {
        console.error("Error updating quantity (decrease):", error);
      }
    }
  }

  // Delete item from cart function
  const deleteItem = async (id) => {
    try {
      await axios.delete(`${DEV_URL}/cart_delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Show success message
      toast.success(`${product.productName} has been removed from cart.`);

      // Fetch cart items again to update the state
      dispatch(getCartItems(token));
    } catch (error) {
      console.log("Error deleting cart item", error);

      // show error message
      toast.error("Failed to delete the item the cart.");
    }
  };

  return (
    <article className="bg-white flex justify-between shadow-md w-full py-2  rounded-md mb-4">
      <div className="flex gap-2 md:gap-4 pl-2">
        <img
          src={product.image_url}
          alt={product.productName}
          className="w-20 h-20 md:w-28 md:h-28 rounded-md object-cover"
        />

        <div className="font-openSans  flex flex-col justify-center">
          <h3 className=" text-night md:text-2xl font-bold capitalize">
            {product.productName}
          </h3>
          <p className="font-bold text-sm md:text-lg text-night">
            Ksh. {product.price}
          </p>
        </div>
      </div>

      <div className="sm:w-1/6 flex flex-col justify-around text-right mr-2">
        <button
          onClick={() => deleteItem(product.productID)}
          className="text-tangerine hover:text-red-500 ml-auto font-normal"
        >
          <Trash2 />
        </button>

        <div className="space-x-2">
          <button
            onClick={() => verifyUpdate("decrease")}
            className="border-2 w-6 sm:w-1/3 lg:text-xl lg:font-bold text-center border-mint bg-white text-mint rounded-md"
          >
            -
          </button>
          <span className="font-bold text-night">{product.quantity}</span>
          <button
            onClick={() => verifyUpdate("increase")}
            className="bg-mint w-6 sm:w-1/3 lg:text-xl lg:font-bold text-center text-white rounded-md"
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}

export default CartProduct;
