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
    { label: 'Projets de référence', href: '#references' },
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
      className="fixed top-0  left-0 w-full py-2 flex justify-between items-center z-40 ease-in duration-300"
    >
      {/* Menu + Name */}
      <div className="max-w-[1240px]  mx-5 flex justify-between items-center">
        <Link href="/">
          <Image src={logoImg} className='h-20  w-40' />
        </Link>
      </div>

      {/* Navbar Links */}
      <ul
        style={{ color: `${headerText}` }}
        className="text-md font-bold hidden sm:flex"
      >
        {navLinks.map((link, index) => (
          <li key={index} 
          className="px-4 text-2xl hover:text-blue-500"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <div className="flex space-x-4">
        {/* Contact Link */}
    
        {/* WhatsApp Link */}
        <a
          href="https://wa.me/+212662441303"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md font-bold ml-10 text-white hover:text-green-500"
        >
          WhatsApp
        </a>
        
        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/bet-capitale-etudes-projets-cep-5b1224262/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md font-bold ml-10 text-white hover:text-blue-500"
        >
          LinkedIn
        </a>
      </div>

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
            <li key={index} className="mx-7 py-4 text-4xl hover:text-blue-500">
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
