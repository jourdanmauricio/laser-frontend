import axios from 'axios';

import Hero from '../components/Hero';
import Blog from '../components/Blog';
import Clinics from '../components/Clinics/Clinics';
import Nav from '../common/Nav';
import About from '../components/About';
import { NextSeo } from 'next-seo';
import Services from '../components/Services/Services';
import Footer from '../common/Footer/Footer';

export default function Home({ posts, clinics, settings, sections }) {
  const heroImage = settings.find((setting) => setting.feature === 'heroImage');
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
  const aboutBgColor = settings.find(
    (setting) => setting.feature === 'aboutBgColor'
  );
  const servicesBgColor = settings.find(
    (setting) => setting.feature === 'servicesBgColor'
  );
  const blogBgColor = settings.find(
    (setting) => setting.feature === 'blogBgColor'
  );

  const aboutContent = sections.find((section) => section.name === 'about');
  const servicesContent = sections.find(
    (section) => section.name === 'services'
  );
  const blogContent = sections.find((section) => section.name === 'blog');

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

  console.log('footerLinksColor', footerLinksColor);

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
          --bodyBgColor: ${bodyBgColor.value};
          --aboutBgColor: ${aboutBgColor.value};
          --servicesBgColor: ${servicesBgColor.value};
          --blogBgColor: ${blogBgColor.value};
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
      <Nav settings={settings} />
      <Hero settings={settings} />
      <About aboutContent={aboutContent} />
      <Services servicesContent={servicesContent} />
      <Blog posts={posts} blogContent={blogContent} />
      <Clinics clinics={clinics} />
      <Footer settings={settings} />
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
