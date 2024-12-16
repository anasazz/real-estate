// pages/About.js
import React from 'react';
import Card from './HistoireCard';

{/* eslint-disable-next-line react/no-unescaped-entities */}

export default function About() {
  const cardListItems1 = [
    'Etudes techniques',
    'Etudes économiques',
    'Analyses environnementales',
    'Suivi des travaux d\'exécution',
    'Ordonnancement Pilotage et Coordination (OPC)',
    'Management de la qualité',

  ];
  const cardListItems = [


    'Assistance à l’exploitation et à la maintenance',
    'Planification, Préparation des projets',
    'Préparation des termes de références',
    'Assistance pour l’évaluation des offres et la sélection des entreprises',
    'Suivi et pilotage des études et des investigations',
    'Assistance tout au long de la vie des projets'
  ];

  return (
    <div id="about-container" className="relative p-6 mb-8 bg-gray-50 dark:bg-slate-800">
      <div className="flex justify-center items-center">
        <button className="mt-24 bg-green-200 hover:bg-green-600 px-6 py-2 rounded-3xl text-green-600 hover:text-white h-10  font-semibold text-sm uppercase cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
          Notre MISSION
        </button>
      </div>

      <div className="relative mt-16">
        <div className="flex flex-col justify-center items-center">
          <p className="text-9xl sm:text-10xl text-blue-700 opacity-10 font-extrabold text-center z-0 absolute top-0 left-0 w-full dark:text-white">
            NOTRE MISSION
          </p>
          <p className="text-2xl text-blue-900 font-semibold text-center z-20 relative mt-16 dark:text-gray-300">
            Basé à Rabat, le BET CEP est un bureau d'études techniques pluridisciplinaire.
          </p>
          <p className="text-xl text-blue-700 font-medium text-center z-20 relative mt-8 dark:text-gray-300">
            Le BET CEP intervient sur les projets du génie civil, des bâtiments, de transport et d’hydraulique.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-16 space-x-10">
        <Card
          title="Nos Missions"
          description="Le BET CEP assure les missions de la maîtrise d’œuvre, y compris les études techniques, les études économiques, les analyses environnementales, et le suivi des travaux d'exécution."
        />
        <Card
          title="Nos Services"
          description="Nous offrons des services comme l'ordonnancement, le pilotage et la coordination (OPC), la gestion de la qualité, ainsi que l'assistance à l’exploitation et à la maintenance."
        />
   
      </div>
      <br/>
      <Card
          title="Département études :"
          listItems={cardListItems1}
        />


<Card
          title="Département gestion de projets :"
          listItems={cardListItems}
        />


  

 
    </div>
  );
}
