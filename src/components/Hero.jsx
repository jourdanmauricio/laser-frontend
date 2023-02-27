import Image from 'next/image';

const Hero = ({ heroImage, heroText, heroPos, heroOpacity }) => {
  return (
    // <section
    //   style={{ backgroundImage: `url('${image.value}')` }}
    //   id="inicio"
    //   className={`relative w-full min-h-[100vh] 2xl:min-h-[70vh] flex justify-center lg:justify-end content-none top-0 left-0 bg-center bg-no-repeat bg-cover`}
    // >
    <>
      <section>
        <div className="relative tex-center inline-block max-w-[1400px] w-full h-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            className="inline-block bg-cover bg-center shadow-[0_0_10px_rgba(0,0,0,0.1)] w-full h-auto"
            src={heroImage.value}
            alt={heroImage.feature}
            width={1400}
            height={860}
          />

          <div
            className={`absolute h-full w-full top-0 bg-black ${
              heroOpacity.value === '10'
                ? 'opacity-10'
                : heroOpacity.value === '20'
                ? 'opacity-20'
                : heroOpacity.value === '30'
                ? 'opacity-30'
                : heroOpacity.value === '40'
                ? 'opacity-40'
                : heroOpacity.value === '50'
                ? 'opacity-50'
                : heroOpacity.value === '60'
                ? 'opacity-60'
                : heroOpacity.value === '70'
                ? 'opacity-70'
                : heroOpacity.value === '80'
                ? 'opacity-80'
                : heroOpacity.value === '90'
                ? 'opacity-90'
                : heroOpacity.value === '100'
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          ></div>

          <div
            className={`absolute text-center  ${
              heroPos.value === 'top-1/4'
                ? 'top-1/4'
                : heroPos.value === 'top-3/4'
                ? 'top-3/4'
                : 'top-1/2'
            } left-1/2 -translate-x-2/4 -translate-y-2/4 w-full p-10`}
          >
            <div
              className="relative ql-editor"
              dangerouslySetInnerHTML={{ __html: heroText.value }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
