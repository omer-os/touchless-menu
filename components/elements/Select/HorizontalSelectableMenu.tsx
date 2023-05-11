"use client";
import { motion } from "framer-motion";

type Props = {
  State: string;
  setState: (value: string) => void;
  options: {
    label: string;
    value: string;
  }[];
};

export default function HorizontalSelectableMenu(props: Props) {
  return (
    <div className="flex p-2 rounded-full bg-light-200 w-max">
      {props.options.map((option, index) => {
        return (
          <div
            key={option.value + index}
            className={`px-4 py-2 hover:bg-light-300 rounded-full relative cursor-pointer `}
            onClick={() => props.setState(option.value)}
          >
            <p
              className={`z-10 relative rounded-full transition-all px-5 ${
                props.State === option.value ? "text-white" : ""
              }`}
            >
              {option.label}
            </p>

            {option.value === props.State && (
              <motion.div
                className="absolute top-0 left-0 w-full h-full rounded-full bg-primary-600"
                layoutId={`ring-${props.options[0].value}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
