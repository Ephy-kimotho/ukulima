/* eslint-disable react/prop-types */
import { MdOutlineMoreHoriz } from "react-icons/md";
import OrderStatusCard from "./OrderStatusCard";

function Table({ orders }) {
  return (
    <table className="w-full">
      <thead className="bg-[#088732] bg-opacity-85 text-white">
        <tr>
          <th className="py-3  px-4 lg:px-6 font-semibold capitalize text-left  md:text-xl">
            id
          </th>
          <th className="py-3  px-4 lg:px-6 font-semibold text-left md:text-xl hidden md:table-cell">
            User
          </th>
          <th className="py-3  px-4 lg:px-6 font-semibold text-left md:text-xl">
            Date
          </th>
          <th className="py-3 px-4 lg:px-6 font-semibold text-left md:text-xl">
            Status
          </th>
          <th className="py-3  px-4 lg:px-6 font-semibold text-left md:text-xl hidden md:table-cell">
            Total
          </th>
          <th className="py-3 px-2 font-semibold text-left md:text-xl">
            Action
          </th>
        </tr>
      </thead>

      <tbody>
        {orders?.map((order) => (
          <tr
            key={order.id}
            className="border-b last:border-none even:bg-gray-200 border-black"
          >
            <td className="py-3 px-4 lg:px-6 font-bold text-black text-opacity-85">
              {order.id}
            </td>
            <td className="py-3 lg:px-6 text-sm lg:text-base hidden md:table-cell">
              {order.user}
            </td>
            <td className="py-3 text-sm lg:text-base px-2 lg:px-6">{order.date}</td>
            <td className="py-3 lg:px-6">
              <OrderStatusCard type={order.status} />
            </td>
            <td className="py-3 text-center text-sm lg:text-base  lg:px-6 hidden md:table-cell">
              {order.total}
            </td>
            <td className="py-3  flex justify-center items-center">
              <MdOutlineMoreHoriz size={30} color="0D141C" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
