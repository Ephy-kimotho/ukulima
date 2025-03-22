import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section
      className={` text-white min-h-screen bg-[url(/images/tractor.png)] md:bg-[url(/images/home.png)] bg-no-repeat bg-cover bg-center md:bg-(position:--bg-postion) lg:bg-center shadow-overlay md:shadow-none flex justify-center items-center  `}
    >
      <div className="pl-10 lg:pl-0 text-balance  max-w-5xl ">
        <h2 className="font-bold text-pretty  text-2xl leading-12 md:text-3xl lg:text-5xl  tracking-wider">
          WELCOME TO UKULIMA, EMPOWERING FARMERS GROWING SUCCESS
        </h2>
        <p className="my-8  text-lg md:text-2xl font-normal">
          Access top-quality farm inputs, from seeds to fertilizers, all in one
          place. Shop smarter, grow better, and harvest success with Ukulima.
        </p>
        <Link
          to="/signup"
          className="flex justify-center items-center bg-moldGreen w-2/3 max-w-80 py-4 text-lg rounded-lg tracking-wider  hover:bg-emerald"
        >
          <span>Get Started</span>
          <ArrowUpRight size={24} color="#ffffff" />
        </Link>
      </div>
    </section>
  );
}

export default Landing;
