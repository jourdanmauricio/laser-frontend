const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[100vh] 2xl:min-h-[70vh] flex justify-center lg:justify-end content-none top-0 left-0 bg-[url('/images/home_1280.jpg')] bg-no-repeat bg-cover bg-[35%] lg:bg-left-bottom brightness-[90%]"
    >
      <div className="relative text-white text-center m-20 lg:mt-40">
        <h2 className="text-4xl rounded bg-black bg-opacity-5 p-4 sm:text-5xl xl:text-[50px] font-medium mb-4">
          Ginecología
        </h2>
        <h2 className="text-4xl rounded bg-black bg-opacity-5 p-4 sm:text-5xl xl:text-[50px] font-medium mb-4">
          Sexología
        </h2>
        <h2 className="text-4xl rounded bg-black bg-opacity-5 p-4 sm:text-5xl xl:text-[50px] font-medium">
          Tratamientos laser
        </h2>
      </div>
    </section>
  );
};

export default Hero;
