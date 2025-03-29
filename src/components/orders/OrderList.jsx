import PropTypes from "prop-types";

function OrderList(props) {
  return (
    <div className="flex justify-between text-lg md:text-2xl  ">
      <div className="flex gap-5">
        <img
          src={props.imageUrl}
          alt="img"
          className="w-20 h-20  rounded-xl object-cover "/>
        <div className=" grid">
          <span>{props.name}</span>
          <span>Qty: {props.quantity}</span>
        </div>
      </div>
      <span className="">{props.price}</span>
    </div>
  );
}
OrderList.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};
export default OrderList;
