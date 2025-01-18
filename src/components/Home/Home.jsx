import Hero from "./Hero/Hero";
import Partnership from "./Partnership/Partnership";
import WhyChoose from "./WhyChoose/WhyChoose";

/**
 * Komponen halaman utama.
 *
 * Komponen ini berisi tiga komponen utama, yaitu Hero, Partnership, dan WhyChoose.
 *
 * @return {JSX.Element} Komponen halaman utama.
 */
const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <Partnership />
      <WhyChoose />
    </div>
  );
};

export default Home;
