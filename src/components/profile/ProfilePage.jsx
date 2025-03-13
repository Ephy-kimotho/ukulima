import { CircleUserRound, PowerIcon} from "lucide-react"

function ProfilePage() {
  //Js here
  return (
    <div className="bg-stone-200 min-h-screen items-center flex flex-col font-nunito">
      <div className="h-full">
        <div className="mt-12 mb-8 justify-self-center">
          <CircleUserRound color="#000" size={200} />
          <p className="text-stone-900 text-3xl font-semibold mt-5">
          Hello John Doe
        </p>
        </div>
        <div className="w-full max-w-md text-3xl mt-8">
          <div className="text-black flex mt-5">
            <p className="font-semibold">
              Full Name:
            </p>
            <p className="pl-2">
              John Doe
            </p>
          </div>
          <div className="bg-black pt-[0.26rem]"/>
          <div className="text-black flex mt-8">
            <p className="font-semibold">
              Email:
            </p>
            <p className="pl-2">
              johndoe@gmail.com
            </p>
          </div>
          <div className="bg-black pt-[0.26rem]"/>
        </div>
        <div className="justify-self-center">
          <button type="submit" className="border-2 font-bold text-3xl bg-teal-900 p-2 px-10 text-white mt-56 rounded-2xl flex items-center gap-3 active:bg-rose-600
          active:text-white
          active:border-stone-200 hover:text-teal-900 hover:bg-stone-200 hover:border-teal-900 hover:text-2xl" ><PowerIcon/> Log out</button>
        </div>
      </div>
    </div>
  )
}
export default ProfilePage