import Table from "../common/Table";
import useAxios from "../../../hooks/useAxios";
import { BASE_URL } from "../../../constants";

function Orders() {

  const { data:orders  } = useAxios(`${BASE_URL}/orders`);
  
  return (
    <section className="px-4 py-24 md:p-6">
      <div className="bg-white rounded-md shadow-md mt-6 pt-4 overflow-hidden">
        <h2 className=" ml-4 pb-4 text-[#1E1E42] font-bold text-[26px] font-mulish capitalize">
          Recent orders
        </h2>
        <Table orders={orders} />
      </div>
    </section>
  );
}

export default Orders;
