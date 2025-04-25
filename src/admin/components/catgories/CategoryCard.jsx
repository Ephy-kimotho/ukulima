/* eslint-disable react/prop-types */
import Button from "../common/Button";

function CategoryCard({ image_url, name, onEdit, onDelete }) {
  return (
    <div className="bg-[#F0F0F0] rounded-xl shadow-md p-4 flex flex-col items-center gap-4 w-56 lg:w-72">
      <img
        src={image_url}
        alt={name}
        className="w-28 h-28 object-cover rounded-full border"
      />
      <h2 className="text-lg font-medium text-gray-800">{name}</h2>
      <div className="flex gap-4">
        <Button category="add" action={onEdit}>
          Edit
        </Button>
        <Button category="delete" action={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default CategoryCard;
