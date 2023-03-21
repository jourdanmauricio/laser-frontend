import axios from 'axios';
import Hero from '../components/Hero';
import Blog from '../components/Blog';
import Clinics from '../components/Clinics/Clinics';
import Nav from '../common/Nav';
import About from '../components/About';
import { NextSeo } from 'next-seo';
import Services from '../components/Services/Services';
import Footer from '../common/Footer/Footer';
import Testimonials from '../components/Testimonials';

export default function Home({
  posts,
  clinics,
  settings,
  services,
  testimonials,
}) {
  // LOGO
  const navLogo = settings.filter((setting) => setting.type === 'logo');
  const logo = navLogo.reduce(
    (obj, cur) => ({ ...obj, [cur.feature]: cur }),
    {}
  );

  // BODY
  const bodyBgColor = settings.find(
    (setting) => setting.feature === 'bodyBgColor'
  );

  // // SERVICES
  // const servicesContent = sections.find(
  //   (section) => section.name === 'services'
  // );

  // METADATA
  const dataMeta = settings.filter((setting) => setting.type === 'metadata');
  const metadata = dataMeta.reduce(
    (obj, cur) => ({ ...obj, [cur.feature]: cur }),
    {}
  );

  return (
    <>
      <style jsx global>{`
        :root {
          --bodyBgColor: ${bodyBgColor.value};
        }
      `}</style>
      <NextSeo
        title={metadata.meta_title?.value}
        description={metadata.meta_description?.value}
        canonical={metadata.meta_canonical?.value}
        openGraph={{
          type: 'website',
          url: `${metadata.meta_url?.value}`,
          images: [
            {
              url: `${logo.heroImage?.value}`,
              width: 800,
              height: 600,
              alt: 'Doctora Laura Rodriguez',
            },
          ],
        }}
      />
      <Nav settings={settings} />
      <Hero settings={settings} />
      <About settings={settings} />
      <Services settings={settings} services={services} />
      <Blog settings={settings} posts={posts} />
      <Clinics settings={settings} clinics={clinics} />
      <Testimonials settings={settings} testimonials={testimonials} />
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

    const API_SERVICES = `${process.env.NEXT_PUBLIC_API_BACKEND}/services`;
    const responseServices = await axios(API_SERVICES);

    const API_TESTIMONIALS = `${process.env.NEXT_PUBLIC_API_BACKEND}/testimonials`;
    const responseTestimonials = await axios(API_TESTIMONIALS);

    const posts = responsePosts.data
      .sort((a, b) => b.order - a.order)
      .filter((post) => post.main === true);

    const clinics = responseClinics.data
      .sort((a, b) => a.order - b.order)
      .filter((post) => post.main === true);

    const testimonials = responseTestimonials.data.sort(
      (a, b) => a.order - b.order
    );

    return {
      props: {
        posts: posts,
        clinics,
        settings: responseSettings.data,
        services: responseServices.data,
        testimonials,
      },
    };
  } catch (error) {
    console.log('ERROR', error);
  }
}
