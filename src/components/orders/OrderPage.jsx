import OrderDetails from "./OrderDetails"
import OrderList from "./OrderList"
import OrderSummary from "./OrderSummary"
import { Link } from "react-router-dom"
import { generateRandomId } from "../../utils"

function OrderPage() {
  let order = {
    number: generateRandomId(),
  }
   let user = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    number: "0712345678",
    address: `132 Utawala, Nairobi`,
  }
  let payment = {
    method: "Mpesa",
    code: "TCL5LQGQKW",
    time: "14/07/2025 13:35 EAT"
  }
  let shipping = {
    method: "Ukulima Express",
    arrival: "Thur 22 - Mon 26",
  }
  let amount = {
    subtotal: 900,
    deliveryFee: 50,
    totalVAT: 260,
  }

  return (
    <div className ="bg-zinc-100 min-h-screen text-black font-mulish">
      <div className = "flex flex-col items-center pt-24 px-6">
        <h1 className = "text-emerald text-5xl font-semibold pb-6">
          Thank you!
          </h1>
        <p className="text-2xl font-semibold pb-3">
          Your order {order.number} has successfully been placed. Shipment will begin soon.
          </p>
        <p className="pb-16">
          An email containing the order receipt and tracking details has been sent to <span className="font-semibold">{user.email}</span>. If the email is not in the inbox, check your spam folder. Don&apos;t hesitate to contact us if you encounter any issues.
          </p>
      </div>
      <div>
        <OrderDetails user = {user} payment = {payment} shipping = {shipping}/>
      </div>
      <div className="grid lg:grid-cols-2 ">
        <div className="ml-[3%] mt-20 mr-[3%] lg:mr-[0%] lg:mb-10 lg:w-[117%] p-5">
          <span className="text-3xl text-emerald font-semibold">Order List</span>
          <div className="border border-stone-300 mb-5 mt-3"/>
          <div className="space-y-5">
            <OrderList imageUrl = "./images/Maize_seeds.jpg" name = "Maize seeds" quantity = "1" price = "Ksh: 250"/>
        
            <OrderList imageUrl = "./images/pesticides.jpg" name = "Altrazine" quantity = "1" price = "Ksh: 500"/>
          
            <OrderList imageUrl = "./images/liquidFertilizer.png" name = "NPK" quantity = "1" price = "Ksh: 150"/>
          </div>
        </div>
        <div className="ml-[3%] mt-28 mr-[3%] border-2 border-stone-300 lg:ml-[35%] lg:w-[60%] p-6 max-h-fit mb-5 lg:mb-10">
          <span className="text-3xl text-emerald font-semibold">Order Summary</span>
          <div className="border border-stone-300 mb-5 mt-3"/>
          <OrderSummary amount = {amount}/>
        </div>
      </div>
      <div className="bg-blue-20 pt-4 pb-16 text-center">
        <Link to="/products" className="text-2xl text-emerald inline-block hover:scale-110 active:text-red-600">Continue Shopping</Link>
      </div>
    </div>
  )
}

export default OrderPage
