import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../../common/Nav';
import Footer from '../../common/Footer/Footer';

const Blog = ({ posts, settings }) => {
  const navBgColor = settings.find(
    (setting) => setting.feature === 'navBgColor'
  );
  const navTextColor = settings.find(
    (setting) => setting.feature === 'navTextColor'
  );
  const navHoverColor = settings.find(
    (setting) => setting.feature === 'navHoverColor'
  );
  const navCurrentPageColor = settings.find(
    (setting) => setting.feature === 'navCurrentPageColor'
  );
  // FOOTER
  const footerBgColor = settings.find(
    (setting) => setting.feature === 'footerBgColor'
  );
  const footerTextColor = settings.find(
    (setting) => setting.feature === 'footerTextColor'
  );
  const footerButtonsColor = settings.find(
    (setting) => setting.feature === 'footerButtonsColor'
  );
  const footerButtonsHoverColor = settings.find(
    (setting) => setting.feature === 'footerButtonsHoverColor'
  );
  const footerLinksColor = settings.find(
    (setting) => setting.feature === 'footerLinksColor'
  );
  const footerLinksHoverColor = settings.find(
    (setting) => setting.feature === 'footerLinksHoverColor'
  );
  const footer2BgColor = settings.find(
    (setting) => setting.feature === 'footer2BgColor'
  );
  const footer2TextColor = settings.find(
    (setting) => setting.feature === 'footer2TextColor'
  );

  return (
    <>
      <style jsx global>{`
        :root {
          --navBgColor: ${navBgColor.value};
          --navTextColor: ${navTextColor.value};
          --navHoverColor: ${navHoverColor.value};
          --navCurrentPageColor: ${navCurrentPageColor.value};
          // Footer
          --footerBgColor: ${footerBgColor.value};
          --footerTextColor: ${footerTextColor.value};
          --footerButtonsColor: ${footerButtonsColor.value};
          --footerButtonsHoverColor: ${footerButtonsHoverColor.value};
          --footerLinksColor: ${footerLinksColor.value};
          --footerLinksHoverColor: ${footerLinksHoverColor.value};
          --footer2BgColor: ${footer2BgColor.value};
          --footer2TextColor: ${footer2TextColor.value};
        }
      `}</style>
      <Nav settings={settings} />
      <div className="bg-blue-100 h-40 flex flex-col justify-center items-center">
        <h1 className="text-slate-800">Blog, artículos y noticias</h1>
      </div>
      <section className="px-4 sm:px-10 text-center text-lg font-medium tracking-wide">
        <h2 className="title my-6">¡Bienvenida a mi blog!</h2>
        <p className="mt-4">
          Aquí encontrarás una variedad de temas interesantes y útiles que te
          ayudarán a mejorar tu vida y alcanzar tus objetivos. Desde consejos
          sobre salud y bienestar, hasta artículos sobre tecnología y
          entretenimiento, mi blog tiene algo para todos.
        </p>
        <p className="mt-4">
          Mis publicaciones están escritas con el objetivo de informar, inspirar
          y entretener. Me apasiona compartir información valiosa y útil que
          pueda ayudarte a tomar decisiones informadas y a mejorar tu vida de
          alguna manera.
        </p>
        <p className="mt-4">
          Además, estoy siempre abierto a sugerencias y comentarios de mis
          lectores. Si tienes alguna pregunta o tema que te gustaría que cubra
          en mi blog, no dudes en contactarme.
        </p>
        <p className="mt-4">
          ¡Gracias por visitar mi blog! Espero que disfrutes leyendo mis
          publicaciones tanto como yo disfruto escribirlas.
        </p>
        <div className="flex flex-col gap-10 py-10 px-5 lg:px-40 w-full">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col sm:flex-row sm:gap-5 shadow-lg rounded-lg min-w-[300px] bg-blue-50"
            >
              <div className="relative sm:min-w-[250px] min-h-[150px]">
                <Link href={`/blog/${post.slug}`}>
                  <Image
                    fill
                    className="rounded-tl-lg rounded-bl-lg object-contain overflow-hidden aspect-square"
                    src={post.image}
                    alt={post.alt_image}
                  />
                </Link>
              </div>
              <div className="w-full">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="title">{post.title}</h3>
                </Link>
                <p className="text-left line-clamp-2 my-4">{post.resume}</p>
                <div className="text-center mb-2">
                  <Link href={`/blog/${post.slug}`}>
                    <strong className="hover:underline text-sm">
                      Seguir leyendo...
                    </strong>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer settings={settings} />
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  try {
    const API_POSTS = `${process.env.NEXT_PUBLIC_API_BACKEND}/posts`;
    const responsePosts = await axios(API_POSTS);

    const posts = responsePosts.data.sort((a, b) => b.order - a.order);

    const API_SETTINGS = `${process.env.NEXT_PUBLIC_API_BACKEND}/settings`;
    const responseSettings = await axios(API_SETTINGS);

    return {
      props: {
        posts: posts,
        settings: responseSettings.data,
      },
    };
  } catch (error) {
    console.log('ERROR', error);
  }
}
