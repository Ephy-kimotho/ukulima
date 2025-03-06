import { IoMdSend } from "react-icons/io";
import logo from "/images/logo.png";
import { useState } from "react";
import Button from "./Button";

function Subscription() {
  // state to hold email
  const [email, setEmail] = useState("");

  // function to subscribe to email
  const subscribe = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 1200)
    );

    alert("Subscription successfull.");
    setEmail('');
  };

  return (
    <article className=" space-y-6 md:border-r md:border-r-white pr-4">
      <div className="flex gap-4 items-center">
        <img
          src={logo}
          alt="ukulima logo"
          className="w-9 h-9 sm:w-10 sm:h-10"
        />
        <p className="text-white font-bold  font-nunito text-lg">Ukulima</p>
      </div>
      <p className="text-white font-semibold font-nunito max-w-[350px]">
        Subscribe to our news letter for the latest farming tips, exclusive
        deals and updates on agricultural products
      </p>

      <div className="bg-white rounded-md max-w-[300px]  flex items-center">
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
          className="border-none  text-night pl-3 flex-1 text-base outline-none placeholder:text-gray-400 w-full bg-transparent"
          placeholder="Enter your email"
        />
        <Button action={subscribe} moreStyles="mx-2 ">
          <IoMdSend size={28} color="#1F4E3C" />
        </Button>
      </div>
    </article>
  );
}

export default Subscription;
