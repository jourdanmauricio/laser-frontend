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

  const blogPage = settings.filter((setting) => setting.type === 'pageBlog');
  const pageBlog = blogPage.reduce(
    (obj, cur) => ({ ...obj, [cur.feature]: cur }),
    {}
  );

  return (
    <>
      <style jsx global>{`
        :root {
          // BLOG PAGE
          --heroBgColor: ${pageBlog.heroBgColor.value};
          --bgColor: ${pageBlog.bgColor.value};
          --decorationColor: ${pageBlog.decorationColor.value};
        }
      `}</style>
      <Nav settings={settings} />
      <div className="relative bg-heroBgColor flex flex-col justify-center items-center">
        {/* <h1 className="text-slate-800">Blog, artículos y noticias</h1> */}
        <div
          className="relative ql-editor"
          dangerouslySetInnerHTML={{
            __html: pageBlog.h1.value,
          }}
        />
      </div>
      <section className="relative overflow-hidden bg-bgColor px-4 pb-10 sm:px-10 text-center text-lg font-medium tracking-wide">
        <div
          className="relative ql-editor"
          dangerouslySetInnerHTML={{
            __html: pageBlog.text.value,
          }}
        />

        <div className="z-10 mt-10 relative w-full bg-blue-50 xl:w-[70%] mx-auto rounded">
          {posts.map((post, index) => (
            <div key={post.id}>
              <article className="min-w-[300px] py-5 px-5">
                <div
                  className={`relative sm:min-w-[250px] min-h-[150px] float-none md:pb-10 ${
                    index % 2 == 0
                      ? 'md:float-left md:pr-10'
                      : 'md:float-right md:pl-10'
                  }`}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      fill
                      className="object-contain overflow-hidden aspect-square"
                      src={post.image}
                      alt={post.alt_image}
                    />
                  </Link>
                </div>
                <div className="w-full">
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg mt-0 text-left text-bgColor">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-left text-sm line-clamp-2 my-4">
                    {post.resume}
                  </p>
                  <div className="text-center mb-2">
                    <Link href={`/blog/${post.slug}`}>
                      <strong className="hover:underline text-sm">
                        Seguir leyendo...
                      </strong>
                    </Link>
                  </div>
                </div>
              </article>
              <hr />
            </div>
          ))}
        </div>

        <div className="absolute z-0 w-40 h-40 bg-decorationColor rounded-full -right-10 -bottom-10"></div>
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
