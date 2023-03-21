const About = ({ settings }) => {
  // ABOUT SECTION
  const sectionAbout = settings.filter(
    (setting) => setting.type === 'sectionAbout'
  );
  const aboutSection = sectionAbout.reduce(
    (obj, cur) => ({ ...obj, [cur.feature]: cur }),
    {}
  );

  return (
    <>
      <style jsx global>{`
        :root {
          // About
          --aboutBgColor: ${aboutSection.bgColor.value};
        }
      `}</style>
      <section
        className="relative pt-10 pb-28 px-5 lg:px-20 text-center about"
        id="nosotros"
      >
        <div
          className="relative ql-editor"
          dangerouslySetInnerHTML={{
            __html: aboutSection.title.value,
          }}
        />
        <div
          className="relative ql-editor"
          dangerouslySetInnerHTML={{
            __html: aboutSection.text.value,
          }}
        />
        <div className="absolute bottom-0 left-0 w-full h-[100px] overflow-hidden">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d="M-0.00,129.78 C246.89,97.22 258.74,97.22 500.27,128.80 L500.00,150.00 L0.00,150.00 Z"
              className="stroke-none fill-servicesBgColor"
            ></path>
          </svg>
        </div>
        {aboutSection.waveShow.value === 'true' && (
          <div className="absolute bottom-0 left-0 w-full h-[100px] overflow-hidden">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                d={aboutSection.wave.value}
                className="stroke-none fill-servicesBgColor"
              ></path>
            </svg>
          </div>
        )}
      </section>
    </>
  );
};

export default About;
