/* eslint-disable react/prop-types */

function OrderSummary({ amount }) {
  console.log(amount);
  return (
    <div className=" flex flex-col text-xl md:text-2xl">
      <div className="flex justify-between mb-3">
        <span>Subtotal: </span>
        <span>Ksh {amount.subtotal}</span>
      </div>
      <div className="flex justify-between mb-3">
        <span>Delivery Fee: </span>
        <span>Ksh {amount.deliveryFee}</span>
      </div>
      <div className="flex justify-between mb-3">
        <span>Total VAT: </span>
        <span>Ksh {amount.totalVAT}</span>
      </div>
      <div className="border border-stone-300 mt-5"/>
      <div className="flex justify-between mt-10 font-semibold mb-3">
        <span>Total: </span>
        <span className="text-red-600">
          Ksh {amount.subtotal + amount.deliveryFee + amount.totalVAT}
        </span>
      </div>
    </div>
  );
}

export default OrderSummary;
