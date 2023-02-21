import axios from 'axios';
import Image from 'next/image';
import Author from '../../components/Author';

const Slug = ({ post }) => {
  return (
    <div className="p-10">
      <h1 className="title">{post.title} </h1>

      <div className="mt-10 min-h-[50vh] font-normal text-base border-gray-500 w-full">
        <div className="float-none md:float-left md:pr-10 md:pb-10">
          <Image
            className="mx-auto"
            src={post.image}
            width={400}
            height={400}
            alt={post.alt_image}
          />
        </div>

        <div
          className="relative ql-editor"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <Author post={post} />
    </div>
  );
};

export default Slug;

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;

  if (typeof slug !== 'string') {
    console.log('param slug is not string');
    return {
      // flag next js parametros incorrectos
      notFound: true,
    };
  }
  try {
    const API_POST = `${process.env.NEXT_PUBLIC_API_BACKEND}/posts/${slug}`;
    const responsePost = await axios(API_POST);

    console.log('Post', responsePost.data);

    return {
      props: {
        post: responsePost.data,
      },
    };
  } catch (error) {
    console.log('getStaticProps ERROR', error);
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths = async () => {
  const API_POSTS = `${process.env.NEXT_PUBLIC_API_BACKEND}/posts`;
  const responsePosts = await axios(API_POSTS);

  const paths = responsePosts.data.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    // fallback: false => 404 en slug no encontrados
    fallback: 'blocking',
  };
};
