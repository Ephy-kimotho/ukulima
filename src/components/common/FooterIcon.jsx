/* eslint-disable react/prop-types */
function FooterIcon({ icon: Icon, title, text }) {
  return (
    <article className="flex items-center gap-6 w-full">
      <Icon size={30} color="#f0f0f0" strokeWidth={2}  />
      <div className="space-y-1 font-nunito text-white">
        <p className="font-bold ">{title}</p>
        <p className="text-sm tracking-wider">{text}</p>
      </div>
    </article>
  );
}

/* <SendHorizontal size={28} color="#f0f0f0" strokeWidth={3} /> */

export default FooterIcon;
