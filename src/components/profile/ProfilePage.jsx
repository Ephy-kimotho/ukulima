import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { PowerIcon } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";

function ProfilePage() {
  const { user, setToken } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setToken(null);
    toast.success("Log out successful.");

    setTimeout(() => {
      navigate("/");
    }, 0);
  };

  return (
    <section className="bg-stone-200 min-h-screen font-nunito relative">
      <div className="">
        <article className="pt-16 mb-8 flex flex-col items-center">
          <FaUserCircle color="#000" size={120} />
          <p className="text-stone-900 mt-2 text-4xl font-bold">
            Hello {user.firstname}
          </p>
        </article>

        <div className="w-11/12 max-w-md space-y-6  mx-auto text-2xl">
          <p className="text-black border-b-2 border-black">
            <span className="font-semibold">Full Name:</span>
            <span className="pl-2">
              {user.firstname} {user.lastname}
            </span>
          </p>

          <p className="text-black flex border-b-2 border-black">
            <span className="font-semibold">Email:</span>
            <span className="pl-2"> {user.email}</span>
          </p>
          <p className="text-black flex border-b-2 border-black">
            <span className="font-semibold">Phone:</span>
            <span className="pl-2"> {user.phone}</span>
          </p>
        </div>

        {/* LOG OUT BUTTON */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <button
            onClick={logout}
            className="flex items-center py-3 justify-center text-2xl font-bold rounded-xl gap-2 w-52 bg-moldGreen tracking-wider hover:bg-emerald cursor-pointer active:scale-95 text-white"
          >
            <PowerIcon /> Log out
          </button>
        </div>
      </div>
    </section>
  );
}
export default ProfilePage;
