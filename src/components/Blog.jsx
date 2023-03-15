import Image from 'next/image';
import Link from 'next/link';

const Blog = ({ settings, posts, blogContent }) => {
  const waveBlogShow = settings.find(
    (setting) => setting.feature === 'waveBlogShow'
  );
  const waveBlog = settings.find((setting) => setting.feature === 'waveBlog');

  return (
    <section className="relative pt-10 pb-28 px-5 lg:px-20 text-center bg-blogBgColor">
      <div
        className="relative ql-editor"
        dangerouslySetInnerHTML={{
          __html: blogContent.title,
        }}
      />
      <div
        className="relative ql-editor"
        dangerouslySetInnerHTML={{
          __html: blogContent.subsections[0].content,
        }}
      />
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
            <p className="text-left line-clamp-2 my-4">{post.resume}</p>
            <Link href={`/blog/${post.slug}`}>
              <strong className="hover:underline">Ver más</strong>
            </Link>
          </div>
        </div>
      ))}
      <Link href="/blog">
        <strong>
          <u>Visita mi blog</u>
        </strong>
      </Link>
      {waveBlogShow.value === 'true' && (
        <div className="absolute bottom-0 left-0 w-full h-[100px] overflow-hidden">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d={waveBlog.value}
              className="stroke-none fill-clinicBgColor"
            ></path>
          </svg>
        </div>
      )}
    </section>
  );
};

export default Blog;
