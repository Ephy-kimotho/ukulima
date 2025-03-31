import DashboardCard from "../common/DashboardCard";
import { Box } from "lucide-react";
import { MdOutlineCategory } from "react-icons/md";
import { FaUserCircle, FaMoneyBillWave } from "react-icons/fa";

const cardInfo = [
  {
    title: "users",
    icon: FaUserCircle,
    quantity: 106,
  },
  {
    title: "products",
    icon: Box,
    quantity: 2100,
  },
  {
    title: "categories",
    icon: MdOutlineCategory,
    quantity: 12,
  },
  {
    title: "sales",
    icon: FaMoneyBillWave,
    quantity: 34000,
  },
];

function CardListing() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-2 gap-4">
      {cardInfo.map((info, idx) => (
        <DashboardCard key={idx} {...info} />
      ))}
    </div>
  );
}

export default CardListing;
