import Image from 'next/image';

const Services = ({ settings, services }) => {
  // SERVICES SECTION
  const sectionServices = settings.filter(
    (setting) => setting.type === 'sectionServices'
  );
  const servicesSection = sectionServices.reduce(
    (obj, cur) => ({ ...obj, [cur.feature]: cur }),
    {}
  );

  return (
    <>
      <style jsx global>{`
        :root {
          // Service
          --servicesBgColor: ${servicesSection.bgColor.value};
          --servicesTextColor: ${servicesSection.textColor.value};
        }
      `}</style>

      <section className="relative ">
        <div
          className="px-5 pt-10 pb-28 lg:px-20 text-center bg-servicesBgColor"
          id="servicios"
        >
          <div
            className="relative ql-editor"
            dangerouslySetInnerHTML={{
              __html: servicesSection.title.value,
            }}
          />
          <div
            className="relative ql-editor"
            dangerouslySetInnerHTML={{
              __html: servicesSection.text.value,
            }}
          />

          {services.map((service, index) => (
            <article
              key={service.id}
              className="mt-10 pb-10 min-h-[50vh] font-normal text-base border-b-servicesTextColor   border-b last:border-0 w-full"
            >
              <div
                className={`float-none md:pb-10 ${
                  index % 2 == 0
                    ? 'md:float-left md:pr-10'
                    : 'md:float-right md:pl-10'
                }`}
              >
                <Image
                  className="mx-auto shadow-xl"
                  src={service.image}
                  width={400}
                  height={400}
                  alt={service.alt_image}
                />
              </div>
              <div>
                <div
                  className="relative ql-editor"
                  dangerouslySetInnerHTML={{ __html: service.title }}
                />
                <div
                  className="relative ql-editor"
                  dangerouslySetInnerHTML={{ __html: service.content }}
                />
              </div>
            </article>
          ))}
        </div>

        {servicesSection.waveShow.value === 'true' && (
          <div className="absolute bottom-0 left-0 w-full h-[100px] overflow-hidden">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                d={servicesSection.wave.value}
                className="stroke-none fill-blogBgColor"
              ></path>
            </svg>
          </div>
        )}
      </section>
    </>
  );
};

export default Services;
