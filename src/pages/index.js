import axios from 'axios';

import Hero from '../components/Hero';
import Blog from '../components/Blog';
import Clinics from '../components/Clinics/Clinics';
import Nav from '../common/Nav';

export default function Home({ posts, clinics, settings }) {
  const logo = settings.find((setting) => setting.feature === 'logo');
  const hero = settings.find((setting) => setting.feature === 'hero');
  const textHero = settings.find((setting) => setting.feature === 'textHero');
  const posHero = settings.find((setting) => setting.feature === 'posHero');

  return (
    <>
      <style jsx global>{`
        :root {
          // --pos-hero: ${posHero.value};
        }
      `}</style>
      <Nav logo={logo} />
      <Hero hero={hero} textHero={textHero} posHero={posHero} />
      <Blog posts={posts} />
      <Clinics clinics={clinics} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const API_POSTS = `${process.env.NEXT_PUBLIC_API_BACKEND}/posts`;
    const responsePosts = await axios(API_POSTS);

    const API_CLINICS = `${process.env.NEXT_PUBLIC_API_BACKEND}/clinics`;
    const responseClinics = await axios(API_CLINICS);

    const API_SETTINGS = `${process.env.NEXT_PUBLIC_API_BACKEND}/settings`;
    const responseSettings = await axios(API_SETTINGS);

    const posts = responsePosts.data
      .sort((a, b) => b.order - a.order)
      .filter((post) => post.main === true);

    const clinics = responseClinics.data
      .sort((a, b) => a.order - b.order)
      .filter((post) => post.main === true);

    return {
      props: {
        posts: posts,
        clinics,
        settings: responseSettings.data,
      },
    };
  } catch (error) {
    console.log('ERROR', error);
  }
}
