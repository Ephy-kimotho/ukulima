/* eslint-disable react/prop-types */
const styles = {
  unpaid: "text-[#2075E5] bg-[#2075E5] bg-opacity-20",
  shipped: "text-[#088738] bg-[#088738] bg-opacity-20",
  cancelled: "text-[#EE3F42] bg-[#EE3F42] bg-opacity-20",
  processing: "text-[#FF7518] bg-[#FF7518] bg-opacity-20",
  delivered: "text-[#6F42C1] bg-[#6F42C1] bg-opacity-20",
};

function Table({ orders }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-black">
        <thead className="bg-[#088732] bg-opacity-85 text-white">
          <tr>
            <th className="py-3 px-4 lg:px-6 font-semibold capitalize md:text-xl text-center">
              <span className="hidden md:inline">Product</span>
              <span>Name</span>
            </th>
            <th className="py-3  font-semibold text-center md:text-xl">
              Quantity
            </th>
            <th className="py-3 px-4 lg:px-6 font-semibold text-center md:text-xl">
              Price
            </th>
            <th className="py-3 px-4 lg:px-6 font-semibold text-center md:text-xl">
              Total
            </th>
            <th className="py-3 px-4 lg:px-6 font-semibold  md:text-xl">
              Status
            </th>
            <th className="py-3 px-4  font-semibold  md:text-xl">
              Date
            </th>
            <th className="py-3 px-4 font-semibold  md:text-xl">
              <span className="hidden md:inline">Delivery</span>
              <span>Address</span>
            </th>
          </tr>
        </thead>

        <tbody className="text-black">
          {orders?.map((order, idx) => {
            console.log(order.items);
            return (
              <tr
                key={idx}
                className="border-b last:border-none bg-white even:bg-gray-200 border-black text-sm lg:text-xl"
              >
                <td className="py-3 lg:py-5 px-4 lg:px-6">
                  {order.items[0]?.productName}
                </td>
                <td className="py-3 lg:py-5  text-center ">
                  {order.items[0]?.quantity}
                </td>
                <td className="py-3 lg:py-5 px-2 lg:px-4 ">
                  Ksh: {order.items[0]?.price}
                </td>
                <td className="py-3 lg:py-5 px-4 lg:px-6 ">
                  Ksh: {Number(order.items[0]?.sub_total)}
                </td>
                <td className="py-3">
                  <span
                    className={`${
                      styles[order.order_status.toLowerCase()]
                    } p-2 rounded-md w-20`}
                  >
                    {order.order_status}
                  </span>
                </td>
                <td className="py-3 lg:py-5 text-center px-4">
                  {new Date(order.order_date).toDateString()}
                </td>
                <td className="py-3 lg:py-5 px-4 text-center">
                  {order.delivery_address}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
