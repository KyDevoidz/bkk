"use client";
import { navLink } from "@/constant/Constant";
import { CgClose } from "react-icons/cg";
import Link from "next/link";

/**
 * MobileNav component for mobile navigation menu.
 *
 * This component renders a mobile navigation menu that slides in
 * from the side of the screen. It includes an overlay to cover the
 * rest of the screen when the menu is open and a close button to
 * hide the menu. The navigation links are displayed within the menu.
 *
 * @param {boolean} openNav - A boolean indicating if the navigation menu should be open.
 * @param {function} handleNav - A function to toggle the navigation menu visibility.
 */

const MobileNav = ({ openNav, handleNav }) => {
  // Tentukan kelas CSS berdasarkan state navigasi
  const showNav = openNav ? "translate-x-0" : "-translate-x-full";

  return (
    <div>
      {/* Overlay untuk menutupi layar saat menu terbuka */}
      <div
        className={`inset-0 fixed transform  z-[10000] bg-black transition-all duration-300 opacity-70 w-full h-screen ${showNav}`}
      />

      {/* Kontainer menu navigasi */}
      <div
        className={`text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-blue-800 space-y-6 z-[1000000] ${showNav}`}
      >
        {/* Tampilkan daftar tautan navigasi */}
        {navLink.map((link) => (
          <Link href={link.url} key={link.id}>
            <p className="nav_link text-white text-[20px] ml-12  border-white sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}

        {/* Tombol untuk menutup menu */}
        <CgClose
          onClick={handleNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 z-[200000] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNav;
