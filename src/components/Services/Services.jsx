import Image from 'next/image';

const Services = ({ settings, servicesContent }) => {
  const waveServiceShow = settings.find(
    (setting) => setting.feature === 'waveServiceShow'
  );
  const waveService = settings.find(
    (setting) => setting.feature === 'waveService'
  );

  return (
    <div className="relative ">
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
          <section
            key={subsection.id}
            className={`mt-10 flex flex-wrap items-center justify-center ${
              index % 2 == 0 ? 'flex-row-reverse' : ''
            }`}
          >
            <article className="grow-0 shrink-0	basis-full md:basis-1/2">
              <div
                className="relative ql-editor p-0 md:p-8"
                dangerouslySetInnerHTML={{
                  __html: subsection.name,
                }}
              />

              <div
                className="relative ql-editor p-0 md:p-8"
                dangerouslySetInnerHTML={{
                  __html: subsection.content,
                }}
              />
            </article>
            <article className="grow-0 shrink-0	basis-full md:basis-1/2">
              <Image
                className="mx-auto"
                src={subsection.image}
                alt={subsection.alt_image}
                width={400}
                height={400}
              />
            </article>
          </section>
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
    </div>
  );
};

export default Services;
