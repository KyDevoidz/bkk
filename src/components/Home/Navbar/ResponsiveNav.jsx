"use client";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useState } from "react";

/**
 * Komponen navigasi yang responsif.
 *
 * Komponen ini mengatur visibilitas navigasi berdasarkan ukuran layar.
 * Jika lebar layar kurang dari 768px, maka navigasi akan disembunyikan
 * dan hanya akan muncul ketika tombol menu di-klik.
 *
 * @return {JSX.Element} Komponen navigasi yang responsif.
 */
const ResponsiveNav = () => {
  // State untuk mengatur visibilitas navigasi
  const [showNav, setShowNav] = useState(false);

  // Fungsi untuk mengubah state visibilitas navigasi
  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      {/* Navigasi utama */}
      <Nav openNav={() => setShowNav(true)} />

      {/* Navigasi untuk tampilan mobile */}
      <MobileNav openNav={showNav} handleNav={handleNav} />
    </div>
  );
};

export default ResponsiveNav;
