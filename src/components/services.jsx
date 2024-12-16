import Image from 'next/image';
import React from 'react';
import apartmentIcon from '../assets/icons/apartment.png';
import officeIcon from '../assets/icons/office.png';
import houseIcon from '../assets/icons/house.png';
import warehouseIcon from '../assets/icons/warehouse.png';
import parkingIcon from '../assets/icons/parking.png';

const serviceItems = [
  { id: 1, icon: houseIcon, alt: 'maison', title: 'Ordonnancement' },
  { id: 2, icon: houseIcon, alt: 'maison', title: 'ÉTUDE EN BÉTON ARMÉ' },
  { id: 3, icon: houseIcon, alt: 'maison', title: 'ÉTUDE EN CHARPENTE MÉTALLIQUE' },
  { id: 4, icon: houseIcon, alt: 'maison', title: "Assistance à la maitrise d'ouvrage" },
  { id: 5, icon: houseIcon, alt: 'maison', title: 'Coordination et pilotage de chantier' },
  { id: 6, icon: houseIcon, alt: 'maison', title: 'Élaboration des fiches et rapport de suivi' },
  { id: 7, icon: houseIcon, alt: 'maison', title: "Maitrise d'ouvrage déléguée" },
  { id: 8, icon: apartmentIcon, alt: 'appartement', title: 'Pilotage' },
  { id: 9, icon: officeIcon, alt: 'bureau', title: 'Coordination (OPC)' },
  { id: 10, icon: warehouseIcon, alt: 'entrepôt', title: 'Gestion' },
  { id: 11, icon: parkingIcon, alt: 'stationnement', title: 'Assistance' },
];

const Services = () => {
  return (
    <div id="services" className="relative p-4 mb-4">
      {/* Header Section */}
      <div className="flex justify-center items-center">
        <button className="relative mt-24 bg-blue-200 hover:bg-blue-600 px-4 py-1 rounded-2xl text-blue-500 hover:text-white h-8 w-28 font-black text-xs uppercase cursor-pointer">
          services
        </button>
      </div>

      <div className="relative">
        <div className="flex flex-col justify-center items-center mt-20">
          <p className="text-8xl sm:text-10xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase dark:text-white">
            services
          </p>
          <p className="text-4xl text-blue-900 font-bold text-center z-20 relative mt-7 sm:mt-14 dark:text-gray-300">
            Services pour une efficacité maximale
          </p>
        </div>
      </div>

      <div className="relative justify-center items-center">
        <p className="font-medium text-base text-center mt-20 text-bluePText">
          Chez BetCep, nous offrons des solutions personnalisées pour vous aider à optimiser vos projets. Nous nous engageons à fournir des services de qualité pour assurer le bon déroulement de vos opérations, de l'ordonnancement à la maintenance. Notre équipe travaille en étroite collaboration avec vous pour garantir une gestion fluide et efficace à chaque étape.
        </p>
      </div>

      {/* Scrolling Service Items */}
      <div className="overflow-hidden mt-16">
        <div className="flex animate-scroll">
          {/* Duplicate the items to create an infinite loop effect */}
          {[...serviceItems, ...serviceItems].map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center px-6"
            >
              <div className="bg-white h-[120px] w-[120px] flex flex-col justify-center items-center rounded-full p-[10px] gap-[10px] mb-5 dark:bg-gray-700">
                <Image src={service.icon} alt={service.alt} width={40} height={40} />
                <p className="font-bold text-xs leading-6 text-center text-blueCardTitle dark:text-gray-200">
                  {service.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Services;
