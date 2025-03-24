import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeFromCart, changeQuantity } from "../../redux/cart/cartActions";

function CartProduct(product) {
  const dispatch = useDispatch();

  /* Function to update the quantity of a product */
  function updateQuantity(type) {
    let newProduct = { ...product };
    // if type is increase then add 1 to quantity
    if (type === "increase") {
      newProduct = { ...newProduct, quantity: newProduct.quantity + 1 };
    }
    // if type is decrease and the quantity is greater than 1, decrease quantity
    else if (type === "decrease") {
      if (newProduct.quantity > 1) {
        newProduct = { ...newProduct, quantity: newProduct.quantity - 1 };
      }
    }
    dispatch(changeQuantity(newProduct));
  }

  /* Function to delete the product from cart */
  const deleteItem = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <article className="bg-white flex justify-between shadow-md w-full py-2  rounded-md mb-4">
      <div className="flex gap-2 md:gap-4 pl-2">
        <img
          src={product.image}
          alt={product.name}
          className="w-20 h-20 md:w-28 md:h-28 rounded-md object-cover"
        />

        <div className="font-openSans  flex flex-col justify-center">
          <h3 className=" text-night md:text-2xl font-bold capitalize">
            {product.name}
          </h3>
          <p className="font-bold text-sm md:text-lg text-night">
            Ksh. {product.price}
          </p>
        </div>
      </div>

      <div className="sm:w-1/6 flex flex-col justify-around text-right mr-2">
        <button
          onClick={deleteItem}
          className="text-tangerine hover:text-red-500 ml-auto font-normal"
        >
          <Trash2 />
        </button>

        <div className="space-x-2">
          <button
            onClick={() => updateQuantity("decrease")}
            className="border-2 w-6 sm:w-1/3 lg:text-xl lg:font-bold text-center border-mint bg-white text-mint rounded-md"
          >
            -
          </button>
          <span className="font-bold text-night">{product.quantity}</span>
          <button
            onClick={() => updateQuantity("increase")}
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
