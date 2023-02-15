import axios from 'axios';
import About from '../components/About';
import Contact from '../components/contact/Contact';
import Lessons from '../components/Lessons';
import Services from '../components/Services';
import Footer from '../common/footer/Footer';

import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Lessons lessons={lessons} /> */}
      {/* <Contact /> */}
      {/* <Footer contact={contact} socialMedia={socialMedia} /> */}
    </>
  );
}
