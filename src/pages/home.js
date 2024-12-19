import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import About from '../components/about';
import Deals from '../components/deals';
import Services from '../components/services';
import Review from '../components/review';
import Insta from '../components/insta';
import Form from '../components/form';
import scrollIcon from '../assets/icons/topArrowIcon.png';

import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Mot from '@/components/Mot';

const HomePage = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>BETCEP Capitale Etudes Projets - Ingénieur d'études</title>
        <meta name="description" content="Betcep.ma génie civile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="dark:bg-bgDark">
        <Hero
          address="
Avenue Hassan II 
Rabat 10060  MA
"
          phone="+212 662 441 303 - +212 651 680 188"
          email="Contact.betcep@gmail.com"
        />

        <About
          cardTitle1="15 years"
          cardSubText1="in business"
          cardTitle2="$1 billion"
          cardSubText2="property brokered"
          cardTitle3="10,000"
          cardSubText3="transactions"
        />
        <Services />
        <Mot />
        {/* <Deals /> */}
        <Review />
        <Insta />
        <Form />
        <Footer />
        {showButton && (
          <div className="fixed bottom-24 right-10 z-50">
            <button
              onClick={handleScrollToTop}
              className="bg-slate-100 rounded shadow-xl overflow-visible"
            >
              <Image src={scrollIcon} alt="scroll button" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
