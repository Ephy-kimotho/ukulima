import { ChevronDown } from "lucide-react";
import { FiMenu } from "react-icons/fi";
import angelina from "/images/angelina.png";

function Header() {
  return (
    <header className="bg-white shadow py-3 px-5 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="block md:hidden">
          <FiMenu size={30} color="#1E1E42" />
        </button>

        <h1 className="font-poppins font-bold md:text-3xl capitalize text-[#1E1E42]">
          Ukulima
        </h1>
      </div>

      <article className="flex items-center gap-2">
        <img
          src={angelina}
          alt="A photot of angelina"
          className="rounded-full object-cover object-center w-14"
        />
        <p className="font-poppins hidden text-[#1E1E1E] opacity-75">
          Angelina
        </p>
        <button>
          <ChevronDown color="#1E1E42" />
        </button>
      </article>
    </header>
  );
}

export default Header;
