// import Nav from '@/common/Nav';
import Head from 'next/head';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="min-h-full">
        <Head>
          <link rel="icon" type="image/png" href="/favicon.png"></link>
        </Head>

        {/* <Nav /> */}

        <main>{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
