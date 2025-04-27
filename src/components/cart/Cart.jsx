import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems } from "../../redux/cart/cartActions";
import useAuth from "../../hooks/useAuth";
import CartProduct from "./CartProduct";
import OrderSummary from "./OrderSummary";
import Checkout from "./Checkout";
import Button from "../common/Button";

function Cart() {
  const [showCheckout, setShowCheckout] = useState(false);
  const { token } = useAuth();
  const { items } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  // Fetch cart items when the component mounts
  useEffect(() => {
    if (token) {
      dispatch(getCartItems(token));
    }
  }, [dispatch, token]);

  const toggleCheckout = () => {
    setShowCheckout(!showCheckout);
  };

  // Check if items are available in shopping cart
  const cart = items?.cart || [];

  // Check if the cart is empty
  const isCartEmpty = cart?.length === 0;

  // Calculate delivery fee and grand total
  const deliveryFee = items?.delivery_fee || 0;
  const grandTotal = Number(items?.total_amount);
  const subTotal = grandTotal - deliveryFee;

  return (
    <section className="bg-[#f0f0f0] py-10  min-h-screen relative">
      {showCheckout && <Checkout toggleCheckout={toggleCheckout} />}

      <h2 className="text-moldGreen max-w-[95%] mx-auto  text-3xl md:text-4xl pb-2 border-b-2 border-b-moldGreen font-bold">
        My Cart
      </h2>

      {isCartEmpty ? (
        <div className="mb-28 pt-4 max-w-[95%] mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold text-tangerine">
            Cart is empty
          </h3>
        </div>
      ) : (
        <div className="grid gap-4 mt-6 mb-28 max-w-[95%] mx-auto ">
          {cart?.map((item, idx) => (
            <CartProduct key={idx} {...item} />
          ))}
        </div>
      )}

      <OrderSummary
        subtotal={subTotal}
        deliveryFee={deliveryFee}
        grandTotal={grandTotal}
      />

      <div className="absolute  bottom-10 w-full flex justify-center ">
        <Button
          action={toggleCheckout}
          disabled={isCartEmpty}
          moreStyles="bg-mint hover:bg-emerald active:scale-95 py-4 px-16 text-white text-xl font-bold rounded-xl"
        >
          Confirm Order
        </Button>
      </div>
    </section>
  );
}

export default Cart;
