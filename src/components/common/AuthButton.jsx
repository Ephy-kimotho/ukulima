/* eslint-disable react/prop-types */
import { useFormikContext } from "formik";

function AuthButton({ action, children, moreStyles }) {
  const { isSubmitting } = useFormikContext();
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`text-white font-bold font-nunito text-2xl bg-emerald rounded-full py-2 disabled:cursor-not-allowed disabled:bg-gray-400 border-2 border-transparent  shadow-lg active:scale-95 tracking-wider capitalize ${moreStyles}`}
    >
      {isSubmitting ? action : children}
    </button>
  );
}

export default AuthButton;
