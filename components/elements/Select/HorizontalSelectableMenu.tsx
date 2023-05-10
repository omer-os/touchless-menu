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
    <div className="flex bg-light-200 p-2 w-max rounded-full">
      {props.options.map((option) => {
        return (
          <div
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
                className="absolute w-full h-full top-0 left-0 bg-primary-600 rounded-full"
                layoutId={`ring-${props.options[0].value}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
