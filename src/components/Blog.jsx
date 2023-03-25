import Image from 'next/image';
import Link from 'next/link';

const Blog = ({ settings, posts }) => {
  // BLOG SECTION
  const sectionBlog = settings.filter(
    (setting) => setting.type === 'sectionBlog'
  );
  const blogSection = sectionBlog.reduce(
    (obj, cur) => ({ ...obj, [cur.feature]: cur }),
    {}
  );

  // BLOG BTN
  const buttonBlog = settings.filter((setting) => setting.type === 'blogBtn');
  const blogBtn = buttonBlog.reduce(
    (obj, cur) => ({ ...obj, [cur.feature]: cur }),
    {}
  );

  return (
    <>
      <style jsx global>{`
        :root {
          // BLOG
          --blogBgColor: ${blogSection.bgColor.value};
          --blogTextColor: ${blogSection.textColor.value};
          // BLOG BTN
          --blogBtnTlRadius: ${blogBtn.tlRadius.value};
          --blogBtnTrRadius: ${blogBtn.trRadius.value};
          --blogBtnBlRadius: ${blogBtn.blRadius.value};
          --blogBtnBrRadius: ${blogBtn.brRadius.value};
          --blogBtnBorder: ${blogBtn.border.value};
          --blogBtnWidth: ${blogBtn.width.value};
          --blogBtnHeight: ${blogBtn.height.value};
          --blogBtnTextColor: ${blogBtn.textColor.value};
          --blogBtnBgColor: ${blogBtn.bgColor.value};
          --blogBtnBorderColor: ${blogBtn.borderColor.value};
          --blogBtnShadow: ${blogBtn.shadow.value};
          --blogBtnTextColorHover: ${blogBtn.textColorHover.value};
          --blogBtnBgColorHover: ${blogBtn.bgColorHover.value};
          --blogBtnBorderColorHover: ${blogBtn.borderColorHover.value};
        }
      `}</style>

      <section className="relative pt-10 pb-28 px-5 lg:px-20 text-center bg-blogBgColor">
        <div
          className="relative ql-editor"
          dangerouslySetInnerHTML={{
            __html: blogSection.title.value,
          }}
        />
        <div
          className="relative ql-editor"
          dangerouslySetInnerHTML={{
            __html: blogSection.text.value,
          }}
        />
        {posts.map((post, index) => (
          <article
            key={post.id}
            className={`flex flex-col justify-center items-center sm:flex-row gap-10 p-10 border-blogTextColor  ${
              posts.length === index + 1 ? 'last:border-0' : 'border-b'
            } w-full`}
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
              <h3 className="text-center text-2xl font-medium">
                {post.title.replace(/(<([^>]+)>)/gi, '')}
              </h3>
              <p className="text-left line-clamp-2 my-4">{post.resume}</p>
              <Link href={`/blog/${post.slug}`}>
                <strong className="hover:underline">Ver más</strong>
              </Link>
            </div>
          </article>
        ))}

        {blogBtn.show.value === 'true' && (
          <div className="mt-12">
            <Link
              href={blogBtn.link.value}
              className="border border-solid transition ease-in-out delay-100 hover:cursor-pointer btn__blog"
            >
              {blogBtn.text.value}
            </Link>
          </div>
        )}

        {blogSection.waveShow.value === 'true' && (
          <div className="absolute bottom-0 left-0 w-full h-[100px] overflow-hidden">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                d={blogSection.wave.value}
                className="stroke-none fill-clinicBgColor"
              ></path>
            </svg>
          </div>
        )}
      </section>
    </>
  );
};

export default Blog;
