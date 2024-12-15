import Image from 'next/image';
import React from 'react';
import apartmentIcon from '../assets/icons/apartment.png';
import officeIcon from '../assets/icons/office.png';
import houseIcon from '../assets/icons/house.png';
import warehouseIcon from '../assets/icons/warehouse.png';
import parkingIcon from '../assets/icons/parking.png';
import Link from 'next/link';

const Services = () => {
  return (
    <div id="services" className="relative p-4 mb-4">
      <div className="flex justify-center items-center">
        <button className="relative mt-24 bg-blue-200 hover:bg-blue-600 px-4 py-1 rounded-2xl text-blue-500 hover:text-white h-8 w-28 font-black text-xs uppercase cursor-pointer ">
          services
        </button>
      </div>
      <div className="relative ">
        <div className="flex flex-col justify-center items-center mt-20">
          <p className=" text-8xl sm:text-10xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase  dark:text-white">
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


      {/* 5 icons and names of services */}
      <div className="grid grid-cols-2 sm:flex justify-center items-center mt-16 ml-[40px]">
        <div className="flex flex-col justify-center items-center mr-[30px] sm:mr-[60px] sm:ml-[50px] hover:scale-125 ease-in duration-200">
          <div className="bg-white h-[120px] w-[120px] mr-[30px] flex flex-col justify-center items-center rounded-[120px]   p-[10px] gap-[10px] mb-5 dark:bg-gray-700">
            <Image src={houseIcon} alt="maison" className="w-11 h-10" />
            <p className="font-bold text-sm leading-6  text-center text-blueCardTitle dark:text-gray-200 ">
              Ordonnancement
            </p>
          </div>
        </div>

        <div className="flex flex-col mr-[60px] hover:scale-125  ease-in duration-200">
          <div className="bg-white h-[120px] w-[120px] mr-[30px] flex flex-col justify-center items-center rounded-[120px]   p-[10px] gap-[10px] mb-5 dark:bg-gray-700">
            <Image
              src={apartmentIcon}
              alt="appartement"
              className="w-[45px] h-[45px]"
            />
            <p className="font-bold text-xs leading-6  text-center text-blueCardTitle dark:text-gray-200 ">
              Pilotage
            </p>
          </div>
        </div>

        <div className="flex flex-col  mr-[60px] hover:scale-125  ease-in duration-200">
          <div className="bg-white h-[120px] w-[120px] sm:w-[166px] mr-[30px] flex flex-col justify-center items-center rounded-[120px]   p-[10px] gap-[10px] mb-5 dark:bg-gray-700">
            <Image src={officeIcon} alt="bureau" className="w-10 h-10" />
            <p className="font-bold text-xs leading-6  text-center text-blueCardTitle dark:text-gray-200 ">
              Coordination (OPC)
            </p>
          </div>
        </div>

        <div className="flex flex-col  mr-[60px] hover:scale-125  ease-in duration-200">
          <div className="bg-white h-[120px] w-[120px] mr-[30px] flex flex-col justify-center items-center rounded-[120px]   p-[10px] gap-[10px] mb-5 dark:bg-gray-700">
            <Image src={warehouseIcon} alt="entrepôt" className="w-10 h-10" />
            <p className="font-bold text-xs leading-6  text-center text-blueCardTitle dark:text-gray-200 ">
              Gestion 
            </p>
          </div>
        </div>

        <div className="flex flex-col  mr-[60px] hover:scale-125  ease-in duration-200">
          <div className="bg-white h-[120px] w-[120px] mr-[30px] flex flex-col justify-center items-center rounded-[120px]   p-[10px] gap-[10px] mb-5 dark:bg-gray-700">
            <Image src={parkingIcon} alt="stationnement" className="w-[26px] h-11" />
            <p className="font-bold text-xs leading-6  text-center text-blueCardTitle dark:text-gray-200 ">
              Assistance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
