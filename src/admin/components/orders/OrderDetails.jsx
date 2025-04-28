import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { DEV_URL } from "../../../constants";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import DetailsTable from "../common/DetailsTable";
import OrderSummary from "../common/OrderSummary";
import Button from "../common/Button";
import axios from "axios";

function OrderDetails() {
  const [details, setDetails] = useState({});
  const [orderStatus, setOrderStatus] = useState("Processing");
  const { orderId } = useParams();
  const { token } = useAuth();

  // Function to fetch order details
  // This function is wrapped in useCallback to prevent unnecessary re-renders
  const fetchOrderDetails = useCallback(async () => {
    try {
      const response = await axios.get(`${DEV_URL}/admin/order/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDetails(response.data);
      setOrderStatus(response.data.order_status);
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  }, [orderId, token]);

  // Call  fetchOrderDetails function to fetch order details from the server
  useEffect(() => {
    fetchOrderDetails();
  }, [fetchOrderDetails]);

  // This function updates the order status in the local state
  const handleChange = (e) => {
    const value = e.target.value;
    setOrderStatus(value);
  };

  // Extract order items from the details
  const orderItems = details?.items || [];

  // Calculate subtotal from order items
  const subtotal = orderItems.reduce((sum, item) => {
    sum = sum + Number(item.sub_total);
    return sum;
  }, 0);

  // get the grand total and calculate the shipping fee
  const grandTotal = Number(details?.grand_total);
  const shippingFee = grandTotal - subtotal;

  // Function to update order status
  const updateOrderStatus = async () => {
    try {
      const { data } = await axios.patch(
        `${DEV_URL}/admin/order/update/${orderId}`,
        { order_status: orderStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // show success message incase update is successful
      toast.success(data?.msg);

      // refetch order details after updating status
      await fetchOrderDetails();
    } catch (error) {
      console.error("Error updating order status:", error);

      // Show error message incase update fails
      toast.error("Failed to update order status");
    }
  };

  return (
    <section className="px-4 py-24 md:py-7">
      <div className="bg-white rounded-lg shadow-md p-8">
        <Link
          to=".."
          relative="path"
          className="text-lg hover:text-blue-600 hover:underline"
        >
          Back to all orders
        </Link>

        <h2 className="text-[#11633A] mt-3 mb-4 md:mb-6 font-bold font-nunito  text-2xl md:text-3xl capitalize">
          Order #{orderId} details
        </h2>

        {/* Customer Details section */}
        <section>
          <h3 className="text-black font-semibold text-2xl mb-4">
            Customer details
          </h3>

          <article className="flex flex-col md:flex-row gap-4 mb-5">
            <div className="flex-1">
              <p className="text-base text-night mb-2">Customer&apos;s Name</p>
              <p className="py-2 px-3 rounded-md bg-grey bg-opacity-45">
                {details?.user?.name}
              </p>
            </div>

            <div className="flex-1">
              <p className="text-base text-night mb-2">Email</p>
              <p className="py-2 px-3 rounded-md bg-grey bg-opacity-45">
                {details?.user?.email}
              </p>
            </div>
          </article>

          <article className="flex flex-col md:flex-row gap-4 mb-5">
            <div className="flex-1">
              <p className="text-base text-night mb-2">Phone</p>
              <p className="py-2 px-3 rounded-md bg-grey bg-opacity-45">
                {details?.user?.phone}
              </p>
            </div>

            <div className="flex-1">
              <p className="text-base text-night mb-2">Destination</p>
              <p className="py-2 px-3 rounded-md bg-grey bg-opacity-45">
                {details?.user?.delivery_address}
              </p>
            </div>
          </article>

          <div className="">
            <p className="text-base text-night mb-2">Date</p>
            <p className="py-2 px-3 rounded-md bg-grey bg-opacity-45">
              {new Date(details?.order_date).toUTCString()}
            </p>
          </div>
        </section>

        {/* Order details table */}
        <section className="mt-6">
          <h3 className="text-black font-semibold text-2xl mb-3">
            Order details
          </h3>

          <DetailsTable orderItems={orderItems} />
        </section>

        {/* Order summary section */}
        <section className="mt-6">
          <h3 className="text-black font-semibold text-2xl mb-3">
            Order Summary
          </h3>

          <OrderSummary
            subtotal={subtotal}
            shipping={shippingFee}
            grandtotal={grandTotal}
          />
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
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Unpaid">Unpaid</option>
          </select>
        </div>

        {/* Save changes button */}
        <div className="mt-8 text-center">
          <Button
            category="save"
            action={updateOrderStatus}
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
