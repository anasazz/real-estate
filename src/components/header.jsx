
//   Accueil
// Nos missions
// Nos Projets
// Références
// Agréments
// Ressources humaines
// Contactez-nous


import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import logoImg from '../../src/assets/images/logo.png';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ThemeChanger from './themeChanger';

const Header = () => {
  const [header, setHeader] = useState(false);
  const [headerColor, setHeaderColor] = useState('transparent');
  const [headerText, setHeaderText] = useState('white');

  const navLinks = [
    { label: 'Accueil', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Avis', href: '#avis' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleHeader = () => {
    setHeader(!header);
  };

  const handleMobileHeader = () => {
    setHeader(false);
  };

  useEffect(() => {
    const handleColorChange = () => {
      if (window.scrollY >= 250) {
        setHeaderColor('linear-gradient(to right, white, lightblue)');
        setHeaderText('#333');
      } else {
        setHeaderColor('transparent');
        setHeaderText('#ffffff');
      }
    };
    window.addEventListener('scroll', handleColorChange);
  }, []);

  return (
    <div
      style={{ background: `${headerColor}` }}
      className=" fixed top-0 left-0 w-full py-2 flex justify-between items-center z-40 ease-in duration-300"
    >
      {/* Menu + Name */}
      <div className="max-w-[1240px] mx-5 flex justify-between items-center">
        <Link href="/">
        <Image src={logoImg} className='h-20 w-40'  />
        
        </Link>
      </div>

      {/* Search */}
      {/* <div className=" hidden sm:flex">
        <Image src={searchIcon} alt="Search" className="w-4 h-4 self-center" />
        <input
          type="text"
          placeholder="Search"
          maxLength="20"
          className="w-40 bg-transparent outline-none placeholder-gray-300 mx-4 py-2 text-white capitalize"
        />
      </div> */}

      {/* Navbar Links */}
      <ul
        style={{ color: `${headerText}` }}
        className="text-sm font-bold hidden sm:flex"
      >
        {navLinks.map((link, index) => (
          <li key={index} className="px-4 hover:text-orange-500">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <p
        style={{ color: `${headerText}` }}
        className="hidden bg-green-500 px-5 py-3 radius-9 sm:flex text-sm font-bold ml-10 mr-5 hover:text-orange-500 cursor-pointer"
      >
      <Link href={'#contact'}>  Nous Contactez</Link>

      
      </p>
      <div className="mr-10">
        <ThemeChanger />
      </div>

      {/* Mobile hamburgerMenu */}
      <div onClick={handleHeader} className="block sm:hidden p-4 z-10">
        {header ? (
          <AiOutlineClose size={30} style={{ color: `${headerText}` }} />
        ) : (
          <AiOutlineMenu size={30} style={{ color: `${headerText}` }} />
        )}
      </div>
      <div
        className={
          header
            ? 'sm:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300'
            : 'sm:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300'
        }
      >
        <ul
          style={{ color: `${headerText}` }}
          className="text-sm font-bold"
        >
          {navLinks.map((link, index) => (
            <li key={index} className="mx-7 py-4 text-4xl hover:text-orange-500">
              <Link href={link.href} onClick={handleMobileHeader}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
