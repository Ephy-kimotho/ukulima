/* eslint-disable react/prop-types */
import Button from "./Button";

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden border">
      <img
        src={product.image_url}
        alt={product.productName}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-800">
            {product.productName}
          </h2>
          <span className="text-lg font-semibold text-gray-700">
            Ksh {product.price}
          </span>
        </div>
        <p className="text-sm text-gray-600">In Stock: {product.quantity}</p>
        <div className="mt-4 flex justify-between">
          <Button category="add" action={onEdit}>
            Edit
          </Button>
          <Button category="delete" action={onDelete}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
