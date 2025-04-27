import { getUserOrders } from "../../redux/orders/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Table from "./Table";

function MyOrders() {
  const { items } = useSelector((state) => state.orders);
  const { token } = useAuth();
  const dispatch = useDispatch();

  // Fetch user orders when the component mounts or when the token changes
  useEffect(() => {
    if (token) {
      dispatch(getUserOrders(token));
    }
  }, [token, dispatch]);

  // Get the orders from items object
  const orders = items?.orders || [];

  return (
    <div className="bg-amber-50 min-h-screen p-4 md:p-6 lg:px-10">
      <h1 className="py-3 font-bold text-4xl text-[#088732] mb-3">My Orders</h1>
      <p className="text-gray-700 mb-8 max-w-lg text-balance">
        Here you can find all your past and current orders. Track your purchases
        and their status easily.
      </p>

      {orders.length > 0 ? (
        <Table orders={orders} />
      ) : (
        <div className="max-w-4/5  mt-10">
          <p className="text-gray-600 text-xl">You have no orders yet. 🛒</p>
          <p className="text-gray-500 mt-2">
            Start{" "}
            <Link to="/products" className="text-blue-500 hover:underline">
              shopping
            </Link>{" "}
            and your orders will appear here!
          </p>
        </div>
      )}
    </div>
  );
}

export default MyOrders;
