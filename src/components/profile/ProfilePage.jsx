import { PowerIcon } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";

function ProfilePage() {
  //Js here
  return (
    <section className="bg-stone-200 min-h-screen font-nunito relative">
      <div className="">
        <article className="pt-16 mb-8 flex flex-col items-center">
          <FaUserCircle color="#000" size={120} />
          <p className="text-stone-900 text-4xl font-semibold">
            Hello John Doe
          </p>
        </article>

        <div className="w-11/12 max-w-md space-y-6  mx-auto text-2xl">
          <p className="text-black border-b-2 border-black">
            <span className="font-semibold">Full Name:</span>
            <span className="pl-2"> John Doe</span>
          </p>

          <p className="text-black flex border-b-2 border-black">
            <span className="font-semibold">Email:</span>
            <span className="pl-2"> johndoe@gmail.com</span>
          </p>
        </div>

        {/* LOG OUT BUTTON */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <button className="flex items-center py-3 justify-center text-2xl font-bold rounded-xl gap-2 w-52 bg-moldGreen tracking-wider hover:scale-105 cursor-pointer active:scale-95 text-white">
            <PowerIcon /> Log out
          </button>
        </div>
      </div>
    </section>
  );
}
export default ProfilePage;
