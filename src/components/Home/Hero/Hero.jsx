"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

/**
 * Komponen Hero.
 *
 * Komponen ini digunakan untuk menampilkan komponen hero pada halaman
 * utama. Komponen ini terdiri dari 2 bagian yaitu image dan text content.
 * Animasi yang digunakan adalah animasi fade-in dan translate.
 *
 * @return {JSX.Element} Komponen Hero.
 */
const Hero = () => {
  return (
    <div className="w-full pt-[12vh] md:pt-[18vh] min-h-screen bg-[#f7f6fb]">
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Image Content */}
          <motion.div
            className="order-first md:order-2"
            initial={{ opacity: 0, x: 100 }} // Mulai dengan opacity 0 dan posisi ke kanan
            animate={{ opacity: 1, x: 0 }} // Animasi ke opacity 1 dan posisi default
            transition={{ duration: 0.8, ease: "easeInOut" }} // Durasi dan efek transisi
          >
            <Image
              src={"/images/hero.svg"}
              alt={"hero"}
              width={600}
              height={600}
            />
          </motion.div>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Mulai dengan opacity 0 dan posisi ke kiri
            animate={{ opacity: 1, x: 0 }} // Animasi ke opacity 1 dan posisi default
            transition={{ duration: 0.8, ease: "easeInOut" }} // Durasi dan efek transisi
          >
            {/* Top Box */}
            <div className="w-fit py-3 px-4  rounded-full shadow-md flex items-center space-x-3 bg-white border-2">
              <div className="px-3 py-2 md:px-5 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white ">
                News
              </div>
              <p className="text-xs sm:text-sm">
                We have updated our terms & conditions policy
              </p>
            </div>
            {/* Heading */}
            <div className="text-center md:text-left">
              <h1 className="text-2xl sm:text-4xl mt-6 mb-6 font-bold md:leading-[3re0m] lg:leading-[3.5rem]">
                Temukan pekerjaan yang sesuai dengan kebutuhan Anda
              </h1>
              {/* Description */}
              <p className="text-gray-700">
                Kami membantu Anda menemukan pekerjaan yang sesuai dengan
                kebutuhan Anda. Temukan pekerjaan yang sesuai dengan minat dan
                kemampuan Anda.
              </p>
            </div>
            <div className="flex justify-center md:justify-start mb-14">
              <Link
                href="#"
                className="shadow-xl px-3 py-2 md:px-5 md:py-3 mt-6 text-white bg-blue-700 rounded-full font-bold hover:bg-blue-950"
              >
                Temukan Pekerjaan
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
