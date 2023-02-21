import axios from 'axios';
import About from '../components/About';
import Contact from '../components/contact/Contact';
import Lessons from '../components/Lessons';
import Services from '../components/Services';
import Footer from '../common/footer/Footer';

import { Inter } from '@next/font/google';
import Blog from '../components/Blog';
import Hero from '../components/Hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ posts }) {
  return (
    <>
      <Hero />
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Lessons lessons={lessons} /> */}
      {/* <Contact /> */}
      {/* <Footer contact={contact} socialMedia={socialMedia} /> */}
      <Blog posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const API_POSTS = `${process.env.NEXT_PUBLIC_API_BACKEND}/posts`;
    const responsePosts = await axios(API_POSTS);

    const posts = responsePosts.data
      .sort((a, b) => b.order - a.order)
      .filter((post) => post.main === true);

    return {
      props: {
        posts: posts,
      },
    };
  } catch (error) {
    console.log('ERROR', error);
  }
}
