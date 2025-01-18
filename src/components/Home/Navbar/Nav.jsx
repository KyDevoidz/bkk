"use client";
import { navLink } from "@/constant/Constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

/**
 * Komponen Nav.
 *
 * Komponen ini berfungsi sebagai navigasi utama di halaman web.
 * Navigasi ini memiliki latar belakang yang dinamis berdasarkan
 * posisi scroll pengguna. Saat pengguna menggulir lebih dari 90px,
 * latar belakang navigasi berubah menjadi putih dengan bayangan.
 *
 * Komponen ini juga mengatur tampilan tautan navigasi untuk desktop
 * dan menampilkan tombol menu burger untuk tampilan mobile.
 *
 * @param {function} openNav - Fungsi untuk membuka navigasi pada tampilan mobile.
 * @return {JSX.Element} Elemen JSX untuk komponen navigasi.
 */

const Nav = ({ openNav }) => {
  // State untuk mengatur latar belakang navigasi berdasarkan scroll
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    // Fungsi untuk menangani perubahan scroll
    const handleScroll = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };

    // Tambahkan event listener untuk scroll
    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener saat komponen dilepas
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-white shadow-md" : ""
      } w-full transition-all duration-300 h-[12vh] z-[1000]`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <h1 className="text-xl md:text-3xl font-bold">
          <span className="text-3xl md:text-4xl text-blue-600">B</span>ursa
          Kerja Khusus
        </h1>

        {/* Tautan navigasi untuk desktop */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLink.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className="nav_link">{link.label}</p>
            </Link>
          ))}
        </div>

        {/* Tombol untuk join dan menu burger untuk mobile */}
        <div className="flex items-center space-x-4">
          {/* <button className="md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700 hover:bg-blue-900 transition-all duration-300 rounded-full">
            Join Now
          </button> */}
          <HiBars3BottomRight
            onClick={openNav}
            className="h-8 w-8 cursor-pointer text-black lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
