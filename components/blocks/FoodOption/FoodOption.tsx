import React from "react";
import { VariantProps, cva } from "class-variance-authority";

const FoodOptionStyles = cva(
  `flex items-center gap-1 w-max h-max font-bold  flex-col`,
  {
    variants: {
      intent: {
        selected: "ring-primary-600 text-primary-600",
        notSelected: "ring-light-900 text-light-900",
      },
    },

    defaultVariants: {
      intent: "notSelected",
    },
  }
);

interface FoodOptionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof FoodOptionStyles> {
  img: string;
  title: string;
}

export default function FoodOption({
  title,
  img,
  intent,
  className,
}: FoodOptionProps) {
  const styles = FoodOptionStyles({
    intent,
    className,
  });

  return (
    <div className={styles}>
      <div
        className={`img w-10 h-10 rounded-full ring-2 ring-offset-2 ring-inherit transition-all`}
      >
        <img
          src={img}
          alt={`Image of ${title}`}
          className="w-full h-full rounded-full"
        />
      </div>

      <div className="title text-sm text-center line-clamp-2 max-w-[4.5em] overflow-visible">
        {title}
      </div>
    </div>
  );
}
