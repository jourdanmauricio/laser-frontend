import Image from 'next/image';

const Hero = ({ settings }) => {
  const heroImage = settings.find((setting) => setting.feature === 'heroImage');
  const heroText = settings.find((setting) => setting.feature === 'heroText');
  const waveHeroShow = settings.find(
    (setting) => setting.feature === 'waveHeroShow'
  );
  const waveHero = settings.find((setting) => setting.feature === 'waveHero');

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
        <div className="absolute h-full w-full top-0 bg-black hero__opacity"></div>

        <div className="absolute text-center hero__top left-1/2 w-full p-10 -translate-x-2/4 -translate-y-2/4">
          <div
            className="relative ql-editor"
            dangerouslySetInnerHTML={{ __html: heroText.value }}
          />
        </div>
        {waveHeroShow.value === 'true' && (
          <div className="absolute bottom-0 left-0 w-full h-[100px] opacity-10 overflow-hidden">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                d={waveHero.value}
                className="stroke-none fill-aboutBgColor"
              ></path>
            </svg>
          </div>
        )}
      </section>
    </>
  );
};

export default Hero;
