/* eslint-disable react/prop-types */
function OrderSummary({ subtotal, deliveryFee, grandTotal }) {
  return (
    <div className="max-w-[95%] mx-auto  mb-28">
      <ul className="space-y-4 list-none">
        <li className="text-night flex items-center justify-between pb-2 border-b-2 border-b-night">
          <span className="font-bold text-xl">Subtotal: </span>{" "}
          <span className="font-semibold text-lg">Ksh. {subtotal}</span>
        </li>
        <li className="text-night flex items-center justify-between pb-2 border-b-2 border-b-night">
          <span className="font-bold text-xl">Delivery Fee: </span>{" "}
          <span className="font-semibold text-lg">Ksh. {deliveryFee}</span>
        </li>
        <li className="text-night flex items-center justify-between pb-2 border-b-2 border-b-night">
          <span className="font-bold text-xl">Total: </span>{" "}
          <span className="font-semibold text-lg">Ksh. {grandTotal}</span>
        </li>
      </ul>
    </div>
  );
}

export default OrderSummary;
