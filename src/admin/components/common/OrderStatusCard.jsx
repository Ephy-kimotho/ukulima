import PropTypes from "prop-types";

const styles = {
  pending: "text-[#2075E5] bg-[#2075E5] bg-opacity-20",
  shipped: "text-[#088738] bg-[#088738] bg-opacity-20",
  canceled: "text-[#EE3F42] bg-[#EE3F42] bg-opacity-20",
};

function OrderStatusCard({ type }) {
  return (
    <div
      className={`p-2 rounded-md text-center font-bold text-sm md:text-base lg:text-lg ${styles[type]}`}
    >
      <p className="capitalize">{type}</p>
    </div>
  );
}

OrderStatusCard.propTypes = {
  type: PropTypes.string,
};

export default OrderStatusCard;
