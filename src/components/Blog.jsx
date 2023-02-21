import Image from 'next/image';
import Link from 'next/link';

const Blog = ({ posts }) => {
  console.log('POSTS', posts);
  return (
    <section className="py-10 px-5 lg:px-20 text-center">
      <h2 className="title">Últimas entradas</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col justify-center items-center sm:flex-row gap-10 p-10 border-b border-solid border-gray-500"
        >
          <div>
            <Image
              src={post.image}
              height={200}
              width={200}
              alt={post.alt_image}
            />
          </div>
          <div className="flex flex-col justify-between w-full">
            <h2 className="text-center text-2xl font-medium">{post.title}</h2>
            <p className="text-left line-clamp-2 mt-5">{post.resume}</p>
            <Link href={`/blog/${post.slug}`}>
              <strong className="hover:underline">Ver más</strong>
            </Link>
          </div>
        </div>
      ))}
      Visita mi blog
    </section>
  );
};

export default Blog;
