import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export type CardProps = ComponentProps<"div">;
export const Card = ({ className, ...props }: CardProps) => (
  <div
    {...props}
    className={twMerge(
      "flex flex-col p-6 aspect-video cursor-pointer select-none flex-1 border-2 rounded-md text-gray-800 bg-gray-50",
      "hover:scale-105 transition",
      className
    )}
  />
);
