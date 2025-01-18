import Marquee from "@/components/ui/marquee";
import React from "react";
import { cn } from "@/lib/utils"; // Assuming you already have this utility function

const reviews = [
  {
    img: "/images/partner/nok.png",
  },
  {
    img: "/images/partner/igp.png",
  },
  {
    img: "/images/partner/schneider.png",
  },
  {
    img: "/images/partner/tekiro.jfif",
  },
];

/**
 * ReviewCard component.
 *
 * This component renders a card with a background image.
 * The card is styled to have a fixed width and height, rounded
 * corners, and a white background. The image is applied as a
 * background image, centered, and contained within the card.
 *
 * @param {Object} props - The component props.
 * @param {string} props.img - The URL of the image to be displayed as a background.
 * @returns {JSX.Element} The rendered review card component.
 */

const ReviewCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative flex flex-col items-center w-[320px] h-[130px] cursor-pointer overflow-hidden rounded-xl border p-4 bg-white"
      )}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></figure>
  );
};

const Partnership = () => {
  return (
    <div className="pt-16 bg-slate-700 pb-28">
      <h1 className="mt-2 text-xl sm:text-2xl px-14 md:text-3xl capitalize font-bold text-center text-white">
        Partnership <br />
        <p className="text-xs font-normal text-center md:w-[30%] mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In maiores
          dolor nesciunt, numquam veniam enim commodi ipsa ullam quas eos vel
          aspernatur doloremque, placeat temporibus molestias nam nobis sequi
          aut.
        </p>
      </h1>
      <div className="mt-16">
        {/* Marquee for the first row of reviews */}
        <Marquee className="[--duration:20s]">
          {reviews.map((review, index) => (
            <div key={index}>
              <ReviewCard {...review} />
            </div>
          ))}
        </Marquee>

        {/* Marquee for the second row of reviews */}
        <Marquee reverse className="[--duration:20s]">
          {reviews.map((review, index) => (
            <div key={index}>
              <ReviewCard {...review} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Partnership;
