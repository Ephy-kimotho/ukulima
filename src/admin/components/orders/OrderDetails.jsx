import { useState } from "react";
import { useParams } from "react-router-dom";
import DetailsTable from "../common/DetailsTable";
import OrderSummary from "../common/OrderSummary";
import Button from "../common/Button";

function OrderDetails() {
  const [orderStatus, setOrderStatus] = useState("Pending");
  const { orderId } = useParams();

  const handleChange = (e) => {
    const value = e.target.value;
    setOrderStatus(value);
  };

  return (
    <section className="px-4 py-24 md:py-7">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-[#11633A] mb-6 font-bold font-nunito  text-2xl md:text-3xl">
          Order #{orderId} details
        </h2>
        {/* Customer Details section */}
        <section>
          <h3 className="text-black font-semibold text-2xl mb-4">
            Customer details
          </h3>

          <article className="flex flex-col md:flex-row gap-4 mb-5">
            <div className="flex-grow">
              <p className="text-base text-night mb-2">Customer&apos;s Name</p>
              <p className="py-2 px-3 rounded-md bg-grey bg-opacity-45">
                John Doe
              </p>
            </div>

            <div className="flex-grow">
              <p className="text-base text-night mb-2">Email</p>
              <p className="py-2 px-3 rounded-md bg-grey bg-opacity-45">
                john@gmail.com
              </p>
            </div>
          </article>

          <article className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <p className="text-base text-night mb-2">Phone</p>
              <p className="py-2 px-3 rounded-md bg-grey bg-opacity-45">
                0712345678
              </p>
            </div>

            <div className="flex-grow">
              <p className="text-base text-night mb-2">Destination</p>
              <p className="py-2 px-3 rounded-md bg-grey bg-opacity-45">
                Kamuthi
              </p>
            </div>
          </article>
        </section>

        {/* Order details table */}
        <section className="mt-6">
          <h3 className="text-black font-semibold text-2xl mb-3">
            Order details
          </h3>

          <DetailsTable />
        </section>

        {/* Order summary section */}
        <section className="mt-6">
          <h3 className="text-black font-semibold text-2xl mb-3">
            Order Summary
          </h3>

          <OrderSummary subtotal={50900} shipping={200} grandtotal={51100} />
        </section>

        {/* Update order status section */}
        <div className="mt-6 space-x-2 ">
          <label
            htmlFor="order-status"
            className="text-black text-lg font-semibold font-nunito"
          >
            Order status:
          </label>
          <select
            name="order-status"
            value={orderStatus}
            onChange={handleChange}
            className="outline-none border-2 border-transparent focus:border-blue-400 
            py-2 bg-[#E0E0E0] rounded w-2/5"
          >
            <option>Pending</option>
            <option>Shipped</option>
            <option>Cancelled</option>
          </select>
        </div>

        {/* Save changes button */}
        <div className="mt-8 text-center">
          <Button
            category="save"
            className="w-64 py-3 text-lg font-bold active:scale-95"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </section>
  );
}

export default OrderDetails;
