import { FaHouse } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import FooterNav from "../components/common/FooterNav";
import FooterIcon from "../components/common/FooterIcon";
import Subscription from "../components/common/Subscription";

function Footer() {
  /* Array to store contact inforamtion */
  const info = [
    {
      icon: FaHouse,
      title: "Address",
      text: "123 street, Nairobi",
    },

    {
      icon: IoMdMail,
      title: "Email",
      text: "ukulima@gmail.com",
    },
    {
      icon: FaPhoneAlt,
      title: "Phone",
      text: "0708808606",
    },
  ];

  return (
    <footer className="text-white">
      <section className="bg-moldGreen grid sm:grid-cols-3  gap-12 sm:gap-6 py-10 pl-6 lg:px-12">
        <Subscription />
        <FooterNav />
        <div className="w-56 flex gap-5 flex-col justify-center">
          {info.map((item, idx) => (
            <FooterIcon key={idx} {...item} />
          ))}
        </div>
      </section>
      <section className="py-6 flex justify-center items-center bg-[#062F1F] text-white">
        <p className="text-base">
          &copy;copyright,{new Date().getFullYear()} All rights reserved
        </p>
      </section>
    </footer>
  );
}

export default Footer;
