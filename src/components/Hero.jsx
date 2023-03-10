import Image from 'next/image';

const Hero = ({ settings }) => {
  const heroImage = settings.find((setting) => setting.feature === 'heroImage');
  const heroText = settings.find((setting) => setting.feature === 'heroText');

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
        <div className="absolute bottom-0 left-0 w-full h-[100px] overflow-hidden">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d="M-0.00,129.78 C246.89,97.22 258.74,97.22 500.27,128.80 L500.00,150.00 L0.00,150.00 Z"
              className="stroke-none fill-aboutBgColor"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
