import axios from 'axios';

import Hero from '../components/Hero';
import Blog from '../components/Blog';
import Clinics from '../components/Clinics/Clinics';
import Nav from '../common/Nav';

export default function Home({ posts, clinics, settings }) {
  const logoImage = settings.find((setting) => setting.feature === 'logoImage');
  const heroImage = settings.find((setting) => setting.feature === 'heroImage');
  const heroText = settings.find((setting) => setting.feature === 'heroText');
  const heroPos = settings.find((setting) => setting.feature === 'heroPos');
  const heroOpacity = settings.find(
    (setting) => setting.feature === 'heroOpacity'
  );
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

  return (
    <>
      <style jsx global>{`
        :root {
          --navBgColor: ${navBgColor.value};
          --navTextColor: ${navTextColor.value};
          --navHoverColor: ${navHoverColor.value};
          --navCurrentPageColor: ${navCurrentPageColor.value};
        }
      `}</style>
      <Nav logoImage={logoImage} />
      <Hero
        heroImage={heroImage}
        heroText={heroText}
        heroPos={heroPos}
        heroOpacity={heroOpacity}
      />
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
