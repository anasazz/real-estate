import React from 'react';
import Image from 'next/image';
import userImg2 from '../assets/images/director.jpeg'
import Link from 'next/link';

const Mot = () => {
  return (
    <div id="mot" className="relative p-4 mb-4  mx-auto items-center  ">
      <div className="flex justify-center items-center p-3">
        <button className="mt-[90px] mb-4 bg-blue-200 hover:bg-blue-600 px-4 py-1 rounded-2xl text-blue-500 hover:text-white h-8 font-black text-xs uppercase cursor-pointer">
          Mot du Directeur
        </button>
      </div>
      
      {/* Director's Message Card */}
      <div className="flex items-center flex-col mb-5">
        <div className="w-2/3  flex items-start p-[30px] gap-[15px] bg-white dark:bg-slate-700 shadow-md rounded-[10px] ml-[30px]">
          <p className="font-semibold text-[15px] leading-[25px] text-bluePText dark:text-white">
            Le Bureau d’Études Techniques CEP, basé à Rabat et opérant sur l’ensemble des régions du Royaume, est spécialisé dans les domaines du génie civil, des bâtiments, des transports et de l’hydraulique. Grâce à notre expertise approfondie et à notre engagement sans faille envers l’excellence, BET CEP relève les défis les plus complexes pour concrétiser des projets ambitieux et remarquables. Notre équipe, forte d’une vaste expérience dans le secteur, vous offre des services professionnels et fiables couvrant : 
            <br/>
            • Les études techniques approfondies, 
            <br/>
            • Le suivi des travaux d’exécution,<br/> 
            • L’ordonnancement, pilotage et coordination (OPC), <br/>
            • Le management de la qualité, <br/>
            • La planification des projets, <br/>
            • La préparation des termes de référence, <br/>
            • L’assistance continue au maître d’ouvrage tout au long du projet.<br/>
          </p>
        </div>

        <Link target="_blank" href="https://www.linkedin.com/in/mohamed-bensmail-62250414b/" passHref>
  <div className="flex items-start gap-5 h-[50px] mt-[30px]">
    <Image
      src={userImg2} // Ensure this points to the correct image file
      alt="Directeur"
      className="w-[50px] h-[50px] bg-[#E62E7B4D] rounded-full ml-12"
    />
    <div className="flex flex-col justify-center items-start">
      <p className="font-bold text-sm leading-[30px] text-cardText capitalize dark:text-white">
        M. Mohamed BENSMAIL
      </p>
      <p className="font-semibold text-xs text-blueCardSubTitle leading-5">
        Directeur, Bureau d'Études Techniques CEP
      </p>
    </div>
  </div>
</Link>
      </div>
    </div>
  );
};

export default Mot;
