import React from 'react';

export default function Card({
  title,
  description,
  listItems,
  cardClass,
}) {
  return (
    <div
      className={`bg-white py-12 px-8   flex flex-col justify-center items-center rounded-xl shadow-lg mb-8 dark:bg-slate-700 transition duration-300 transform hover:scale-105 ${cardClass}`}
    >
      {/* Card Title */}
      <p className="font-semibold text-2xl text-blue-800 capitalize dark:text-gray-100 mb-4">
        {title}
      </p>

      {/* Description Text */}
      {description && (
        <p className="text-sm leading-7 text-center text-blue-600 dark:text-white mt-4">
          {description}
        </p>
      )}

      {/* List Items as Badges in Row */}
      {listItems && (
        <div className="flex flex-row  mt-4  justify-center">
          {listItems.map((item, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white py-1 mx-1 rounded-md px-2 text-xs font-medium hover:bg-blue-700 transition duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
