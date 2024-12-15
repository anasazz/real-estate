import Image from 'next/image';
import React, { useState } from 'react';
import usernameIcon from '../assets/icons/Icon.png';
import callIcon from '../assets/icons/callIcon.png';
import emailIcon from '../assets/icons/email.png';
import messageIcon from '../assets/icons/message.png';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  firstName: yup.string().required('Le prénom est requis'),
  lastName: yup.string().required('Le nom est requis'),
  email: yup.string().email('Email invalide').required('L\'email est requis'),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]*$/, 'Numéro de téléphone invalide, veuillez entrer uniquement des chiffres')
    .required('Le numéro de téléphone est requis'),
  message: yup.string().required('Le message est requis'),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      console.log(data);
      toast.success('Formulaire soumis avec succès!');
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="contact" className="relative p-4 mb-4">
      <div className="flex justify-center items-center  p-3">
        <button className="mt-[90px] mb-4 bg-orange-200 hover:bg-orange-600 px-4 py-1 rounded-2xl text-orange-500 hover:text-white h-8 w-28 font-black text-xs uppercase cursor-pointer ">
          Contacts
        </button>
      </div>
      <div className="relative ">
        <div className="flex flex-col justify-center items-center">
          <p className=" text-8xl  sm:text-10xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase dark:text-white">
            Contacts
          </p>
          <p className="text-4xl text-blue-900 font-bold text-center z-20 relative capitalize mt-7 sm:mt-14 dark:text-gray-300">
            Contactez-nous maintenant
          </p>
        </div>
      </div>
      <div className="relative justify-center items-center">
  <p className="font-medium text-base text-center mt-20 mb-10 text-bluePText">
    Nous avons conçu une approche intégrée pour vous accompagner tout au long de vos projets, en vous offrant des solutions optimisées et une expertise technique. <br />
    Grâce à notre savoir-faire, vous pouvez compter sur nous pour gérer efficacement vos études, suivre l'avancement des travaux, et bien plus encore. <br />
    <strong>Contactez-nous</strong> dès maintenant pour discuter de vos projets et découvrir comment nous pouvons vous aider à les concrétiser.
  </p>
</div>



      {/* FORM */}

      <div className=" sm:flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="sm:flex flex-col justify-center items-center gap-[30px] p-0 w-[670px] h-full ">
            {/* 1st row */}
            <div className="sm:flex items-start p-0 gap-[30px] w-full h-[60px] relative">
              <div className="flex flex-col">
                <label className="relative">
                  <input
                    {...register('firstName')}
                    name="firstName"
                    placeholder="Prénom"
                    className="flex justify-between items-center rounded-xl py-[15px] px-[30px] shadow-md sm:w-[320px] h-[60px] capitalize mb-5 sm:mb-0 dark:bg-gray-600"
                  />
                  <Image
                    src={usernameIcon}
                    alt="Icône prénom"
                    className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2"
                  />
                </label>
                {errors.firstName && (
                  <span className=" text-red-500 text-xs text-center mt-1">
                    requis
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label className="relative">
                  <input
                    {...register('lastName')}
                    name="lastName"
                    placeholder="Nom"
                    className="flex justify-between items-center  rounded-xl py-[15px] px-[30px] shadow-md sm:w-[320px] h-[60px] capitalize mb-5 sm:mb-0 dark:bg-gray-600"
                  />
                  <Image
                    src={usernameIcon}
                    alt="Icône nom"
                    className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2"
                  />
                </label>
                {errors.lastName && (
                  <span className="text-red-500 text-xs mt-1 text-center">
                    requis
                  </span>
                )}
              </div>
            </div>

            {/* 2nd row */}
            <div className="sm:flex items-start p-0 gap-[30px] w-full h-[60px] relative mt-36 sm:mt-0">
              <div className="flex flex-col">
                <label className="relative ">
                  <input
                    {...register('email')}
                    name="email"
                    placeholder="Adresse e-mail"
                    className="flex justify-between items-center  rounded-xl py-[15px] px-[30px] shadow-md sm:w-[320px] h-[60px] capitalize  mb-5  sm:mb-0 dark:bg-gray-600"
                  />
                  <Image
                    src={emailIcon}
                    alt="Icône email"
                    className="w-5 h-4 absolute right-5 top-1/2 transform -translate-y-1/2"
                  />
                </label>
                {errors.email && (
                  <span className="text-red-500 text-xs text-center">
                    requis
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label className="relative">
                  <input
                    {...register('phoneNumber')}
                    name="phoneNumber"
                    placeholder="Numéro de téléphone"
                    className="flex justify-between items-center  rounded-xl py-[15px] px-[30px] shadow-md sm:w-[320px] h-[60px] mb-5  sm:mb-0 dark:bg-gray-600"
                  />
                  <Image
                    src={callIcon}
                    alt="Icône téléphone"
                    className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2"
                  />
                </label>
                {errors.phoneNumber && (
                  <span className="text-red-500 text-xs text-center">
                    requis
                  </span>
                )}
              </div>
            </div>

            {/* 3rd row  */}

            <div className="sm:flex justify-between items-center p-0 gap-[10px] w-full h-[60px] relative mt-36 sm:mt-0">
              <div className="flex flex-col">
                <label className="relative">
                  <input
                    {...register('message')}
                    name="message"
                    placeholder="Votre message"
                    className="flex justify-between items-center  rounded-xl py-[15px] px-[30px] shadow-md sm:w-[670px] h-[60px] overflow-ellipsis overflow-hidden dark:bg-gray-600"
                  />
                  <Image
                    src={messageIcon}
                    alt="Message"
                    className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2"
                  />
                </label>
                {errors.message && (
                  <span className="text-red-500 text-xs text-center">
                    requis
                  </span>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="flex justify-center items-center py-[15px] px-[35px] bg-[#3361FF] hover:bg-[#11266e] rounded-[30px] capitalize text-white mt-7 sm:mt-0"
            >
              Envoyer la demande
            </button>
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
