import axios from 'axios';
import Image from 'next/image';
import Author from '@/components/Author';
import Nav from '@/common/Nav';
import { NextSeo } from 'next-seo';

import {
  TwitterShareButton,
  FacebookShareButton,
  EmailShareButton,
  PinterestShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  PinterestIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import Footer from '../../common/Footer/Footer';

const Slug = ({ post, settings }) => {
  const logoImage = settings.find((setting) => setting.feature === 'logoImage');
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

      <NextSeo
        title={post.title}
        description={post.resume}
        canonical={`${process.env.NEXT_PUBLIC_FRONTEND}/blog/${post.slug}`}
        openGraph={{
          type: 'website',
          url: `${process.env.NEXT_PUBLIC_FRONTEND}/blog/${post.slug}`,
          // title: 'Open Graph Title',
          // description: 'Open Graph Description',
          images: [
            {
              url: `${post.image}`,
              width: 800,
              height: 600,
              alt: `${post.alt_image}`,
            },
          ],
        }}
      />

      <Nav settings={settings} />
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
        <div className="flex gap-4 items-center">
          <FacebookShareButton
            // url={`https://hathayogaloberia.com.ar/blog/${post.slug}`}
            url={`${process.env.NEXT_PUBLIC_FRONTEND}/blog/${post.slug}`}
            quote={'Dummy text!'}
            hashtag="#muo"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <TwitterShareButton
            url={`${process.env.NEXT_PUBLIC_FRONTEND}/blog/${post.slug}`}
            quote={'Dummy text!'}
            hashtag="#muo"
          >
            <TwitterIcon className="-top-10" size={32} round />
          </TwitterShareButton>

          <EmailShareButton
            url={`${process.env.NEXT_PUBLIC_FRONTEND}/blog/${post.slug}`}
            quote={'Dummy text!'}
            hashtag="#muo"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
          <PinterestShareButton
            url={`${process.env.NEXT_PUBLIC_FRONTEND}/blog/${post.slug}`}
            quote={'Dummy text!'}
            hashtag="#muo"
          >
            <PinterestIcon size={32} round />
          </PinterestShareButton>

          <TelegramShareButton
            url={`${process.env.NEXT_PUBLIC_FRONTEND}/blog/${post.slug}`}
            quote={'Dummy text!'}
            hashtag="#muo"
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>
          <WhatsappShareButton
            url={`${process.env.NEXT_PUBLIC_FRONTEND}/blog/${post.slug}`}
            quote={'Dummy text!'}
            hashtag="#muo"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
        <Author post={post} />
      </div>
      <Footer settings={settings} />
    </>
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

    const API_SETTINGS = `${process.env.NEXT_PUBLIC_API_BACKEND}/settings`;
    const responseSettings = await axios(API_SETTINGS);

    return {
      props: {
        post: responsePost.data,
        settings: responseSettings.data,
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
