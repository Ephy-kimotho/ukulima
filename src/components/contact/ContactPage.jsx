
function ContactPage() {
  //JS here
  return (
    <div class="bg-white">
      <div className="bg-contact shadow-overlay h-[41rem] pl-[8rem] pt-[5rem]">
        <h1 className="text-white font-bold text-5xl font-nunito pb-[1rem] tracking-wide">Do you have any <br/>Questions?</h1> <br />
        <p className="text-white font-regular text-3xl font-nunito tracking-wide"> We're here to help! Reach out to us for <br />inquiries, support, or feedback, and we'll <br />get back to you as soon as possible.</p><br />
      </div>
      
      <div  className=" max-w-4xl mx-auto pb-9">
        <p className="text-teal-900 text-4xl font-bold text-center mt-[4.5rem] font-nunito"> CONTACT FORM </p>
        <p className="text-teal-900 font-extrabold text-center mb-[3rem]">______________________</p>
        <form action="" className="bg-zinc-300 p-8 rounded-3xl m-8">
          <input type="text" name="firstName" required placeholder="Enter your first name" className="w-full h-[4.5rem] p-3 rounded-md border-gray-500 border-2 text-black text-2xl font-nunito placeholder:italic"/><br /><br />
          <input type="email" name="email" required placeholder="Enter your email" className="w-full h-[4.5rem] p-3 rounded-md border-2 border-gray-500 text-black text-2xl font-nunito invalid:text-rose-500 placeholder:italic"/><br /><br />
          <textarea name="message" required className="w-full min-h-56 rounded-md border-2 border-gray-500 p-2 text-black text-2xl font-nunito placeholder:italic" placeholder="Enter your message..."/><br /><br />
          <button type="submit" className="bg-teal-900 p-4 w-max rounded-2xl text-xl mt-8 mb-4 mx-[18.5rem] hover:bg-teal-800 active:bg-teal-900">Send Message</button>
        </form>
      </div>
    </div>

  )
}

export default ContactPage
