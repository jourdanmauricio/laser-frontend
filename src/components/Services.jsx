import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  return (
    <section className="text-center" id="servicios" data-scroll-spy>
      <article className="py-10 px-5 lg:px-20">
        <div>
          <div className="divider__content">
            <p className="divider__text">Servicios</p>
          </div>
          <h2 className="title">
            El yoga produce grandes beneficios a aquellos que lo practican con
            tenacidad y de forma regular
          </h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quisquam officia maxime voluptatem ipsa tempora expedita soluta
            cumque placeat. Temporibus impedit vero, eos consequuntur voluptas
            esse expedita ducimus quia aliquid.
          </p>

          <div className="flex flex-wrap justify-center">
            <article className="relative w-[250] m-5 group">
              <figure>
                <Image
                  src="/images/service/service1.jpg"
                  alt="Hatha Yoga"
                  className="block w-full max-w-[250px] mx-auto my-0 rounded shadow-[0_0_10px_rgba(0,0,0,0.25)]"
                  width={250}
                  height={250}
                />

                <figcaption className="w-0 h-full absolute bottom-0 left-0 right-0 bg-effectColor overflow-hidden ease-in-out duration-500 rounded group-hover:w-full group-hover:opacity-80">
                  <p className="absolute top-1/2 left-1/2 whitespace-nowrap	text-slate-200 text-lg -translate-x-1/2 -translate-y-1/2 border-t border-b border-solid border-slate-200">
                    Hatha Yoga
                  </p>
                </figcaption>
              </figure>
            </article>

            <article className="relative w-[250] m-5 group">
              <figure className="servicio__picture">
                <Image
                  src="/images/service/service2.jpg"
                  alt="Hatha Yoga"
                  className="block w-full max-w-[250px] mx-auto my-0 rounded shadow-[0_0_10px_rgba(0,0,0,0.25)]"
                  width={250}
                  height={250}
                />
                <figcaption className="w-0 h-full absolute bottom-0 left-0 right-0 bg-effectColor overflow-hidden ease-in-out duration-500 rounded group-hover:w-full group-hover:opacity-80">
                  <p className="absolute top-1/2 left-1/2 whitespace-nowrap	text-slate-200 text-lg -translate-x-1/2 -translate-y-1/2 border-t border-b border-solid border-slate-200">
                    Terapia Shiatsu
                  </p>
                </figcaption>
              </figure>
            </article>

            <article className="relative w-[250] m-5 group">
              <figure className="servicio__picture">
                <Image
                  src="/images/service/service3.jpg"
                  alt="Hatha Yoga"
                  className="block w-full max-w-[250px] mx-auto my-0 rounded shadow-[0_0_10px_rgba(0,0,0,0.25)]"
                  width={250}
                  height={250}
                />
                <figcaption className="w-0 h-full absolute bottom-0 left-0 right-0 bg-effectColor overflow-hidden ease-in-out duration-500 rounded group-hover:w-full group-hover:opacity-80">
                  <p className="absolute top-1/2 left-1/2 whitespace-nowrap	text-slate-200 text-lg -translate-x-1/2 -translate-y-1/2 border-t border-b border-solid border-slate-200">
                    Clases online
                  </p>
                </figcaption>
              </figure>
            </article>
          </div>

          <Link href="/#contact" className="button__cta" scroll={false}>
            Más información
          </Link>
        </div>
      </article>
      <figure className="h-[250px] bg-[url('/images/separador.jpg')] bg-cover bg-center bg-no-repeat bg-fixed mb-15 text-slate-200">
        <div className="separador__container container">
          <blockquote className="h-full w-full py-10 flex items-center justify-center text-2xl">
            No importa lo profundo que llegues en una postura, lo que importa es
            quién eres cuando llegas allí.
          </blockquote>
          <figcaption className="pl-10 text-left">&mdash; Max Strom</figcaption>
        </div>
      </figure>
      <article className="py-10 px-5 lg:px-20 mb-20 flex flex-col sm:flex-row items-center justify-center text-center gap-10">
        <article>
          <figure className="min-h-[280px]">
            <Image
              src="/images/beneficios/Yoga-Lotus.svg"
              alt=""
              className="w-[70px] h-[70px] mx-auto"
              width={70}
              height={70}
            />
            <figcaption>
              <p className="paragraph">
                El yoga es uno de los entrenamientos más completos que podemos
                encontrar para fortalecer todo nuestro cuerpo: a través de las
                diferentes posturas o asanas trabajamos todos los grupos
                musculares con nuestro propio peso corporal, ya sea manteniendo
                las posturas durante un determinado período de tiempo o
                añadiendo dinamismo a través del movimiento.
              </p>
            </figcaption>
          </figure>
        </article>

        <article>
          <figure className="min-h-[280px]">
            <Image
              src="/images/beneficios/Yoga-Pose.svg"
              alt=""
              className="w-[70px] h-[70px] mx-auto"
              width={70}
              height={70}
            />
            <figcaption>
              <p className="paragraph">
                Mediante posturas, la meditación y la respiración, entre otras
                cosas, el yoga consigue relajarte logrando cambios profundos en
                nuestra salud. Su importancia es tal que ha sido utilizado como
                medicina preventiva y rehabilitadora. ¿Tú también practicas
                yoga? Gracias a él logramos un bienestar, una paz interior, que
                junto con una alimentación adecuada nos lleva a vivir la vida de
                una forma mejor.
              </p>
            </figcaption>
          </figure>
        </article>
      </article>
      <article className="mb-14 w-full flex flex-col lg:flex-row justify-center items-center ">
        <Image
          src="/images/galeria/galeria1.jpeg"
          alt=""
          className="gallery__img"
          width={330}
          height={330}
        />
        <Image
          src="/images/galeria/galeria2.jpeg"
          alt=""
          className="gallery__img"
          width={330}
          height={330}
        />
        <Image
          src="/images/galeria/galeria3.jpeg"
          alt=""
          className="gallery__img"
          width={330}
          height={330}
        />
      </article>

      <article className="py-10 px-5 lg:px-20 flex flex-wrap justify-center items-center mb-10">
        <article className="flex flex-wrap flex-col grow-0 shrink-0 basis-full lg:basis-1/2 gap-4 items-center justify-center p-5">
          <div className="card">
            <div className="face front">
              <Image
                src="/logos/logo-RYL.svg"
                alt=""
                className="face__img"
                width={200}
                height={200}
              />
            </div>
            <div className="face back">
              <p>Hatha Yoga</p>
            </div>
          </div>

          <h2 className="title">Hatha Yoga</h2>
          <p className="paragraph w-full">
            Así se llama la expresión primera del yoga, del yoga más antiguo y
            más esencial. El Hatha Yoga es una disciplina que aspira a llegar al
            equilibrio (físico y mental) a través de asanas (posturas) y
            pranayama (el conjunto de técnicas de respiración que llevan al
            control de la energía vital). ‘Del Hatha Yoga parten todos los
            demás. Hatha significa sol (ha) y luna (tha). Por eso representa el
            equilibrio‘
          </p>
        </article>

        <article className="flex flex-wrap flex-col grow-0 shrink-0 basis-full lg:basis-1/2 gap-4 items-center justify-center p-5">
          <Image
            src="/images/conceptos/hatha-yoga.jpg"
            alt=""
            className="block max-w-[400px] max-h-[450px] mx-auto rounded shadow-[0_0_10px_rgba(0,0,0,0.25)]"
            width={300}
            height={450}
          />
        </article>
      </article>

      <article className="py-10 px-5 lg:px-20 flex flex-wrap items-center justify-center flex-row-reverse">
        <article className="flex flex-wrap flex-col grow-0 shrink-0 basis-full lg:basis-1/2 gap-4 items-center justify-center p-5">
          <div className="card">
            <div className="face front">
              <Image
                src="/logos/flor-de-loto.png"
                alt=""
                className="face__img"
                width={200}
                height={200}
              />
            </div>
            <div className="face back">
              <p>Shiatsu</p>
            </div>
          </div>

          <h2 className="title">Shiatsu</h2>
          <p className="paragraph">
            El Shiatsu es una terapia manual, o un masaje terapeútico, de origen
            japonés que busca armonizar cuerpo, mente y emociones mediante el
            contacto, con el objetivo de mejorar la salud y la vitalidad de la
            persona que lo recibe.
          </p>
        </article>
        <article className="flex flex-wrap flex-col grow-0 shrink-0 basis-full md:basis-1/2 gap-4 items-center justify-center p-5">
          <Image
            src="/images/conceptos/shiatsu.jpg"
            alt=""
            className="block max-w-[400px] max-h-[450px] mx-auto rounded shadow-[0_0_10px_rgba(0,0,0,0.25)]"
            width={300}
            height={450}
          />
        </article>
      </article>
    </section>
  );
};

export default Services;
