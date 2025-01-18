import React from "react";
import WhyChooseCard from "./WhyChooseCard";
import { cardDatas } from "@/constant/Constant";

/**
 * Komponen WhyChoose.
 *
 * Komponen ini menampilkan bagian "Mengapa Memilih Bursa Kerja Ini" pada halaman.
 * Terdiri dari judul utama dan grid kartu yang dihasilkan dari data dalam `cardDatas`.
 * Setiap kartu berisi gambar, judul, deskripsi, dan teks tautan.
 *
 * @return {JSX.Element} Komponen WhyChoose yang di-render.
 */

const WhyChoose = () => {
  return (
    <div className="py-16">
      <h1 className="mt-6 text-xl sm:text-2xl px-14  md:text-3xl capitalize font-bold text-center">
        Mengapa Memilih Bursa Kerja Ini
      </h1>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {cardDatas.map((data) => {
          return (
            <div key={data.id}>
              <WhyChooseCard
                title={data.title}
                linkText={data.linkText}
                description={data.description}
                image={data.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChoose;
