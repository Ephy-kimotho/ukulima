/* eslint-disable react/prop-types */
import { TriangleAlert } from "lucide-react";

function WarningToast({ message }) {
  return (
    <div className="text-[#FF8000] py-2 px-3 rounded-lg text-base bg-white flex items-center  gap-3 justify-center border shadow">
      <TriangleAlert size={30} color="#FF8000" strokeWidth={1.25} />
      <span>{message}</span>
    </div>
  );
}

export default WarningToast;
