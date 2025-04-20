/* eslint-disable react/prop-types */
function OrderSummary({ subtotal, shipping, grandtotal }) {
  return (
    <div className="w-full p-5 bg-zinc-300 rounded-md font-nunito">
      <ul className="list-none space-y-3 text-base md:text-lg">
        <li className="flex items-center justify-between">
          <span>Subtotal:</span>
          <span>Ksh. {subtotal}</span>
        </li>

        <li className="flex items-center justify-between">
          <span>Shipping:</span>
          <span>Ksh. {shipping}</span>
        </li>

        <li className="flex items-center justify-between">
          <span>Grandtotal:</span>
          <span>Ksh. {grandtotal}</span>
        </li>
      </ul>
    </div>
  );
}

export default OrderSummary;
