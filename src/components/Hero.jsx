const Hero = ({ hero, textHero, posHero }) => {
  console.log('posHero', posHero);
  return (
    // <section
    //   style={{ backgroundImage: `url('${image.value}')` }}
    //   id="inicio"
    //   className={`relative w-full min-h-[100vh] 2xl:min-h-[70vh] flex justify-center lg:justify-end content-none top-0 left-0 bg-center bg-no-repeat bg-cover`}
    // >
    <>
      <section>
        <div className="relative tex-center inline-block max-w-[1400px] w-full max-h-screen">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="inline-block bg-cover bg-center border border-solid border-gray-300 shadow-[0_0_10px_rgba(0,0,0,0.1)] w-full max-h-screen"
            src={hero.value}
            alt={hero.feature}
          />

          <div
            className={`absolute text-center ${
              posHero.value === 'top-1/4'
                ? 'top-1/4'
                : posHero.value === 'top-3/4'
                ? 'top-3/4'
                : 'top-1/2'
            } left-1/2 -translate-x-2/4 -translate-y-2/4 w-full p-10`}
          >
            <div
              className="relative ql-editor"
              dangerouslySetInnerHTML={{ __html: textHero.value }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
