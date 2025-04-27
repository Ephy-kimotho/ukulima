/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import OrderStatusCard from "./OrderStatusCard";

function Table({ orders }) {
  return (
    <table className="w-full">
      <thead className="bg-[#088732] bg-opacity-85 text-white">
        <tr>
          <th className="py-3  px-4  font-semibold capitalize text-left  md:text-xl">
            id
          </th>
          <th className="py-3  px-4 font-semibold text-left md:text-xl hidden md:table-cell">
            User
          </th>
          <th className="py-3  px-4 font-semibold text-left md:text-xl">
            Date
          </th>
          <th className="py-3 px-4 font-semibold text-center md:text-xl">
            Status
          </th>
          <th className="py-3  px-4 font-semibold text-center md:text-xl hidden md:table-cell">
            Total
          </th>
          <th className="py-3 px-2 font-semibold text-center md:text-xl">
            Action
          </th>
        </tr>
      </thead>

      <tbody>
        {orders?.map((order) => (
          <tr
            key={order.orderID}
            className="border-b text-xs md:text-base last:border-none even:bg-gray-200 border-black"
          >
            <td className="py-3 px-4 font-bold text-black text-opacity-85">
              {order.orderID}
            </td>
            <td className="py-3 hidden md:table-cell">{order.user}</td>
            <td className="py-3  px-2 ">
              {new Date(order.order_date).toDateString()}
            </td>
            <td className="py-3 pr-2">
              <OrderStatusCard type={order.order_status.toLowerCase()} />
            </td>
            <td className="py-3 text-center hidden md:table-cell">
              {Number(order.total_amount)}
            </td>
            <td className="text-center capitalize">
              <Link
                to={`/admin/orders/${order.orderID}`}
                className="hover:text-blue-700 hover:underline"
              >
                view details
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
