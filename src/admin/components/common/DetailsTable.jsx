/* eslint-disable react/prop-types */

function DetailsTable({ orderItems }) {
  return (
    <table className="w-full  text-sm md:text-base ">
      <thead className="text-black font-bold bg-[#cccccc]">
        <tr className="border border-black">
          <th className="py-3 px-2 md:px-4 text-left">Product</th>
          <th className="py-3 px-2 md:px-4 text-left">Quantity</th>
          <th className="py-3 px-2 md:px-4 text-left">Price</th>
          <th className="py-3 px-2 md:px-4 text-left">Total</th>
        </tr>
      </thead>
      <tbody>
        {orderItems?.map((item, idx) => (
          <tr key={idx} className="border border-black  bg-white">
            <td className="py-3 px-2 md:px-4 ">{item.productName}</td>
            <td className="py-3 px-2 md:px-12 ">{item.quantity}</td>
            <td className="py-3 px-2 md:px-4 ">Ksh. {item.price}</td>
            <td className="py-3 px-2 md:px-4 ">Ksh. {item.sub_total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DetailsTable;