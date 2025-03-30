import { useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import OrderSummary from "./OrderSummary";
import Checkout from "./Checkout";
import Button from "../common/Button";

function Cart() {
  const [showCheckout, setShowCheckout] = useState(false);
  const cart = useSelector((state) => state.shoppingCart.cart);

  const toggleCheckout = () => {
    setShowCheckout(!showCheckout);
  };

  const isCartEmpty = cart?.length === 0;

  const subtotal = cart?.reduce((sum, item) => {
    if (Object.keys(item).length > 0) {
      sum += item.price * item.quantity;
    }
    return sum;
  }, 0);

  const deliveryFee = isCartEmpty ? 0 : 200;
  const grandTotal = subtotal + deliveryFee;

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
        subtotal={subtotal}
        deliveryFee={deliveryFee}
        grandTotal={grandTotal}
      />

      <div className="absolute  bottom-10 w-full flex justify-center ">
        <Button
          action={toggleCheckout}
          disabled={isCartEmpty}
          moreStyles="bg-mint hover:bg-emerald active:scale-95 py-4 px-16 text-white text-xl font-bold rounded-xl"
        >
          Confrim Order
        </Button>
      </div>
    </section>
  );
}

export default Cart;
