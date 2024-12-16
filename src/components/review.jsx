import Image from 'next/image';
import React from 'react';

import userImg from '../assets/images/user1.png';
import userImg1 from '../assets/images/user2.png';
import userImg2 from '../assets/images/user3.png';

{/* eslint-disable-next-line react/no-unescaped-entities */}

const Review = () => {
  return (
    <div id="avis" className="relative p-4 mb-4">
      <div className="flex justify-center items-center p-3">
        <button className="mt-[90px] mb-4 bg-blue-200 hover:bg-blue-600 px-4 py-1 rounded-2xl text-blue-500 hover:text-white h-8 w-28 font-black text-xs uppercase cursor-pointer ">
          Avis
        </button>
      </div>
      <div className="relative ">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[90px] sm:text-[180px] text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase dark:text-white">
            Avis
          </p>
          <p className="text-4xl text-blue-900 font-bold text-center z-20 relative capitalize mt-10 sm:mt-28 dark:text-gray-300">
            Ce que disent nos clients sur nos solutions énergétiques
          </p>
        </div>
      </div>

      <div className="relative justify-center items-center">
        <p className="font-medium text-base text-center mt-20 text-bluePText">
          &quot;Les solutions énergétiques que nous avons installées ont changé notre façon de consommer l'énergie, 
          <br /> offrant à la fois efficacité et économies, tout en respectant l'environnement.&quot;
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-[60px] ml-[30px]">
   

        <div className="flex flex-col mb-5">
          <div className="w-[350px]  flex items-start p-[30px] gap-[10px] bg-white dark:bg-slate-700 shadow-md rounded-[10px] ml-[30px]">
            <p className="font-semibold text-[13px] leading-[25px] text-bluePText dark:text-white">
            Leur assistance à maîtrise d'ouvrage a été cruciale pour assurer le succès de notre projet.     Leur accompagnement tout au long de la vie du projet, y compris pour la sélection des entreprises et la préparation des termes de référence, a ajouté une valeur considérable à notre projet. Nous les recommandons vivement à toute entreprise souhaitant une gestion de projet efficace et bien menée         </p>
          </div>
          <div className="flex items-start gap-5 w-auto h-[50px] mt-[30px]">
            <Image
              src={userImg1}
              alt="utilisateur"
              className="w-[50px] h-[50px] bg-[#CC74294D] rounded-full ml-12"
            />
            <div className="flex flex-col justify-center items-start">
              <p className="font-bold text-sm leading-[30px] text-cardText capitalize dark:text-white">
                Claire Martin
              </p>
              <p className="font-semibold text-xs text-blueCardSubTitle leading-5">
                Paris, France
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-5">
          <div className="w-[350px]  flex items-start p-[30px] gap-[10px] bg-white dark:bg-slate-700 shadow-md rounded-[10px] ml-[30px]">
            <p className="font-semibold text-[13px] leading-[25px] text-bluePText dark:text-white">
            Leurs études techniques approfondies et analyses économiques nous ont permis de prendre des décisions éclairées et de maximiser nos investissements. Le suivi des travaux d'exécution a été impeccable, avec une coordination parfaite entre les différents intervenants. L'ordonnancement et le pilotage de la qualité ont garanti que chaque étape soit réalisée dans les délais et avec un haut niveau de professionnalisme.</p>
          </div>
          <div className="flex items-start gap-5 w-auto h-[50px] mt-[30px]">
            <Image
              src={userImg2}
              alt="utilisateur"
              className="w-[50px] h-[50px] bg-[#E62E7B4D] rounded-full ml-12"
            />
            <div className="flex flex-col justify-center items-start">
              <p className="font-bold text-sm leading-[30px] text-cardText capitalize dark:text-white">
                Pierre Lefevre
              </p>
              <p className="font-semibold text-xs text-blueCardSubTitle leading-5">
                Marseille, France
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Review;
