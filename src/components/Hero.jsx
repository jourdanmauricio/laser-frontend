import Image from 'next/image';
import Link from 'next/link';

const Hero = ({ settings, heroBtn }) => {
  const heroImage = settings.find((setting) => setting.feature === 'heroImage');
  const heroText = settings.find((setting) => setting.feature === 'heroText');
  const heroPosX = settings.find((setting) => setting.feature === 'heroPosX');

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

        <div
          className={`z-10 absolute hero__pos text-center w-max ${
            heroPosX.value === 'right'
              ? 'right-0'
              : heroPosX.value === 'left'
              ? 'left-0'
              : 'left-1/2 -translate-x-2/4'
          } `}
        >
          <div
            className="relative ql-editor"
            dangerouslySetInnerHTML={{ __html: heroText.value }}
          />
          {heroBtn.show.value === 'true' && (
            <Link
              className="border border-solid transition ease-in-out delay-100  hover:cursor-pointer btn__hero mx-auto"
              href={heroBtn.link.value}
            >
              {heroBtn.text.value}
            </Link>
          )}
        </div>
        {waveHeroShow.value === 'true' && (
          <div className="absolute bottom-0 left-0 w-full h-[100px]  overflow-hidden">
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
