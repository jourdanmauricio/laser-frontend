import Image from 'next/image';

const Hero = ({ heroImage, heroText, heroOpacity }) => {
  return (
    <>
      <section className="relative w-full h-[85vh]">
        <div className="-z-10">
          <Image
            priority
            src={heroImage.value}
            alt={heroImage.feature}
            className="object-cover object-center"
            fill
          />
        </div>
        <div
          className="absolute h-full w-full top-0 bg-black hero__opacity"
          // className={`absolute h-full w-full top-0 bg-black ${
          //   heroOpacity.value === '10'
          //     ? 'opacity-10'
          //     : heroOpacity.value === '20'
          //     ? 'opacity-20'
          //     : heroOpacity.value === '30'
          //     ? 'opacity-30'
          //     : heroOpacity.value === '40'
          //     ? 'opacity-40'
          //     : heroOpacity.value === '50'
          //     ? 'opacity-50'
          //     : heroOpacity.value === '60'
          //     ? 'opacity-60'
          //     : heroOpacity.value === '70'
          //     ? 'opacity-70'
          //     : heroOpacity.value === '80'
          //     ? 'opacity-80'
          //     : heroOpacity.value === '90'
          //     ? 'opacity-90'
          //     : heroOpacity.value === '100'
          //     ? 'opacity-100'
          //     : 'opacity-0'
          // }`}
        ></div>

        <div className="absolute text-center hero__top left-1/2 w-full p-10 -translate-x-2/4 -translate-y-2/4">
          <div
            className="relative ql-editor"
            dangerouslySetInnerHTML={{ __html: heroText.value }}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
