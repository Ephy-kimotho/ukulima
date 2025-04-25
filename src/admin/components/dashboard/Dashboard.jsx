import CardListing from "./CardListing";
import Table from "../common/Table";
import { useSelector } from "react-redux";

function Dashboard() {
  const { items } = useSelector((state) => state.orders);

  // Get orders from the redux store
  const orders = items?.orders || [];
  console.log(items);

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
