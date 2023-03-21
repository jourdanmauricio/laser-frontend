import Image from 'next/image';
import Link from 'next/link';

const Hero = ({ settings }) => {
  // HERO SECTION
  const sectionHero = settings.filter((setting) => setting.type === 'hero');
  const heroSection = sectionHero.reduce(
    (obj, cur) => ({ ...obj, [cur.feature]: cur }),
    {}
  );

  // HERO BTN
  const buttonHero = settings.filter((setting) => setting.type === 'heroBtn');
  const heroBtn = buttonHero.reduce(
    (obj, cur) => ({ ...obj, [cur.feature]: cur }),
    {}
  );

  return (
    <>
      <style jsx global>{`
        :root {
          // Hero
          --heroTop: ${heroSection.top.value};
          --heroOpacity: ${heroSection.opacity.value};
          --heroBtnTlRadius: ${heroBtn.tlRadius.value};
          --heroBtnTrRadius: ${heroBtn.trRadius.value};
          --heroBtnBlRadius: ${heroBtn.blRadius.value};
          --heroBtnBrRadius: ${heroBtn.brRadius.value};
          --heroBtnBorder: ${heroBtn.border.value};
          --heroBtnWidth: ${heroBtn.width.value};
          --heroBtnHeight: ${heroBtn.height.value};
          --heroBtnTextColor: ${heroBtn.textColor.value};
          --heroBtnBgColor: ${heroBtn.bgColor.value};
          --heroBtnBorderColor: ${heroBtn.borderColor.value};
          --heroBtnShadow: ${heroBtn.shadow.value};
          --heroBtnTextColorHover: ${heroBtn.textColorHover.value};
          --heroBtnBgColorHover: ${heroBtn.bgColorHover.value};
          --heroBtnBorderColorHover: ${heroBtn.borderColorHover.value};
        }
      `}</style>
      <section className="relative w-full h-[85vh]">
        <div className="-z-10">
          <Image
            priority
            src={heroSection.image.value}
            alt={heroSection.image.feature}
            className="object-cover object-center"
            fill
          />
        </div>
        <div className="absolute h-full w-full top-0 bg-black hero__opacity"></div>

        <div
          className={`z-10 absolute hero__pos text-center sm:w-max text-md lg:text-lg -translate-y-1/2 sm:translate-y-0 ${
            heroSection.posX.value === 'right'
              ? 'right-0'
              : heroSection.posX.value === 'left'
              ? 'left-0'
              : 'left-1/2 -translate-x-2/4'
          } `}
        >
          <div
            className="relative ql-editor"
            dangerouslySetInnerHTML={{ __html: heroSection.text.value }}
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
        {heroSection.waveShow.value === 'true' && (
          <div className="absolute bottom-0 left-0 w-full h-[100px]  overflow-hidden">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                d={heroSection.wave.value}
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
