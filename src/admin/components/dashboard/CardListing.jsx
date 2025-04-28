import { FaUserCircle, FaMoneyBillWave } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import { getSummary } from "../../../redux/adminSummary/summaryActions";
import { DashboardCardSkeletonWrapper } from "../../../skeletons";
import { Box } from "lucide-react";
import useAuth from "../../../hooks/useAuth";
import DashboardCard from "../common/DashboardCard";

let cardInfo = [
  {
    title: "users",
    icon: FaUserCircle,
  },
  {
    title: "products",
    icon: Box,
  },
  {
    title: "categories",
    icon: MdOutlineCategory,
  },
  {
    title: "sales",
    icon: FaMoneyBillWave,
  },
];

function CardListing() {
  // Get the summary data and loading state from the Redux store
  const { summary, loading } = useSelector((state) => state.adminSummary);

  // Get the token from the authentication context
  const { token } = useAuth();

  // Get the dispatch used to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Fetch the summary data when the component mounts or when the token changes
  useEffect(() => {
    if (token) {
      dispatch(getSummary(token));
    }
  }, [token, dispatch]);

  // Memoize the card data to avoid unnecessary re-renders
  // and to ensure that the data is only recalculated when the summary changes
  const cardData = useMemo(
    () =>
      cardInfo.map((info, idx) => {
        if (idx === 0) {
          return {
            ...info,
            quantity: summary?.total_users || 0,
          };
        } else if (idx === 1) {
          return {
            ...info,
            quantity: summary?.total_products || 0,
          };
        } else if (idx === 2) {
          return {
            ...info,
            quantity: summary?.total_categories || 0,
          };
        } else if (idx === 3) {
          return {
            ...info,
            quantity: summary?.total_sales || "Ksh 0",
          };
        }
      }),
    [summary]
  );

  // If the data is still loading, show a skeleton loader
  // to indicate that the data is being fetched
  if (loading) {
    return <DashboardCardSkeletonWrapper />;
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-2 gap-4">
      {cardData?.map((info, idx) => (
        <DashboardCard key={idx} {...info} />
      ))}
    </div>
  );
}

export default CardListing;
