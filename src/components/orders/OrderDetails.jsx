/* eslint-disable react/prop-types */
import { MapPin } from "lucide-react"
import { FaMoneyBills } from "react-icons/fa6"
import { Truck } from "lucide-react"

function OrderDetails({user, payment, shipping}) {
  return (
    <div className="border border-black md:flex place-content-between place-items-stretch lg:place-content-around mx-6 ps-5 pe-5 py-10 text-xl 2xl:mx-40 ">
      <div className="px-7">
        <div className="flex gap-2 font-semibold mb-3 md:mb-6 mt-2">
          <MapPin color="#06945D" size = "25"/>
          <p>Shipment Details</p>
        </div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.number}</p>
        <p>{user.address}</p>
      </div>
      <div className="border border-black my-7 md:my-0"/>
      <div className="px-7">
        <div className="flex gap-2 font-semibold mb-3 md:mb-6 mt-2">
          <FaMoneyBills color="#06945D" size="25"/>
          <p>Payment Method</p>
        </div>
        <p>{payment.method}</p>
        <p>Transaction Code: {payment.code}</p>
        <p>Time: {payment.time}</p>
      </div>
      <div className="border border-black my-7 md:my-0"/>
      <div className="px-7">
        <div className="flex gap-2 font-semibold mb-3 md:mb-6">
          <Truck color="#06945D" size = "25"/>
          <p>Shipping Method</p>
        </div>
        <p>{shipping.method}</p>
        <p>Expected Arrival: {shipping.arrival}</p>
      </div>
    </div>
  )
}

export default OrderDetails
