import Image from 'next/image';
import React from 'react';
import heroBg from '../assets/images/heroBackground.jpg';
import arrowIcon from '../assets/icons/arrow.png';
import phoneIcon from '../assets/icons/contact.png';
import mailIcon from '../assets/icons/mail.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = ({ address, phone, email }) => {
  // List of texts to cycle through (changing part)
  const texts = [
    "Etudes techniques",
    "Etudes économiques",
    "Analyses environnementales",
    "Suivi des travaux d'exécution",
    "Ordonnancement Pilotage et Coordination (OPC)",
    "Management de la qualité",
    "Assistance à l’exploitation et à la maintenance",
    "Planification des projets",
    "Préparation des termes de références",
    "Assistance pour l’évaluation des offres",
    "Suivi et pilotage des études",
    "Assistance tout au long de la vie des projets"
  ];

  const showMoreBtn = () => {
    document
      .getElementById('about-container')
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="flex flex-col  items-center  w-full h-screen bg-black">
      <Image
        src={heroBg}
        alt="background image"
        fill
        className="w-full h-screen opacity-70 bg-no-repeat rounded-b-4xl object-cover object-center"
      />
      <div className="w-2/3 h-screen  relative">
        <div className="relative h-screen text-center flex flex-col justify-center items-center">
          <button className="hidden lg:block bg-blue-600 hover:bg-blue-500 px-2 py-1 rounded-2xl text-white h-8 w-28 font-bold text-xs uppercase cursor-pointer">
            BetCep.ma
          </button>
{/* 
          <h1             className="font-extrabold text-6xl lg:text-7xl text-center mt-16 lg:mt-24 text-white capitalize"
          >
            On peut <span className="text-blue-600">...</span>
          </h1> */}

          <TypeAnimation
            sequence={[
              texts[0], // Type the first text
              3000, // wait 1s before replacing
              texts[1], // Type the second text
              3000,
              texts[2],
              3000,
              texts[3],
              3000,
              texts[4],
              3000,
              texts[5],
              3000,
              texts[6],
              3000,
              texts[7],
              3000,
              texts[8],
              3000,
              texts[9],
              3000,
              texts[10],
              3000,
              texts[11],
              3000,
            ]}
            wrapper="span"
            speed={40}
            style={{ fontSize: '5em', fontWeight:'bolder', display: 'inline-block' , }}
            className="font-normal text-6xl lg:text-7xl text-center mt-16 lg:mt-24 text-white capitalize "
            repeat={Infinity}
            deleteSpeed={25}  // Speed of deletion (faster deletion of words)
          />
          
          {/* Icons and Text under Heading */}
          {/* <div className="hidden sm:flex mt-24 justify-center items-center">
            <div className="flex mr-8 lg:mr-16">
              <Image
                src={arrowIcon}
                alt="arrow icon"
                className="w-5 h-5 mx-3 self-center"
              />
              <p className="text-white text-xl py-2">{address}</p>
            </div>

            <div className="flex mx-10">
              <Image
                src={phoneIcon}
                alt="phone icon"
                className="w-5 h-5 mx-3 self-center"
              />
              <p className="text-white text-xl py-2">{phone}</p>
            </div>

            <div className="flex ml-8">
              <Image
                src={mailIcon}
                alt="mail icon"
                className="w-5 h-5 mx-3 self-center"
              />
              <p className="text-white text-xl py-2">{email}</p>
            </div>
          </div> */}

          {/* Show more button */}
          <div className="absolute bottom-8 w-full text-center">
            <button
              onClick={showMoreBtn}
              className="text-blue-900 text-xl capitalize shadow-lg bg-white hover:bg-blue-500 hover:text-white px-4 py-2 rounded-3xl h-14 w-36"
            >
              plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
