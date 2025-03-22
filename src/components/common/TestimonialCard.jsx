/* eslint-disable react/prop-types */
function TestimonialCard({ image, name, message }) {
  return (
    <article className="bg-[#DCDDD4] h-80 grid  gap-4 place-content-center  rounded-xl">
      <img src={image} alt={name} className="rounded-full w-40 mx-auto" />

      <div className="w-[80%] mx-auto text-center">
        <p className="font-montserrat text-[#143133] capitalize">{name}</p>
        <p className="font-nunito text-night">&quot;{message}&quot;</p>
      </div>
    </article>
  );
}

export default TestimonialCard;
