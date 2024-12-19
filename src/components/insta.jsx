import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import thumbPdf from '../../public/pdfs/thumb.png';
import instaIcon from '../assets/icons/instaIcon.png';

const AttestationDeReference = () => {
  return (
    <div id='references' className="relative p-4 mb-4">
      <div className="flex justify-center items-center p-3">
        <button className="mb-4 bg-blue-200 hover:bg-blue-600 px-4 py-1 rounded-2xl text-blue-500 hover:text-white h-8 font-black text-xs uppercase cursor-pointer">
          Attestation de Référence
        </button>
      </div>
      <div className="relative">
        <div className="flex flex-col justify-center items-center">
          <p className="text-9xl sm:text-[160px] text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase dark:text-white">
            Attestation de Référence
          </p>
          <p className="text-2xl sm:text-4xl text-blue-900 font-bold text-center z-20 relative capitalize mt-[55px] dark:text-gray-300">
            Cliquez pour voir les attestations de référence{' '}
            <span className="normal-case">#projets</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid sm:grid-cols-4 gap-5 m-5 p-5 mt-20 max-w-[1100px]">
          {/* Clickable PDF Thumbnails */}
          <Link href="/pdfs/AttestationDeReferance1.pdf" target="_blank">
            <Image
              src={thumbPdf}
              alt="Attestation PDF 1"
              className="mx-5 my-3 w-[255px] h-[255px] rounded-lg hover:scale-110 ease-in duration-200 cursor-pointer"
            />
          </Link>
          <Link href="/pdfs/AttestationDeReferance2.pdf" target="_blank">
            <Image
              src={thumbPdf}
              alt="Attestation PDF 2"
              className="mx-5 my-3 w-[255px] h-[255px] rounded-lg hover:scale-110 ease-in duration-200 cursor-pointer"
            />
          </Link>
          <Link href="/pdfs/AttestationDeReferance3.pdf" target="_blank">
            <Image
              src={thumbPdf}
              alt="Attestation PDF 3"
              className="mx-5 my-3 w-[255px] h-[255px] rounded-lg hover:scale-110 ease-in duration-200 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AttestationDeReference;
