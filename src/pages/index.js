import axios from 'axios';

import Hero from '../components/Hero';
import Blog from '../components/Blog';
import Clinics from '../components/Clinics/Clinics';
import Nav from '../common/Nav';
import About from '../components/About';
import { NextSeo } from 'next-seo';

export default function Home({ posts, clinics, settings, sections }) {
  const logoImage = settings.find((setting) => setting.feature === 'logoImage');
  const heroImage = settings.find((setting) => setting.feature === 'heroImage');
  const heroText = settings.find((setting) => setting.feature === 'heroText');
  const heroOpacity = settings.find(
    (setting) => setting.feature === 'heroOpacity'
  );
  const heroTop = settings.find((setting) => setting.feature === 'heroTop');

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
  const bodyBgColor = settings.find(
    (setting) => setting.feature === 'bodyBgColor'
  );
  const h1Color = settings.find((setting) => setting.feature === 'h1Color');
  const h1Pos = settings.find((setting) => setting.feature === 'h1Pos');
  const h2Pos = settings.find((setting) => setting.feature === 'h2Pos');

  const aboutContent = sections.find((section) => section.name === 'about');

  console.log('aboutContent', aboutContent);

  return (
    <>
      <style jsx global>{`
        :root {
          --heroTop: ${heroTop.value};
          --heroOpacity: ${heroOpacity.value};
          --navBgColor: ${navBgColor.value};
          --navTextColor: ${navTextColor.value};
          --navHoverColor: ${navHoverColor.value};
          --navCurrentPageColor: ${navCurrentPageColor.value};
          --h1Color: ${h1Color.value};
          --bodyBgColor: ${bodyBgColor.value};
          --h2Pos: ${h2Pos.value};
        }
      `}</style>
      <NextSeo
        title="Doctora Laura Rodriguez"
        description="Información relacionada mujeres a tener una vida sexual y reproductiva saludable y satisfactoria"
        canonical="https://hathayogaloberia.ga"
        openGraph={{
          type: 'website',
          url: 'https://hathayogaloberia.ga',
          // title: 'Open Graph Title',
          // description: 'Open Graph Description',
          images: [
            {
              url: `${heroImage.value}`,
              width: 800,
              height: 600,
              alt: 'Doctora Laura Rodriguez',
            },
          ],
        }}
      />
      <Nav logoImage={logoImage} />
      <Hero heroImage={heroImage} heroText={heroText} />
      <About aboutContent={aboutContent} />
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

    const API_SECTIONS = `${process.env.NEXT_PUBLIC_API_BACKEND}/sections`;
    const responseSections = await axios(API_SECTIONS);

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
        sections: responseSections.data,
      },
    };
  } catch (error) {
    console.log('ERROR', error);
  }
}
