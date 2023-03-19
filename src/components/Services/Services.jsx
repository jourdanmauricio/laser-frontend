import Image from 'next/image';

const Services = ({ settings, servicesContent }) => {
  const waveServiceShow = settings.find(
    (setting) => setting.feature === 'waveServiceShow'
  );
  const waveService = settings.find(
    (setting) => setting.feature === 'waveService'
  );

  return (
    <section className="relative ">
      <div
        className="px-5 pt-10 pb-28 lg:px-20 text-center bg-servicesBgColor"
        id="servicios"
      >
        <div
          className="relative ql-editor"
          dangerouslySetInnerHTML={{
            __html: servicesContent.title,
          }}
        />

        {servicesContent.subsections.map((subsection, index) => (
          <article
            key={subsection.id}
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
                src={subsection.image}
                width={400}
                height={400}
                alt={subsection.alt_image}
              />
            </div>
            <div>
              <div
                className="relative ql-editor"
                dangerouslySetInnerHTML={{ __html: subsection.name }}
              />
              <div
                className="relative ql-editor"
                dangerouslySetInnerHTML={{ __html: subsection.content }}
              />
            </div>
          </article>
        ))}
      </div>
      {waveServiceShow.value === 'true' && (
        <div className="absolute bottom-0 left-0 w-full h-[100px] overflow-hidden">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d={waveService.value}
              className="stroke-none fill-blogBgColor"
            ></path>
          </svg>
        </div>
      )}
    </section>
  );
};

export default Services;
