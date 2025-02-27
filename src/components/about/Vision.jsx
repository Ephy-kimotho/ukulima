function Vision() {
  return (
    <section className="bg-[rgb(240,240,240)] py-10 px-4">
      <div className="mx-auto max-w-[350px]">
        <h2 className="text-mint font-bold text-4xl md:text-5xl  font-quciksand flex justify-center">
          Our Vision
        </h2>
        <div className="w-[150px] h-[5px] bg-mint rounded-lg mx-auto mt-2"></div>
      </div>

      <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-4 md:mt-6 max-w-[924px] lg:mx-auto lg:gap-32">
        <div className="space-y-4 mt-4 ml-4 self-center">
          <p className="text-mint text-2xl md:text-4xl  font-quciksand">
            Get to know our vision
          </p>
          <p className="text-night md:text-2xl font-mulish leading-6 ">
            To revolutionize agriculture by providing farmers with easy access
            to quality farm inputs, fostering sustainable farming, and ensuring
            food security for all.
          </p>
        </div>
        <div className="bg-smallPlant bg-cover bg-center aspect-square shadow-translucent rounded-full h-72 md:h-96 w-72 md:rounded-[53px] self-center"></div>
      </div>
    </section>
  );
}

export default Vision;
