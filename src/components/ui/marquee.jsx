import { cn } from "@/lib/utils";

/**
 * A Marquee component that repeats its children horizontally or vertically.
 *
 * @param {string} [className] - Additional className to apply to the outermost element.
 * @param {boolean} [reverse=false] - Whether to reverse the animation.
 * @param {boolean} [pauseOnHover=false] - Whether to pause the animation when hovered.
 * @param {ReactNode} children - The elements to be repeated.
 * @param {boolean} [vertical=false] - Whether to repeat the children vertically.
 * @param {number} [repeat=4] - The number of times to repeat the children.
 * @param {React.ComponentPropsWithoutRef<'div'>} props - Additional props to apply to the outermost element.
 * @returns The marquee component.
 */
export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
