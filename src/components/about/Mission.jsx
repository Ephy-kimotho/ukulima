function Mission() {
  return (
    <section className="bg-moldGreen py-10 px-4">
      <div className="mx-auto max-w-[300px]">
        <h2 className="text-white font-bold text-4xl md:text-5xl  font-quciksand flex justify-center">
          Our Mission
        </h2>
        <div className="w-[150px] h-[5px] bg-white rounded-lg mx-auto mt-2"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-4 md:mt-6 max-w-[924px] lg:mx-auto lg:gap-32">
        <div className="space-y-4 mt-4 ml-4 self-center">
          <p className="text-white text-2xl md:text-4xl font-semibold font-quciksand">
            Get to know our Mission
          </p>
          <p className="text-white md:text-2xl font-quciksand leading-6 ">
            We are dedicated to To empower farmers with reliable, affordable,
            and high-quality agricultural products while leveraging technology
            to simplify the buying process and enhance productivity.
          </p>
        </div>
        <div className="bg-dairy bg-cover bg-center aspect-square rounded-full h-72 md:h-96 w-72 md:rounded-[53px] self-center"></div>
      </div>
    </section>
  );
}

export default Mission;
