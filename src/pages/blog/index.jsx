import axios from 'axios';
import Image from 'next/image';
import { formatDateTable } from '../../helpers/functions';
import Link from 'next/link';

const Blog = ({ posts }) => {
  return (
    <section>
      <div className="bg-blue-100 h-40 flex flex-col justify-center items-center">
        <h1 className="text-slate-800">Blog, artículos y noticias</h1>
      </div>
      <p className="text-slate-800 text-lg text-center pt-5 px-10 md:px-40">
        En el blog encontrarás artículos sobre ginecología, sexología, y
        tratamientos para mejorar la calidad de vida y conseguir un mayor nivel
        de autoestima personal
      </p>

      <div className="flex flex-col gap-10 p-10">
        {posts.map((post) => (
          <article key={post.id} className="shadow-lg rounded-lg max-w-[400px]">
            <div className="relative w-[300px] h-[300px]">
              <Link href={`/blog/${post.slug}`}>
                <Image
                  width={300}
                  height={300}
                  className="rounded-tl-lg rounded-bl-lg"
                  src={post.image}
                  alt={post.alt_image}
                />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;

export async function getStaticProps() {
  try {
    const API_POSTS = `${process.env.NEXT_PUBLIC_API_BACKEND}/posts`;
    const responsePosts = await axios(API_POSTS);

    const posts = responsePosts.data.sort((a, b) => b.order - a.order);

    console.log('POSTS BLOG getStaticProps', posts);

    return {
      props: {
        posts: posts,
      },
    };
  } catch (error) {
    console.log('ERROR', error);
  }
}
