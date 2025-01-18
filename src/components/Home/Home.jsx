import Hero from "./Hero/Hero";
import Partnership from "./Partnership/Partnership";
import WhyChoose from "./WhyChoose/WhyChoose";

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
