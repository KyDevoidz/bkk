import Image from "next/image";
import React from "react";

/**
 * Komponen WhyChooseCard.
 *
 * Komponen ini digunakan untuk menampilkan card yang berisi gambar, judul, deskripsi, dan tombol.
 *
 * @param {string} image - Gambar yang akan ditampilkan.
 * @param {string} title - Judul yang akan ditampilkan.
 * @param {string} linkText - Teks yang akan ditampilkan di tombol.
 * @param {string} description - Deskripsi yang akan ditampilkan.
 * @returns {JSX.Element} Komponen WhyChooseCard.
 */
const WhyChooseCard = ({ image, title, linkText, description }) => {
  return (
    <div className="bg-white border rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out min-h-[350px] flex flex-col justify-between">
      {/* Image */}
      <div className="flex justify-center items-center mb-4">
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      {/* Title */}
      <h1 className="text-center text-lg font-semibold text-gray-800 ">
        {title}
      </h1>
      {/* Description */}
      <p className="text-center text-gray-600 font-medium text-sm ">
        {description}
      </p>
      {/* Button */}
      <div className="flex justify-center">
        <button className="text-white bg-blue-600 p-2 px-4 rounded-full font-semibold hover:bg-blue-900 transition-all duration-300 text-xs">
          {linkText}
        </button>
      </div>
    </div>
  );
};

export default WhyChooseCard;
