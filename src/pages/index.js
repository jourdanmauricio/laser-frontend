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
  sections,
  testimonials,
}) {
  //  HERO
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

  const buttonHero = settings.filter((setting) => setting.type === 'heroBtn');
  const heroBtn = buttonHero.reduce(
    (obj, cur) => ({ ...obj, [cur.feature]: cur }),
    {}
  );

  // ABOUT
  const aboutBgColor = settings.find(
    (setting) => setting.feature === 'aboutBgColor'
  );
  const aboutContent = sections.find((section) => section.name === 'about');

  // SERVICES
  const servicesBgColor = settings.find(
    (setting) => setting.feature === 'servicesBgColor'
  );
  const servicesTextColor = settings.find(
    (setting) => setting.feature === 'servicesTextColor'
  );
  const servicesContent = sections.find(
    (section) => section.name === 'services'
  );

  // ENTRADAS
  const blogBgColor = settings.find(
    (setting) => setting.feature === 'blogBgColor'
  );
  const blogTextColor = settings.find(
    (setting) => setting.feature === 'blogTextColor'
  );
  const blogContent = sections.find((section) => section.name === 'blog');

  // CONSULTORIOS
  const clinicBgColor = settings.find(
    (setting) => setting.feature === 'clinicBgColor'
  );
  const clinicContent = sections.find((section) => section.name === 'clinic');

  // TESTIMONIALS
  const testimonialsBgColor = settings.find(
    (setting) => setting.feature === 'testimonialsBgColor'
  );
  const testimonialsTextColor = settings.find(
    (setting) => setting.feature === 'testimonialsTextColor'
  );

  const testimonialsContent = sections.find(
    (section) => section.name === 'testimonials'
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

  // CLINICBTN
  const butonclinic = settings.filter(
    (setting) => setting.type === 'clinicBtn'
  );
  const clinicBtn = butonclinic.reduce(
    (obj, cur) => ({ ...obj, [cur.feature]: cur }),
    {}
  );

  const clinicTextColor = settings.find(
    (setting) => setting.feature === 'clinicTextColor'
  );

  // BLOGBTN
  const butonBlog = settings.filter((setting) => setting.type === 'blogBtn');
  const blogBtn = butonBlog.reduce(
    (obj, cur) => ({ ...obj, [cur.feature]: cur }),
    {}
  );

  // METADATA
  const meta_title = settings.find(
    (setting) => setting.feature === 'meta_title'
  );

  const meta_description = settings.find(
    (setting) => setting.feature === ' meta_description'
  );

  const meta_canonical = settings.find(
    (setting) => setting.feature === ' meta_canonical'
  );

  const meta_url = settings.find((setting) => setting.feature === ' meta_url');

  return (
    <>
      <style jsx global>{`
        :root {
          // Hero
          --heroTop: ${heroTop.value};
          --heroOpacity: ${heroOpacity.value};
          --heroBtnTlRadius: ${heroBtn.tlRadius.value};
          --heroBtnTrRadius: ${heroBtn.trRadius.value};
          --heroBtnBlRadius: ${heroBtn.blRadius.value};
          --heroBtnBrRadius: ${heroBtn.brRadius.value};
          --heroBtnBorder: ${heroBtn.border.value};
          --heroBtnWidth: ${heroBtn.width.value};
          --heroBtnHeight: ${heroBtn.height.value};
          --heroBtnTextColor: ${heroBtn.textColor.value};
          --heroBtnBgColor: ${heroBtn.bgColor.value};
          --heroBtnBorderColor: ${heroBtn.borderColor.value};
          --heroBtnShadow: ${heroBtn.shadow.value};
          --heroBtnTextColorHover: ${heroBtn.textColorHover.value};
          --heroBtnBgColorHover: ${heroBtn.bgColorHover.value};
          --heroBtnBorderColorHover: ${heroBtn.borderColorHover.value};
          // Menu
          --navBgColor: ${navBgColor.value};
          --navTextColor: ${navTextColor.value};
          --navHoverColor: ${navHoverColor.value};
          --navCurrentPageColor: ${navCurrentPageColor.value};
          --bodyBgColor: ${bodyBgColor.value};
          // About
          --aboutBgColor: ${aboutBgColor.value};
          // Service
          --servicesBgColor: ${servicesBgColor.value};
          --servicesTextColor: ${servicesTextColor.value};
          // Entradas
          --blogBgColor: ${blogBgColor.value};
          --blogTextColor: ${blogTextColor.value};
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

          // Consultorios
          --clinicBgColor: ${clinicBgColor.value};
          --clinicTextColor: ${clinicTextColor.value};
          --clinicBtnTlRadius: ${clinicBtn.tlRadius.value};
          --clinicBtnTrRadius: ${clinicBtn.trRadius.value};
          --clinicBtnBlRadius: ${clinicBtn.blRadius.value};
          --clinicBtnBrRadius: ${clinicBtn.brRadius.value};
          --clinicBtnBorder: ${clinicBtn.border.value};
          --clinicBtnWidth: ${clinicBtn.width.value};
          --clinicBtnHeight: ${clinicBtn.height.value};
          --clinicBtnTextColor: ${clinicBtn.textColor.value};
          --clinicBtnBgColor: ${clinicBtn.bgColor.value};
          --clinicBtnBorderColor: ${clinicBtn.borderColor.value};
          --clinicBtnShadow: ${clinicBtn.shadow.value};
          --clinicBtnTextColorHover: ${clinicBtn.textColorHover.value};
          --clinicBtnBgColorHover: ${clinicBtn.bgColorHover.value};
          --clinicBtnBorderColorHover: ${clinicBtn.borderColorHover.value};

          // testimonials
          --testimonialsBgColor: ${testimonialsBgColor.value};
          --testimonialsTextColor: ${testimonialsTextColor.value};

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
        title={meta_title?.value}
        description={meta_description?.value}
        canonical={meta_canonical?.value}
        openGraph={{
          type: 'website',
          url: `${meta_url?.value}`,
          images: [
            {
              url: `${heroImage?.value}`,
              width: 800,
              height: 600,
              alt: 'Doctora Laura Rodriguez',
            },
          ],
        }}
      />
      <Nav settings={settings} />
      <Hero settings={settings} heroBtn={heroBtn} />
      <About settings={settings} aboutContent={aboutContent} />
      <Services settings={settings} servicesContent={servicesContent} />
      <Blog
        settings={settings}
        blogBtn={blogBtn}
        posts={posts}
        blogContent={blogContent}
      />
      <Clinics
        settings={settings}
        clinicBtn={clinicBtn}
        clinics={clinics}
        clinicContent={clinicContent}
      />
      <Testimonials
        settings={settings}
        testimonials={testimonials}
        testimonialsContent={testimonialsContent}
      />
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
        sections: responseSections.data,
        testimonials,
      },
    };
  } catch (error) {
    console.log('ERROR', error);
  }
}
