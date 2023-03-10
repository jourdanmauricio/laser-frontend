import Image from 'next/image';

const Services = ({ servicesContent }) => {
  return (
    <>
      <div
        className="py-10 px-5 lg:px-20 text-center bg-servicesBgColor"
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
              {/* flex-order-1  */}
              <h2 className="text-center">{subsection.name}</h2>
              <div
                className="relative ql-editor p-0 md:p-8"
                dangerouslySetInnerHTML={{
                  __html: subsection.content,
                }}
              />

              {/* <p className="p-0 md:p-8">{subsection.content}</p> */}
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
    </>
  );
};

export default Services;
