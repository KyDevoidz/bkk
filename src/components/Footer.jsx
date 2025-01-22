import React from "react";

const FooterElement = () => {
  return (
    <footer className="min-w-full bg-black p-4 text-white">
      <div className="container mx-auto text-center">
        <p>
          &copy; 2025 Bursa Kerja Khusus Karya Bahana Mandiri. All rights
          reserved.
        </p>
        <nav className="mt-2 flex justify-center">
          <a href="#" className="mx-2  nav_link">
            Privacy Policy
          </a>
          <a href="#" className="mx-2  nav_link">
            Terms of Service
          </a>
          <a href="#" className="mx-2  nav_link">
            Contact Us
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default FooterElement;
