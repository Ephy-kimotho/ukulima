import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "../../../redux/orders/orderActions";
import useAuth from "../../../hooks/useAuth";
import CardListing from "./CardListing";
import Table from "../common/Table";

function Dashboard() {
  const { items } = useSelector((state) => state.orders);
  const { token } = useAuth();
  const dispatch = useDispatch();

  // Fetch orders when the component mounts and when the token changes
  useEffect(() => {
    dispatch(getOrders(token));
  }, [dispatch, token]);

  // Get orders from the items object if it exists
  const orders = items?.orders || [];

  return (
    <section className="px-4 py-24 md:p-6">
      <CardListing />

      <div className="bg-white rounded-md shadow-md mt-6 pt-4 overflow-hidden">
        <h2 className=" ml-4 pb-4 text-[#1E1E42] font-bold text-[26px] font-mulish capitalize">
          Recent orders
        </h2>
        <Table orders={orders} />
      </div>
    </section>
  );
}

export default Dashboard;
