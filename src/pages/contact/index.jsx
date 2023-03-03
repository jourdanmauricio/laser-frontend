import axios from 'axios';
import Nav from '../../common/Nav';

const Contact = ({ settings }) => {
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
      <div className="bg-blue-100 h-40 flex flex-col justify-center items-center">
        <h1 className="text-slate-800">Contacto</h1>
      </div>
    </>
  );
};

export default Contact;

export async function getStaticProps() {
  try {
    const API_POSTS = `${process.env.NEXT_PUBLIC_API_BACKEND}/posts`;
    const responsePosts = await axios(API_POSTS);

    const posts = responsePosts.data.sort((a, b) => b.order - a.order);

    const API_SETTINGS = `${process.env.NEXT_PUBLIC_API_BACKEND}/settings`;
    const responseSettings = await axios(API_SETTINGS);

    // console.log('POSTS BLOG getStaticProps', posts);

    return {
      props: {
        settings: responseSettings.data,
      },
    };
  } catch (error) {
    console.log('ERROR', error);
  }
}
