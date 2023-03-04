const About = ({ aboutContent }) => {
  return (
    <section className="py-10 px-5 lg:px-20 text-center" id="nosotros">
      <div
        className="relative ql-editor"
        dangerouslySetInnerHTML={{
          __html: aboutContent.subsections[0].content,
        }}
      />
    </section>
  );
};

export default About;
