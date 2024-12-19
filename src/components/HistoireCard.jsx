import React from 'react';

export default function Card({
  title,
  description,
  listItems,
  cardClass,
}) {
  return (
    <div
      className={`bg-gradient-to-r from-blue-500 to-teal-500 py-14 px-10 flex flex-col justify-center items-center rounded-xl shadow-2xl mb-8 dark:bg-slate-800 transition-all duration-300 transform hover:scale-105 ${cardClass}`}
    >
      {/* Card Title */}
      <p className="font-extrabold text-3xl text-white capitalize dark:text-gray-100 mb-6">
        {title}
      </p>

      {/* Description Text */}
      {description && (
        <p className="text-lg  leading-7 text-center text-white opacity-80 font-extrabold dark:text-white-300 mt-4">
          {description}
        </p>
      )}

      {/* List Items as Badges in Row */}
      {listItems && (
        <div className="flex flex-row mt-6 justify-center flex-wrap gap-2">
          {listItems.map((item, index) => (
            <span
              key={index}
              className="bg-blue-600  text-white py-2 px-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
