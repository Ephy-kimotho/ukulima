import PropTypes from "prop-types";

function DashboardCard({ title, icon: Icon, quantity }) {
  return (
    <article className="bg-white shadow-md py-3 rounded-xl flex gap-4 flex-col items-center">
      <h3 className="font-nunito font-bold text-[#1E1E1E] text-2xl capitalize">
        {title}
      </h3>
      <Icon size={35} color="#0D141C" />
      <p className="font-bold font-nunito text-[#0D141C] text-2xl">
        {quantity}
      </p>
    </article>
  );
}

DashboardCard.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.elementType,
  quantity: PropTypes.number,
};

export default DashboardCard;
