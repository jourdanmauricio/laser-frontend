import Link from 'next/link';

const About = () => {
  return (
    <section className="py-10 px-5 lg:px-20 text-center" id="nosotros">
      <div className="divider__content">
        <p className="divider__text">Sobre mi</p>
      </div>
      <div>
        <h2 className="title">El equilibrio está en tu interior</h2>
        <p className="paragraph">
          <strong>Hatha Yoga Lobería</strong> es un espacio para comenzar,
          desarrollar y/o fortalecer la práctica del yoga.
        </p>
        <p className="paragraph">
          Me gustaría compartir contigo mi experiencia y práctica del Hatha Yoga
          y ayudarte a instrumentalizar los eventos y situaciones de la vida
          cotidiana para profundizar tu crecimiento interior y conquistar una
          actitud mental de lucidez, firmeza de mente y atención consciente.
        </p>
        <p className="title mt-20">El yoga es una actitud de vida</p>
        <Link
          href="/#lessons"
          scroll={false}
          className="inline-block mt-10 text-lg text-buttonColor border-b border-buttonColor ease-in-out duration-500 hover:tracking-widest hover:border-b"
        >
          Descubre nuestras clases
        </Link>
      </div>
    </section>
  );
};

export default About;
