import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../redux/orders/orderActions";
import useAuth from "../../../hooks/useAuth";
//import Table from "../common/Table";

function Orders() {
  const { items } = useSelector((state) => state.orders);
  const { token } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders(token));
  }, [dispatch, token]);

  console.log("Order items:", items);
  return (
    <section className="px-4 py-24 md:p-6">
      <div className="bg-white rounded-md shadow-md mt-6 pt-4 overflow-hidden">
        <h2 className=" ml-4 pb-4 text-[#1E1E42] font-bold text-[26px] font-mulish capitalize">
          Recent orders
        </h2>
        {/*  <Table orders={orders} /> */}
      </div>
    </section>
  );
}

export default Orders;
