import { useState } from "react"

function Cart() {
  const [quantity, setQuantity] = useState(1); 

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : prev));
  };


  return (
    <div className="bg-neutral-100 min-h-screen text-black font-mulish">
      <div className="py-7 px-32">
        <h1 className="text-2xl md:text-4xl font-bold text-teal-900 max-w-full border-b-4 border-teal-900">My Cart</h1>
      </div>
      <div className="grid grid-col-2 place-content-around  md:flex md:place-content-between bg-stone-300 mx-24 rounded-2xl p-3 mt-2">
        <div className="md:flex">
          <img src={'../images/Maize seeds.png'} alt="maizeSeeds" className="h-34 w-40 md:h-40"/>
          <div className="text-zinc-800 my-3 md:my-10 md:mx-4 text-xl md:text-2xl">
            <p className="font-semibold">Maize seeds</p>
            <p>Ksh: {250*quantity}</p>
          </div>
        </div>
        <div className="my-2 flex md:mt-16">
          <img src={'../images/Vector.png'} alt="deleteIcon" className="h-6 mr-7 md:h-9 md:mx-12 mb-3" />
          <div className="text-xl font-semibold">
            <button className="bg-white px-2 md:px-4 rounded-md" onClick={() => handleQuantityChange("decrease")}>-</button>
            <span className="m-2">{quantity}</span>
            <button className="text-white bg-teal-900 px-2 md:px-4 rounded-md" onClick={() => handleQuantityChange("increase")}>+</button>
          </div>
        </div>
      </div>
      <div className="grid grid-col-2 place-content-around  md:flex md:place-content-between bg-stone-300 mx-24 rounded-2xl p-3 mt-2">
        <div className="md:flex">
          <img src={'../images/pesticides.png'} alt="pesticides" className="h-30 w-40 md:h-40"/>
          <div className="text-zinc-800 my-3 md:my-10 md:mx-4 text-xl md:text-2xl">
            <p className="font-semibold">Altrazine</p>
            <p>Ksh: 500</p>
          </div>
        </div>
        <div className="my-2 flex md:mt-16">
          <img src={'../images/Vector.png'} alt="deleteIcon" className="h-6 mr-7 md:h-9 md:mx-12 mb-3" />
          <div className="text-xl font-semibold">
            <button className="bg-white px-2 md:px-4 rounded-md">-</button>
            <span className="m-2">1</span>
            <button className="text-white bg-teal-900 px-2 md:px-4 rounded-md">+</button>
          </div>
        </div>
      </div>
      <div className="grid grid-col-2 place-content-around  md:flex md:place-content-between bg-stone-300 mx-24 rounded-2xl p-3 mt-2">
        <div className="md:flex">
          <img src={'../images/liquidFertilizer.png'} alt="pesticides" className="h-30 w-40 md:h-40"/>
          <div className="text-zinc-800 my-3 md:my-10 md:mx-4 text-xl md:text-2xl">
            <p className="font-semibold">NPK</p>
            <p>Ksh: 150</p>
          </div>
        </div>
        <div className="my-2 flex md:mt-16">
          <img src={'../images/Vector.png'} alt="deleteIcon" className="h-6 mr-7 md:h-9 md:mx-12 mb-3" />
          <div className="text-xl font-semibold">
            <button className="bg-white px-2 md:px-4 rounded-md">-</button>
            <span className="m-2">1</span>
            <button className="text-white bg-teal-900 px-2 md:px-4 rounded-md">+</button>
          </div>
        </div>
      </div>
      <div className="font-semibold text-xl md:text-3xl mt-5 md:mt-28 mx-32">
        <div className="grid grid-col-2 place-content-around md:flex md:place-content-between mb-7 border-b-4 border-black ">
          <p>Subtotal: </p>
          <p>Ksh: 200</p>
        </div>
        <div className="grid grid-col-2 place-content-around md:flex md:place-content-between mb-7 border-b-4 border-black">
          <p>Delivery Fee: </p>
          <p>Ksh: 50</p>
        </div>
        <div className="grid grid-col-2 place-content-around md:flex md:place-content-between mb-7 border-b-4 border-black text-red-600">
          <p>Total:</p>
          <p>Ksh: 250</p>
        </div>
      </div>
      <div className="flex flex-col py-7 items-center">
        <button type="submit" className="bg-teal-900 text-l text-white md:mt-10 px-8 py-3 md:py-6 rounded-2xl font-semibold md:text-3xl md:px-16 hover:bg-white hover:text-teal-900 hover:border-teal-900 md:hover:text-2xl hover:border-4 active:text-red-600 active:border-red-600">Confirm Order</button>
      </div>
    </div>
  )
}

export default Cart
