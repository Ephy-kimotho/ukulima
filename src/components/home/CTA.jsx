import { Link } from "react-router-dom";

function CTA() {
  return (
    <article className="bg-[url(/images/field3.png)] bg-cover bg-right md:bg-center shadow-overlay h-[450px] flex gap-6 flex-col justify-center py-6 pl-6">
      <div className="w-11/12 space-y-8 mx-auto">
        <p className="font-montserrat text-white font-bold text-3xl md:text-3xl max-w-4xl lg:text-[39px] lg:leading-relaxed">
          Sustainable Farming Meets Technology Building a Greener Future
        </p>
        <div className="font-nunito flex gap-5 items-center ">
          <Link
            to="/about"
            className="bg-moldGreen border-2 border-moldGreen hover:scale-105 rounded-lg shadow-md text-white py-2 px-8"
          >
            Learn more
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white hover:scale-105 rounded-lg text-white bg-transparent py-2 px-8"
          >
            Contact us
          </Link>
        </div>
      </div>
    </article>
  );
}

export default CTA;
