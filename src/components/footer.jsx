import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import logoImg from '../../src/assets/images/logo.png'; // Ensure you have the correct path for the logo image
import linkedInLogo from '../../src/assets/images/linkedin.png'; // Make sure you have the LinkedIn logo

const Footer = () => {
  const footerLinks = [
    { label: 'Accueil', href: '#' },
    { label: 'Nos missions', href: '#missions' },
    { label: 'Nos Projets', href: '#projets' },
    { label: 'Références', href: '#references' },
    { label: 'Agréments', href: '#agrements' },
    { label: 'Ressources humaines', href: '#resources' },
    { label: 'Contactez-nous', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-[1240px] mx-auto px-5">
        {/* Logo Section */}
        <div className="flex justify-center mb-4">
          <Link href="/">
            <Image src={logoImg} alt="Company Logo" className="h-16 w-auto" />
          </Link>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center mb-6">
          {footerLinks.map((link, index) => (
            <div key={index} className="px-4 py-2">
              <Link href={link.href}>
                <span className="text-sm text-gray-300 hover:text-blue-500 cursor-pointer">{link.label}</span>
              </Link>
            </div>
          ))}
        </div>

     {/* Contact Information */}
     <div className="bg-gray-700 py-6 mb-6">
  <h3 className="text-xl font-semibold text-center text-gray-100 mb-4">Contactez-nous</h3>
  
  <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-x-8 sm:space-y-0">
    {/* Phone */}
    <div className="flex items-center space-x-2">
      <span className="text-xl text-gray-300">📞</span>
      <a href="tel:+212662441303" className="text-sm text-gray-300 hover:text-blue-500">
        +212662441303
      </a>
    </div>
    
    {/* Email */}
    <div className="flex items-center space-x-2">
      <span className="text-xl text-gray-300">✉️</span>
      <a href="mailto:Contact.betcep@gmail.com" className="text-sm text-gray-300 hover:text-blue-500">
        Contact.betcep@gmail.com
      </a>
    </div>
    
    {/* Address */}
    <div className="flex items-center space-x-2">
      <span className="text-xl text-gray-300">🏢</span>
      <p className="text-sm text-gray-300">Avenue Hassan II Rabat 10060 MA</p>
    </div>
  </div>
</div>


        {/* Footer Bottom Section */}
        <div className="flex justify-between items-center border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} - Betcep.ma. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            {/* Social Media Links - Add relevant social icons */}
            <Link target='_blank' href="https://www.linkedin.com/company/bet-capitale-etudes-projets-cep/">
              <Image src={linkedInLogo} alt="LinkedIn Logo" className="h-10 w-40 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
