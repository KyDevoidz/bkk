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
const WhyChooseCard = ({ image, title, description }) => {
  return (
    <div className="bg-white border rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out min-h-[295px] flex flex-col  mx-11">
      {/* Image */}
      <div className="flex justify-center items-center mb-12">
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
        {title} <br />
        <p className="text-center text-gray-600 font-medium text-sm ">
          {description}
        </p>
      </h1>
      {/* Description */}
    </div>
  );
};

export default WhyChooseCard;
